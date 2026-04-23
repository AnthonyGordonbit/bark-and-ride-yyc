import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trash2, Check, X, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Review {
  id: string;
  reviewer_name: string;
  reviewer_type: string;
  dog_name: string | null;
  rating: number;
  review_text: string;
  created_at: string;
  approved: boolean;
}

const STORAGE_KEY = "admin_review_pwd";

const callAdmin = async (password: string, body: Record<string, unknown>) => {
  const { data, error } = await supabase.functions.invoke("admin-reviews", {
    body,
    headers: { "x-admin-password": password },
  });
  if (error) throw error;
  if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error);
  return data;
};

const AdminReviews = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async (pwd: string) => {
    setLoading(true);
    try {
      const data = await callAdmin(pwd, { action: "list" });
      setReviews((data as { reviews: Review[] }).reviews);
      setAuthed(true);
      sessionStorage.setItem(STORAGE_KEY, pwd);
    } catch {
      toast.error("Incorrect password");
      sessionStorage.removeItem(STORAGE_KEY);
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPassword(stored);
      load(stored);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    load(password);
  };

  const handleAction = async (id: string, action: "approve" | "unapprove" | "delete") => {
    try {
      await callAdmin(password, { action, id });
      toast.success(`Review ${action}d`);
      await load(password);
    } catch {
      toast.error("Action failed");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setPassword("");
    setAuthed(false);
    setReviews([]);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-soft">
          <CardHeader>
            <CardTitle className="font-display">Admin · Review Moderation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Checking..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  const Row = ({ r }: { r: Review }) => (
    <Card className="shadow-soft">
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-semibold text-foreground">
              {r.reviewer_name}
              {r.dog_name && <span className="text-muted-foreground"> · 🐕 {r.dog_name}</span>}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">{r.reviewer_type}</Badge>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              {r.rating < 4 && (
                <Badge variant="destructive" className="text-xs">Low rating — won't display</Badge>
              )}
              <span className="text-xs text-muted-foreground">
                {new Date(r.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {r.approved ? (
              <Button size="sm" variant="outline" onClick={() => handleAction(r.id, "unapprove")}>
                <X className="w-4 h-4 mr-1" /> Unapprove
              </Button>
            ) : (
              <Button size="sm" onClick={() => handleAction(r.id, "approve")} disabled={r.rating < 4}>
                <Check className="w-4 h-4 mr-1" /> Approve
              </Button>
            )}
            <Button size="sm" variant="destructive" onClick={() => handleAction(r.id, "delete")}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{r.review_text}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Review Moderation</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            Pending ({pending.length})
          </h2>
          {pending.length === 0 ? (
            <p className="text-muted-foreground">No pending reviews.</p>
          ) : (
            <div className="space-y-4">
              {pending.map((r) => <Row key={r.id} r={r} />)}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            Approved ({approved.length})
          </h2>
          {approved.length === 0 ? (
            <p className="text-muted-foreground">No approved reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {approved.map((r) => <Row key={r.id} r={r} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminReviews;
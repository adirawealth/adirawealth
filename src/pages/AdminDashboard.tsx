import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import {
  TrendingUp,
  LogOut,
  Mail,
  Eye,
  Trash2,
  CheckCircle,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
  Home,
} from "lucide-react";
import { toast } from "sonner";

interface Submission {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  service: string;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) fetchSubmissions();
  }, [isAdmin]);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch submissions");
    } else {
      setSubmissions(data || []);
    }
    setLoadingData(false);
  };

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from("contact_submissions")
      .update({ is_read: true })
      .eq("id", id);

    if (!error) {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, is_read: true } : s))
      );
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, is_read: true });
      }
      toast.success("Marked as read");
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    const { error } = await supabase
      .from("contact_submissions")
      .delete()
      .eq("id", id);

    if (!error) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selectedSubmission?.id === id) setSelectedSubmission(null);
      toast.success("Deleted successfully");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin");
  };

  const filtered = submissions.filter((s) => {
    if (filter === "unread") return !s.is_read;
    if (filter === "read") return s.is_read;
    return true;
  });

  const unreadCount = submissions.filter((s) => !s.is_read).length;

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground font-body">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-forest border-b border-emerald/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-bright-green/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-bright-green" />
            </div>
            <span className="font-heading font-black text-lg">
              <span className="text-primary-foreground">Adira</span>
              <span className="text-bright-green">Wealth</span>
            </span>
            <span className="text-primary-foreground/40 text-sm font-body ml-2 hidden sm:inline">
              Admin Panel
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-body flex items-center gap-1"
            >
              <Home size={16} />
              <span className="hidden sm:inline">Website</span>
            </a>
            <button
              onClick={handleSignOut}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-body flex items-center gap-1"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Enquiries", value: submissions.length, icon: MessageSquare, color: "text-emerald" },
            { label: "Unread", value: unreadCount, icon: Mail, color: "text-bright-green" },
            { label: "Read", value: submissions.length - unreadCount, icon: CheckCircle, color: "text-dhan-teal" },
            { label: "This Month", value: submissions.filter((s) => new Date(s.created_at).getMonth() === new Date().getMonth()).length, icon: BarChart3, color: "text-emerald" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-muted-foreground text-xs font-body uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
              <p className="font-heading font-black text-2xl text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-6">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-heading font-bold transition-colors ${
                filter === f
                  ? "bg-emerald text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === "unread" && unreadCount > 0 && (
                <span className="ml-1.5 bg-bright-green text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Submissions List */}
          <div className="lg:col-span-2 space-y-3 max-h-[70vh] overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground font-body">
                No enquiries found.
              </div>
            ) : (
              filtered.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedSubmission(s);
                    if (!s.is_read) markAsRead(s.id);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-colors ${
                    selectedSubmission?.id === s.id
                      ? "border-emerald bg-emerald/5"
                      : "border-border bg-card hover:border-emerald/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                      {!s.is_read && (
                        <span className="w-2 h-2 rounded-full bg-bright-green shrink-0" />
                      )}
                      {s.first_name} {s.last_name}
                    </span>
                    <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                      <Clock size={12} />
                      {new Date(s.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <p className="text-xs text-emerald font-body font-medium">
                    {s.service}
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-1 truncate">
                    {s.message || "No message"}
                  </p>
                </button>
              ))
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3">
            {selectedSubmission ? (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading font-black text-xl text-foreground">
                      {selectedSubmission.first_name}{" "}
                      {selectedSubmission.last_name}
                    </h3>
                    <p className="text-sm text-emerald font-body font-medium mt-1">
                      {selectedSubmission.service}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!selectedSubmission.is_read && (
                      <button
                        onClick={() => markAsRead(selectedSubmission.id)}
                        className="p-2 rounded-lg bg-emerald/10 text-emerald hover:bg-emerald/20 transition-colors"
                        title="Mark as read"
                      >
                        <Eye size={16} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteSubmission(selectedSubmission.id)}
                      className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                      Email
                    </span>
                    <a
                      href={`mailto:${selectedSubmission.email}`}
                      className="block text-sm text-foreground font-body hover:text-emerald transition-colors"
                    >
                      {selectedSubmission.email}
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                      Phone
                    </span>
                    <a
                      href={`tel:${selectedSubmission.phone}`}
                      className="block text-sm text-foreground font-body hover:text-emerald transition-colors"
                    >
                      {selectedSubmission.phone}
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                      Date
                    </span>
                    <p className="text-sm text-foreground font-body">
                      {new Date(selectedSubmission.created_at).toLocaleString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                      Status
                    </span>
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded-full font-body font-medium ${
                        selectedSubmission.is_read
                          ? "bg-emerald/10 text-emerald"
                          : "bg-bright-green/10 text-bright-green"
                      }`}
                    >
                      {selectedSubmission.is_read ? "Read" : "Unread"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                    Message
                  </span>
                  <p className="mt-2 text-sm text-foreground font-body leading-relaxed bg-secondary rounded-xl p-4">
                    {selectedSubmission.message || "No message provided."}
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.service} Enquiry`}
                    className="flex-1 bg-emerald hover:bg-bright-green text-primary-foreground font-heading font-bold text-sm py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Reply via Email
                  </a>
                  <a
                    href={`https://wa.me/${selectedSubmission.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-dhan-teal hover:bg-dhan-teal/80 text-primary-foreground font-heading font-bold text-sm py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Users size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-body">
                  Select an enquiry to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

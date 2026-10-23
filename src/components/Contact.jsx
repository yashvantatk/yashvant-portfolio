import { useState } from "react";
import { Code2, Copy, Github, Linkedin, Mail, Send, Terminal, Trophy } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolioData";
import { copyEmail } from "@/lib/actions";

const socials = [
  { id: "github", label: "GitHub", href: profile.github, icon: Github },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { id: "leetcode", label: "LeetCode", href: profile.leetcode, icon: Code2 },
  { id: "codeforces", label: "Codeforces", href: profile.codeforces, icon: Trophy },
  { id: "codechef", label: "CodeChef", href: profile.codechef, icon: Terminal },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, icon: Mail },
].filter((s) => s.href);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    // No backend needed: opens the visitor's email app with the message filled in.
    setSending(true);
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app", { description: "Hit send there and I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-6">
            Let's build something together.
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 mb-8">
            Recruiting for an internship, teaming up for a hackathon, or just want to talk agents and CP? My inbox is open. 👋
          </p>
          <button
            data-testid="copy-email-button"
            onClick={copyEmail}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 font-code text-sm text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
          >
            {profile.email} <Copy className="h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 gap-3 max-w-sm">
            {socials.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                data-testid={`social-link-${id}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            data-testid="contact-form"
            onSubmit={submit}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                data-testid="contact-name-input"
                required
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500"
              />
              <Input
                data-testid="contact-email-input"
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={update("email")}
                className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500"
              />
            </div>
            <Input
              data-testid="contact-subject-input"
              placeholder="Subject (optional)"
              value={form.subject}
              onChange={update("subject")}
              className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500"
            />
            <Textarea
              data-testid="contact-message-input"
              required
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={update("message")}
              className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500 resize-none"
            />
            <Button
              data-testid="contact-submit-button"
              type="submit"
              disabled={sending}
              className="w-full bg-emerald-500 text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 font-semibold rounded-full py-6 transition-transform hover:scale-[1.02]"
            >
              {sending ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

import { toast } from "sonner";
import { profile } from "@/data/portfolioData";

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const downloadResume = () => {
  const a = document.createElement("a");
  a.href = profile.resume;
  a.download = "Yashvant_ATK_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast.success("Resume download started");
};

export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast.success("Email copied", { description: profile.email });
  } catch {
    toast.error("Copy failed", { description: profile.email });
  }
};

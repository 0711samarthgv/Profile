import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact({ personal }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something impactful"
        subtitle="Open to AI/ML, full stack, and product engineering opportunities."
      />
      <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-3">
        <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm text-muted">
          <Mail size={16} className="text-primary" /> {personal.email}
        </a>
        <p className="flex items-center gap-3 text-sm text-muted">
          <Phone size={16} className="text-primary" /> {personal.phone}
        </p>
        <p className="flex items-center gap-3 text-sm text-muted">
          <MapPin size={16} className="text-primary" /> {personal.location}
        </p>
      </div>
    </section>
  );
}

import { profile } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line pt-20">
      <div className="container-page">
        <p className="eyebrow mb-4">Let&apos;s work</p>
        <h2 className="font-display text-[13vw] font-medium uppercase leading-[0.9] tracking-tightest md:text-[7vw]">
          Together
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Connect</p>
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-2xl uppercase tracking-tightest text-paper underline decoration-amber decoration-2 underline-offset-4 md:text-3xl"
            >
              {profile.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {profile.socials.instagram && (
                <a href={profile.socials.instagram} className="nav-link" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              )}
              {profile.socials.behance && (
                <a href={profile.socials.behance} className="nav-link" target="_blank" rel="noreferrer">
                  Behance
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} className="nav-link" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="nav-link">
                  {profile.phone}
                </a>
              )}
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line py-8 text-graphite md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-wide2">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wide2">{profile.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}

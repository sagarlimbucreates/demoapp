import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Skin",
    body:
      "Bespoke facials, peels, and dermaplaning built around your skin's present tense.",
    img: "https://placehold.co/900x1200/0a0a0a/f5f4ef?text=+",
  },
  {
    n: "02",
    title: "Hair",
    body:
      "Cut, colour, and conditioning rituals — precise, unhurried, quiet.",
    img: "https://placehold.co/900x1200/1a1a1a/f5f4ef?text=+",
  },
  {
    n: "03",
    title: "Makeup",
    body:
      "Editorial and bridal artistry. We match texture to light, not trend.",
    img: "https://placehold.co/900x1200/2a2a2a/f5f4ef?text=+",
  },
  {
    n: "04",
    title: "Hands",
    body:
      "Sculpted manicures, structural gels, and slow hand massage.",
    img: "https://placehold.co/900x1200/3a3a3a/f5f4ef?text=+",
  },
];

const gallery = [
  { src: "https://placehold.co/800x1000/0a0a0a/f5f4ef?text=+", h: "h-[28rem]" },
  { src: "https://placehold.co/800x1200/1a1a1a/f5f4ef?text=+", h: "h-[34rem]" },
  { src: "https://placehold.co/800x900/2a2a2a/f5f4ef?text=+", h: "h-[24rem]" },
  { src: "https://placehold.co/800x1100/0a0a0a/f5f4ef?text=+", h: "h-[30rem]" },
  { src: "https://placehold.co/800x1000/1a1a1a/f5f4ef?text=+", h: "h-[26rem]" },
];

const marqueeItems = [
  "Skin",
  "Hair",
  "Makeup",
  "Hands",
  "Bridal",
  "Editorial",
  "Members",
  "Studio",
];

export default function Home() {
  return (
    <main className="relative bg-[#f5f4ef] text-[#0a0a0a]">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f5f4ef]/80 border-b border-[#0a0a0a]/10">
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl tracking-[-0.04em] leading-none"
            aria-label="Noir, home"
          >
            NOIR<span className="align-top text-xs ml-0.5">®</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em]">
            {["Services", "Studio", "Journal", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  href={`#${l.toLowerCase()}`}
                  className="relative py-2 hover:opacity-70 btn-ink"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#book"
            className="btn-ink group inline-flex items-center gap-3 bg-[#0a0a0a] text-[#f5f4ef] px-5 py-3 text-[12px] uppercase tracking-[0.2em] shadow-ink-sm"
          >
            Book
            <span
              aria-hidden
              className="inline-block w-4 h-px bg-[#f5f4ef] group-hover:w-6 transition-[width] duration-300"
            />
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-10 text-[11px] uppercase tracking-[0.3em] text-[#2a2a2a]">
              <span className="inline-block w-10 h-px bg-[#0a0a0a]" />
              Est. 2014 — Brooklyn
            </div>
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] text-[#0a0a0a]">
              Beauty,
              <br />
              <span className="italic font-light">refined</span> in
              <br />
              monochrome.
            </h1>
            <p className="mt-10 max-w-lg text-[17px] text-[#2a2a2a]">
              A small studio for skin, hair, and hands. We work slowly, in natural
              light, with tools you can count on one shelf. No trend cycles — just
              considered results.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#book"
                className="btn-ink inline-flex items-center gap-4 bg-[#0a0a0a] text-[#f5f4ef] px-8 py-5 text-[12px] uppercase tracking-[0.22em] shadow-ink"
              >
                Reserve a chair
                <span aria-hidden className="text-lg leading-none">→</span>
              </Link>
              <Link
                href="#services"
                className="btn-ink inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] border-b border-[#0a0a0a] pb-1"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-ink">
              <img
                src="https://placehold.co/900x1125/0a0a0a/f5f4ef?text=+"
                alt="Studio portrait"
                className="absolute inset-0 w-full h-full object-cover mono-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#0a0a0a]/10 mix-blend-multiply pointer-events-none" />
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between text-[#f5f4ef]">
                <div className="font-display text-sm tracking-tight leading-tight">
                  N°01
                  <br />
                  <span className="italic">Studio</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">
                  Brooklyn / NY
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden lg:block bg-[#f5f4ef] border border-[#0a0a0a]/15 px-5 py-4 shadow-ink-sm">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8a8a86]">
                Booking
              </div>
              <div className="font-display text-xl leading-none mt-1">
                Next / Tues 14
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[#0a0a0a]/15 bg-[#0a0a0a] text-[#f5f4ef] overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap py-6 font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((w, i) => (
            <span key={i} className="flex items-center gap-16">
              {w}
              <span
                aria-hidden
                className="inline-block w-3 h-3 rounded-full bg-[#f5f4ef]"
              />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-[1400px] px-6 lg:px-12 py-28 lg:py-40"
      >
        <div className="flex items-end justify-between flex-wrap gap-8 mb-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#2a2a2a] mb-5">
              — The menu
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] max-w-3xl">
              Four rooms.
              <br />
              <span className="italic font-light">One sensibility.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#2a2a2a]">
            Every service begins with a fifteen-minute consult and a cup of
            something hot. We don&apos;t rush. Neither should you.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <li key={s.n} className="group">
              <div className="relative aspect-[3/4] overflow-hidden shadow-ink-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover mono-img transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-[#0a0a0a]/10 mix-blend-multiply" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-[#f5f4ef]">
                  <div className="font-display text-sm opacity-80">{s.n}</div>
                  <div>
                    <div className="font-display text-3xl tracking-tight">
                      {s.title}
                    </div>
                    <div className="mt-2 h-px w-8 bg-[#f5f4ef]/70 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[#2a2a2a] text-[15px] max-w-xs">{s.body}</p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border-b border-[#0a0a0a] pb-1 btn-ink"
              >
                Explore
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* EDITORIAL QUOTE SPLIT */}
      <section className="relative bg-[#0a0a0a] text-[#f5f4ef] grain overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-28 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-ink">
              <img
                src="https://placehold.co/900x1125/f5f4ef/0a0a0a?text=+"
                alt="Editorial"
                className="absolute inset-0 w-full h-full object-cover mono-img"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/40" />
              <div className="absolute inset-0 bg-[#0a0a0a]/5 mix-blend-multiply" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#8a8a86] mb-8">
              — Ethos
            </div>
            <blockquote className="font-display text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
              <span className="italic font-light">&ldquo;We believe</span> in
              quiet craft, repeatable ritual, and the dignity of a well-lit
              mirror.&rdquo;
            </blockquote>
            <div className="mt-12 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-ink-sm">
                <img
                  src="https://placehold.co/120x120/f5f4ef/0a0a0a?text=+"
                  alt="Founder"
                  className="w-full h-full object-cover mono-img"
                />
              </div>
              <div>
                <div className="font-display text-lg">Ines Okoye</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-[#8a8a86]">
                  Founder / Studio Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 py-28 lg:py-40">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)]">
            From the floor.
          </h2>
          <Link
            href="#"
            className="btn-ink inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] border-b border-[#0a0a0a] pb-1"
          >
            The full archive →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`relative ${g.h} overflow-hidden shadow-ink-sm group ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <img
                src={g.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover mono-img transition-transform duration-[900ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute inset-0 bg-[#0a0a0a]/5 mix-blend-multiply" />
              <figcaption className="absolute left-3 bottom-3 text-[#f5f4ef] font-display text-xs tracking-tight">
                N°{String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        id="book"
        className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pb-28 lg:pb-40"
      >
        <div className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f4ef] grain p-10 md:p-20 shadow-ink">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#8a8a86] mb-6">
                — Reservations
              </div>
              <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98]">
                A chair,
                <br />
                <span className="italic font-light">held for you.</span>
              </h2>
              <p className="mt-8 max-w-xl text-[#8a8a86]">
                Memberships and single sittings. Weekday afternoons are quietest;
                we recommend Tuesday.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="#"
                className="btn-ink inline-flex items-center gap-4 bg-[#f5f4ef] text-[#0a0a0a] px-8 py-5 text-[12px] uppercase tracking-[0.22em]"
              >
                Book a visit
                <span aria-hidden className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#0a0a0a]/15">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="font-display text-4xl tracking-[-0.03em]">
              NOIR<span className="align-top text-sm">®</span>
            </div>
            <p className="mt-4 max-w-sm text-[#2a2a2a]">
              118 Atlantic Ave, Brooklyn. By appointment.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#8a8a86] mb-4">
              Studio
            </div>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="#" className="hover:opacity-70 btn-ink">Services</Link></li>
              <li><Link href="#" className="hover:opacity-70 btn-ink">Journal</Link></li>
              <li><Link href="#" className="hover:opacity-70 btn-ink">Gift cards</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#8a8a86] mb-4">
              Elsewhere
            </div>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="#" className="hover:opacity-70 btn-ink">Instagram</Link></li>
              <li><Link href="#" className="hover:opacity-70 btn-ink">Are.na</Link></li>
              <li><Link href="#" className="hover:opacity-70 btn-ink">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#0a0a0a]/15">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[#8a8a86]">
            <span>© {new Date().getFullYear()} Noir Studio</span>
            <span>Monochrome, always</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const linkClass =
  "inline-block transition-all duration-200 hover:-translate-x-1 hover:text-gold-light focus-visible:text-gold-light";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 text-sm font-bold text-white">
      <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
      {children}
    </h3>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer dir="rtl" className="relative overflow-hidden bg-navy text-right text-white">
      {/* خط ذهبي علوي رسمي */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-transparent via-gold to-transparent"
      />
      {/* إضاءة هادئة */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_15%_0%,rgba(201,164,92,0.14),transparent_70%),radial-gradient(45%_50%_at_95%_100%,rgba(59,92,160,0.22),transparent_70%)]"
      />

      <div className="container-page relative grid gap-12 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3.5 font-display font-bold text-white">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-2 shadow-lg shadow-black/30 ring-1 ring-gold/40">
              <img
                src="/kk.png"
                alt="شعار منصة حماية المستهلك"
                width={40}
                height={40}
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </span>
            <span className="text-xl font-extrabold">منصة حماية المستهلك</span>
          </Link>

          <span aria-hidden className="mt-5 block h-px w-16 bg-gradient-to-l from-gold to-transparent" />

          <p className="mt-5 max-w-md text-sm leading-[2] text-slate-300">
            منصة مستقلة تساعد المستهلكين في الإمارات على توثيق شكاواهم تجاه الشركات
            الخاصة ومتابعتها. المنصة غير تابعة لأي جهة حكومية ولا تمثلها بأي شكل.
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <ColumnTitle>روابط سريعة</ColumnTitle>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link to="/about" className={linkClass}>من نحن</Link></li>
            <li><Link to="/how-it-works" className={linkClass}>كيف تعمل المنصة</Link></li>
            <li><Link to="/faq" className={linkClass}>الأسئلة الشائعة</Link></li>
            <li><Link to="/contact" className={linkClass}>تواصل معنا</Link></li>
          </ul>
        </nav>

        <nav aria-label="روابط قانونية">
          <ColumnTitle>قانوني</ColumnTitle>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link to="/privacy" className={linkClass}>سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className={linkClass}>الشروط والأحكام</Link></li>
            <li>
              <a
                href="mailto:uae-assistants@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 transition-colors hover:border-gold hover:bg-gold/20 focus-visible:border-gold"
                dir="ltr"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                <span className="text-xs font-semibold text-gold-light">uae-assistants@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/70">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs font-medium text-slate-400 md:flex-row">
          <p>© {currentYear} منصة حماية المستهلك. جميع الحقوق محفوظة.</p>
          <p className="text-center md:text-right">منصة حماية المستهلك — ليست جهة حكومية ولا تمثل أي جهة رسمية في الإمارات.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ShieldCheck, Gift, Clock, Scale, FileCheck2 } from "lucide-react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";

interface HeroProps {
  onPrimaryClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/* عدّاد الأرقام: يعمل مرة واحدة عند الظهور */
function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        setCount(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref} style={prefix ? { direction: "ltr", unicodeBidi: "isolate" } : undefined}>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* سطر عنوان يظهر من خلف قناع (حركة الدخول الوحيدة في الصفحة) */
function MaskedLine({
  children,
  index,
  reduce,
}: {
  children: React.ReactNode;
  index: number;
  reduce: boolean | null;
}) {
  return (
    <span className="block overflow-hidden py-[0.12em] -my-[0.12em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay: 0.2 + index * 0.16, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* خط كلاسيكي للعناوين فقط — الباقي يرث خط الموقع (Tajawal) */
const css = `
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");
.hs-serif { font-family: "Amiri", "Noto Naskh Arabic", "Traditional Arabic", serif; }
@media (prefers-reduced-motion: no-preference) {
  @keyframes hs-spin { to { transform: rotate(360deg); } }
  .hs-spin { animation: hs-spin 140s linear infinite; }
}
`;

export function HeroSection({ onPrimaryClick }: HeroProps) {
  const reduce = useReducedMotion();

  const stats = [
    { icon: Gift, value: <CountUp to={100} suffix="%" duration={1} />, label: "خدمة مجانية بالكامل" },
    { icon: Clock, value: <CountUp to={24} suffix=" ساعة" duration={0.8} />, label: "متوسط وقت الاستجابة" },
    { icon: Scale, value: "تأطير كامل", label: "صياغة قانونية للشكوى" },
    { icon: FileCheck2, value: <CountUp to={10000} prefix="+" duration={1.2} />, label: "طلب تم توثيقه" },
  ];

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B08A3E]";

  return (
    <div dir="rtl" className="w-full bg-white text-right overflow-hidden">
      <style>{css}</style>

      {/* ============ HERO ============ */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#F8FAFD_0%,#E6EDF7_100%)] text-[#0C1B38] pt-16 pb-32 md:pt-28 md:pb-44">
        {/* خط ذهبي علوي */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-transparent via-[#C9A45C] to-transparent"
        />
        {/* إضاءة هادئة ثابتة خلف الختم */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_18%_45%,rgba(201,164,92,0.20),transparent_70%)]"
        />

        <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
            {/* ---- النصوص ---- */}
            <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-right">
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 text-xs font-medium text-[#8A6A2B] sm:text-sm"
              >
                <span aria-hidden className="hidden h-px w-10 bg-[#C9A45C] sm:block" />
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>منصة مستقلة لتوثيق الشكاوى — دولة الإمارات</span>
              </motion.div>

              <h1 className="hs-serif mt-8 whitespace-nowrap text-[2rem] font-bold leading-[1.45] tracking-normal text-[#0C1B38] min-[400px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                <MaskedLine index={0} reduce={reduce}>
                  منصة حماية المستهلك
                </MaskedLine>
              </h1>

              <motion.div
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.9, ease: EASE }}
                style={{ transformOrigin: "right" }}
                className="mt-6 flex items-center gap-3"
                aria-hidden
              >
                <span className="h-px w-24 bg-gradient-to-l from-[#C9A45C] to-transparent" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A45C]" />
              </motion.div>

              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.9 }}
                className="mt-6 max-w-xl text-base leading-[2] text-slate-600 sm:text-lg"
              >
                منصة رقمية مستقلة وغير تابعة لأي جهة حكومية لتوثيق وتنظيم الشكاوى ضد المنشآت التجارية، لتسهيل متابعتها وإيصالها للجهات المختصة بوضوح وسرعة.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 0.9 }}
                className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row"
              >
                <a
                  href="#complaint-form"
                  onClick={onPrimaryClick}
                  className={`group inline-flex items-center justify-center gap-3 rounded-lg bg-[#C9A45C] px-8 py-4 text-sm font-bold text-[#0C1B38] transition-colors duration-200 hover:bg-[#D9B874] active:scale-[0.98] ${focusRing}`}
                >
                  <span>تقديم طلب توثيق شكوى</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </a>
                <a
                  href="#how-it-works"
                  className={`inline-flex items-center justify-center rounded-lg border border-[#0C1B38]/25 px-8 py-4 text-sm font-medium text-[#0C1B38] transition-colors duration-200 hover:border-[#B08A3E] hover:text-[#8A6A2B] active:scale-[0.98] ${focusRing}`}
                >
                  دليل الإجراءات
                </a>
              </motion.div>
            </div>

            {/* ---- الختم الرسمي ---- */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
              className="order-1 flex justify-center lg:order-2 lg:col-span-5"
            >
              <div className="relative aspect-square w-56 sm:w-72 lg:w-80">
                {/* دوائر متحدة المركز تتسع خلف الختم */}
                <span aria-hidden className="absolute -inset-[28%] rounded-full border border-[#0C1B38]/[0.08]" />
                <span aria-hidden className="absolute -inset-[56%] rounded-full border border-[#0C1B38]/[0.06]" />
                <span aria-hidden className="absolute -inset-[88%] rounded-full border border-[#0C1B38]/[0.04]" />

                {/* حلقة مسننة تدور ببطء شديد */}
                <svg viewBox="0 0 200 200" aria-hidden className="hs-spin absolute inset-0 h-full w-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    fill="none"
                    stroke="#B08A3E"
                    strokeWidth="5"
                    pathLength={360}
                    strokeDasharray="0.5 3.5"
                    strokeOpacity="0.85"
                  />
                </svg>

                {/* حلقات ثابتة */}
                <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 h-full w-full">
                  <circle cx="100" cy="100" r="99" fill="none" stroke="#C9A45C" strokeWidth="0.7" strokeOpacity="0.9" />
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#C9A45C" strokeWidth="0.5" strokeOpacity="0.5" />
                </svg>

                {/* القرص الأبيض والشعار */}
                <div className="absolute inset-[15%] flex items-center justify-center rounded-full bg-white p-[11%] shadow-[0_24px_50px_-18px_rgba(12,27,56,0.35)] ring-4 ring-[#C9A45C]/40">
                  <img
                    src="/kk.png"
                    alt="منصة حماية المستهلك"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ الأرقام (شريط يعلو الحد الفاصل) ============ */}
      <div className="container-page relative z-20 mx-auto -mt-20 px-4 sm:px-6 md:-mt-24 lg:px-8">
        <div className="border-t-[3px] border-[#C9A45C] bg-white shadow-[0_30px_60px_-30px_rgba(12,27,56,0.55)]">
          <div className="grid grid-cols-2 gap-px bg-neutral-200 lg:grid-cols-4">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-2 bg-white px-4 py-8 text-center">
                  <Icon className="h-5 w-5 text-[#B08A3E]" aria-hidden />
                  <span className="hs-serif text-3xl font-bold leading-tight text-[#0C1B38] sm:text-4xl">
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-500 sm:text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section className="container-page mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div aria-hidden className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C9A45C]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A45C]" />
            </div>
            <h2 className="hs-serif text-4xl font-bold leading-tight text-[#0C1B38] sm:text-5xl">من نحن</h2>
          </div>
          <p className="hs-serif text-xl leading-[2.1] text-slate-700 sm:text-2xl lg:col-span-8 lg:border-r-2 lg:border-[#C9A45C] lg:pr-10">
            خدمة إلكترونية متخصصة في إعادة تأطير وصياغة الشكاوى التجارية في دولة الإمارات، لضمان استيفائها للبيانات والمستندات المطلوبة قبل رفعها للجهات المعنية.
          </p>
        </div>
      </section>
    </div>
  );
}

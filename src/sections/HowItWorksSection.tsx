"use client";

import React, { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView, useScroll, useSpring, type Variants } from "framer-motion";

export interface StepItem {
  n: string;
  title: string;
  desc: string;
}

export const steps: StepItem[] = [
  { n: "01", title: "تعبئة نموذج الشكوى", desc: "إدخال التفاصيل الأساسية والمشكلة وبيانات الشركة المعنية في دقائق." },
  { n: "02", title: "التدقيق المبدئي للطلب", desc: "يقوم الفريق بالتحقق من اكتمال البيانات والأوراق الثبوتية." },
  { n: "03", title: "إصدار رقم مرجعي ومخاطبة الجهة", desc: "تسجيل الشكوى رسمياً وإشعار الشركة بالمخالفة أو المشكلة." },
  { n: "04", title: "متابعة التسوية والحل", desc: "تلقي الإشعارات الفورية حول رد الشركة والحلول المقترحة." },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* خطوة واحدة: تضيء عندما يصل إليها السكرول */
function TimelineStep({ step }: { step: StepItem }) {
  const ref = useRef<HTMLLIElement>(null);
  const lit = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });

  return (
    <li ref={ref} className="relative flex items-start gap-5 sm:gap-7">
      {/* العقدة على الخط */}
      <div className="relative z-10 shrink-0">
        <motion.div
          animate={
            lit
              ? { scale: [1, 1.15, 1], backgroundColor: "#0B1426", borderColor: "#C9A45C" }
              : { scale: 1, backgroundColor: "#FFFFFF", borderColor: "#E3E6EC" }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full border-2 font-mono text-sm sm:text-base font-bold transition-[color,box-shadow] duration-500 ${
            lit
              ? "text-gold-light shadow-[0_0_0_6px_rgba(201,164,92,0.15)]"
              : "text-muted-foreground shadow-none"
          }`}
        >
          {step.n}
        </motion.div>
      </div>

      {/* النص */}
      <div className="pt-1 sm:pt-2.5 pb-2">
        <h3
          className={`text-lg md:text-2xl font-bold leading-snug transition-colors duration-500 ${
            lit ? "text-navy" : "text-navy/35"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`mt-2 max-w-md text-sm md:text-base leading-[1.9] transition-colors duration-500 ${
            lit ? "text-muted-foreground" : "text-muted-foreground/50"
          }`}
        >
          {step.desc}
        </p>
      </div>
    </li>
  );
}

export function HowItWorksSection() {
  const listRef = useRef<HTMLOListElement>(null);

  /* تقدّم الخط الذهبي مع السكرول */
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 md:py-28 text-right"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent"
      />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* ---- الرأس (ثابت أثناء السكرول على الديسكتوب) ---- */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start flex flex-col items-center text-center lg:items-start lg:text-right">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-gold-dark"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>خطوات عمل بسيطة</span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-[1.25]"
            >
              آلية توثيق ومتابعة الشكاوى
            </motion.h2>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mt-5 flex items-center gap-3"
            >
              <span className="h-px w-16 bg-gradient-to-l from-gold to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mt-5 max-w-md text-base md:text-lg leading-[2] text-muted-foreground"
            >
              آلية عمل شفافة تضمن متابعة حقك برقم مرجعي رسمي.
            </motion.p>
          </div>

          {/* ---- الخط الزمني ---- */}
          <div className="lg:col-span-7">
            <ol ref={listRef} className="relative space-y-14 md:space-y-20">
              {/* الخط الرمادي الأساسي: يمر بمركز العقد على اليمين */}
              <span
                aria-hidden
                className="absolute right-6 sm:right-7 top-6 bottom-6 w-0.5 translate-x-1/2 rounded-full bg-border"
              />
              {/* الخط الذهبي الذي يمتلئ مع السكرول */}
              <motion.span
                aria-hidden
                style={{ scaleY: progress, transformOrigin: "top" }}
                className="absolute right-6 sm:right-7 top-6 bottom-6 w-0.5 translate-x-1/2 rounded-full bg-gradient-to-b from-gold-light via-gold to-gold-dark"
              />

              {steps.map((s) => (
                <TimelineStep key={s.n} step={s} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

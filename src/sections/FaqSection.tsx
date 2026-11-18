"use client";

import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HelpCircle, ChevronLeft, Plus } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

export const faqPreview: FaqItem[] = [
  {
    q: "كيف تعمل منصة حماية المستهلك لتقديم الشكاوى؟",
    a: "تتيح لك المنصة تقديم بيانات شكواك والوثائق الداعمة بسهولة. يقوم فريقنا بمراجعتها، توثيقها برقم مرجعي، ثم مخاطبة الشركة المعنية لمتابعة التوصل إلى حل إيجابي.",
  },
  {
    q: "هل خدمة تقديم الشكوى مجانية للمستهلكين في الإمارات؟",
    a: "نعم، خدمة توثيق وتقديم ومتابعة الشكاوى مجانية بالكامل لجميع المستهلكين والمتعاملين داخل دولة الإمارات العربية المتحدة.",
  },
  {
    q: "ما الدور الذي تقوم به المنصة لحل المشكلة مع الشركة؟",
    a: "نقوم بتوثيق الشكوى قانونياً، إصدار الرقم المرجعي، ومخاطبة إدارة المنشأة التجارية للوصول إلى تسوية عادلة تحمي حقوق المستهلك وفق الأنظمة المتبعة.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 md:py-28 text-navy text-right"
    >
      {/* خط ذهبي رفيع علوي */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent"
      />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-20 items-start">
        {/* ---- العنوان والوصف ---- */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center text-center lg:items-start lg:text-right">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-gold-dark"
          >
            <HelpCircle className="h-4 w-4 shrink-0" />
            <span>الأسئلة الشائعة</span>
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.25] text-navy"
          >
            استفسارات تتكرر باستمرار
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
            className="mt-5 max-w-md text-base sm:text-lg leading-[2] text-muted-foreground"
          >
            إليك إجابات لأبرز الأسئلة المتعلقة بتقديم وتوثيق الشكاوى التجارية للمستهلكين.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="mt-8"
          >
            <Link
              to="/faq"
              className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-bold text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-white active:scale-[0.98]"
            >
              <span>عرض جميع الأسئلة</span>
              <ChevronLeft
                className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        {/* ---- الأكورديون ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 border-t border-border"
        >
          {faqPreview.map((f, idx) => {
            const isOpen = open === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;
            return (
              <div key={idx} className="relative border-b border-border">
                {/* مؤشر ذهبي للعنصر المفتوح */}
                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{ scaleY: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top" }}
                  className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-gold-light to-gold"
                />

                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="group flex w-full items-center gap-4 py-6 pr-5 pl-1 text-right sm:gap-6 sm:py-7"
                  >
                    <span
                      className={`font-mono text-sm font-bold transition-colors duration-300 ${
                        isOpen ? "text-gold-dark" : "text-navy/30"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-base sm:text-xl font-bold leading-snug transition-colors duration-300 ${
                        isOpen ? "text-navy" : "text-navy/70 group-hover:text-navy"
                      }`}
                    >
                      {f.q}
                    </span>

                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-gold bg-gold text-navy"
                          : "border-border text-navy/60 group-hover:border-gold group-hover:text-gold-dark"
                      }`}
                    >
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-5 pl-1 sm:pr-[4.25rem] text-sm sm:text-base leading-[2] text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { FileCheck2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ComplaintForm } from "@/components/site/ComplaintForm";

const EASE = [0.22, 1, 0.36, 1] as const;

/* نفس لغة الهيرو: خط العناوين الكلاسيكي + حلقة الختم البطيئة */
const css = `
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");
.hs-serif { font-family: "Amiri", "Noto Naskh Arabic", "Traditional Arabic", serif; }
@media (prefers-reduced-motion: no-preference) {
  @keyframes hs-spin { to { transform: rotate(360deg); } }
  .hs-spin { animation: hs-spin 140s linear infinite; }
}
`;

/* ختم صغير — نفس ختم الهيرو بحجم مصغّر */
function MiniSeal() {
  return (
    <div className="relative h-20 w-20" aria-hidden>
      <svg viewBox="0 0 200 200" className="hs-spin absolute inset-0 h-full w-full">
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
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="99" fill="none" stroke="#C9A45C" strokeWidth="1.2" strokeOpacity="0.9" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="#C9A45C" strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
      <div className="absolute inset-[15%] flex items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(12,27,56,0.4)] ring-2 ring-[#C9A45C]/40">
        <FileCheck2 className="h-6 w-6 text-[#0C1B38]" />
      </div>
    </div>
  );
}

export function ComplaintFormSection() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="قسم تقديم الشكوى التجارية"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#E6EDF7_0%,#F8FAFD_100%)] text-[#0C1B38] pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <style>{css}</style>

      {/* خط ذهبي علوي (نفس الهيرو) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-transparent via-[#C9A45C] to-transparent"
      />

      {/* دوائر متحدة المركز تتسع خلف العنوان (صدى لختم الهيرو) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="relative h-[200px] w-[200px] md:h-[240px] md:w-[240px]">
          <span className="absolute left-1/2 top-[170px] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0C1B38]/[0.07]" />
          <span className="absolute left-1/2 top-[170px] h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0C1B38]/[0.05]" />
          <span className="absolute left-1/2 top-[170px] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0C1B38]/[0.035]" />
        </div>
      </div>

      {/* توهج ذهبي ناعم ثابت */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_8%,rgba(201,164,92,0.20),transparent_70%)]"
      />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* العناوين */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <MiniSeal />

          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-[#8A6A2B] sm:text-sm">
            <span aria-hidden className="hidden h-px w-8 bg-[#C9A45C] sm:block" />
            <span>معالجة فورية وتوثيق محمي — دولة الإمارات</span>
            <span aria-hidden className="hidden h-px w-8 bg-[#C9A45C] sm:block" />
          </div>

          <h2 className="hs-serif mt-5 text-4xl font-bold leading-[1.45] text-[#0C1B38] sm:text-5xl lg:text-6xl">
            قدّم شكواك التجارية الآن
          </h2>

          <div aria-hidden className="mt-5 flex items-center gap-3">
            <span className="h-px w-16 bg-gradient-to-l from-[#C9A45C] to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A45C]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C9A45C] to-transparent" />
          </div>

          <p className="mt-5 max-w-xl text-base leading-[2] text-slate-600 sm:text-lg">
            يرجى تعبئة النموذج بدقة. سيتم توثيق الشكوى ومعالجتها وفق الأنظمة واللوائح الخاصة بحماية المستهلك.
          </p>
        </motion.div>

        {/* بطاقة النموذج — نفس لغة شريط الأرقام: خط ذهبي علوي وزوايا حادة */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <div
            id="complaint-form"
            aria-label="نموذج توثيق الشكاوى"
            data-webmcp-tool="complaint_submission"
            className="relative min-h-[500px] scroll-mt-28 border-t-[3px] border-[#C9A45C] bg-white p-6 text-slate-900 shadow-[0_40px_80px_-40px_rgba(12,27,56,0.55)] sm:p-10 md:p-12"
          >
            <ComplaintForm />
          </div>
        </motion.div>
      </div>

      {/* خط سفلي هادئ */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#C9A45C]/60 to-transparent"
      />
    </section>
  );
}
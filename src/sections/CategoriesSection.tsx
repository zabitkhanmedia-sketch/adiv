import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  ArrowUpLeft,
  LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل والنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CategoriesSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 md:py-28 text-right"
    >
      {/* خط ذهبي رفيع علوي */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent"
      />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان والوصف الرئيسي */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-gold-dark"
          >
            القطاعات المشمولة
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.25]"
          >
            مجالات الشكاوى التجارية
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
            <span className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="mt-5 max-w-xl text-base sm:text-lg leading-[2] text-muted-foreground"
          >
            نغطي مختلف القطاعات التجارية الخاصة لضمان توثيق صوتك وحماية حقوقك الشاملة.
          </motion.p>
        </div>

        {/* شبكة البطاقات */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <motion.article
              key={idx}
              custom={idx % 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              className="group relative isolate overflow-hidden rounded-2xl border border-navy-600/60 bg-navy p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-glow"
            >
              {/* توهج ذهبي داخلي */}
              <span
                aria-hidden
                className="absolute -top-12 -left-12 -z-10 h-36 w-36 rounded-full bg-gold/25 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              {/* خط ذهبي علوي */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-gold to-gold-light"
              />

              {/* الصف العلوي: الأيقونة + الترقيم */}
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold bg-gold text-navy transition-transform duration-500 group-hover:scale-105">
                  <c.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                </div>
                <span
                  aria-hidden
                  className="select-none text-3xl font-bold leading-none text-white/15"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* عنوان الشكوى */}
              <h3 className="mt-6 text-base font-bold text-white">
                {c.title}
              </h3>

              {/* الشرح */}
              <p className="mt-2 text-xs md:text-sm leading-[1.9] text-slate-300">
                {c.desc}
              </p>

              {/* سهم */}
              <ArrowUpLeft
                aria-hidden
                className="absolute bottom-5 left-5 h-5 w-5 text-gold-light transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

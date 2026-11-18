"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowDownLeft, ChevronDown } from "lucide-react";

const navItems: ReadonlyArray<{
  to: string;
  label: string;
  hasDropdown?: boolean;
}> = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن المنصة" },
  {
    to: "/how-it-works",
    label: "كيف تعمل المنصة",
    hasDropdown: true,
  },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0C1B38]/95 backdrop-blur-md">
      {/* خيط ذهبي رفيع علوي */}
      <div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-l from-transparent via-[#C9A45C] to-transparent"
      />

      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 dir-rtl md:h-[72px]">

        {/* 1. أقصى اليمين: الشعار واسم المنصة */}
        <Link
          to="/"
          className={`group flex shrink-0 items-center gap-3 rounded-lg ${focusRing}`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1.5 ring-2 ring-[#C9A45C]/60 ring-offset-2 ring-offset-[#0C1B38]">
            <img
              src="/kk.png"
              alt="شعار منصة حماية المستهلك"
              className="h-full w-full object-contain"
              // @ts-ignore
              fetchpriority="high"
            />
          </span>

          <div className="flex flex-col border-r border-white/15 pr-3">
            <span className="text-sm font-bold leading-tight text-white md:text-base">
              منصة حماية المستهلك
            </span>
            <span className="mt-1 text-[10px] font-medium leading-none text-slate-400 md:text-xs">
              دولة الإمارات العربية المتحدة
            </span>
          </div>
        </Link>

        {/* 2. المنتصف: روابط التنقل — نص نظيف بخط ذهبي عند التمرير */}
        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative inline-flex items-center gap-1.5 whitespace-nowrap py-2 text-[13px] font-medium text-slate-300 transition-colors duration-200 hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-[#C9A45C] after:transition-transform after:duration-300 hover:after:scale-x-100 ${focusRing}`}
              activeProps={{
                className: "!text-[#E4CB94] font-semibold after:!scale-x-100",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
              {n.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
            </Link>
          ))}
        </nav>

        {/* 3. أقصى اليسار: الزر الذهبي وزر الموبايل */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="complaint-form"
            className={`group hidden items-center gap-2.5 rounded-lg bg-[#C9A45C] px-5 py-2.5 text-xs font-bold text-[#0C1B38] transition-colors duration-200 hover:bg-[#D9B874] active:scale-[0.98] md:inline-flex lg:text-sm ${focusRing}`}
          >
            <span>تقديم طلب شكوى</span>
            <ArrowDownLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>

          {/* زر فتح القائمة في الموبايل */}
          <button
            type="button"
            className={`grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden ${focusRing}`}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div
        className={
          "overflow-hidden bg-[#0C1B38] px-4 transition-all duration-300 ease-in-out lg:hidden " +
          (open ? "max-h-[440px] border-t border-white/10 opacity-100 py-3" : "max-h-0 opacity-0 py-0")
        }
      >
        <div className="flex flex-col dir-rtl">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-white/10 px-2 py-3.5 text-sm font-medium text-slate-200 hover:text-white ${focusRing}`}
              activeProps={{ className: "!text-[#E4CB94] font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
              {n.hasDropdown && <ChevronDown className="h-4 w-4 opacity-60" />}
            </Link>
          ))}

          <Link
            to="/"
            hash="complaint-form"
            onClick={() => setOpen(false)}
            className={`mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#C9A45C] px-5 py-3 text-sm font-bold text-[#0C1B38] ${focusRing}`}
          >
            <span>تقديم طلب شكوى</span>
            <ArrowDownLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import {
  UserPlus,
  Users,
  UserPen,
  Search,
  Printer,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  Wallet,
  BadgeDollarSign,
  GraduationCap,
  FileSpreadsheet,
  Notebook
} from "lucide-react";

const menus = [
  {
    title: "Add New Student",
    icon: UserPlus,
    href: "/admin/students/add",
    color: "bg-blue-600",
  },
  {
    title: "Student Details",
    icon: Users,
    href: "/admin/students/details",
    color: "bg-green-600",
  },
  {
    title: "Update Student",
    icon: UserPen,
    href: "/admin/students/update",
    color: "bg-yellow-500",
  },
  {
    title: "Search Student",
    icon: Search,
    href: "/admin/students/search",
    color: "bg-cyan-600",
  },
  {
    title: "Print Form",
    icon: Printer,
    href: "/admin/students/adm-form",
    color: "bg-pink-600",
  },
  {
    title: "Student Ledger",
    icon: BookOpen,
    href: "/admin/students/ledger",
    color: "bg-indigo-600",
  },
  {
    title: "Today's Attendance",
    icon: CalendarCheck,
    href: "/admin/attendance/today",
    color: "bg-orange-600",
  },
  {
    title: "Attendance Details",
    icon: CalendarDays,
    href: "/admin/attendance/details",
    color: "bg-teal-600",
  },
  {
    title: "Fee Collection",
    icon: Wallet,
    href: "/admin/fee/collection",
    color: "bg-red-600",
  },
  {
    title: "Fee Status",
    icon: BadgeDollarSign,
    href: "/admin/fee/status",
    color: "bg-emerald-600",
  },
  {
    title: "Add Marks",
    icon: GraduationCap,
    href: "/admin/marks/add",
    color: "bg-purple-600",
  },
  {
    title: "Marks Sheet",
    icon: FileSpreadsheet,
    href: "/admin/marks/sheet",
    color: "bg-slate-700",
  },
  {
    title: "Notes Management",
    icon: Notebook,
    href: "/admin/notes",
    color: "bg-slate-700",
  },
];

export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Header */}
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-gray-900 p-10 text-white shadow-2xl">

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute left-20 bottom-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Ali Academy
        </h1>
         <p className="mt-2 text-lg text-slate-300">
          Welcome back, Administrator 👋
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {menus.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

              {/* Top Border */}
              <div className={`${item.color} absolute left-0 top-0 h-2 w-full`} />

              {/* Background Circle */}
              <div className={`${item.color} absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-10 transition-all duration-300 group-hover:scale-125`} />

              {/* Icon */}
              <div
                className={`${item.color}
                flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
              >
                <Icon size={32} />
              </div>

              {/* Title */}
              <h2 className="mt-6 text-xl font-bold text-slate-800">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-500">
                Click to manage this module.
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center font-semibold text-blue-600">
                Open
                <span className="ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>

            </div>
          </Link>
        );
      })}

    </div>

  </div>
</div>
  );
}
 
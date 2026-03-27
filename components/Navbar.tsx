"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
            C
          </div>
          <span className="text-xl font-bold text-gray-900">CoachKit</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </div>
        <a
          href="#pricing"
          className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white transition hover:bg-orange-600"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

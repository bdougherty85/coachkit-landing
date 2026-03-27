"use client";

import { useState } from "react";

const features = [
  "Unlimited players & games",
  "Live game clock & substitution tracking",
  "Automatic playing time calculation",
  "Goal & score tracking",
  "Season statistics & charts",
  "Parent RSVP & snack signup",
  "Works on phone, tablet, or computer",
  "No ads, ever",
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, affordable pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One plan. Everything included. Less than the cost of a pizza.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-lg">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $20
              </span>
              <span className="text-xl text-gray-500">/year</span>
            </div>
            <p className="mt-4 text-center text-gray-600">
              Per team. Cancel anytime.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-8 w-full rounded-full bg-orange-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Get CoachKit Now"}
            </button>
            <p className="mt-4 text-center text-sm text-gray-500">
              14-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

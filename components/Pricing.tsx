import Link from "next/link";

const tiers = [
  {
    name: "Rec League",
    price: "$20",
    description: "Perfect for recreational youth teams",
    cta: "Get Started",
    available: true,
    features: [
      { name: "Unlimited players", included: true },
      { name: "Live game clock", included: true },
      { name: "Tap-to-swap substitutions", included: true },
      { name: "Playing time tracking", included: true },
      { name: "Goal & score tracking", included: true },
      { name: "Season statistics", included: true },
      { name: "Parent RSVP & snack signup", included: true },
      { name: "Multiple teams", included: false },
      { name: "Tournament bracket mode", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Multi-sport support", included: false },
    ],
  },
  {
    name: "Travel Team",
    price: "$49",
    description: "For competitive travel teams",
    cta: "Coming Soon",
    available: false,
    featured: true,
    features: [
      { name: "Everything in Rec League", included: true },
      { name: "Tournament location tracking", included: true },
      { name: "Trip planning & schedules", included: true },
      { name: "Carpool coordination", included: true },
      { name: "Hotel & lodging info", included: true },
      { name: "Multi-team management", included: true },
      { name: "Tournament bracket mode", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Multi-sport support", included: false },
    ],
  },
  {
    name: "Multi-Sport",
    price: "$79",
    description: "Soccer, basketball, baseball & more",
    cta: "Coming Soon",
    available: false,
    features: [
      { name: "Everything in Travel Team", included: true },
      { name: "Soccer, basketball, baseball", included: true },
      { name: "Sport-specific stat tracking", included: true },
      { name: "Custom position templates", included: true },
      { name: "Cross-sport family view", included: true },
      { name: "Unlimited sports & seasons", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, affordable pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One-time purchase. Use it all season. No subscriptions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl bg-white p-8 shadow-xl ring-1 ${
                tier.featured
                  ? "ring-2 ring-orange-500"
                  : "ring-gray-200"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
                  Popular
                </div>
              )}
              {!tier.available && (
                <div className="absolute -top-4 right-4 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-white">
                  Coming Soon
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-500">/year</span>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {tier.available ? (
                <Link
                  href="/interest"
                  className="mt-8 block w-full rounded-full bg-orange-500 py-3 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  {tier.cta}
                </Link>
              ) : (
                <a
                  href={`mailto:btricer@gmail.com?subject=CoachKit%20-%20Interest%20in%20${encodeURIComponent(tier.name)}%20Plan`}
                  className="mt-8 block w-full rounded-full border-2 border-gray-300 py-3 text-center text-lg font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                >
                  Contact Us
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}

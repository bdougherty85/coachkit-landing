"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Coach your team,{" "}
              <span className="text-orange-500">not a spreadsheet</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              CoachKit tracks playing time automatically, manages substitutions with a tap,
              and keeps parents in the loop. Spend less time on logistics and more time
              developing young athletes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Get Started - $20/year
              </a>
              <a
                href="#features"
                className="rounded-full border-2 border-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 transition hover:border-gray-400"
              >
                See Features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No credit card required for trial</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Works on any device</span>
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="rounded-2xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
                <div className="rounded-xl bg-white p-4">
                  {/* Mock app screenshot */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-24 rounded bg-orange-500"></div>
                      <div className="text-2xl font-bold">12:45</div>
                    </div>
                    <div className="flex justify-center gap-4 rounded-lg bg-gray-900 p-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">3</div>
                        <div className="text-xs text-gray-400">HOME</div>
                      </div>
                      <div className="text-gray-500">-</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">2</div>
                        <div className="text-xs text-gray-400">AWAY</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["Emma", "Liam", "Olivia", "Noah"].map((name, i) => (
                        <div
                          key={name}
                          className={`rounded-lg p-3 text-center ${
                            i < 2 ? "bg-orange-100 border-2 border-orange-500" : "bg-gray-100"
                          }`}
                        >
                          <div className="font-semibold">{name}</div>
                          <div className="text-sm text-gray-600">{8 + i}:32</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

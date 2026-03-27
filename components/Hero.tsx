import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Make being a parent coach{" "}
              <span className="text-orange-500">not suck!</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              CoachKit tracks playing time automatically, manages substitutions with a tap,
              and handles parent RSVPs and snack signups so you can stop managing group chats
              and start actually coaching.
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
                <span>14-day free trial</span>
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
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image
                    src="/screenshot-game.png"
                    alt="CoachKit app showing live game tracking with player times and scores"
                    width={390}
                    height={844}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

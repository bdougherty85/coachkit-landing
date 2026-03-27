import Link from "next/link";

export default function InterestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <svg
            className="h-10 w-10 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Thanks for your interest!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          CoachKit is launching soon. We&apos;re putting the finishing touches on
          the app and will notify you as soon as it&apos;s ready.
        </p>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200">
          <p className="text-sm font-medium text-gray-900">
            Want to be first in line?
          </p>
          <p className="mt-2 text-gray-600">
            Drop us an email and we&apos;ll let you know when CoachKit launches.
          </p>
          <a
            href="mailto:btricer@gmail.com?subject=CoachKit%20-%20Interested%20in%20Early%20Access"
            className="mt-4 block w-full rounded-full bg-orange-500 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </a>
        </div>
        <Link
          href="/"
          className="mt-6 inline-block text-gray-600 hover:text-gray-900"
        >
          &larr; Back to homepage
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Welcome to CoachKit!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your subscription is now active. Check your email for login
          instructions and get started with your team.
        </p>
        <div className="mt-8 space-y-4">
          <a
            href="https://app.coachkit.com"
            className="block w-full rounded-full bg-orange-500 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Open CoachKit App
          </a>
          <Link
            href="/"
            className="block text-gray-600 hover:text-gray-900"
          >
            &larr; Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

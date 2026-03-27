import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-orange-500 hover:text-orange-600">
          &larr; Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-gray-500">Last updated: March 27, 2026</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. Information We Collect</h2>
          <p className="mt-4 text-gray-600">
            When you use CoachKit, we collect information you provide directly to us, including:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Account information (name, email address)</li>
            <li>Team information (team name, player names, parent contact information)</li>
            <li>Game data (schedules, scores, playing time statistics)</li>
            <li>Payment information (processed securely through Stripe)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. How We Use Your Information</h2>
          <p className="mt-4 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide, maintain, and improve CoachKit services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. Information Sharing</h2>
          <p className="mt-4 text-gray-600">
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            We may share information only in the following circumstances:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>With your consent or at your direction</li>
            <li>With service providers who assist in our operations (e.g., payment processing)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. Data Security</h2>
          <p className="mt-4 text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Data Retention</h2>
          <p className="mt-4 text-gray-600">
            We retain your information for as long as your account is active or as needed to provide
            you services. You may request deletion of your data at any time by contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Children&apos;s Privacy</h2>
          <p className="mt-4 text-gray-600">
            CoachKit is designed for use by coaches and parents. While the app tracks information
            about youth athletes, this information is provided and controlled by adult users
            (coaches and parents). We do not knowingly collect information directly from children
            under 13.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. Your Rights</h2>
          <p className="mt-4 text-gray-600">
            You have the right to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Export your data in a portable format</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">8. Changes to This Policy</h2>
          <p className="mt-4 text-gray-600">
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">9. Contact Us</h2>
          <p className="mt-4 text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:btricer@gmail.com" className="text-orange-500 hover:text-orange-600">
              btricer@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

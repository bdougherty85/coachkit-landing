import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-orange-500 hover:text-orange-600">
          &larr; Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-gray-500">Last updated: March 27, 2026</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. Acceptance of Terms</h2>
          <p className="mt-4 text-gray-600">
            By accessing or using CoachKit, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. Description of Service</h2>
          <p className="mt-4 text-gray-600">
            CoachKit is a team management application designed for youth sports coaches. The service
            provides tools for tracking playing time, managing substitutions, coordinating with parents,
            and maintaining team statistics.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. User Accounts</h2>
          <p className="mt-4 text-gray-600">
            You are responsible for:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that all information you provide is accurate and current</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. Acceptable Use</h2>
          <p className="mt-4 text-gray-600">
            You agree not to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Share account access with unauthorized users</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Upload malicious code or content</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Payment Terms</h2>
          <p className="mt-4 text-gray-600">
            CoachKit is offered as a yearly subscription. Payment is processed securely through Stripe.
            By subscribing, you agree to pay the applicable fees for your chosen plan.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Subscriptions are billed annually</li>
            <li>A 14-day free trial is available for new users</li>
            <li>You may cancel your subscription at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Intellectual Property</h2>
          <p className="mt-4 text-gray-600">
            CoachKit and its original content, features, and functionality are owned by CoachKit
            and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. User Content</h2>
          <p className="mt-4 text-gray-600">
            You retain ownership of any content you submit to CoachKit (team data, player information, etc.).
            By using the service, you grant us a license to use this content solely for the purpose of
            providing and improving the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">8. Disclaimer of Warranties</h2>
          <p className="mt-4 text-gray-600">
            CoachKit is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            either express or implied. We do not warrant that the service will be uninterrupted,
            secure, or error-free.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">9. Limitation of Liability</h2>
          <p className="mt-4 text-gray-600">
            To the maximum extent permitted by law, CoachKit shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages resulting from your use of the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">10. Termination</h2>
          <p className="mt-4 text-gray-600">
            We reserve the right to terminate or suspend your account at any time for violations of
            these terms. You may also terminate your account at any time by contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">11. Changes to Terms</h2>
          <p className="mt-4 text-gray-600">
            We may modify these terms at any time. We will notify users of significant changes via
            email or through the service. Continued use after changes constitutes acceptance of the
            modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">12. Contact Us</h2>
          <p className="mt-4 text-gray-600">
            If you have any questions about these Terms of Service, please contact us at:{" "}
            <a href="mailto:btricer@gmail.com" className="text-orange-500 hover:text-orange-600">
              btricer@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

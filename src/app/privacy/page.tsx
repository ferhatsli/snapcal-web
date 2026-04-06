import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for SnapCal services and website.',
};

const LAST_UPDATED = 'April 6, 2026';

export default function PrivacyPage() {
  return (
    <div className="px-5 pb-8 pt-14 md:px-10 md:pt-20">
      <article className="legal-page mx-auto w-full max-w-[920px]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="text-[15px] text-[var(--text-secondary)]">Last updated: {LAST_UPDATED}</p>

        <p>
          This Privacy Policy explains how SnapCal (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, shares, and protects
          information when you use the SnapCal website and mobile application (collectively, the &quot;Services&quot;).
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide</h3>
        <p>
          We may collect account information such as your email address, profile details you submit during onboarding,
          nutrition goals, and support requests.
        </p>

        <h3>1.2 Usage and Device Information</h3>
        <p>
          We may collect technical data including device identifiers, app version, operating system, crash diagnostics,
          pages viewed, and feature interaction events required to operate and improve the Services.
        </p>

        <h3>1.3 Health and Nutrition Information</h3>
        <p>
          If you enable integrations like Apple Health, we may process activity or health-related signals you authorize
          to personalize your recommendations. You can manage these permissions on your device.
        </p>

        <h2>2. How We Use Information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Provide and maintain SnapCal features.</li>
          <li>Personalize calorie and macro recommendations.</li>
          <li>Process subscriptions and customer support requests.</li>
          <li>Monitor reliability, prevent abuse, and secure the platform.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2>3. Legal Bases for Processing</h2>
        <p>
          Depending on your location, we process information under one or more legal bases, including contract
          performance, legitimate interests, consent, and legal compliance.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>We may share limited information with:</p>
        <ul>
          <li>Infrastructure and cloud providers that host our Services.</li>
          <li>Payment and subscription service providers.</li>
          <li>Analytics, monitoring, and customer support vendors.</li>
          <li>Authorities when required by law or to protect rights and safety.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain personal data for as long as necessary to provide the Services, satisfy legal obligations, resolve
          disputes, and enforce agreements. Retention periods vary by data type and account status.
        </p>

        <h2>6. Your Rights and Choices</h2>
        <p>Subject to local law, you may have rights to access, correct, delete, or restrict use of your information.</p>
        <ul>
          <li>You can update profile details in the app where available.</li>
          <li>You can withdraw certain permissions (e.g., health access) at the device level.</li>
          <li>You may request account deletion by contacting support.</li>
        </ul>

        <h2>7. International Transfers</h2>
        <p>
          Your information may be processed in countries other than your own. Where required, we use contractual and
          organizational safeguards for cross-border data transfers.
        </p>

        <h2>8. Security</h2>
        <p>
          We implement technical and organizational measures designed to protect data from unauthorized access,
          disclosure, alteration, and destruction. No method of transmission or storage is completely secure.
        </p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          The Services are not intended for children under the age required by local law to consent. We do not
          knowingly collect personal data from children without appropriate authorization.
        </p>

        <h2>10. Third-Party Links and Services</h2>
        <p>
          The Services may include links to third-party websites or integrations. We are not responsible for third-party
          privacy practices. Review their policies before providing personal data.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. If changes are material, we may provide additional notice in
          the app or on the website.
        </p>

        <h2>12. Contact</h2>
        <p>
          For privacy inquiries, please contact: <a href="mailto:support@snapcal.app">support@snapcal.app</a>
        </p>
      </article>
    </div>
  );
}

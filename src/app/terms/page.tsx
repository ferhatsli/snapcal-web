import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service governing SnapCal website and mobile app usage.',
};

const LAST_UPDATED = 'April 6, 2026';

export default function TermsPage() {
  return (
    <div className="px-5 pb-8 pt-14 md:px-10 md:pt-20">
      <article className="legal-page mx-auto w-full max-w-[920px]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Legal</p>
        <h1>Terms of Service</h1>
        <p className="text-[15px] text-[var(--text-secondary)]">Last updated: {LAST_UPDATED}</p>

        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of SnapCal products, including our website,
          mobile app, and related services (collectively, the &quot;Services&quot;). By using the Services, you agree to these
          Terms.
        </p>

        <h2>1. Eligibility and Account</h2>
        <p>
          You must be legally capable of entering a binding agreement to use the Services. You are responsible for
          maintaining account security and for all activity that occurs under your account.
        </p>

        <h2>2. Service Description</h2>
        <p>
          SnapCal provides tools for calorie tracking, meal logging, nutrition insights, and related wellness features.
          The Services are for informational and self-management purposes and do not replace professional medical advice.
        </p>

        <h2>3. Platform Access and App Store Policies</h2>
        <ul>
          <li>App download, updates, and device compatibility are governed by your platform provider.</li>
          <li>Platform-level account and store rules may apply in addition to these Terms.</li>
          <li>You are responsible for complying with your device and app store policies.</li>
        </ul>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services for unlawful or abusive purposes.</li>
          <li>Attempt unauthorized access to systems or user data.</li>
          <li>Interfere with service reliability or security.</li>
          <li>Reverse engineer or misuse proprietary technology beyond applicable law.</li>
        </ul>

        <h2>5. Health Disclaimer</h2>
        <p>
          SnapCal does not provide medical diagnosis or treatment. Always consult a qualified healthcare professional for
          medical or nutrition decisions involving your health condition.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The Services, including software, content, trademarks, and visual assets, are owned by SnapCal or its
          licensors and are protected by intellectual property laws.
        </p>

        <h2>7. User Content and License</h2>
        <p>
          You retain ownership of content you submit (such as meal photos and notes). You grant SnapCal a limited
          license to host, process, and display that content as needed to operate the Services.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate access if you materially violate these Terms, create legal risk, or compromise
          service integrity. You may stop using the Services at any time.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, SnapCal and its affiliates are not liable for indirect, incidental,
          special, consequential, or punitive damages, or loss of profits, data, goodwill, or business opportunities.
        </p>

        <h2>10. Warranty Disclaimer</h2>
        <p>
          The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or
          implied, except as required by law.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless SnapCal from claims arising out of your misuse of the Services,
          violation of these Terms, or infringement of third-party rights.
        </p>

        <h2>12. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by applicable laws in the jurisdiction designated by SnapCal, unless mandatory local
          consumer law requires otherwise. Dispute resolution venue may be specified by that jurisdiction.
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Services after changes become effective
          constitutes acceptance of the revised Terms.
        </p>

        <h2>14. Contact</h2>
        <p>
          For questions regarding these Terms, contact: <a href="mailto:support@snapcalai.app">support@snapcalai.app</a>
        </p>
      </article>
    </div>
  );
}

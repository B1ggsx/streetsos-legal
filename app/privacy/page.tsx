export const metadata = {
  title: "Privacy Policy | Streets OS",
  description: "Privacy Policy for Streets OS",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-zinc-600">Last updated: December 2025</p>
        </header>

        <div className="mt-10 space-y-8 text-base leading-7">
          <section className="space-y-3">
            <p>
              Streets OS ("Streets OS", "we", "us", or "our") provides software tools for
              creators and businesses, including analytics, automation, and operational
              workflows. This Privacy Policy explains what information we collect, how we
              use it, and the choices you have.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Account information:</span> name, email address,
                organization details, and login credentials (stored securely).
              </li>
              <li>
                <span className="font-medium">Connected platform information:</span> tokens or
                credentials needed to connect third-party services you authorize.
              </li>
              <li>
                <span className="font-medium">Usage and device data:</span> basic diagnostic
                data such as pages visited, feature usage, device type, and approximate
                location derived from IP address.
              </li>
              <li>
                <span className="font-medium">Content and metadata:</span> information you
                upload or create in the product (e.g., drafts, schedules, campaign notes).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and operate the Streets OS services.</li>
              <li>Enable automation and scheduling features you request.</li>
              <li>Provide analytics, reporting, and performance insights.</li>
              <li>Maintain security, prevent abuse, and troubleshoot issues.</li>
              <li>Communicate with you about product updates, changes, and support.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Use of TikTok Data</h2>
            <p>
              Streets OS integrates with TikTok through official APIs to enable authorized
              automation, analytics, content scheduling, and account management features.
            </p>
            <p>When a user connects a TikTok account, we may access:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Basic profile information</li>
              <li>Account identifiers</li>
              <li>Content metadata</li>
              <li>Posting and engagement data</li>
            </ul>
            <p>
              TikTok data is used solely to provide user-requested functionality within
              Streets OS and is not sold.
            </p>
            <p>
              Data access is limited to the scopes authorized by the user and may be
              revoked at any time through TikTok settings or Streets OS settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Sharing of Information</h2>
            <p>We do not sell your personal information.</p>
            <p>We may share information only in the following cases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Service providers:</span> vendors that help us
                run the service (hosting, databases, monitoring), under confidentiality
                obligations.
              </li>
              <li>
                <span className="font-medium">Legal compliance:</span> if required by law, legal
                process, or to protect rights, safety, and security.
              </li>
              <li>
                <span className="font-medium">Business transfers:</span> if we are involved in a
                merger, acquisition, or asset sale, subject to standard protections.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Data Retention</h2>
            <p>
              We retain information only as long as needed to provide the service and for
              legitimate business purposes such as security, compliance, and dispute
              resolution. You may request deletion of your account data as described below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational safeguards to
              protect information. No system is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You can disconnect connected platforms at any time.</li>
              <li>You can request access, correction, or deletion of your information.</li>
              <li>You can opt out of non-essential communications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>
              For privacy questions or requests, contact:{" "}
              <a className="underline" href="mailto:privacy@streetsos.com">
                privacy@streetsos.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

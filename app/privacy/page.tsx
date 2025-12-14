export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ marginTop: 0, color: "#444" }}>Last updated: December 2025</p>

      <section style={{ marginTop: 28 }}>
        <h2>Who we are</h2>
        <p>
          Streets OS (“we,” “us,” “our”) provides a web app that helps creators plan, manage, and publish social content,
          including posting to TikTok after a creator connects their TikTok account.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>What information we collect</h2>
        <ul>
          <li><strong>Account and contact info:</strong> name and email if you create an account or contact us.</li>
          <li><strong>TikTok connection data:</strong> when you connect TikTok, we store tokens/credentials needed to act on your behalf (per your authorization).</li>
          <li><strong>Content you provide:</strong> captions, media files you upload, scheduling details, and posting preferences.</li>
          <li><strong>Usage data:</strong> basic logs like pages visited, device/browser data, and error logs to keep the service working.</li>
        </ul>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>How we use information</h2>
        <ul>
          <li>To provide the service (create drafts, upload media, publish posts when you request).</li>
          <li>To authenticate you and secure access to your account.</li>
          <li>To troubleshoot issues, monitor reliability, and improve performance.</li>
          <li>To communicate with you about service updates, security notices, and support requests.</li>
        </ul>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>How TikTok data is used</h2>
        <p>
          If you connect TikTok, Streets OS uses the permissions you grant to upload content and/or publish content to your TikTok account.
          We do not sell TikTok user data. We only access what’s needed to provide the features you enable.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Sharing of information</h2>
        <p>We may share information only in these cases:</p>
        <ul>
          <li><strong>Service providers:</strong> hosting, analytics, error monitoring, and database providers who help us run the app.</li>
          <li><strong>Legal:</strong> if required to comply with law, court order, or to protect rights and safety.</li>
          <li><strong>Business changes:</strong> if we’re involved in a merger or acquisition, information may transfer as part of that transaction.</li>
        </ul>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Data retention</h2>
        <p>
          We keep information as long as needed to provide the service and comply with legal obligations.
          You can request deletion of your account data by contacting us (see Contact).
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect information.
          No method of transmission or storage is 100% secure.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Your choices</h2>
        <ul>
          <li>You can disconnect TikTok access from within TikTok settings and/or within Streets OS (if available).</li>
          <li>You can request access, correction, or deletion of your account data by contacting us.</li>
        </ul>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Children</h2>
        <p>
          Streets OS is not intended for children under 13 (or the minimum age required in your jurisdiction).
          We do not knowingly collect personal information from children.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Contact</h2>
        <p>
          For privacy questions or requests, contact: <strong>privacy@streetsos.com</strong>
        </p>
      </section>
    </main>
  );
}

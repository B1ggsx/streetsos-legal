export const metadata = { title: "Privacy Policy | Streets OS" };

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 860, margin: "48px auto", padding: "0 20px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ marginTop: 0, opacity: 0.75 }}>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>1. What we collect</h2>
      <ul>
        <li>Account info (like email) when you sign up.</li>
        <li>Usage data (basic analytics and logs to keep the service working).</li>
        <li>Content you upload or submit.</li>
      </ul>

      <h2>2. How we use data</h2>
      <ul>
        <li>To provide and improve the service.</li>
        <li>To keep accounts secure and prevent abuse.</li>
        <li>To respond to support requests.</li>
      </ul>

      <h2>3. Sharing</h2>
      <p>We do not sell your personal information. We may share data with vendors only to run the service (hosting, email, security).</p>

      <h2>4. Cookies</h2>
      <p>We may use cookies for login sessions and basic site functionality.</p>

      <h2>5. Your choices</h2>
      <p>You can request access, correction, or deletion of your data by emailing us.</p>

      <h2>6. Contact</h2>
      <p>Email: privacy@streetsos.com</p>
    </main>
  );
}

export const metadata = { title: "Terms of Use | Streets OS" };

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 860, margin: "48px auto", padding: "0 20px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>Terms of Use</h1>
      <p style={{ marginTop: 0, opacity: 0.75 }}>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>1. Overview</h2>
      <p>Streets OS (“we”, “us”) provides tools for artists and teams. By using this site, you agree to these Terms.</p>

      <h2>2. Who can use this</h2>
      <p>You must be at least 13 years old. If you are under 18, use Streets OS only with a parent/guardian’s permission.</p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Do not break the law using this service.</li>
        <li>Do not attempt to hack, disrupt, or overload the service.</li>
        <li>Do not upload content you do not have the right to use.</li>
      </ul>

      <h2>4. Accounts</h2>
      <p>You are responsible for keeping your login secure and for activity under your account.</p>

      <h2>5. Content</h2>
      <p>You keep ownership of your content. You grant us permission to host and display it only as needed to operate the service.</p>

      <h2>6. No warranties</h2>
      <p>This service is provided “as is” without warranties of any kind.</p>

      <h2>7. Limitation of liability</h2>
      <p>To the maximum extent allowed by law, Streets OS is not liable for indirect or consequential damages.</p>

      <h2>8. Contact</h2>
      <p>Email: support@streetsos.com</p>
    </main>
  );
}

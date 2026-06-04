# 🔐 MicroChat Security & Bug Bounty Program

**microchat.co** | Operated by [Forward Education](https://forwardedu.com)

---

## Our Commitment

MicroChat is a communication and learning platform built for K–12 students and educators. The safety and privacy of young learners is our highest priority. We take security vulnerabilities seriously and appreciate the work of researchers who help us keep our platform safe.

If you've discovered a potential security issue, we want to hear from you.

---

## Scope

### In Scope

The following assets and vulnerability types are eligible for the program:

**Applications & Domains**
- `microchat.co` and all subdomains
- MicroChat web application (student and teacher interfaces)
- Authentication and session management systems

**Vulnerability Categories**
- Authentication bypass or account takeover
- Cross-Site Scripting (XSS) — stored, reflected, or DOM-based
- Cross-Site Request Forgery (CSRF)
- SQL injection or other injection attacks
- Insecure Direct Object Reference (IDOR) — especially access to other users' data
- Privilege escalation (student accessing teacher controls, or vice versa)
- Sensitive data exposure (student PII, class rosters, messages)
- Server-Side Request Forgery (SSRF)
- Remote Code Execution (RCE)
- Broken access control
- Insecure file upload handling

### Out of Scope

The following are **not** eligible for rewards and may result in disqualification:

- Denial of Service (DoS/DDoS) attacks
- Spam or social engineering attacks
- Physical security issues
- Vulnerabilities in third-party services or libraries (report those upstream)
- Issues requiring unlikely user interaction (e.g., self-XSS)
- Missing security headers without demonstrated impact
- Clickjacking on pages with no sensitive actions
- Rate limiting issues without demonstrated abuse potential
- Automated scanner output without proof of exploitability
- Previously reported issues

---

## Severity & Rewards

We evaluate vulnerabilities using the [CVSS v3.1](https://www.first.org/cvss/) scoring framework, with additional weight given to impact on minors and student data.

| Severity | CVSS Score | Example | Reward Range |
|----------|------------|---------|--------------|
| 🔴 Critical | 9.0–10.0 | RCE, mass student PII exposure, full account takeover | $500 – $1,500 USD |
| 🟠 High | 7.0–8.9 | Privilege escalation, cross-user data access, auth bypass | $150 – $500 USD |
| 🟡 Medium | 4.0–6.9 | Stored XSS, CSRF on sensitive actions, IDOR (limited scope) | $50 – $150 USD |
| 🟢 Low | 0.1–3.9 | Reflected XSS (low impact), minor info disclosure | Acknowledgement |

> **Note:** Reward amounts are at the discretion of Forward Education and may be adjusted based on quality of report, reproducibility, and actual impact. Researchers outside Canada and the United States may be subject to additional payment requirements.

---

## Responsible Disclosure Policy

We follow a **coordinated disclosure** model. By participating in this program, you agree to:

1. **Report privately first.** Do not publicly disclose the vulnerability until we have resolved it or 90 days have elapsed, whichever comes first.
2. **Avoid harm.** Do not access, modify, or delete data that isn't yours. Do not disrupt service availability. Do not interact with real student accounts.
3. **Use test accounts.** Create your own test accounts for research. Contact us if you need a dedicated test environment.
4. **Act in good faith.** Avoid actions that could be harmful to MicroChat users, especially minors.
5. **One report per issue.** Submit each unique vulnerability once. Duplicate reports will only be awarded to the first submission.

We commit to:

- Acknowledging your report within **3 business days**
- Providing a status update within **10 business days**
- Notifying you when the issue is resolved
- Crediting you in our Hall of Fame (if desired)
- Not pursuing legal action against researchers acting in good faith

---

## How to Report

Send your report to:

📧 **devops@microchat.co**

### What to Include

A strong report includes:

- **Summary** — A concise description of the vulnerability
- **Affected URL / endpoint** — Exact location of the issue
- **Steps to Reproduce** — Clear, numbered steps a reader can follow
- **Proof of Concept** — Screenshots, screen recordings, or a working PoC (no live exploits against production data)
- **Impact Assessment** — What could an attacker achieve? Who is affected?
- **Suggested Fix** (optional, but appreciated)

### PGP Encryption

If your report contains sensitive technical details, you may request our PGP public key before submitting.

---

## Special Considerations: Student Data & COPPA/PIPEDA

MicroChat serves students under the age of 13 in some jurisdictions. Any vulnerability that could expose personally identifiable information (PII) belonging to minors — including names, email addresses, messages, or class associations — will be treated as **Critical severity** regardless of CVSS score.

We comply with:
- **COPPA** (Children's Online Privacy Protection Act)
- **FERPA** (Family Educational Rights and Privacy Act)
- **PIPEDA** (Personal Information Protection and Electronic Documents Act)
- **GDPR** (General Data Protection Regulation)

---

## Hall of Fame

We recognize researchers who have made meaningful contributions to MicroChat's security.

*Be the first to be listed here.*

---

## Legal Safe Harbor

Forward Education will not initiate legal action against security researchers who:

- Comply with this policy in full
- Avoid accessing data beyond what is necessary to demonstrate the vulnerability
- Do not exploit the vulnerability for personal gain or to harm users
- Report the issue to us before any public disclosure

This safe harbor applies under Canadian law and is offered in good faith. We reserve the right to modify this program at any time.

---

*Last updated: June 2026*
*Forward Education*
*[forwardedu.com](https://forwardedu.com) | [microchat.co](https://microchat.co)*

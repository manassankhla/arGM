export default function TermsAndConditions() {
  return (
    
    <main className="bg-gray-500 text-black min-h-screen">

      {/* Top spacing like big brands */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">

        {/* Title */}
        <h1 className="text-5xl font-heading italic font-semibold tracking-tight mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mb-16">
          Effective Date: {new Date().getFullYear()}
        </p>

        {/* Content */}
        <div className="space-y-14 font-heading italic text-[17px] leading-8 text-gray-800">

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be
              bound by these Terms and Conditions. If you do not agree with any
              part of these terms, please discontinue use of our services
              immediately.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p>
              Our services are intended for lawful purposes only. You agree not
              to misuse, disrupt, or attempt unauthorized access to any part of
              the website, systems, or related infrastructure.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              All content, designs, branding, logos, text, graphics, and digital
              assets on this website are the intellectual property of our
              company. Unauthorized reproduction, distribution, or modification
              is strictly prohibited without written permission.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate information when communicating with us</li>
              <li>Respect other users and our team members</li>
              <li>Do not engage in harmful or illegal activities</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
            <p>
              Your privacy matters to us. Any information collected is handled in
              accordance with our Privacy Policy. We take reasonable measures to
              safeguard your personal data.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p>
              We may rely on trusted third-party providers for hosting,
              analytics, or other operational needs. We are not responsible for
              the content or policies of external websites or services.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages resulting from the use or inability to use our services.
              All services are provided on an “as-is” basis.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
            <p>
              We reserve the right to update or modify these terms at any time.
              Continued use of the website after changes indicates acceptance of
              the revised terms.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p>
              We may suspend or terminate access to our services if any misuse,
              violation, or suspicious activity is detected.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p>
              For any questions regarding these Terms & Conditions, please
              contact us at:
              <br />
              <span className="font-medium">support@yourcompany.com</span>
            </p>
          </section>
        </div>

      
      </div>
    </main>
  );
}

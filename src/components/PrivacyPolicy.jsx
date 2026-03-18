import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-surface pt-32 pb-16 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-accent mb-2">Privacy Policy for Untether</h1>
        <div className="text-xs text-dark/50 mb-6 pb-4 border-b border-dark/10">Last updated: January 2025</div>
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">1. Introduction</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              Welcome to Untether. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">2. Data We Collect</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              We do not collect any personal data from our visitors. When you visit our website, you can browse without having to provide any personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">3. Use of Cookies and Tracking</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              Our website does not use cookies or any form of tracking technologies that collect personal information about visitors.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">4. Third-Party Links</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">5. Data Security</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              We have put in place suitable security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. However, as we do not collect personal data, the risk to your personal data is minimal.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">6. Your Legal Rights</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, such as the right to request access, correction, erasure, or transfer of your personal data. Since we do not collect any personal data, these rights may not be applicable.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">7. Changes to This Policy</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">8. Contact Us</h2>
            <p className="text-base text-dark/80 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at <a href="mailto:hello@untether.group" className="text-accent underline">hello@untether.group</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

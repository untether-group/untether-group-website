import React, { useEffect } from 'react';

export default function TermsWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-neutral-900 pt-32 pb-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-accent mb-2">Terms and Conditions</h1>
        <div className="text-xs text-dark/50 mb-6 pb-4 border-b border-dark/10">Last updated: 20th January 2023</div>
        <div className="flex flex-col gap-8">
          <p>
            Please read these Terms and Conditions (or the "Terms") carefully because they govern your use of our website <a href="https://untether.group" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://untether.group</a> and related direct and indirect services including, but not limited to, informal product support and certain interactions with our website.
          </p>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">WHO WE ARE</h2>
            <p>
              <a href="https://untether.group" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://untether.group</a> (or "our website") is a website operated by Untether Ltd. (referred to as "Untether Ltd.", "we", "us" or "our" in this Terms and Conditions).
            </p>
            <p><strong>Full name of legal entity:</strong></p>
            <div className="bg-surface/60 rounded border-l-4 border-accent p-4 my-2">
              <p>Untether Ltd.</p>
              <p>61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom</p>
              <p>Registered in England. Company 06865665</p>
              <p>Email address: <a href="mailto:hello@untether.group" className="text-accent underline">hello@untether.group</a></p>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">AGREEMENT TO TERMS</h2>
            <p>
              By using our website, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree to these Terms, you must not use our website <a href="https://untether.group" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://untether.group</a> We recommend that you print a copy of these terms for future reference.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">OTHER TERMS THAT MAY APPLY TO YOU</h2>
            <p>These Terms refer to the following additional terms, which also apply to your use of our site:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>our Privacy Policy which sets out how we deal with your personal data;</li>
            </ul>
            <p>
              Although it's not a part of these Terms, we encourage you to read our Privacy Policy to better understand how you can update, manage, export, and delete your information.
            </p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>our Cookie Policy which sets out information about the cookies we use on our website.</li>
            </ul>
            <p>
              By using our sites, you consent to such processing and you warrant that all data provided by you is accurate.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">CHANGES TO THESE TERMS AND CONDITIONS</h2>
            <p>
              Please check these terms and conditions regularly. We can update them at any time without notice.
            </p>
            <p>
              You'll agree to any changes if you continue to use <a href="https://untether.group" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://untether.group</a> after the terms and conditions have been updated.
            </p>
            <p>
              This Terms and Conditions was last updated on 20th January 2023.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">SUSPEND OR WITHDRAW OUR WEBSITE</h2>
            <p>
              We do not guarantee that our website, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our website for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.
            </p>
            <p>
              You are also responsible for ensuring that all persons who access our website through your internet connection are aware of these Terms and other applicable terms and conditions, and that they comply with them.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">INTELLECTUAL PROPERTY</h2>
            <p>
              Except where expressly stated otherwise, you may only use this website and any materials forming any part of this website (including, but not limited to, any images, logos, designs, pictures, sounds, text, messages, tools, software, technology, products, URLs, files, information, data, demos, stickers, games, promotional materials, audiovisual and multimedia works and any other items or expressions – collectively, "Our Content") are fully vested in us, our licensors, or our suppliers and protected by applicable copyrights, trademarks, patents, trade secrets, or other proprietary rights and laws.
            </p>
            <p>
              You agree that access and use of Our Content is subject to these Terms and Conditions. Nothing in your use of the out website or these Terms grants you any right, title or interest in or to Our Content except the limited right to use the Website as set out in these Terms and Conditions.
            </p>
            <p>Unless otherwise expressly authorised by us in writing, you agree not to:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>copy, modify, deep link, rent, lease, loan, sell, assign, sublicense, grant a security interest in or otherwise transfer any right or interest in Our Content;</li>
              <li>remove any proprietary notices or labels on or in Our Content;</li>
              <li>allow any other person or entity to engage in any of the foregoing.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">LINKS TO THIRD PARTY WEBSITES OR RESOURCES</h2>
            <p>
              Our website contains links to other websites or resources provided by third parties, these links are provided for your information only. We do not have any control over the content on these websites.
            </p>
            <p>
              Due to the very nature of the internet we cannot guarantee our site or other sites we link to will always be available to you.
            </p>
            <p>We're not responsible for:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>the protection of any information you give to these websites;</li>
              <li>any loss or damage that may come from your use of these websites, or any other websites they link to.</li>
            </ul>
            <p>
              You should read all terms and conditions, privacy policies and end user licences that relate to these websites before you use them.
            </p>
            <p>
              You agree to release us from any claims or disputes that may come from using these websites.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">SUBMISSIONS, INCLUDING COMMENTS AND FEEDBACK</h2>
            <p>
              Our website may contain functionality that permits you to comment on articles; share materials; provide ideas, proposals, suggestions ("Feedback"); or otherwise make available certain materials through or in connection with your use of the Website (collectively, "Submissions").
            </p>
            <p>
              If you choose to make publicly available any of your personally identifiable or other information through the Website (for example through posting a comment or other form of Submission), you do so at your own risk. You will also comply with all relevant requirements set out in these Terms when making a submission.
            </p>
            <p>
              You acknowledge and agree that your Submissions are not confidential; that your provision of Submissions is gratuitous, unsolicited and without restriction; and that the provision of any Submission does not place Untether Ltd. under any fiduciary or other obligation.
            </p>
            <p>
              We may (but have no obligation to) monitor, evaluate, alter or remove Submissions before or after they appear on the site; however, we have no control over and are not responsible for any use or misuse (including any distribution) by any third party of Submissions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">DISCLAIMER</h2>
            <p>
              The content on our website is provided for general information only. It is not intended to amount to advice on which you should rely. You should get professional or specialist advice before doing anything on the basis of the content. We will not be responsible or liable for any of your actions or inactions, or the results of any of your actions or inactions, based on the content on our website.
            </p>
            <p>We do not provide any guarantees, conditions or warranties that the information will be:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>current;</li>
              <li>accurate;</li>
              <li>complete;</li>
              <li>free from bugs.</li>
            </ul>
            <p>We're not liable for any loss or damage that may come from using our website. This includes:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>any direct, indirect or consequential losses;</li>
              <li>the use of our website and any websites that are linked to or from it;</li>
              <li>the inability to use our website and any websites that are linked to or from it.</li>
            </ul>
            <p>In particular, we will not be liable for:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>loss of profits, sales, business, or revenue;</li>
              <li>business interruption;</li>
              <li>loss of anticipated savings;</li>
              <li>loss of business opportunity, goodwill or reputation;</li>
              <li>any indirect or consequential loss or damage.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">VIRUSES, HACKING AND OTHER OFFENCES</h2>
            <p>
              We make every effort to check and test material at all stages of production. It is always wise for you to run an anti-virus program on all material downloaded from the internet. We cannot accept any responsibility for any loss, disruption or damage to your data or your computer system which may occur whilst using material derived from this website.
            </p>
            <p>
              You should ensure that you have appropriate protection against viruses and other security arrangement in place when using the internet.
            </p>
            <p>
              You must not misuse our website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our sites, the server on which the sites are stored or any server, computer or database connected to our sites. You must not attack our sites via a denial-of-service attack or a distributed denial-of-service attack.
            </p>
            <p>
              By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We may report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our sites will cease immediately.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">GOVERNING LAW</h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and constructed in accordance with the law of England and Wales.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">GENERAL</h2>
            <p>
              We might decide not to exercise or enforce any right available to us under these terms and conditions. We can always decide to exercise or enforce that right at a later date.
            </p>
            <p>
              Doing this once will not mean we automatically waive the right on any other occasion.
            </p>
            <p>
              If any of these terms and conditions are held to be invalid, unenforceable or illegal for any reason, the remaining terms and conditions will still apply.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

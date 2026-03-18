import React, { useEffect } from 'react';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-neutral-900 pt-32 pb-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-accent mb-2">Cookie Policy</h1>
        <div className="text-xs text-dark/50 mb-6 pb-4 border-b border-dark/10">Last updated: June 2025</div>
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Introduction</h2>
            <p className="text-base text-dark/80 leading-relaxed">Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p>
            <p className="text-base text-dark/80 leading-relaxed">Please read this Cookie Policy carefully as it contains important information on who we are and how we use cookies on our website.</p>
            <p className="text-base text-dark/80 leading-relaxed">This Policy should be read together with our Privacy Policy which sets out how and why we collect, store, use and share personal information generally, as well as your rights in relation to your personal information and details of how to contact us and supervisory authorities if you have a complaint.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Our Website</h2>
            <p className="text-base text-dark/80 leading-relaxed">This Cookie Policy relates to your use of our website <a href="https://untether.group" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://untether.group</a>.</p>
            <p className="text-base text-dark/80 leading-relaxed">Throughout our website we may link to other websites owned and operated by certain trusted third parties to make additional products and services available to you. These other third party websites may also use cookies or similar technologies in accordance with their own separate polices. For privacy information relating to these other third party websites, please consult their policies as appropriate.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Cookies and Similar Technology</h2>
            <p className="text-base text-dark/80 leading-relaxed">Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.</p>
            <p className="text-base text-dark/80 leading-relaxed">Untether Ltd. uses cookies in a range of ways to improve your experience on our website, including:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li>keeping you signed in</li>
              <li>understanding how you use our website</li>
            </ul>
            <p className="text-base text-dark/80 leading-relaxed">For example, we may monitor how many times you visit the website, which pages you go to, traffic data, location data and the originating domain name of your internet service provider. This information helps us to build a profile of our users. Some of this data will be aggregated or statistical, which means that we will not be able to identify you individually.</p>
            <p className="text-base text-dark/80 leading-relaxed">We use the following cookies:</p>
            <ul className="list-disc pl-6 text-dark/80 mb-2">
              <li><b>Strictly necessary cookies.</b> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</li>
              <li><b>Analytical/performance cookies.</b> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
              <li><b>Functionality cookies.</b> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
              <li><b>Targeting cookies.</b> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>
            </ul>
            <p className="text-base text-dark/80 leading-relaxed">If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
            <p className="text-base text-dark/80 leading-relaxed">For further information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://www.allaboutcookies.org</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Consent to use cookies and changing settings</h2>
            <p className="text-base text-dark/80 leading-relaxed">We will ask for your permission ("Consent") to place cookies or other similar technologies on your device, except where they are essential for us to provide you with a service that you have requested. You can withdraw any consent to the use of cookies or manage any other cookie preferences.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Our use of cookies</h2>
            <p className="text-base text-dark/80 leading-relaxed">The tables below provide you can find more information about the individual cookies we use and the purposes for.</p>
            <div className="overflow-x-auto my-4 rounded-lg shadow">
              <table className="w-full border-collapse bg-white text-sm">
                <thead>
                  <tr>
                    <th className="bg-surface font-bold text-dark border-b border-dark/10 px-3 py-2">Cookie</th>
                    <th className="bg-surface font-bold text-dark border-b border-dark/10 px-3 py-2">Type</th>
                    <th className="bg-surface font-bold text-dark border-b border-dark/10 px-3 py-2">Description</th>
                    <th className="bg-surface font-bold text-dark border-b border-dark/10 px-3 py-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">_gid</td>
                    <td className="border-b border-dark/10 px-3 py-2">Analytics</td>
                    <td className="border-b border-dark/10 px-3 py-2">This cookie is set by Google Analytics. It stores and update a unique value for each page visited and is used to count and track pageviews.</td>
                    <td className="border-b border-dark/10 px-3 py-2">1 day</td>
                  </tr>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">_ga_JYK8FDQ76Z</td>
                    <td className="border-b border-dark/10 px-3 py-2">Analytics</td>
                    <td className="border-b border-dark/10 px-3 py-2">This cookie is installed by Google Analytics.</td>
                    <td className="border-b border-dark/10 px-3 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">_ga</td>
                    <td className="border-b border-dark/10 px-3 py-2">Analytics</td>
                    <td className="border-b border-dark/10 px-3 py-2">The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.</td>
                    <td className="border-b border-dark/10 px-3 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">__cf_bm</td>
                    <td className="border-b border-dark/10 px-3 py-2">Functional</td>
                    <td className="border-b border-dark/10 px-3 py-2">This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.</td>
                    <td className="border-b border-dark/10 px-3 py-2">30 minutes</td>
                  </tr>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">_GRECAPTCHA</td>
                    <td className="border-b border-dark/10 px-3 py-2">Necessary</td>
                    <td className="border-b border-dark/10 px-3 py-2">This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.</td>
                    <td className="border-b border-dark/10 px-3 py-2">6 months</td>
                  </tr>
                  <tr>
                    <td className="border-b border-dark/10 px-3 py-2">_gat</td>
                    <td className="border-b border-dark/10 px-3 py-2">Performance</td>
                    <td className="border-b border-dark/10 px-3 py-2">This cookie name is associated with Google Universal Analytics, according to documentation it is used to throttle the request rate – limiting the collection of data on high traffic sites.</td>
                    <td className="border-b border-dark/10 px-3 py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-dark/80 leading-relaxed">Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">How to turn off all cookies and consequences of doing so</h2>
            <p className="text-base text-dark/80 leading-relaxed">If you do not want to accept any cookies, you may be able to change by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.</p>
            <p className="text-base text-dark/80 leading-relaxed">For further information about cookies and how to disable them please go to the <a href="https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/" target="_blank" rel="noopener noreferrer" className="text-accent underline">guidance</a> on cookies published by the UK Information Commissioner's Office, or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent underline">https://www.allaboutcookies.org</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">How to contact us</h2>
            <p className="text-base text-dark/80 leading-relaxed">Please contact us if you have any questions about this Cookie Policy or the information we hold about you. If you wish to contact us, please send an email to <a href="mailto:hello@untether.group" className="text-accent underline">hello@untether.group</a> or via the <a href="/#contact" className="text-accent underline">Contact page</a> on our website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">Changes to this Policy</h2>
            <p className="text-base text-dark/80 leading-relaxed">This Policy was published in November 2021 and last updated in June 2025. We may change this Policy from time to time, when we do we will inform you via our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

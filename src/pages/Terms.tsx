import React from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <main className="flex-grow bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Untether Ltd.'s website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Untether Ltd.'s website are provided on an 'as is' basis. Untether Ltd. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Untether Ltd. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Untether Ltd.'s website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
            <p className="mb-4">
              The materials appearing on Untether Ltd.'s website could include technical, typographical, or photographic errors. Untether Ltd. does not warrant that any of the materials on its website are accurate, complete or current.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Terms;
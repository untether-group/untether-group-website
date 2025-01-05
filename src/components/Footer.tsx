import React from 'react';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">CompanyName</span>
            </div>
            <p className="mt-4 text-sm">
              Building the future, one innovation at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/terms" className="text-sm hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="text-sm">123 Business Street</p>
                <p className="text-sm">Tech City, TC 12345</p>
              </li>
              <li>
                <a href="mailto:contact@company.com" className="text-sm hover:text-white transition">
                  contact@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} CompanyName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
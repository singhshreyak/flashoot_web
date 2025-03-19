import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <div className="border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-gray-400">
            © 2025 Flashoot. A product of Konchamkode Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy">
              <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms
              </span>
            </Link>
            <Link href="/cookies">
              <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                Cookies
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
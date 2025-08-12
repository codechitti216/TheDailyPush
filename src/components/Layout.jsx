/*
 * Research Portfolio Template - Layout Component
 * © 2025 Surya GS Chitti
 * 
 * This file is part of the Research Portfolio Template.
 * Template design and original implementation by Surya GS Chitti.
 * 
 * Attribution required when using this template.
 * GitHub: https://github.com/codechitti216/TheDailyPush
 */

import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useInnerCircleAccess } from './AccessControl';

const Layout = ({ children }) => {
  const location = useLocation();
  const { hasAccess: isInnerCircle, revokeAccess } = useInnerCircleAccess();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
            { name: 'Garden', href: '/garden' },
        { name: 'Inner Circle', href: '/inner-circle' },
        { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl font-serif font-semibold text-gray-900">
              Research Portfolio
            </Link>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant={location.pathname === item.href ? "default" : "ghost"}
                    size="sm"
                    asChild
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
              
              {/* Inner Circle Indicator */}
              {isInnerCircle && (
                <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs font-medium text-blue-600">Inner Circle</span>
                  </div>
                  <button
                    onClick={revokeAccess}
                    className="text-xs text-gray-500 hover:text-gray-700"
                    title="Exit Inner Circle"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>© 2025 Research Portfolio Template. Built with React and deployed via GitHub Pages.</p>
            <p className="mt-2">
              <span className="italic">An academic portfolio template for researchers.</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Template v1.0 - Research portfolio system
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                © Template design by Anonymous | 
                <span className="mx-1">•</span>
                <span className="font-medium">Must retain attribution</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


import {Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-cormorant-serif",
  subsets: ["latin"],
});



export const metadata = {
  title: "Portfolio",
  description: "Welcome to Kirtan's Portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fix React DevTools semver error */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                // Override React DevTools hook before it's initialized
                let devToolsHook = null;
                
                Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
                  get() {
                    return devToolsHook;
                  },
                  set(hook) {
                    if (!hook) return;
                    devToolsHook = hook;
                    
                    // Override registerRenderer to fix semver validation
                    if (hook.registerRenderer) {
                      const originalRegister = hook.registerRenderer;
                      hook.registerRenderer = function(id, renderer) {
                        if (renderer && (!renderer.version || renderer.version === '')) {
                          renderer.version = '19.2.0';
                        }
                        return originalRegister.call(this, id, renderer);
                      };
                    }
                    
                    // Override version validation functions
                    if (hook.rendererInterfaces) {
                      hook.rendererInterfaces.forEach((renderer) => {
                        if (renderer && (!renderer.version || renderer.version === '')) {
                          renderer.version = '19.2.0';
                        }
                      });
                    }
                  }
                });
                
                // Prevent semver validation errors
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.includes('not valid semver')) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.warn('React DevTools semver error suppressed');
                    return false;
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${cormorantSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

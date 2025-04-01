import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Shield, Store, ArrowRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const privacyRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="Image.png" 
                alt="Floorvana Logo" 
                className="h-10"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm text-gray-600 hover:text-[#C7B469] transition-colors">Home</a>
              <button 
                onClick={() => scrollToSection(privacyRef)}
                className="text-sm text-gray-600 hover:text-[#C7B469] transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection(termsRef)}
                className="text-sm text-gray-600 hover:text-[#C7B469] transition-colors"
              >
                Terms & Conditions
              </button>
              <a
                href="https://apps.apple.com"
                className="inline-flex items-center px-4 py-2 bg-[#C7B469] text-white rounded-full hover:bg-[#D8C57A] transition-all text-sm"
              >
                <span>Download</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#C7B469]/10 rounded-full text-[#C7B469] text-sm mb-8">
            <Shield className="h-4 w-4 mr-2" />
            Your data is secure with us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Your Privacy & Trust
            <span className="bg-gradient-to-r from-[#C7B469] to-white bg-clip-text text-transparent"> Matter</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            At Floorvana, we're committed to protecting your privacy while helping you create beautiful 2D floorplans and stunning 3D visualizations.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                toggleSection('privacy');
                scrollToSection(privacyRef);
              }} 
              className="px-6 py-3 bg-[#C7B469] text-black rounded-full hover:bg-[#D8C57A] transition-colors"
            >
              Read Privacy Policy
            </button>
            <button 
              onClick={() => {
                toggleSection('terms');
                scrollToSection(termsRef);
              }} 
              className="px-6 py-3 bg-[#C7B469]/10 text-[#C7B469] rounded-full hover:bg-[#C7B469]/20 transition-colors"
            >
              View Terms
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Privacy Policy Section */}
        <div ref={privacyRef} className="mb-8 scroll-mt-24">
          <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'privacy' ? 'max-h-[2000px]' : 'max-h-20'}`}>
            <button
              onClick={() => toggleSection('privacy')}
              className="w-full bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-[#C7B469]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Privacy Policy</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-[#C7B469] transition-transform duration-300 ${activeSection === 'privacy' ? 'rotate-180' : ''}`} />
              </div>
            </button>
            {activeSection === 'privacy' && (
              <div className="p-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Data Collection and Usage</h3>
                  <p className="mb-4">
                    We collect minimal data necessary to provide you with the best possible experience while using Floorvana. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Basic account information (email and profile details)</li>
                    <li>Your floorplan designs and preferences</li>
                    <li>App usage statistics to improve our service</li>
                    <li>Device information for optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Data Security</h3>
                  <p className="mb-4">
                    Your data security is our top priority. We implement industry-standard security measures:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Regular security audits and updates</li>
                    <li>Secure cloud storage with redundancy</li>
                    <li>Regular backup procedures</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div ref={termsRef} className="scroll-mt-24">
          <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'terms' ? 'max-h-[2000px]' : 'max-h-20'}`}>
            <button
              onClick={() => toggleSection('terms')}
              className="w-full bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Store className="h-6 w-6 text-[#C7B469]" />
                  <h2 className="text-2xl font-semibold text-gray-900">Terms & Conditions</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-[#C7B469] transition-transform duration-300 ${activeSection === 'terms' ? 'rotate-180' : ''}`} />
              </div>
            </button>
            {activeSection === 'terms' && (
              <div className="p-6 space-y-8 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">License Agreement</h3>
                  <p className="mb-4">
                    By downloading and using Floorvana, you agree to these terms of service:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personal and non-commercial use only unless explicitly authorized</li>
                    <li>Respect intellectual property rights of Floorvana and other users</li>
                    <li>Do not redistribute or modify the application</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">User Content</h3>
                  <p className="mb-4">
                    When using Floorvana, you retain ownership of your content while granting us limited rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You maintain ownership of all floor plans and designs you create</li>
                    <li>We may use your content for app improvement and promotional purposes</li>
                    <li>You are responsible for the content you create and share</li>
                    <li>We reserve the right to remove inappropriate content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Subscription and Payments</h3>
                  <p className="mb-4">
                    Our subscription terms ensure transparency and fairness:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Subscription fees are charged according to the selected plan</li>
                    <li>Automatic renewals can be cancelled at any time</li>
                    <li>Refunds are processed according to App Store policies</li>
                    <li>Price changes will be notified in advance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Limitation of Liability</h3>
                  <p className="mb-4">
                    While we strive for excellence, please note:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>The app is provided "as is" without warranties</li>
                    <li>We are not liable for any indirect damages</li>
                    <li>Service availability may vary</li>
                    <li>We reserve the right to modify features</li>
                  </ul>
                </div>

                <p className="mt-6">
                  We reserve the right to modify these terms at any time. Continued use of Floorvana constitutes acceptance of any changes. Users will be notified of significant updates.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-gray-500 text-sm">© 2025 Floorvana. All rights reserved.</p>
            <div className="mt-6 flex justify-center space-x-6">
              <button onClick={() => scrollToSection(privacyRef)} className="text-sm text-gray-500 hover:text-[#C7B469] transition-colors">Privacy</button>
              <button onClick={() => scrollToSection(termsRef)} className="text-sm text-gray-500 hover:text-[#C7B469] transition-colors">Terms</button>
              <a href="#contact" className="text-sm text-gray-500 hover:text-[#C7B469] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
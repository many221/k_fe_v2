import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  DollarSign,
  FileCheck,
  MapPin,
  Package,
  Receipt,
} from "lucide-react";
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { LoginPage } from "@/components/auth/LoginPage";
import { BetaPage } from "@/components/pages/BetaPage";
import logoWithText from '@/assets/logos/logo_with_text.png';
import logoK from '@/assets/logos/K_Logo_B.png';
import founderPhoto from '@/assets/images/founder_photo.jpg';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7ff] to-[#ffeedd]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center my-10 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-transparent bg-clip-text">
              Business Compliance Made Simple
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Never wonder about permits and licenses again. Get a clear roadmap
              for your business compliance in minutes.
            </p>
            <Link to="/beta">
              <Button className="bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white text-lg px-8 py-6">
                Join the Beta
              </Button>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Limited spots available for early access
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                "200+ Licensing Agencies within California",
                "90k+ Legal Jurisdictions",
                "150k+ Licensing Requirements",
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  <p className="font-semibold text-lg">{stat}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="min-h-screen flex items-center bg-white/90 backdrop-blur-lg shadow-lg my-10 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Your Business Compliance Navigator
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Karafan helps entrepreneurs and business owners save time and money
            by providing clear, actionable information on licenses, permits, and
            certifications needed to legally operate their business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Time",
                text: "Know processing times and approval timelines",
                Icon: Clock,
              },
              {
                title: "Cost",
                text: "Understand all fees and financial requirements",
                Icon: DollarSign,
              },
              {
                title: "Work",
                text: "Get a clear list of prerequisites and paperwork",
                Icon: FileCheck,
              },
            ].map(({ title, text, Icon }) => (
              <Card
                key={title}
                className="p-8 hover:scale-105 transition-transform"
              >
                <Icon className="w-12 h-12 text-[#9381ff] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#f8f7ff]/90 to-[#ffeedd]/90 backdrop-blur-lg shadow-lg my-10 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Three Simple Questions to Complete Compliance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                number: "1",
                question: "What do you sell?",
                description: "Tell us about your business and products",
                Icon: Package,
              },
              {
                number: "2",
                question: "Where are you located?",
                description: "We'll identify all relevant jurisdictions",
                Icon: MapPin,
              },
              {
                number: "3",
                question: "How are you selling?",
                description: "Get requirements specific to your business model",
                Icon: Receipt,
              },
            ].map(({ number, question, description, Icon }) => (
              <div key={number} className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] flex items-center justify-center text-white font-bold text-xl">
                  {number}
                </div>
                <Card className="p-8 pt-12">
                  <Icon className="w-12 h-12 text-[#9381ff] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{question}</h3>
                  <p className="text-gray-600">{description}</p>
                </Card>
              </div>
            ))}
          </div>

          <Card className="mt-12 p-6 bg-white/80 backdrop-blur-sm text-center">
            <p className="text-lg text-gray-700">
              Receive a comprehensive compliance roadmap tailored to your
              business
            </p>
          </Card>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="min-h-screen flex items-center bg-white/90 backdrop-blur-lg shadow-lg my-10 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Why Karafan Exists
          </h2>
          <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-[#9381ff]/10 to-[#b8b8ff]/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src={founderPhoto}
                alt="Abdurrahman Lee, founder of Karafan"
                className="w-48 h-48 rounded-full object-cover flex-shrink-0"
                style={{ objectPosition: '50% 20%' }}
              />
              <div>
                <p className="text-lg text-gray-700 mb-6">
                Hi, I'm Abdurrahman Lee, founder of Karafan. At 17, I started a coffee cart in San Francisco, moving from Dolores Park to Pier 39. Despite everyone loving our coffee – even the officers who'd shut us down – I kept getting stopped for the same reason: no permits. The time spent trying to navigate regulations could have been spent building the business instead.
                </p>
                <p className="text-lg text-gray-700">
                Discovering this wasn't just my struggle, but one shared by countless entrepreneurs, inspired me to build Karafan. Now we help business owners focus on their dreams, not paperwork.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section 
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#f8f7ff]/90 to-[#ffeedd]/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Business Compliance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the waitlist today and be the first to know when we launch
          </p>
          <Link to="/beta">
            <Button className="bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white text-lg px-8 py-6">
              Join the Beta
            </Button>
          </Link>
        </div>
      </section>
*/}
      {/* Footer */}
      <footer className="py-8 bg-white/90 backdrop-blur-lg shadow-lg border-t my-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src={logoK}
              alt="Karafan Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-600">
              With any questions please email me at{' '}
              <a href="mailto:al@karafan.app" className="text-[#9381ff] hover:text-[#b8b8ff]">
                al@karafan.app
              </a>
            </p>
            <p className="text-sm text-gray-500">
              © 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isAuthPage = ['/login', '/beta'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && (
        <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
            <Link to="/">
              <img 
                src={logoWithText}
                alt="Karafan Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/beta" element={<BetaPage />} />
      </Routes>
    </>
  );
}

export default App;

import { Card } from '@/components/ui/card';
import { MapPin, Package, Receipt } from 'lucide-react';

const steps = [
  { number: '1', question: 'What do you sell?', description: 'Tell us about your business and products', Icon: Package },
  { number: '2', question: 'Where are you located?', description: 'We will identify all relevant jurisdictions', Icon: MapPin },
  { number: '3', question: 'How are you selling?', description: 'Get requirements specific to your business model', Icon: Receipt },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f8f7ff] to-[#ffeedd]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Three Simple Questions to Complete Compliance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map(({ number, question, description, Icon }) => (
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
            Receive a comprehensive compliance roadmap tailored to your business
          </p>
        </Card>
      </div>
    </section>
  );
}
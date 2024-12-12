import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const stats = [
  '200+ Licensing Agencies within California',
  '90k+ Legal Jurisdictions',
  '150k+ Licensing Requirements',
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-transparent bg-clip-text">
          Business Compliance Made Simple
        </h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Never wonder about permits and licenses again. Get a clear roadmap for your business compliance in minutes.
        </p>
        <Button className="bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white text-lg px-8 py-6">
          Join the Beta
        </Button>
        <p className="mt-4 text-sm text-gray-500">Limited spots available for early access</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform">
              <p className="font-semibold text-lg">{stat}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Simplify Your Business Compliance?</h2>
        <p className="text-xl text-gray-600 mb-8">Join the waitlist today and be the first to know when we launch</p>
        <Button className="bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white text-lg px-8 py-6">
          Join the Beta
        </Button>
      </div>
    </section>
  );
}
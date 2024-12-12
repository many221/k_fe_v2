import { Card } from '@/components/ui/card';

export function FounderStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Why Karafan Exists</h2>
        <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-[#9381ff]/10 to-[#b8b8ff]/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-700 mb-6">
                "Hi I'm Abdurrahman Lee, founder of Karafan. At 17, I started a coffee cart in San Francisco, fueled by passion and big dreams. Despite customers loving our coffee – even the police officers who'd stop by – I kept getting shut down. From Dolores Park to Pier 39, every new location brought the same challenge: navigating a maze of permits and regulations that took more time than actually building my business.
                What started as my personal frustration became a clear mission when I discovered countless other entrepreneurs facing the same struggle. That's why I created Karafan – to give entrepreneurs the freedom to focus on building their dreams, not wrestling with paperwork."
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
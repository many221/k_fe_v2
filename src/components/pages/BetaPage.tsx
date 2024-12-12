import { BetaAccess } from '@/components/sections/BetaAccess';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BetaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7ff] to-[#ffeedd] pt-8 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <BetaAccess />
      </div>
    </div>
  );
}
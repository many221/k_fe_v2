import { Card } from '@/components/ui/card';
import { SignUpForm } from './SignUpForm';
import { Briefcase } from 'lucide-react';

export function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#f8f7ff] to-[#ffeedd]">
      <Card className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-transparent bg-clip-text">
            KARAFAN
          </h1>
          <p className="text-gray-600">
            Create your account to get started
          </p>
        </div>

        <SignUpForm />
      </Card>
    </div>
  );
}
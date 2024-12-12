import { Card } from '@/components/ui/card';
import { LoginForm } from './LoginForm';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function LoginPage() {
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
        
        <div className="flex justify-center">
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
                Sign in to your account to continue
              </p>
            </div>

            <LoginForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
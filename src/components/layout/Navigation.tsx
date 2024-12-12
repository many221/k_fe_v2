import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-transparent bg-clip-text">
          KARAFAN
        </h1>
        <div className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button className="bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
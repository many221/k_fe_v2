export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-transparent bg-clip-text mb-4 md:mb-0">
          KARAFAN
        </div>
        <a href="mailto:al@karafan.app" className="text-gray-600 hover:text-[#9381ff]">
          al@karafan.app
        </a>
      </div>
    </footer>
  );
}
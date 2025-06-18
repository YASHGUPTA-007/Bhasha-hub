import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Github } from "lucide-react";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0a0a0f]/80 backdrop-blur-xl h-16 lg:h-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6 lg:gap-10">
            <Link
              href="/"
              className="flex items-center gap-3 lg:gap-4 group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 lg:p-3 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Code2 className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 transform -rotate-100 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="relative">
                <span className="block text-lg lg:text-2xl font-serif bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                  BHASHA-HUB
                </span>
                <span className="hidden lg:block text-sm text-blue-400/60 font-medium">
                  Interactive Code Editor
                </span>
              </div>
            </Link>
                        <a
              href="https://github.com/YASHGUPTA-007/Bhasha-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Github/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-5 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-base font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>

            <SignedOut>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-5 py-2 rounded-lg border border-amber-500/20
                 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all 
                duration-300"
              >
                <Sparkles className="w-5 h-5 text-amber-400 hover:text-amber-300" />
                <span className="text-base font-medium text-amber-400/90 hover:text-amber-300">
                  Pro
                </span>
              </Link>
            </SignedOut>

            <div className="scale-110">
              <HeaderProfileBtn />
            </div>
          </div>

          {/* Mobile View Right Side (Sign In or Profile Btn) */}
          <div className="lg:hidden">
            <SignedIn>
              <HeaderProfileBtn />
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition"
              >
                Sign In
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;

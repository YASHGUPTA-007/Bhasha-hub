"use client";

import { useEffect, useState } from "react";
import { useUser, SignedIn } from "@clerk/nextjs";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Code2, Sparkles } from "lucide-react";

import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useUser();
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const [convexUser, setConvexUser] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchConvexUser = async () => {
      if (user?.id) {
        const result = await convex.query(api.users.getUser, {
          userId: user.id,
        });
        setConvexUser(result);
      }
    };
    fetchConvexUser();
  }, [user, convex]);

  const showProCTA = !user || !convexUser?.isPro;

  //MOBILE UI 
  if (isMobile) {
    return (
      <div className="relative z-10 w-full p-4 bg-[#0a0a0f]/80 backdrop-blur-xl rounded-lg">
        <div className="absolute top-2 left-2 z-50">
          <HeaderProfileBtn />
        </div>
        <div className="flex justify-center mt-10 mb-4">
          <Link href="/" className="flex flex-col items-center gap-1">
            <Code2 className="size-10 text-blue-400" />
            <span className="text-2xl font-serif bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
              BHASHA-HUB
            </span>
            <span className="text-xs text-blue-400/60 font-medium">
              pre-defined code runner
            </span>
          </Link>
        </div>

        {/* Snippets Link */}
        <Link
          href="/snippets"
          className="w-full block text-center py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
            border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg mb-3"
        >
          <Code2 className="inline-block w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Snippets</span>
        </Link>

        {/* Theme + Language */}
        <div className="flex justify-between gap-3 mb-2">
          <ThemeSelector />
          <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
        </div>

        {/*  Pro CTA below selectors when not signed in or not pro */}
        {showProCTA && (
          <Link
            href="/pricing"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-amber-500/20 hover:border-amber-500/40 
              bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
              transition-all duration-300 mb-3"
          >
            <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
            <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
              Pro
            </span>
          </Link>
        )}

        {/* Run Button (only when signed in) */}
        <div className="w-full flex justify-center mt-3">
          <SignedIn>
            <RunButton />
          </SignedIn>
        </div>
      </div>
    );
  }

  // DESKTOP UI 
  return (
    <div className="relative z-10 w-full">
      <div className="flex items-center lg:justify-between justify-center bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg">
        {/* Left: Logo + Snippets */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <Code2 className="size-8 text-blue-400" />
            <div className="flex flex-col">
              <span className="block text-2xl font-serif bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                BHASHA-HUB
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                pre-defined code runner
              </span>
            </div>
          </Link>

          {/* Snippets */}
          <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 
                hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            >
              <Code2 className="w-4 h-4 relative z-10" />
              <span className="text-sm font-medium relative z-10">
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Right: Theme, Lang, Pro, Run, Profile */}
        <div className="flex items-center gap-4">
          {/* Theme & Lang Selectors */}
          <div className="flex justify-between gap-3 mb-3">
            <div className="w-1/2 min-w-0">
              <ThemeSelector />
            </div>
            <div className="w-1/2 min-w-0">
              <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
            </div>
          </div>

          {/* ✅ Pro CTA below selectors when not signed in or not pro */}
          {showProCTA && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          )}

          {/* Run + Profile */}
          <SignedIn>
            <RunButton />
          </SignedIn>

          {/* Profile Button */}
          <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

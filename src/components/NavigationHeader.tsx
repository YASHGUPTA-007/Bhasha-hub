import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn";
import { SignedOut } from "@clerk/nextjs";
import { Code2, Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0a0a0f]/80 backdrop-blur-xl h-16 lg:h-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo (Responsive) */}
            <Link href="/" className="flex items-center gap-3 lg:gap-4 group relative">
              {/* Logo hover effect */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
              group-hover:opacity-100 transition-all duration-500 blur-xl"
              />

              {/* Logo */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 lg:p-3 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Code2 className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 transform -rotate-100 group-hover:rotate-0 transition-transform duration-500" />
              </div>

              {/* Title (Responsive) */}
              <div className="relative">
                <span className="block text-lg lg:text-2xl font-serif bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                  BHASHA-HUB
                </span>
                <span className="hidden lg:block text-sm text-blue-400/60 font-medium">
                  Interactive Code Editor
                </span>
              </div>
            </Link>
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

            {/* Enlarged Profile Button */}
            <div className="scale-110">
              <HeaderProfileBtn />
            </div>
          </div>

          {/* Mobile Menu */}
          <input type="checkbox" id="mobile-menu" className="hidden peer" />
          <label htmlFor="mobile-menu" className="lg:hidden cursor-pointer p-2 rounded-lg text-gray-300 hover:bg-gray-800">
            <Menu className="w-6 h-6 peer-checked:hidden" />
            <X className="w-6 h-6 hidden peer-checked:block" />
          </label>

          {/* Mobile Dropdown Menu */}
          <div
            className="absolute top-full left-0 w-full bg-[#0a0a0f] p-4 shadow-lg flex flex-col items-center gap-4 
            opacity-0 peer-checked:opacity-100 peer-checked:block transition-opacity duration-300 lg:hidden"
          >
            <Link href="/snippets" className="text-gray-300 hover:text-white">
              Snippets
            </Link>

            <SignedOut>
              <Link href="/pricing" className="text-amber-400 hover:text-amber-300">
                Pro
              </Link>
            </SignedOut>

            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;







































// import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn";
// import { SignedOut } from "@clerk/nextjs";
// import {  Code2, Sparkles } from "lucide-react";
// import Link from "next/link";

// function NavigationHeader() {
//   return (
//     <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0a0a0f]/80 backdrop-blur-xl h-20">
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="relative h-20 flex items-center justify-between">
//           <div className="flex items-center gap-10 justify-start">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-4 group relative">
//               {/* Logo hover effect */}
//               <div
//                 className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
//               group-hover:opacity-100 transition-all duration-500 blur-xl"
//               />
              
//               {/* Logo */}
//               <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-3 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
//                 <Code2 className="w-8 h-8 text-blue-400 transform -rotate-100 group-hover:rotate-0 transition-transform duration-500" />
//               </div>

//               <div className="relative">
//                 <span
//                   className="block text-2xl font-serif bg-gradient-to-r
//                  from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
//                 >
//                   BHASHA-HUB
//                 </span>
//                 <span className="block text-sm text-blue-400/60 font-medium">
//                   Interactive Code Editor
//                 </span>
//               </div>
//             </Link>

//             {/* Snippets Link */}
//             <Link
//               href="/snippets"
//               className="relative group flex items-center gap-2 px-5 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
//               border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
//               to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               />
//               <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-3 transition-transform" />
//               <span className="text-base font-medium relative z-10 group-hover:text-white transition-colors">
//                 Snippets
//               </span>
//             </Link>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-6">
//             <SignedOut>
//               <Link
//                 href="/pricing"
//                 className="flex items-center gap-2 px-5 py-2 rounded-lg border border-amber-500/20
//                  hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
//                 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all 
//                 duration-300"
//               >
//                 <Sparkles className="w-5 h-5 text-amber-400 hover:text-amber-300" />
//                 <span className="text-base font-medium text-amber-400/90 hover:text-amber-300">
//                   Pro
//                 </span>
//               </Link>
//             </SignedOut>

//             {/* Enlarged Profile Button */}
//             <div className="scale-110">
//               <HeaderProfileBtn />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavigationHeader;

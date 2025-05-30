import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import ProPlanView from "./_components/ProPlanView";
import NavigationHeader from "@/components/NavigationHeader";
import { ENTERPRISE_FEATURES, FEATURES } from "./_constants";
import { Star } from "lucide-react";
import FeatureCategory from "./_components/FeatureCategory";
import FeatureItem from "./_components/FeatureItem";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UpgradeButton from "./_components/UpgradeButton";
import LoginButton from "@/components/LoginButton";
import CanvasCursor from "@/components/CanvasCursor";
import Footer from "./_components/Footer";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { IconCloudMobile } from "@/components/magicui/icon-cloud-m";

const imageUrls = [
  "/bash.png",
  "/cpp.png",
  "/csharp.png",
  "/go.png",
  "/java.png",
  "/javascript.png",
  "/python.png",
  "/ruby.png",
  "/rust.png",
  "/swift.png",
  "/ts.png",
  "/typescript.png",
];

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Go",
  "C++",
  "Rust",
  "C#",
  "Ruby",
  "Swift",
];

async function PricingPage() {
  const user = await currentUser();
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  if (convexUser?.isPro) return <ProPlanView />;

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
      <NavigationHeader />

      {/* Main Content */}
      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 animate-glow" />
              <h1
                className="relative text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r
               from-gray-100 to-gray-300 text-transparent bg-clip-text mb-8 animate-glowing"
              >
                Elevate Your <br />
                Development Experience
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the next generation of developers with our professional suite
              of tools
            </p>
          </div>

          {/* Supported Languages Section */}
          <div className="flex flex-col items-center justify-center my-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Supported Languages
            </h2>
            {/* Mobile View */}
            {/* Mobile View */}
            <div className="w-full flex items-center justify-center md:hidden">
              <IconCloudMobile images={imageUrls} />
            </div>

            {/* Laptop/Desktop View */}
            <div className="w-full items-center justify-center hidden md:flex">
              <IconCloud images={imageUrls} />
            </div>
          </div>

          {/* Moving Language Marquee */}
          <div className="overflow-hidden whitespace-nowrap py-4 bg-[#12121a]">
            <div className="animate-marquee flex space-x-8 text-xl font-semibold text-blue-400">
              {languages.map((lang, index) => (
                <span key={index} className="px-4">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {ENTERPRISE_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] 
                 rounded-3xl p-8 hover:scale-[1.05] transition-all duration-300
                 flex flex-col items-center justify-center text-center shadow-lg
                 perspective-1000 hover:rotate-[2deg] hover:rotate-x-6 hover:rotate-y-6"
              >
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                   flex items-center justify-center mb-4 ring-1 ring-gray-800/60 
                   group-hover:ring-blue-500/20"
                >
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-medium text-white mb-2">
                  {feature.label}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10" />
            <div className="relative bg-[#12121a]/90 backdrop-blur-xl rounded-2xl">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div className="relative p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-gray-800/60 mb-6">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-4">
                    Lifetime Pro Access
                  </h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-2xl text-gray-400">₹</span>
                    <span className="text-6xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                      99
                    </span>
                    <span className="text-xl text-gray-400">one-time</span>
                  </div>
                  <p className="text-gray-400 text-lg">
                    Unlock the full potential of Bhasha Hub
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <FeatureCategory label="Development">
                    {FEATURES.development.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                  <FeatureCategory label="Collaboration">
                    {FEATURES.collaboration.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                  <FeatureCategory label="Deployment">
                    {FEATURES.deployment.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <SignedIn>
                    <UpgradeButton />
                  </SignedIn>
                  <SignedOut>
                    <LoginButton />
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CanvasCursor />
      <Footer />
    </div>
  );
}
export default PricingPage;

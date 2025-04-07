import NavigationHeader from "@/components/NavigationHeader";
import { ENTERPRISE_FEATURES, FEATURES } from "./_constants";
import CanvasCursor from "@/components/CanvasCursor";
import Footer from "./_components/Footer";
import { IconCloud } from "@/components/magicui/icon-cloud";


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

function About() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
      <NavigationHeader />

      {/* Main Content */}
      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 animate-glow" />
              <h1
                className="relative text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r
               from-gray-100 to-gray-300 text-transparent bg-clip-text mb-16 animate-glowing"
              >
                Bhasha-Hub <br />
                Your Route to an Elite Code World
              </h1>
            </div>
            <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
              Join the next generation of developers with our professional suite
              of tools
            </p>
          </div>

          {/* Supported Languages Section */}
          <div className="flex flex-col items-center justify-center my-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Supported Languages
            </h2>
            {/* Show IconCloud only on sm and above */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]">
                <IconCloud images={imageUrls} />
              </div>
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
        rounded-3xl p-8 transition-all duration-300 transform 
        flex flex-col items-center justify-center text-center 
        shadow-lg perspective-1000 
        hover:scale-105 hover:rotate-x-6 hover:rotate-y-6
        hover:shadow-[0_0_20px_rgba(0,162,255,0.4)]"
              >
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
          flex items-center justify-center mb-4 ring-1 ring-gray-800/60 
          group-hover:ring-blue-500/40 transition-all duration-300
          group-hover:shadow-[0_0_15px_rgba(0,162,255,0.6)]"
                >
                  <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-300 transition-all duration-300">
                  {feature.label}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CanvasCursor />
      <Footer />
    </div>
  );
}

export default About;

import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Role Badge */}
            <div className="inline-flex items-center mb-5 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Software Engineer · Full Stack Developer
            </div>

            {/* Heading */}
            <h1 className="mb-6">
              <span className="block text-gray-900 text-xl sm:text-2xl font-medium mb-3">
                Hi, I'm
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Aulia Ramadhani
              </span>
            </h1>

            {/* Main Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A Telecommunications Engineering graduate with hands-on experience
              in software engineering, full-stack development, system design,
              and backend development.
            </p>

            {/* Supporting Statement */}
            <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experienced in designing software systems and databases,
              developing APIs and web applications, integrating external
              services, and building AI-powered solutions with LLMs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="/Aulia-Ramadhani_Software-Engineer_CV.pdf"
                  download="Aulia-Ramadhani_Software-Engineer_CV.pdf"
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  System
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Design
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  Full-Stack
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Development
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  AI + LLM
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Integration
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src="/favicon.png"
                  alt="Aulia Ramadhani - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Full Stack Developer
            </div>
            
            <h1 className="mb-6">
              <span className="block text-gray-900 mb-2">Hi, I'm</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-900">
                Aulia Ramadhani
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A Full Stack Developer and final-year Telecommunications Engineering student focused on building user-centered, high-quality web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600 mt-1">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkzNjcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Aulia Ramadhani - Full Stack Developer"
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

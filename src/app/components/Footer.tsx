import { Mail, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      link: 'mailto:aulialily9888@gmail.com'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      link: 'https://github.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Aulia Ramadhani</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating user-centered, high-quality web applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:aulialily9888@gmail.com"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                aulialily9888@gmail.com
              </a>
              <p className="text-gray-400">
                Telkom University<br />
                Bandung, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Aulia Ramadhani. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

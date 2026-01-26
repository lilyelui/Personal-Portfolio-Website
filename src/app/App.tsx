import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { PortfolioSection } from '@/app/components/PortfolioSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { CredentialsSection } from '@/app/components/CredentialsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

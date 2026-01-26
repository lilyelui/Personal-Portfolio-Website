import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PortfolioSection() {
  const projects = [
    {
      title: 'SiJaga',
      description: 'RFID-based inventory and access control web application for community service equipment',
      problem: 'Managing inventory and access control for community service equipment was inefficient and lacked proper tracking.',
      role: 'Full Stack Developer - Led end-to-end development including UI/UX design, frontend implementation, and backend integration.',
      outcome: 'Delivered a comprehensive system that streamlined inventory management and improved security through RFID technology.',
      image: 'https://images.unsplash.com/photo-1767788215235-9a6f9be6a0b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSRklEJTIwdGVjaG5vbG9neSUyMGludmVudG9yeXxlbnwxfHx8fDE3Njk0MTU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'MySQL', 'RFID Integration'],
      featured: true
    },
    {
      title: 'Boostify',
      description: 'Attendance management system using face recognition technology',
      problem: 'Traditional attendance tracking was time-consuming and prone to proxy attendance issues.',
      role: 'Full Stack Developer - Designed user interface, implemented face recognition integration, and built the attendance tracking system.',
      outcome: 'Created an automated attendance system that reduced processing time by 80% and eliminated proxy attendance.',
      image: 'https://images.unsplash.com/photo-1639478411016-726027171e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcmVjb2duaXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTM5OTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
      featured: true
    },
    {
      title: 'New Alista',
      description: 'Warehouse Management System (WMS) for construction operations',
      problem: 'Construction warehouse operations lacked proper tracking and inventory management capabilities.',
      role: 'Full Stack Developer Intern - Contributed to UI design, implemented warehouse tracking features, and optimized database queries.',
      outcome: 'Developed a scalable WMS that improved inventory accuracy and reduced operational overhead for construction projects.',
      image: 'https://images.unsplash.com/photo-1768796373634-db43bfd5f064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc2OTMzMDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A selection of projects showcasing my skills in full-stack development and UI/UX design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Problem:</span>
                    <p className="text-gray-600 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Role:</span>
                    <p className="text-gray-600 mt-1">{project.role}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Outcome:</span>
                    <p className="text-gray-600 mt-1">{project.outcome}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

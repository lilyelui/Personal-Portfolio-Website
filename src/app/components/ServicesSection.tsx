import { Palette, Code, Users, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces through wireframing, prototyping, and user-centered design principles.',
      features: [
        'Wireframing & Prototyping',
        'User Research & Testing',
        'Interface Design',
        'Design Systems'
      ],
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Application Development',
      description: 'Building robust, scalable web applications with modern technologies and best practices for both frontend and backend.',
      features: [
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'Database Design'
      ],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Custom Solutions',
      description: 'Developing tailored web systems for specific business needs with focus on usability, performance, and scalability.',
      features: [
        'Requirements Analysis',
        'System Architecture',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      color: 'bg-green-50 text-green-700'
    }
  ];

  const idealClients = [
    {
      title: 'Startups',
      description: 'Launch your MVP with clean, user-friendly interfaces and solid technical foundation'
    },
    {
      title: 'Academic Institutions',
      description: 'Build educational platforms and internal systems focused on usability and accessibility'
    },
    {
      title: 'Enterprise Teams',
      description: 'Develop internal tools and systems that improve workflow and operational efficiency'
    },
    {
      title: 'Organizations',
      description: 'Create custom web systems tailored to specific organizational needs and requirements'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">What I Offer</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive web development services from design to deployment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex p-4 rounded-lg ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ideal Clients */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="mb-4 text-gray-900">Ideal Clients</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I work best with clients who value user experience, clean code, and collaborative development
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h4 className="text-lg mb-2 text-gray-900">{client.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

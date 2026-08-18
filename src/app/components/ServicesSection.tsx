import {
  Code2,
  Database,
  BrainCircuit,
  Workflow,
  TestTube2,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Software Development",
      description:
        "Designing and developing maintainable software applications with structured architecture, backend logic, API integration, and practical problem-solving.",
      features: [
        "Full Stack Development",
        "Backend Development",
        "REST API Integration",
        "Object-Oriented Programming",
      ],
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "System & Database Design",
      description:
        "Translating system requirements into structured designs and data models to support reliable and maintainable software implementation.",
      features: [
        "ERD & Data Modeling",
        "DFD & Flowchart",
        "UML Diagrams",
        "SQL & Database Design",
      ],
      color: "bg-green-50 text-green-700",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "AI & Data-Driven Solutions",
      description:
        "Integrating AI and data processing techniques into software applications to support intelligent analysis, automation, and decision-making.",
      features: [
        "Python Programming",
        "LLM Integration",
        "Data Processing & Analysis",
        "AI-Based Applications",
      ],
      color: "bg-purple-50 text-purple-700",
    },
  ];

  const engineeringFocus = [
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "System Design",
      description:
        "Analyzing requirements and designing system workflows, data structures, and component interactions before implementation.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Data & Integration",
      description:
        "Designing databases and integrating APIs, external services, and multiple data sources into software systems.",
    },
    {
      icon: <TestTube2 className="h-5 w-5" />,
      title: "Testing & Quality",
      description:
        "Testing and debugging software components to identify issues and improve system reliability and functionality.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Problem Solving",
      description:
        "Breaking down technical requirements into structured solutions and implementing them through clean and maintainable code.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Technical Expertise</h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600">
            Software engineering capabilities developed through hands-on
            experience in system design, application development, backend
            engineering, databases, and AI-driven applications.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`inline-flex p-4 rounded-lg ${service.color} mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              <h3 className="mb-4 text-gray-900">{service.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engineering Approach */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="mb-4 text-gray-900">Engineering Approach</h3>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining structured system design, software development,
              integration, and testing to build reliable and maintainable
              solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringFocus.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-700 mb-4">
                  {item.icon}

                  <h4 className="text-lg text-gray-900">{item.title}</h4>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Code,
  Database,
  Layers,
  Terminal,
  BrainCircuit,
  Wrench,
  Workflow,
} from "lucide-react";

export function AboutSection() {
  const skills = {
    languages: ["Python", "SQL", "JavaScript", "TypeScript", "PHP", "C/C++"],

    systemDesign: [
      "ERD",
      "DFD",
      "Flowchart",
      "UML",
      "Use Case Diagram",
      "Activity Diagram",
      "Sequence Diagram",
    ],

    frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],

    backend: [
      "Laravel",
      "FastAPI",
      "Express.js",
      "Node.js",
      "Hono.js",
      "REST API",
    ],

    database: ["MySQL", "PostgreSQL", "Supabase"],

    aiData: [
      "LLM Integration",
      "Data Processing",
      "Cyber Threat Intelligence",
      "Face Recognition Integration",
    ],

    tools: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "Postman",
      "DBeaver",
      "MySQL Workbench",
      "Figma",
      "Visual Studio Code",
    ],
  };

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: skills.languages,
      color: "bg-blue-50 text-blue-700",
    },

    {
      icon: <Workflow className="h-6 w-6" />,
      title: "System Analysis & Design",
      skills: skills.systemDesign,
      color: "bg-cyan-50 text-cyan-700",
    },

    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Backend & API",
      skills: skills.backend,
      color: "bg-green-50 text-green-700",
    },

    {
      icon: <Database className="h-6 w-6" />,
      title: "Database",
      skills: skills.database,
      color: "bg-purple-50 text-purple-700",
    },

    {
      icon: <Layers className="h-6 w-6" />,
      title: "Frontend Development",
      skills: skills.frontend,
      color: "bg-indigo-50 text-indigo-700",
    },

    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI & Data",
      skills: skills.aiData,
      color: "bg-orange-50 text-orange-700",
    },

    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      skills: skills.tools,
      color: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">About Me</h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600">
            Software engineer with hands-on experience in system design,
            full-stack development, backend engineering, database design, and
            AI-powered applications.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Who I Am */}
          <div>
            <h3 className="mb-6 text-gray-900">Who I Am</h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a Telecommunications Engineering graduate from Telkom
                University with hands-on experience in software development,
                system analysis and design, backend development, API
                integration, and database-driven applications.
              </p>

              <p>
                I have experience working across different stages of software
                development, from understanding requirements and designing
                system workflows to implementing frontend and backend
                functionality, integrating APIs, managing databases, and testing
                software components.
              </p>

              <p>
                In my projects, I have developed system designs using ERD, DFD,
                flowcharts, and UML diagrams, including Use Case, Activity, and
                Sequence Diagrams. I have also worked with AI-powered
                applications, including integrating a Large Language Model (LLM)
                into the Cyber Fusion platform to support contextual threat
                analysis.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
                Areas of Interest
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Software Engineering",
                  "System Design",
                  "Backend Development",
                  "Database Engineering",
                  "System Integration",
                  "AI & LLM",
                  "Data Processing",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background & Experience */}
          <div>
            <h3 className="mb-6 text-gray-900">Background & Experience</h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My experience spans professional software development, research,
                and laboratory-based projects. I have worked as a Full Stack Web
                Developer at PT Telkom Akses and as a Research Assistant at the
                Cyber Physical System Laboratory.
              </p>

              <p>
                Through these experiences, I have contributed to enterprise
                applications, warehouse management systems, equipment management
                systems, attendance applications, and cybersecurity platforms.
              </p>

              <p>
                My responsibilities have included system analysis and design,
                database modeling, frontend and backend implementation, API
                integration, external service integration, testing, debugging,
                and system integration.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-5 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Layers className="h-5 w-5" />

                  <span className="font-medium">Specialization</span>
                </div>

                <p className="text-sm text-blue-900">
                  Software & Full-Stack Development
                </p>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-purple-700 mb-2">
                  <BrainCircuit className="h-5 w-5" />

                  <span className="font-medium">Focus</span>
                </div>

                <p className="text-sm text-purple-900">
                  System Design & AI Integration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="mb-4 text-gray-900">Skills & Technologies</h3>

            <p className="text-gray-600">
              Technologies, engineering practices, and tools I use to analyze,
              design, develop, integrate, and test software systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}
                >
                  {category.icon}
                </div>

                <h4 className="mb-4 text-gray-900">{category.title}</h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

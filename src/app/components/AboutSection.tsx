import { Code, Palette, Database, Layers, Terminal, Figma } from 'lucide-react';

export function AboutSection() {
  const skills = {
    frontend: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js'
    ],
    backend: [
      'Node.js',
      'Express.js',
      'Laravel',
      'FastAPI',
      'PHP',
      'Python'
    ],
    tools: [
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'Postman',
      'Figma',
      'MySQL Workbench',
      'DBeaver'
    ]
  };

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Frontend Development',
      skills: skills.frontend,
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: 'Backend Development',
      skills: skills.backend,
      color: 'bg-green-50 text-green-700'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database & Tools',
      skills: skills.tools,
      color: 'bg-purple-50 text-purple-700'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Get to know more about my background, experience, and skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Bio */}
          <div>
            <h3 className="mb-6 text-gray-900">Who I Am</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Full Stack Developer and final-year Telecommunications Engineering student at Telkom University. Experienced in building web-based systems with a strong emphasis on UI/UX design, usability, and performance.
              </p>
              <p>
                Skilled in translating user needs into intuitive interfaces and functional digital solutions. Passionate about creating user-centered products through thoughtful design and clean implementation.
              </p>
            </div>

            {/* Interest Areas */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm uppercase tracking-wide text-gray-700 mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'System Architecture', 'User-Centered Problem Solving'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="mb-6 text-gray-900">Background & Experience</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hands-on experience as a Research Assistant, Practicum Assistant, and Full Stack Developer Intern. Involved in designing and developing academic platforms, internal systems, and enterprise web applications with a focus on user experience.
              </p>
              <p>
                Actively contributed to UI layout, interaction flow, and usability improvements across multiple projects. Comfortable collaborating with cross-functional teams and taking leadership roles when needed.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Layers className="h-5 w-5" />
                  <span className="font-medium">Specialization</span>
                </div>
                <p className="text-sm text-blue-900">Full Stack Development</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-purple-700 mb-2">
                  <Palette className="h-5 w-5" />
                  <span className="font-medium">Focus</span>
                </div>
                <p className="text-sm text-purple-900">UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-center mb-12 text-gray-900">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h4 className="mb-4 text-gray-900">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
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

import { Briefcase, Award, GraduationCap } from 'lucide-react';

export function CredentialsSection() {
  const experiences = [
    {
      role: 'Research Assistant',
      organization: 'Cyber Physical System Laboratory',
      period: '2023 - Present',
      description: 'Supporting research projects and developing web-based systems for laboratory operations'
    },
    {
      role: 'Full Stack Developer Intern',
      organization: 'PT Telkom Akses',
      period: '2024',
      description: 'Developed enterprise web applications and contributed to UI/UX improvements'
    },
    {
      role: 'Practicum Assistant',
      organization: 'Basic Computing Laboratory',
      period: '2022 - 2023',
      description: 'Assisted students in learning programming fundamentals and web development'
    }
  ];

  const certificates = [
    'Fundamental UI Design',
    'Fundamental UX Design'
  ];

  const awards = [
    {
      title: 'Silver Medal',
      event: 'Advanced Science Olympiad',
      description: 'Recognition for excellence in scientific problem-solving'
    },
    {
      title: 'Silver Medal',
      event: 'English Grammar Olympiad',
      description: 'Achievement in English language proficiency'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Experience & Credentials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Professional experience, certifications, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-gray-900">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h4 className="text-lg text-gray-900">{exp.role}</h4>
                      <p className="text-blue-600 font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Awards */}
          <div className="space-y-8">
            {/* Certificates */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-gray-900">Certificates</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Award className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-gray-900">Awards</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">{award.title}</h4>
                        <p className="text-sm text-purple-600 mb-1">{award.event}</p>
                        <p className="text-xs text-gray-600">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

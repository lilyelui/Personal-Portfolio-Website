import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const openEmail = () => {
    const email = "aulialily9888@gmail.com";
    const subject = encodeURIComponent("Software Engineer Opportunity");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile → use email handler
      window.location.href = `mailto:${email}?subject=${subject}`;
    } else {
      // Desktop → open Gmail Compose
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
        "_blank",
      );
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "aulialily9888@gmail.com",
      type: "email",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      type: "external",
      link: "https://www.linkedin.com/in/aulia-ramadhani-54b8272a2",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "View GitHub Profile",
      type: "external",
      link: "https://github.com/lilyelui",
      color: "bg-gray-50 text-gray-700",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Let's Work Together</h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-gray-900 text-center">Get in Touch</h3>

            <p className="text-gray-600 mb-8 leading-relaxed text-center">
              Feel free to reach out through any of these channels. I'm always
              open to discussing software engineering opportunities, projects,
              and potential collaborations.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                if (info.type === "email") {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={openEmail}
                      className="w-full flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group text-left"
                    >
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-lg ${info.color} group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>

                      {/* Information */}
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {info.label}
                        </p>

                        <p className="text-gray-900 font-medium">
                          {info.value}
                        </p>
                      </div>
                    </button>
                  );
                }

                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-lg ${info.color} group-hover:scale-110 transition-transform`}
                    >
                      {info.icon}
                    </div>

                    {/* Information */}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>

                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-900 mb-2">
                Current Availability
              </h4>

              <p className="text-sm text-blue-700">
                Open to software engineering opportunities and full-time
                positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

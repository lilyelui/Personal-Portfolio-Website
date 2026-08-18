import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

type GalleryCategory = {
  id: string;
  label: string;
  images: ProjectImage[];
};

type ProjectImage = {
  src: string;
  title: string;
  description: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  problem: string;
  contribution: string;
  technologies: string[];
  image: string;
  featured: boolean;
  github?: string;
  demo?: string;
  categories: GalleryCategory[];
};

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("threat-analysis");

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  /* =========================================================
     PROJECT DATA
  ========================================================= */

  const projects: Project[] = [
    /* =======================================================
     CYBER FUSION
  ======================================================== */

    {
      title: "Cyber Fusion",
      subtitle: "Cyber Threat Intelligence & Analysis Platform",

      description:
        "A Cyber Threat Intelligence platform that integrates multiple intelligence sources to analyze and correlate Indicators of Compromise (IoCs), assess threat levels, and provide AI-assisted contextual threat analysis.",

      role: "Full Stack Developer",

      problem:
        "Threat intelligence analysis required information from multiple sources to be collected, compared, and correlated before determining the overall threat level of an Indicator of Compromise (IoC). This created a need for an integrated platform that could consolidate intelligence and support a structured threat analysis workflow.",

      contribution:
        "Contributed to system analysis and design using ERD, DFD, Flowchart, Use Case, Activity, and Sequence Diagrams. Developed frontend and backend components, integrated VirusTotal, AbuseIPDB, and MISP APIs, implemented multi-source IoC processing and threat correlation, incorporated historical analysis into the threat assessment process, integrated an LLM for contextual threat analysis, and containerized the application environment using Docker.",
      technologies: [
        "React",
        "Node.js",
        "REST API",
        "Docker",
        "LLM",
        "VirusTotal",
        "AbuseIPDB",
        "MISP",
      ],

      image: "/projects/cyber-fusion/threat-analysis.png",

      featured: true,

      github: "",
      demo: "",

      categories: [
        /* =================================================
         THREAT ANALYSIS - 7 IMAGES
      ================================================== */

        {
          id: "threat-analysis",
          label: "Threat Analysis",

          images: [
            {
              src: "/projects/cyber-fusion/signin.png",

              title: "Authentication - Sign In",

              description:
                "Sign-in interface for authenticated users to securely access the Cyber Fusion platform.",
            },
            {
              src: "/projects/cyber-fusion/signup.png",

              title: "Authentication - Sign Up",

              description:
                "Registration interface for creating a new user account to access the Cyber Fusion platform.",
            },
            {
              src: "/projects/cyber-fusion/threat-analysis.png",

              title: "Threat Analysis - Threat Level and Alerts",

              description:
                "Main threat analysis dashboard displaying the analyzed indicator, overall threat level, total security vendor detections, and high- and medium-severity alert statistics.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis2.png",

              title:
                "Threat Analysis - Threat Charts and VirusTotal Intelligence",

              description:
                "Threat analysis interface presenting the distribution of malicious, suspicious, harmless, and undetected results through visual charts, together with detailed VirusTotal intelligence for the analyzed indicator.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis3.png",

              title: "Threat Analysis - VirusTotal Security Vendor Analysis",

              description:
                "Detailed VirusTotal security vendor analysis showing detection results, vendor names, threat categories, and classifications associated with the analyzed indicator.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis4.png",

              title:
                "Threat Analysis - AbuseIPDB IP Reputation Analysis and MISP Threat Intelligence",

              description:
                "Combined threat intelligence view presenting IP reputation information from AbuseIPDB and related intelligence from MISP, including abuse confidence, reports, threat level, and matched threat intelligence.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis5.png",

              title: "Threat Analysis - Threat Correlation Engine",

              description:
                "Threat correlation interface combining intelligence from VirusTotal, AbuseIPDB, MISP, and historical analysis to calculate a weighted confidence score and support the overall threat assessment.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis6.png",

              title: "Threat Analysis - Recommended Mitigation Actions",

              description:
                "Threat response interface presenting recommended mitigation actions based on the identified threat, including relevant MITRE ATT&CK techniques and actionable mitigation steps.",
            },

            {
              src: "/projects/cyber-fusion/threat-analysis7.png",

              title: "Threat Analysis - AI-Generated Analysis Report",

              description:
                "AI-assisted threat intelligence report generated through the integrated LLM, consolidating analysis results into an executive summary, detection information, abuse activity, threat correlations, vulnerability exposure, and overall risk assessment.",
            },
          ],
        },

        /* =================================================
         HISTORY
      ================================================== */

        {
          id: "history",
          label: "History",

          images: [
            {
              src: "/projects/cyber-fusion/history.png",

              title: "Threat Analysis History",

              description:
                "History interface for reviewing previously performed IoC analyses and accessing their corresponding threat assessment results.",
            },
          ],
        },

        /* =================================================
         ADMIN
      ================================================== */

        {
          id: "admin",
          label: "Admin",

          images: [
            {
              src: "/projects/cyber-fusion/admin.png",

              title: "User Management",

              description:
                "Administrative interface for managing user accounts, access, and user-related information within the Cyber Fusion platform.",
            },

            {
              src: "/projects/cyber-fusion/admin2.png",

              title: "Activity Logs",

              description:
                "Administrative interface for viewing and managing system activity logs and user actions.",
            },
          ],
        },

        /* =================================================
         SETTINGS
      ================================================== */

        {
          id: "settings",
          label: "Settings",

          images: [
            {
              src: "/projects/cyber-fusion/settings.png",

              title: "System Settings",

              description:
                "Application settings interface for configuring system preferences and related application configurations.",
            },
          ],
        },
      ],
    },

    /* =======================================================
     ALISTA
  ======================================================== */

    {
      title: "New Alista",
      subtitle: "Warehouse Management System",

      description:
        "A Warehouse Management System (WMS) developed to support material reservation, approval, and warehouse management workflows for construction operations.",

      role: "Full Stack Developer Intern",

      problem:
        "Material reservation and approval processes required structured workflows to manage requests, approvals, and reservation data efficiently within warehouse operations.",

      contribution:
        "Contributed to database and system design, including Entity Relationship Diagram (ERD) development. Developed the Reservation module, implemented OTP authentication using Laravel and the Service-Repository Pattern, integrated the Telegram Bot API, performed SQL database operations, and conducted API testing using Postman.",

      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "SQL",
        "Telegram Bot API",
        "Postman",
        "Git",
      ],

      image: "/projects/alista/login.png",

      featured: true,

      github: "",
      demo: "",

      categories: [
        {
          id: "alista",
          label: "Project Screenshots",

          images: [
            {
              src: "/projects/alista/login.png",

              title: "Authentication",

              description:
                "Authentication interface for securely accessing the New Alista Warehouse Management System.",
            },
          ],
        },
      ],
    },

    /* =======================================================
       SIJAGA
    ======================================================== */

    {
      title: "SiJaga",
      subtitle: "Smart Equipment Management System",

      description:
        "A web application for managing equipment used in community service activities with RFID-based inventory tracking and access control.",

      role: "Frontend Developer and UI/UX Designer",

      problem:
        "Equipment management required a centralized system for inventory tracking and access control.",

      contribution:
        "Developed responsive interfaces using Next.js, integrated frontend components with backend REST APIs, and implemented RFID-based equipment tracking and access control.",

      technologies: ["Next.js", "REST API", "RFID", "Authentication"],

      image: "/projects/sijaga/beranda.png",

      featured: false,

      github: "",
      demo: "",

      categories: [
        {
          id: "sijaga",
          label: "Project Screenshots",

          images: [
            {
              src: "/projects/sijaga/beranda.png",

              title: "SiJaga Homepage",

              description:
                "The SiJaga homepage introduces the system for storing and protecting valuable items and documents using technology-based security features.",
            },

            {
              src: "/projects/sijaga/fitur.png",

              title: "SiJaga Security Features",

              description:
                "A page showcasing SiJaga's main security features, including sensors for monitoring the locker, an automatic locking system, RFID card access, and LED indicators.",
            },

            {
              src: "/projects/sijaga/fitur2.png",

              title: "How SiJaga Works",

              description:
                "A page explaining the SiJaga usage workflow, from scanning an access card, storing items, and locking the locker to monitoring usage history through the dashboard.",
            },

            {
              src: "/projects/sijaga/footer.png",

              title: "SiJaga Information and Contact",

              description:
                "The SiJaga website footer containing system information, the Sukapura Village Office address, contact information, and social media links for further assistance and information.",
            },

            {
              src: "/projects/sijaga/login.png",

              title: "SiJaga Login",

              description:
                "The SiJaga login page providing user authentication through email and password to access the locker management and monitoring system.",
            },
          ],
        },
      ],
    },

    /* =======================================================
       BOOSTIFY
    ======================================================== */

    {
      title: "Boostify",
      subtitle: "Face Recognition Attendance System",

      description:
        "A web-based attendance management application integrating face recognition technology for attendance recording and monitoring.",

      role: "Frontend Developer and UI/UX Designer",

      problem:
        "Attendance management required an automated system for recording and monitoring attendance.",

      contribution:
        "Developed the web interface using Next.js and integrated backend REST APIs for attendance processing, authentication, and face recognition services.",

      technologies: [
        "Next.js",
        "REST API",
        "Face Recognition",
        "Authentication",
      ],

      image: "/projects/boostify/beranda.png",

      featured: false,

      github: "",
      demo: "",

      categories: [
        {
          id: "boostify",
          label: "Project Screenshots",

          images: [
            {
              src: "/projects/boostify/beranda.png",
              title: "Boostify Homepage",
              description:
                "The main landing page introducing Boostify, its smile-based facial recognition attendance system, and its core purpose of creating a more positive and productive environment.",
            },

            {
              src: "/projects/boostify/about.png",
              title: "Boostify Features",
              description:
                "The features section explaining how Boostify works, including the attendance process, device setup, TFT display, web integration, and speaker functionality.",
            },

            {
              src: "/projects/boostify/about2.png",
              title: "Why Choose Boostify?",
              description:
                "An overview of Boostify's key benefits, including improved happiness and productivity, high security through anti-spoofing, real-time attendance monitoring, and positive feedback.",
            },

            {
              src: "/projects/boostify/ourteam.png",
              title: "Research Division 22",
              description:
                "The team page presenting Research Division 22 and its Backend and Frontend team members, along with links to their social media profiles.",
            },

            {
              src: "/projects/boostify/ourteam2.png",
              title: "Machine Learning & IoT Team",
              description:
                "A section showcasing the Machine Learning & IoT team members responsible for the machine learning and IoT aspects of the Boostify project.",
            },

            {
              src: "/projects/boostify/login.png",
              title: "Boostify Login",
              description:
                "The login interface for accessing the Boostify attendance system using an Assistant Code and password, with an option to recover a forgotten password.",
            },
          ],
        },
      ],
    },
  ];

  /* =========================================================
     CURRENT CATEGORY
  ========================================================= */

  const currentCategory =
    selectedProject?.categories.find(
      (category) => category.id === selectedCategory,
    ) ?? selectedProject?.categories[0];

  const currentImages = currentCategory?.images ?? [];

  const currentImage = currentImages[selectedImageIndex];

  /* =========================================================
     OPEN PROJECT
  ========================================================= */

  const openProject = (project: Project) => {
    setSelectedProject(project);

    const firstCategory = project.categories[0];

    setSelectedCategory(firstCategory.id);
    setSelectedImageIndex(0);

    document.body.style.overflow = "hidden";
  };

  /* =========================================================
     CLOSE PROJECT
  ========================================================= */

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedCategory("threat-analysis");
    setSelectedImageIndex(0);

    document.body.style.overflow = "";
  };

  /* =========================================================
     CHANGE CATEGORY
  ========================================================= */

  const changeCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedImageIndex(0);
  };

  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  const nextImage = () => {
    if (!currentImages.length) return;

    setSelectedImageIndex((current) =>
      current === currentImages.length - 1 ? 0 : current + 1,
    );
  };

  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  const previousImage = () => {
    if (!currentImages.length) return;

    setSelectedImageIndex((current) =>
      current === 0 ? currentImages.length - 1 : current - 1,
    );
  };

  /* =========================================================
     KEYBOARD
  ========================================================= */

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedProject, selectedCategory, selectedImageIndex]);

  /* =========================================================
     PORTFOLIO
  ========================================================= */

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Selected Work
            </div>

            <h2 className="mb-4 text-gray-900">Featured Projects</h2>

            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />

            <p className="text-lg text-gray-600 leading-relaxed">
              A selection of software projects demonstrating my experience in
              full-stack development, backend engineering, API integration, data
              processing, and AI-powered applications.
            </p>
          </div>

          {/* =================================================
              CYBER FUSION
          ================================================== */}

          {projects
            .filter((project) => project.title === "Cyber Fusion")
            .map((project) => (
              <div
                key={project.title}
                className="mb-10 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE */}

                  <div className="relative min-h-[320px] lg:min-h-[520px] overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-5 left-5 px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      Featured Project
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="text-sm font-medium text-blue-600 mb-2">
                      {project.role}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-base font-medium text-gray-500 mb-5">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        My Contribution
                      </h4>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>

                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        onClick={() => openProject(project)}
                        className="group"
                      >
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* =================================================
              OTHER PROJECTS
          ================================================== */}

          <div className="space-y-10">
            {projects
              .filter((project) => project.title !== "Cyber Fusion")
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGE */}

                    <div className="relative min-h-[300px] lg:min-h-[430px] overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="text-sm font-medium text-blue-600 mb-2">
                        {project.role}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-base font-medium text-gray-500 mb-5">
                        {project.subtitle}
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          My Contribution
                        </h4>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>

                      {/* TECHNOLOGIES */}

                      <div className="flex flex-wrap gap-2 mb-7">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          onClick={() => openProject(project)}
                          className="group"
                        >
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        {project.github && (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}

                        {project.demo && (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA */}

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Interested in my work or want to discuss a project?
            </p>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");

                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}

      {selectedProject && currentCategory && currentImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                  {selectedProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closeProject}
                className="ml-4 flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* =================================================
                BODY
            ================================================== */}

            <div className="overflow-y-auto max-h-[calc(95vh-73px)]">
              <div className="p-4 sm:p-6 md:p-8">
                {/* =================================================
                    CATEGORY TABS
                ================================================== */}

                <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
                  {selectedProject.categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => changeCategory(category.id)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}

                      {category.images.length > 1 && (
                        <span
                          className={`ml-2 text-xs ${
                            selectedCategory === category.id
                              ? "text-blue-100"
                              : "text-gray-400"
                          }`}
                        >
                          {category.images.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* =================================================
                    MAIN IMAGE
                ================================================== */}

                <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-5">
                  <div className="relative aspect-video">
                    <ImageWithFallback
                      src={currentImage.src}
                      alt={currentImage.title}
                      className="w-full h-full object-contain"
                    />

                    {/* PREVIOUS */}

                    {currentImages.length > 1 && (
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                    )}

                    {/* NEXT */}

                    {currentImages.length > 1 && (
                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    )}

                    {/* COUNTER */}

                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/70 text-white text-xs rounded-full">
                      {selectedImageIndex + 1} / {currentImages.length}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    IMAGE DESCRIPTION
                ================================================== */}

                <div className="mb-7">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {currentImage.title}
                    </h4>

                    <span className="text-xs font-medium text-blue-600 whitespace-nowrap">
                      {currentCategory.label}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {currentImage.description}
                  </p>
                </div>

                {/* =================================================
                    THUMBNAILS
                ================================================== */}

                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {currentCategory.label}
                    </h4>

                    {currentImages.length > 1 && (
                      <span className="text-xs text-gray-500">
                        {currentImages.length} screenshots
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {currentImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index
                            ? "border-blue-600 ring-2 ring-blue-100"
                            : "border-transparent hover:border-gray-300"
                        }`}
                      >
                        <ImageWithFallback
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />

                        {/* NUMBER */}

                        <div className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 bg-black/70 text-white text-[10px] rounded">
                          {index + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    PROJECT INFORMATION
                ================================================== */}

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                  {/* LEFT */}

                  <div>
                    <span className="text-sm font-medium text-blue-600">
                      {selectedProject.role}
                    </span>

                    <h4 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      {selectedProject.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                      Problem
                    </h5>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* RIGHT */}

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      My Contribution
                    </h5>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {selectedProject.contribution}
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-3">
                      Technologies
                    </h5>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    LINKS
                ================================================== */}

                {(selectedProject.github || selectedProject.demo) && (
                  <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-gray-200">
                    {selectedProject.github && (
                      <Button variant="outline" asChild>
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}

                    {selectedProject.demo && (
                      <Button asChild>
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

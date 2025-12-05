import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Construction Management Platform",
    description:
      "Built responsive, modular UI screens for a construction SaaS platform using React.js and Tailwind CSS. Developed interactive forms, dashboards, procurement modules (PR, RFQ, PO, GRN, Vendor Management, Work Orders), and optimized layouts for all screen sizes.",
    image: "/projects/project4.png",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI", "Lucide Icons"],
    demoUrl: "https://construction-orpin-ten.vercel.app/",
    githubUrl: "https://github.com/bhanuahlawat/Construction-",
  },

  {
    id: 2,
    title: "Gathers & Grand – Event Organizer Platform",
    description:
      "A modern event management platform with animated UI, responsive layouts, dynamic pricing carousel for mobile, and clean booking workflow. Built with React and Tailwind CSS for a smooth, elegant experience.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://gather-grand.vercel.app/",
    githubUrl: "https://github.com/bhanuahlawat/gather-grand",
  },

  {
    id: 1,
    title: "Netflix Page",
    description:
      "A sleek and responsive Netflix-inspired webpage built with HTML, CSS, JavaScript, and React. It features a modern UI with movie thumbnails, hover effects, and responsive layout — mimicking the look and feel of the original platform.",
    image: "/projects/project2.png",
    tags: ["React.js", "TailwindCss", "JavaScript"],
    demoUrl: "https://netflix-page-lake.vercel.app/",
    githubUrl: "https://github.com/bhanuahlawat/Netflix-new",
  },

  

  {
    id: 4,
    title: "Danveer",
    description:
      "A clean and responsive platform that enables users to donate books easily. Built with HTML, CSS, and JavaScript, it promotes knowledge sharing and supports education through effortless book contributions.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://bhanuahlawat.github.io/Danveer/",
    githubUrl: "https://github.com/bhanuahlawat/Danveer",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="px-6 md:px-12 lg:px-24 py-20 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-amber-100">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/bhanuahlawat"
          >
            Check My Github
          </a>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Zid Store Management",
    description: "Managed product uploads, inventory sync, and API integrations for a corporate-level Zid store.",
    tools: ["Zid", "OpenCart", "SEO", "Inventory"],
    link: "#",
  },
  {
    title: "AWS + HestiaCP Server Setup",
    description: "Deployed scalable Linux servers using AWS Lightsail with HestiaCP and secured WordPress hosting.",
    tools: ["AWS", "Linux", "HestiaCP", "SSL"],
    link: "#",
  },
  {
    title: "CCTV Remote Access",
    description: "Configured and secured DVR/NVR systems for multi-site video monitoring using port forwarding and DDNS.",
    tools: ["DVR", "NVR", "Remote Access"],
    link: "#",
  },
  {
    title: "WordPress & OpenCart Setup",
    description: "Setup & customized CMS sites for eCommerce clients with custom themes and backups.",
    tools: ["WordPress", "OpenCart", "cPanel"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-l-4 pl-3 border-cyan-500">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-100 dark:bg-cyan-700 text-cyan-800 dark:text-white px-2 py-1 rounded text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-auto text-cyan-600 dark:text-cyan-400 hover:underline text-sm font-medium"
              >
                🔗 View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

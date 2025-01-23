import { content } from "../Content";

const ProjectCard = ({ project }) => {
  return (
    <div key={project.name} className="group relative">
      <div className="w-full h-80 bg-indigo-600 rounded-lg group-hover:opacity-75 overflow-hidden">
        <img src={project.image} className="object-cover w-full h-full" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href={project.href} target="_blank" aria-label={`Vedi il progetto ${project.name}`}>
          <span className="absolute inset-0" />
          {project.name}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">{project.description}</p>
    </div>
  );
};

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-fontbianco" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <header>
          <h2 className="title font-black text-black text-center" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle text-black-700 text-center mb-12" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </header>

        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <div className="mt-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                {Projects.project_content.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

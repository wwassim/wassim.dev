import { client } from "../lib/sanity";
import ProjectCard from "./ProjectCard";

async function getData() {
  const query = `*[_type=='product']{
    _id, 
     "image":image.asset->url,
    description,
    name ,
    github,
    link
  }`;

  const data = await client.fetch(query);
  return data;
}
export const dynamic = "force-dynamic";

const ProjectsSection = async () => {
  const data = await getData();

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {data.map((project, i) => (
          <li key={i}>
            <ProjectCard
              title={project.name}
              description={project.description}
              imgUrl={project.image}
              code={project.github}
              link={project.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

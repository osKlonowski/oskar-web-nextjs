const ProjectCard = ({ title, description }) => {
  return (
    <>
      <a
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left bg-white border w-96 rounded-xl hover:text-green-600 focus:text-green-600"
      >
        <h3 className="text-2xl font-bold">{title} &rarr;</h3>
        <p className="mt-4 text-xl">{description}</p>
      </a>
    </>
  );
};

export default ProjectCard;

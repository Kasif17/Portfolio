import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       👨‍💻 I'm Mohd Kasif Khan, a backend developer specializing in Node.js, where I build secure and scalable APIs using Express.js and integrate with MongoDB and MySQL. I also have intermediate experience with React.js for building dynamic front-end interfaces. Currently, I'm expanding my knowledge in DevOps, learning tools like Git, Docker, GitHub Actions, and AWS to automate deployments and improve CI/CD workflows. I’m passionate about backend development, clean architecture, and continuous learning, and I enjoy working on real-world projects that solve meaningful problems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

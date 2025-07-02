import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer Trainee",
    company: "Coding Ninjas",
    date: "Sep 2023 - Apr 2024",
    responsibilities: [
      "Developed full-stack apps with Node.js, Express, React, MongoDB, MySQL and GraphQL, delivering scalable, secure features.",
      "Java DSA and deepened DevOps/cloud knowledge through self-driven learning and mentorship.",
    ],
  },
  {
    job: "Teaching Assistant TA",
    company: "Coding Ninjas",
    date: "Dec 2023 - Apr 2024",
    responsibilities: [
      "Mentored and supported over 100+ students in Data Structures and Algorithms using Java, providing personalized guidance to enhance their problem-solving skills and understanding of core concepts.",
    ],
  },
  {
    job: "Backend || DevOps Developer",
    company: "Self",
    date: "2024 - Present",
    responsibilities: [
      "Building projects with JavaScript,Node.js,Express, MongoDB,and MySQL.",
      "backend design,API development, and database optimization.",
      "Docker,Nginx,and AWS to understand CI/CD and DevOps workflows."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

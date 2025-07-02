import { FaJava, FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiGraphql, SiNginx, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Express.js",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "GraphQL",
    icon: SiGraphql,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Nginx",
    icon: SiNginx,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
];


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

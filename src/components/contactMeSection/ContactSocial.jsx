import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiCode } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/mohd-kasif-khan-7704a0212/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Kasif17" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/Kasif177/" Icon={FiCode} />
    </div>
  );
};

export default ContactSocial;

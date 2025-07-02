import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="15+" text="Websites" />
      </div>
      <p className="text-center">
        With hands-on experience building dynamic and user-friendly web applications through real-world projects, I’ve developed a strong command of Node.js and React, and I'm actively expanding my skills in DevOps to become a well-rounded backend developer.


      </p>
      <ExperienceInfo number="$00" text="NA" />
    </div>
  );
};

export default ExperienceTopLeft;

import { Experience } from "../data/portfolio_data";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="p-4 m-2 rounded-lg bg-light-background/50 dark:bg-background/50 transition-all duration-300 hover:scale-[1.01] max-w-md">
      <div className="flex items-center gap-4">
        <img src={experience.logo} alt="Company logo" className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="font-bold hover:text-secondary transition-colors duration-200">
            {experience.title} at {experience.company}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {experience.duration} - {experience.type}
          </span>
        </div>
      </div>
    </div>
  );
};

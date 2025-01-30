import { BixatChip } from "bixat-chip";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import { Experience, PortfolioData } from "../data/portfolio_data";
import { MemberLinks } from "../components/Links";
import { Navbar } from "../components/Navbar";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-background">
      <Navbar />
      <main className="pt-36">
        <div className="max-w-4xl md:mx-auto mx-6 p-6 rounded-lg shadow-lg bg-light-card/50 dark:bg-card/50 transition-all duration-300 ease-in-out transform hover:rotate-1 hover:shadow-lg hover:shadow-secondary hover:border hover:border-secondary hover:scale-[1.02]">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-8 mb-8 text-center md:text-start md:flex-row">
            <img
              src={PortfolioData.avatar}
              alt={PortfolioData.name}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-secondary/50 hover:border-secondary transition-transform duration-300 hover:scale-105 hover:rotate-3"
            />
            <div className="animate-fadeIn w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 hover:text-secondary transition-colors duration-200">
                {PortfolioData.name}
              </h2>
              <p className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-300 transition-opacity duration-200 hover:opacity-80">
                {PortfolioData.title}
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start">
                <MemberLinks links={PortfolioData.links} />
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-8 transition-all duration-300 hover:translate-x-2">
            <h3 className="text-2xl font-semibold mb-4 hover:text-secondary transition-colors duration-200">
              technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {PortfolioData.techs.map((tech, index) => (
                <BixatChip key={index} tag={tech} withTitle={true} />
              ))}
            </div>
          </div>

          {/* Experience Section */}

          {PortfolioData.experiences &&
            PortfolioData.experiences.length > 0 && (
              <PortfolioSection title="experience" icon={FaBriefcase}>
                <div className="grid md:grid-cols-2 gap-4">
                  {PortfolioData.experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                  ))}
                </div>
              </PortfolioSection>
            )}

          {/* Projects Section */}
          <div className="transition-all duration-300 hover:translate-x-2">
            <h3 className="text-2xl font-semibold mb-4 hover:text-secondary transition-colors duration-200">
              featuredProjects
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              {PortfolioData.links.github && (
                <a
                  href={`${PortfolioData.links.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg transition-all duration-300 bg-light-background/50 dark:bg-background/50 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md flex justify-between items-center gap-2"
                >
                  viewGithubProjects
                  <FaArrowRight className="inline-block text-secondary hover:text-2xl cursor-pointer rtl:rotate-180" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
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

const PortfolioSection = ({
  children,
  title,
  icon: Icon,
}: {
  children: React.ReactNode;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div className="mb-8 transition-all duration-300 hover:translate-x-2">
      <h3 className="text-2xl font-semibold mb-4 hover:text-secondary transition-colors duration-200 flex items-center gap-2">
        {Icon && <Icon />}
        {title}
      </h3>
      {children}
    </div>
  );
};

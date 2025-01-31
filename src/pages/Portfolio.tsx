import { BixatChip } from "bixat-chip";
import {
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import { PortfolioData } from "../data/portfolio_data";
import { MemberLinks } from "../components/Links";
import { Navbar } from "../components/Navbar";
import { ExperienceCard } from "../components/ExperienceCard";
import { PortfolioSection } from "../components/Section";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-background">
      <Navbar />
      <main className="py-36">
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
              Technologies
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
              <PortfolioSection title="Experience" icon={FaBriefcase}>
                <div className="grid md:grid-cols-2 gap-4">
                  {PortfolioData.experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                  ))}
                </div>
              </PortfolioSection>
            )}

          {/* Education Section */}
          {PortfolioData.education && PortfolioData.education.length > 0 && (
            <PortfolioSection title="Education" icon={FaGraduationCap}>
              <div className="grid md:grid-cols-2 gap-4">
                {PortfolioData.education.map((education, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-light-background/50 dark:bg-background/50"
                  >
                    <h4 className="text-xl font-semibold">
                      {education.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {education.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {education.year}
                    </p>
                  </div>
                ))}
              </div>
            </PortfolioSection>
          )}  

          {/* Certifications Section */}
          {PortfolioData.certifications &&
            PortfolioData.certifications.length > 0 && (
              <PortfolioSection title="Certifications" icon={FaCertificate}>
                <div className="grid md:grid-cols-2 gap-4">
                  {PortfolioData.certifications.map((certification, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-light-background/50 dark:bg-background/50"
                    >
                      <h4 className="text-xl font-semibold">
                        {certification.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {certification.issuer}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {certification.date}
                      </p>
                    </div>
                  ))}
                </div>
              </PortfolioSection>
            )}

          {/* Projects Section */}
          <div className="transition-all duration-300 hover:translate-x-2">
            <h3 className="text-2xl font-semibold mb-4 hover:text-secondary transition-colors duration-200">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              {PortfolioData.links.github && (
                <a
                  href={`${PortfolioData.links.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg transition-all duration-300 bg-light-background/50 dark:bg-background/50 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md flex justify-between items-center gap-2"
                >
                  View Github Projects
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

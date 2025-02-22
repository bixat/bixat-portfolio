import { FaBlog, FaBriefcase, FaCode } from "react-icons/fa";
import { useBlogs } from "../hooks/blogs";
import { GitHubButton } from "../components/GithubButton";
import { PortfolioData } from "../data/portfolio_data";
import { MemberLinks } from "../components/Links";
import { PortfolioSection } from "../components/Section";
import { PortfolioCard } from "../components/PortfolioCard";
import { BixatChip, BixatTags } from "bixat-chip";
import { BlogPost } from "../data/blogs_propos";
import { Navbar } from "../components/Navbar";

export const Portfolio = () => {
  const { blogs } = useBlogs();

  return (
    <div className="min-h-screen bg-light-background dark:bg-background">
      <Navbar />
      <main className=" py-12"></main>
      <GitHubButton />
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

        {PortfolioData.experiences && PortfolioData.experiences.length > 0 && (
          <PortfolioSection title="Experience" icon={FaBriefcase}>
            <div className="grid md:grid-cols-2 gap-4">
              {PortfolioData.experiences.map((experience, index) => (
                <PortfolioCard key={index} card={experience} />
              ))}
            </div>
          </PortfolioSection>
        )}

        {/* Projects Section */}
        {PortfolioData.projects && PortfolioData.projects.length > 0 && (
          <PortfolioSection title="Projects" icon={FaCode}>
            <div className="grid md:grid-cols-2 gap-4">
              {PortfolioData.projects.map((project, index) => (
                <PortfolioCard key={index} card={project} />
              ))}
            </div>
          </PortfolioSection>
        )}

        {/* Blogs Section */}
        {blogs && blogs.length > 0 && (
          <PortfolioSection title="My Blogs" icon={FaBlog}>
            <div className="grid md:grid-cols-2 gap-4">
              {blogs.map((blog: BlogPost, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.reading_time_minutes} min read</span>
                    <span>❤️ {blog.positive_reactions_count}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <BixatChip
                      tag={BixatTags.devto}
                      link={blog.url}
                      withTitle={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </PortfolioSection>
        )}
      </div>
    </div>
  );
};

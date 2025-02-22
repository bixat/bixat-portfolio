import { FaGithub } from "react-icons/fa";

export const GitHubButton = () => (
  <div className="fixed bottom-4 right-1/2 translate-x-1/2 m-0 z-50">
    <a
      href="https://github.com/bixat/bixat-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-all duration-300 hover:scale-105"
    >
      <FaGithub className="text-xl" />
      <span>Star us on GitHub! ⭐</span>
    </a>
  </div>
);

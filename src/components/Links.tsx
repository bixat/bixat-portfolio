import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";
import { Links } from "../data/portfolio_data";

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  },
};

const SOCIAL_LINKS = [
  {
    key: "github",
    icon: ({ color }: { color: string }) => (
      <FaGithub
        color={color}
        className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300 cursor-pointer"
      />
    ),
    getUrl: (links: Links) => links.github,
  },
  {
    key: "x",
    icon: ({ color }: { color: string }) => (
      <FaTwitter
        color={color}
        className="hover:text-[#1DA1F2] transition-colors duration-300 cursor-pointer"
      />
    ),
    getUrl: (links: Links) => links.x,
  },
  {
    key: "linkedin",
    icon: ({ color }: { color: string }) => (
      <FaLinkedin
        color={color}
        className="hover:text-[#0077b5] transition-colors duration-300 cursor-pointer"
      />
    ),
    getUrl: (links: Links) => links.linkedin,
  },
  {
    key: "flutter",
    icon: ({ color }: { color: string }) => (
      <SiFlutter
        color={color}
        className="hover:text-[#49b5ea] transition-colors duration-300 cursor-pointer"
      />
    ),
    getUrl: (links: Links) => links.flutter,
    optional: true,
  },
];

export const MemberLinks = ({ links }: { links: Links }) => (
  <motion.div
    className="flex flex-row gap-3 pb-4"
    variants={ANIMATION_CONFIG.container}
    initial="hidden"
    animate="show"
  >
    {SOCIAL_LINKS.map(({ key, icon: Icon, getUrl, optional }) => {
      const url = getUrl(links);
      if (optional && !url) return null;

      return (
        <motion.div key={key} variants={ANIMATION_CONFIG.item}>
          <a href={url!} target="_blank" rel="noopener noreferrer">
            <Icon color="rgb(163 163 163)" />
          </a>
        </motion.div>
      );
    })}
  </motion.div>
);

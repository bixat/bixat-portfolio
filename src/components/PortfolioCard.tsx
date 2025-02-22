import { PortfolioCardPropos } from "../data/portfolio_propos";

export const PortfolioCard = ({ card }: { card: PortfolioCardPropos }) => {
  return (
    <a
      href={card.url}
      target="_blank"
      className="p-4 m-2 rounded-lg bg-light-background/50 dark:bg-background/50 transition-all duration-300 hover:scale-[1.01] max-w-md"
    >
      <div className="flex items-center gap-4">
        <img
          src={card.logo}
          alt="Company logo"
          className="w-10 h-10 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold hover:text-secondary transition-colors duration-200">
            {card.title}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {card.subtitle}
          </span>
        </div>
      </div>
    </a>
  );
};

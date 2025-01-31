export const PortfolioSection = ({
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

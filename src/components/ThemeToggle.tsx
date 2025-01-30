export const ThemeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {document.documentElement.classList.contains('dark') ? '🌞' : '🌙'}
    </button>
  );
};
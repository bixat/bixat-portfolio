import { PortfolioData } from "./data/portfolio_data";
import { Portfolio } from "./pages/Portfolio";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Check user's system preferences
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.title = `${PortfolioData.name} | Portfolio`;
  }, []);

  return <Portfolio />;
}

export default App;

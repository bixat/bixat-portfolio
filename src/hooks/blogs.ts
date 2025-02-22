import { useEffect, useState } from "react";
import { BlogPost } from "../data/blogs_propos";
import { PortfolioData } from "../data/portfolio_data";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  if (!PortfolioData.devToUsername) return { blogs };
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${PortfolioData.devToUsername}`, {
      headers: {
        accept: "application/json, text/plain, */*",
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [PortfolioData.devToUsername]);

  return { blogs };
};

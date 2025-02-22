import { BixatTags, TagType } from "bixat-chip";
import logo from '../assets/logo.png'
import { PortfolioCardPropos } from "./portfolio_propos";

export const PortfolioData: MemberType = {
    name: "Mohammed chahboun",
    title: "Software Engineer",
    avatar: logo,
    devToUsername: "m97chahboun",
    links: {
        github: "https://github.com/M97chahboun",
        linkedin: "https://www.linkedin.com/in/m97chahboun/",
        x: "https://twitter.com/M97Chahboun",
        flutter:
            "https://github.com/flutter/flutter/pulls?q=author%3Am97chahboun",
    },
    techs: [
        BixatTags.github,
        BixatTags.clickup,
        BixatTags.flutter,
        BixatTags.django,
        BixatTags.fastapi,
        BixatTags.angular,
        BixatTags.react,
        BixatTags.html,
        BixatTags.tailwind,
        BixatTags.firebase,
    ],
    experiences: [
        {
            title: "Team lead at Bixat.dev",
            subtitle: "2022 - Now",
            logo: logo,
            url: "https://www.bixat.dev/",
        }
    ],
    projects: [
        {
            title: "Project 1",
            subtitle: "at Bixat.dev",
            logo: logo,
            url: "https://www.bixat.dev/",
        },
        {
            title: "Project 2",
            subtitle: "at Bixat.dev",
            logo: logo,
            url: "https://www.bixat.dev/",
        },
        {
            title: "Project 3",
            subtitle: "at Bixat.dev",
            logo: logo,
            url: "https://www.bixat.dev/",
        }
    ],
};



export interface Links {
    github: string;
    linkedin: string;
    x: string;
    flutter?: string | null;
}

export type MemberType = {
    name: string;
    title: string;
    avatar: string;
    links: Links;
    techs: TagType[];
    experiences?: PortfolioCardPropos[];
    projects?: PortfolioCardPropos[];
    devToUsername?: string;
};

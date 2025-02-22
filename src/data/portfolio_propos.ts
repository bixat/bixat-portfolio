import { TagType } from "bixat-chip/dist/components/BixatChip";

export interface Links {
    github: string;
    linkedin: string;
    x: string;
    flutter?: string | null;
}

export interface PortfolioCardPropos {
    title: string;
    subtitle: string;
    logo: string;
    url: string;
}

export interface Project {
    name: string;
    description: string;
    technologies: TagType[];
    link?: string;
    image?: string;
}

export type MemberType = {
    name: string;
    subdomain: string;
    title: string;
    avatar: string;
    links: Links;
    techs: TagType[];
    experiences?: PortfolioCardPropos[];
    projects?: PortfolioCardPropos[];
};

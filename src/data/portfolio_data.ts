import { BixatTags, TagType } from "bixat-chip";
import logo from '../assets/logo.png'

export const PortfolioData = {
    name: "Mohammed chahboun",
    title: "Software Engineer",
    avatar: logo,
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
            title: "Senior Software Engineer",
            company: "Bixat.dev",
            duration: "2022 - Now",
            type: "Full Time",
            logo: logo,
        },
        {
            title: "Senior Software Engineer",
            company: "Bixat.dev",
            duration: "2022 - Now",
            type: "Full Time",
            logo: logo,
        },
        {
            title: "Senior Software Engineer",
            company: "Bixat.dev",
            duration: "2022 - Now",
            type: "Full Time",
            logo: logo,
        },
    ],
    certifications: [
        {
            name: "Certified Kubernetes Administrator",
            issuer: "The Linux Foundation",
            date: "2021-08-01",
        },
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2020-05-15",
        },
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Example",
            year: "2018",
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "University of Example",
            year: "2020",
        },
    ],
};



export interface Links {
    github: string;
    linkedin: string;
    x: string;
    flutter?: string | null;
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    type?: string;
    logo: string;
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
    title: string;
    avatar: string;
    links: Links;
    techs: TagType[];
    experiences?: Experience[];
    projects?: Project[];
};

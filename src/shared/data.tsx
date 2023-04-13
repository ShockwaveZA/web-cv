import moment from 'moment';
import springIcon from '../assets/img/spring.svg';
import angularIcon from '../assets/img/angular.svg';
import reactIcon from '../assets/img/react.svg';

export const DATE_STARTED_WORKING = moment('2018/02/01');

interface INavbarItem {
    label: string;
    id: string;
}

export const navbarItems: INavbarItem[] = [
    { label: 'Home', id: 'home', },
    { label: 'Intro', id: 'intro', },
    { label: 'Education', id: 'education', },
    { label: 'Experience', id: 'experience', },
    { label: 'Skills', id: 'skills', },
    { label: 'Spoken Languages', id: 'spoken-languages', },
    { label: 'Interests', id: 'interests', },
    { label: 'Contact', id: 'contact', },
]

interface ILanguageExperience {
    name: string;
    icon?: JSX.Element;
    startYear: number;
    endYear?: number;
}

export const languageExperience: ILanguageExperience[] = [
    { name: 'Spring Boot', icon: <img src={springIcon} alt={'Spring Boot'} />, startYear: 2020, },
    { name: 'Angular', icon: <img src={angularIcon} alt={'Angular'} />, startYear: 2018, },
    { name: 'React', icon: <img src={reactIcon} alt={'React'} />, startYear: 2023, },
];

export const otherExperience: string[] = [
    'Docker',
    'MySQL',
    'MongoDB',
    'Firebase',
];

export const educationalExperience: string[] = [
    'Python',
    'C++',
    'C',
    'C#',
    'PHP',
];

interface IEducationItem {
    institution: string;
    startYear: number;
    endYear?: number;
    qualification: string;
}

export const education: IEducationItem[] = [
    {
        institution: 'University of Pretoria',
        qualification: 'BSc IT (Information and Knowledge Systems with Software Development)',
        startYear: 2013,
        endYear: 2019,
    },
    {
        institution: 'VMware Learning',
        qualification: 'Spring Certified Professional',
        startYear: 2022,
    },
];

export interface IExperienceItem {
    company: string;
    title: string;
    startYear: number;
    endYear?: number;
    duties: {
        duty: string;
        tasks: string[];
    }[];
}

export const experience: IExperienceItem[] = [
    {
        company: 'Entelect',
        title: 'Intermediate Software Engineer',
        startYear: 2023,
        duties: [
            {
                duty: 'Continuing to provide programming assistance to Momentum Corporate IT.',
                tasks: [
                    'Saw to delivery of the projects first deadline goals, and continuing support and facilitation for upcoming deliverables on top of existing responsibilities.',
                    'Volunteered for Entelect Challenge initiative as part of the web team, supporting two front-end systems, one of which being Angular and the other React.',
                ],
            },
        ]
    },
    {
        company: 'Entelect',
        title: 'Software Engineer',
        startYear: 2021,
        endYear: 2023,
        duties: [
            {
                duty: 'Deployed as a consultant to client, Momentum Corporate IT, to provide programming assistance.',
                tasks: [
                    'Deployed to a team that has the sole focus on revamping a specific section of the legacy system using up-to-date Spring Boot and Angular.',
                    'Angular 11 front-end in combination with Spring Boot back-end experience in a Linux (Ubuntu) environment.',
                    'Took responsibility as the team’s only Angular developer as well as maintaining the Spring Boot BFF (Back-end For Front-end) that would interact with the legacy Java Enterprise projects to perform the operations it needs.',
                    'Provide support assistance for deployments.',
                ],
            },
        ]
    },
    {
        company: 'Psybergate',
        title: 'Junior Java Developer',
        startYear: 2018,
        endYear: 2021,
        duties: [
            {
                duty: 'Deployed as a consultant to Supergroup IT Services to provide programming assistance.',
                tasks: [
                    'Development of Supergroup’s flagship Supply Chain management system as a core Angular Developer.',
                    'Angular 7 front-end in combination with Spring Boot and Firebase back-end experience in a Linux (Ubuntu) environment.',
                    'Provided support assistance for deployments.',
                ],
            }
        ]
    },
    {
        company: 'Psybergate',
        title: 'Intern',
        startYear: 2018,
        endYear: 2018,
        duties: [
            {
                duty: 'Undergone the company’s mentoring program for Java SE and Java EE.',
                tasks: [
                    'Undertook projects to enrich knowledge in Java.',
                    'Exposure to building solutions in JEE, Spring and Spring Boot with Thymeleaf.',
                ],
            }
        ]
    },
];

export interface ISpokenLanguage {
    name: string;
    level: string;
}

export const spokenLanguages: ISpokenLanguage[] = [
    { name: 'English', level: 'Fluent', },
    { name: 'Afrikaans', level: 'Intermediate', },
]

export const interests: string[] = [
    'Gaming',
    'Movies',
    'Food',
    'Recreational programming side-projects',
    'Gymming',
]

export interface IContact {
    header: string;
    content: string;
}

export const contactItems: IContact[] = [
    { header: 'Location', content: 'Johannesburg, South Africa', },
    { header: 'Email', content: 'mpramlall@gmail.com' },
];
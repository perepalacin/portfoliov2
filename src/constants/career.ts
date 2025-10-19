import type { Career } from "@/types/career.ts";

export const DefaultCareerJson: Career = {
    experience: [
        {
            jobTitle: "Software Engineer",
            imageUrl: "./images/evinova.jpeg",
            company: "Evinova (an AstraZeneca company)",
            employmentType: "Jornada completa",
            startDate: new Date("2025-07-01"),
            endDate: new Date(),
            description: {
                header: "Joined a multicultural and multinational team as a FullStack developer working on Healthcare related SaaS",
                bulletPoints: [
                    "Design and implement new API and UI features, leveraging tools such as AWS Bedrock, and employing best coding practices.",
                    "Develop from 0 to production an integration and e2e testing suite for the main API of our product.",
                    "Maintain legacy applications written in Spring Boot and NextJS.",
                ],
            },
            techStack: ["NestJS", "AWS", "React", "PostgreSQL", "BedRock"],
        },
        {
            jobTitle: "Junior Frontend Software Engineer",
            imageUrl: "./images/npaw.jpeg",
            company: "NPAW",

            employmentType: "Jornada completa",
            startDate: new Date("2024-07-01"),
            endDate: new Date("2025-06-30"),
            description: {
                header: "Led the development of key components for NPAW's latest web UI redesign, successfully migrating over 40% of features from the old UI to the new one.",
                bulletPoints: [
                    "Resolved over 20\% of all bugs identified by the QA team during testing, improving system stability and reliability.",
                    "Develop and maintain a microservice using Python and SQL that allows users to create their own UI widgets to enhance their UX even further, eliminating the need for NPAW's developers to spend time developing custom solutions for very particular clients. ",
                ],
            },
            techStack: ["Python", "React.js", "Java", "MySQL"],
        },
        // {
        //     jobTitle: "Junior Mechanical Engineer",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Jornada completa",
        //     startDate: new Date("2023-07-01"),
        //     endDate: new Date("2024-07-31"),
        //     techStack: ["Python", "ANSYS Workbench", "1 aptitud más"],
        // },
        // {
        //     jobTitle: "Master Thesis Student",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Contrato de formación",
        //     startDate: new Date("2023-02-01"),
        //     endDate: new Date("2023-07-31"),
        //     description: {
        //         header: "Carried out my Master's Thesis at Chalmers Tekniska Högskola in colaboration with the Spanish startup X1 Wind.",
        //         bulletPoints: [
        //             "Develop algorithms in Python to evaluate the effects of wind and currents on a floating structure based on fluid dynamics principles.",
        //             "Validate and visualize the results obtained with Ashes and its Python API, a reduced order modeling Software to verify the results obtained using MatPlotLib.",
        //         ],
        //     },
        //     techStack: ["Python"],
        // },
        // {
        //     jobTitle: "Mechanical Engineer Intern",
        //     imageUrl: "./images/x1.jpeg",
        //     company: "X1 Wind",
        //     employmentType: "Contrato de prácticas",
        //     startDate: new Date("2021-10-01"),
        //     endDate: new Date("2023-02-28"),
        //     techStack: [],
        // },
    ],
    education: [
        {
            institution: "Universitat Politècnica de Catalunya (UPC)",
            degree: "Máster",
            imageUrl: "./images/upc.jpeg",
            fieldOfStudy: "Ingeniería industrial",
            startDate: new Date("2021-09-01"),
            endDate: new Date("2023-02-28"),
            minor: "Minor in Mechanical Engineering",
            grade: "7.3/10",
        },
        {
            institution: "Chalmers University of Technology",
            degree: "Master's Thesis Exchange Student",
            imageUrl: "./images/chalmers.jpeg",
            fieldOfStudy: "Mechanics and Maritime Sciences",
            startDate: new Date("2023-01-01"),
            endDate: new Date("2023-07-31"),
            grade: "10/10",
            description: {
                header: "Carried out my Master's Thesis at Chalmers Tekniska Högskola in colaboration with the Spanish startup X1 Wind.",
                bulletPoints: [
                    "Develop algorithms in Python to evaluate the effects of wind and currents on a floating structure based on fluid dynamics principles.",
                    "Validate and visualize the results obtained with Ashes and its Python API, a reduced order modeling Software to verify the results obtained using MatPlotLib.",
                ],
            },
        },
        {
            institution: "Universitat Politècnica de Catalunya (UPC)",
            degree: "Grado en Ingeniería en Tecnologías Industriales",
            imageUrl: "./images/upc.jpeg",
            fieldOfStudy: "Ingeniería industrial",
            startDate: new Date("2016-09-01"),
            endDate: new Date("2021-07-31"),
            grade: "6.5/10",
        },
    ],
    licenses: [
        {
            title: "Certificate in Advanced English",
            organization: "Cambridge English",
            imageUrl: "./images/cambridge.jpeg",
            expeditionDate: new Date("2016-04-01"),
        },
        {
            title: "DELF B2",
            organization: "Alliance Française de España",
            imageUrl: "./images/af.jpeg",
            expeditionDate: new Date("2016-01-01"),
        },
    ],
};

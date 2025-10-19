export interface Career {
    experience: Experience[];
    education: Education[];
    licenses: License[];
}

interface Experience {
    jobTitle: string;
    imageUrl: string;
    company: string;
    employmentType?: string;
    startDate: Date;
    endDate: Date;
    description?: Description;
    techStack: string[];
}

interface Education {
    institution: string;
    degree: string;
    imageUrl: string;
    fieldOfStudy: string;
    startDate: Date;
    endDate: Date;
    grade?: string;
    minor?: string;
    description?: Description;
}

interface License {
    title: string;
    organization: string;
    imageUrl: string;
    expeditionDate: Date;
}

interface Description {
    header?: string;
    bulletPoints?: string[];
}

import { DefaultCareerJson } from "@/constants/career.ts";
import type { Career } from "@/types/career.ts";
import { useState } from "preact/hooks";

export function CareerViewer() {
    const [career, _setCareer] = useState<Career>(DefaultCareerJson);

    return (
        <div class={"career-viewer"}>
            <h2>Experience</h2>
            <ol>
                {career.experience.map((job, index) => {
                    let isPresentDate = false;
                    if (
                        index === 0 &&
                        job.endDate.getMonth() === new Date().getMonth() &&
                        job.endDate.getFullYear() === new Date().getFullYear()
                    ) {
                        isPresentDate = true;
                    }
                    let isSameCompany = false;
                    if (index !== 0) {
                        if (career.experience[index - 1]?.company === job.company) {
                            isSameCompany = true;
                        }
                    }
                    return (
                        <li class={"career-item mb-2"}>
                            {!isSameCompany && (
                                <aside>
                                    <img src={job.imageUrl} width={48} height={48} />
                                </aside>
                            )}
                            <article>
                                <h4>{job.jobTitle}</h4>
                                <h6>
                                    {job.company} - {job.employmentType}
                                </h6>
                                <h6>
                                    {job.startDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                    {" - "}
                                    {isPresentDate
                                        ? "Present"
                                        : job.endDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                </h6>
                                <br />
                                <p>{job.description?.header}</p>
                                <div>
                                    {job.description?.bulletPoints?.map((item) => (
                                        <>
                                            <p>- {item}</p>
                                        </>
                                    ))}
                                </div>
                                <p>{job.description?.header}</p>
                                <div>
                                    {job.techStack.map((item) => {
                                        <p>{item}</p>;
                                    })}
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ol>
            <h2>Education</h2>
            <ol>
                {career.education.map((job) => {
                    return (
                        <li class={"career-item mb-2"}>
                            <aside>
                                <img src={job.imageUrl} width={48} height={48} />
                            </aside>
                            <article>
                                <h4>{job.fieldOfStudy}</h4>
                                <h6>{job.degree}</h6>
                                <h6>{job.institution}</h6>
                                <p class={"career-muted"}>{job.minor}</p>
                                <p class={"career-muted"}>Grade: {job.grade}</p>
                            </article>
                        </li>
                    );
                })}
            </ol>
            <h2>Licenses</h2>
            <ol>
                {career.licenses.map((license) => {
                    return (
                        <li class={"career-item mb-2"}>
                            <aside>
                                <img src={license.imageUrl} width={48} height={48} />
                            </aside>
                            <article>
                                <h4>{license.title}</h4>
                                <h6>{license.organization}</h6>
                                <p class={"career-muted"}>
                                    Expedition date:
                                    {license.expeditionDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                </p>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

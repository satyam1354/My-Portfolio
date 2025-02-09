import React, { useState } from "react";
import { ChevronsDown } from 'lucide-react';
import ProjectContent from "./ProjectContent";

const Projects = () => {
    const projects = [
        { key: 1, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 2, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Portfolio Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 3, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "streamsohere Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 4, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "news Website", githubLink: "", projectLink: "" },
        { key: 9, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" }];

    const [visibleProjects, setVisibleProjects] = useState(3);
    const loadMoreProjects = () => {
        setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    }
    return (
        <>
            <div className="m-10 ">
                <p className="text-center">Browse my recent</p>
                <div className="text-3xl text-center font-bold">Projects</div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center min-h-40 p-12 gap-8 ">
                    {
                        projects.slice(0, visibleProjects).map(item => {
                            return <ProjectContent key={item.key} item={item} />
                        })
                    }
                </div>
                {
                    visibleProjects < projects.length && (
                        <div className=" text-right pr-24 py-4"><button onClick={loadMoreProjects} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"> <ChevronsDown /></button></div>
                    )
                }
                {
                    visibleProjects== projects.length &&(
                        <div className="text-center font-bold text-red-600">No more Projects...</div>
                    )
                }

            </div>
        </>
    )
}
export default Projects
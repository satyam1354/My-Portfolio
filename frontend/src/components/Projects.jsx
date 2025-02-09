import React from "react";
import ProjectContent from "./ProjectContent";

const Projects = () => {
    const projects = [
        { key: 1, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 2, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Portfolio Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 3, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "streamsohere Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 4, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "news Website", githubLink: "", projectLink: "" },
        { key: 5, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 6, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Portfolio Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 7, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "streamsohere Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 8, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "news Website", githubLink: "", projectLink: "" },
        { key: 9, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" }];

    return (
        <>
            <div className="m-6 ">
                <p className="text-center">Browse my recent</p>
                <div className="text-3xl text-center font-bold">Projects</div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center m-h-40 p-5 gap-8 ">
                    {
                        projects.map(item => {
                            return <ProjectContent key={projects.key} item={item} />
                        })
                    }
                </div>
                <div className="text-right pr-24 py-4"><button>more</button></div>
            </div>
        </>
    )
}
export default Projects
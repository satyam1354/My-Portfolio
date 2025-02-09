import React from "react";
const ProjectContent = (props) => {
    console.log(props)
    return (
        <>
            {<div className="border-2 border-gray-400 bg-gray-200 rounded-xl p-2  shadow-md w-60">
                <div className="py-3">
                    <img className="mx-auto block rounded-lg " width={160} src={props.item.projectImage} alt='img' />
                </div>
                <div className="text-xl text-center mt-2">{props.item.projectName}</div>
                <div className="flex gap-2 justify-center mt-3">
                    <div className="border-2 border-black px-2 rounded-lg"><a href={props.item.githubLink} target="_blank">GitHub</a></div>
                    <div className="border-2 border-black px-1 rounded-lg"><a href={props.item.projectLink} target="_blank"  rel="noopener noreferrer">Live Demo</a></div>
                </div>
            </div>}
        </>
    )
}
export default ProjectContent
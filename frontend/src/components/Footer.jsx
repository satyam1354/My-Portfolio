import React from "react";
const Footer = () => {
    return (
        <div className="  p-10 mb-2">
            <hr className="m-6 border-t-2 border-black"/>
            <div className="flex justify-center space-x-10 text-lg">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <p className="pt-2 text-sm text-center">Copyright 2025 Satyam. All Right Reserved.</p>
        </div>
    )
}
export default Footer
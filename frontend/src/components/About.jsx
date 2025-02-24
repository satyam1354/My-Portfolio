import React from "react";
import { Github, Linkedin } from 'lucide-react';

const About = () => {
    return (
        <div id="about" className="bg-gray-400 p-4">
            <div className="font-bold text-3xl ml-5">About Me</div>
            <div className="p-5">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium nobis cum ex eveniet modi, officia porro voluptates hic,
                    temporibus exercitationem a.</p>
                    <br></br>
                <p>Iste blanditiis beatae aliquam qui, id neque porro asperiores reiciendis quia sint laboriosam impedit
                    labore sequi ea, modi ipsum enim distinctio aperiam natus!</p>

            </div>
            <div className="font-bold text-2xl m-4">What I'am Doing</div>
            <div className="grid grid-cols-2 gap-6 m-4">
                <div className=" flex border-2 rounded-xl p-4 gap-3 items-center">
                    <Github size={20} className=" hover:text-black" />
                    <div>
                        <div>Web Design</div>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className=" flex border-2 rounded-xl p-4">
                    <Github size={20} className=" hover:text-black" />
                    <div>
                        <div>Web Design</div>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className=" flex border-2 rounded-xl p-4">
                    <Github size={20} className=" hover:text-black" />
                    <div>
                        <div>Web Design</div>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className=" flex border-2 rounded-xl p-4">
                    <Github size={20} className=" hover:text-black" />
                    <div>
                        <div>Web Design</div>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className=" flex border-2 rounded-xl p-4">
                    <Github size={20} className=" hover:text-black" />
                    <div>
                        <div>Web Design</div>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About
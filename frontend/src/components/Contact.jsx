import { Linkedin, Mail } from "lucide-react";
import React from "react";
const Contact = () => {
    return (
        <div className="text-center m-4">
            <div>Get in Touch</div>
            <div className="text-3xl font-bold pt-2 pb-6">Contact Me</div>
            <div className="inline-flex border border-black rounded-3xl justify-center bg-gray-100 gap-8 py-2 px-6">
                <a href="mailto:satyamkr1354@gmail.com"                    
                className="flex items-center gap-2  py-2" aria-label="Email">
                    <Mail size={20} />
                    <span>satyamkr1354@gmail.com</span>
                    </a>
                <a href='https://www.linkedin.com/in/satyam1354/' target='_blank' rel="noopener noreferrer" className="inline-flex items-center gap-2 " area-label="LinkedIn Profile">
                    <Linkedin size={22} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}
export default Contact
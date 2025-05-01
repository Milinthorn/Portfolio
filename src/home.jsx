import React from "react";
import { animate, motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    },
    floating: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }
    }
};

const home = () => {

    const datalogo = [
        { src: "/Bash.svg", alt: "Bash", width: 120 },
        { src: "/C.png", alt: "C", width: 100 },
        { src: "/HTML.png", alt: "HTML", width: 100 },
        { src: "/CSS.png", alt: "CSS", width: 150 },
        { src: "/GitHub-Logo.png", alt: "GitHub", width: 150 },
        { src: "/Go.png", alt: "Go", width: 150 },
        { src: "/JS.png", alt: "Javascript", width: 100 },
        { src: "/Mysql.png", alt: "Mysql", width: 120 },
        { src: "/React.png", alt: "React", width: 100 },
        { src: "/Git.png", alt: "Git", width: 100 },
        { src: "/Figma.png", alt: "Figma", width: 100 },
    ];

    return (
        <>
            <div className="home-page">
                <div className="info">
                    <p>
                        I am a highly motivated and self-driven individual with a strong passion for becoming a Frontend Developer and eventually a Full Stack Developer.
                        <br></br>
                        Although my academic background is not directly in computer science (I am currently studying Humanities at Ramkhamheang University), I have taken the initiative to learn and practice programming on my own.
                        <br></br>
                        To further develop my skills, I am also a student at 42 Bangkok (KMITL), a programming institute that has provided me with hands-on experience in diverse coding projects.
                        <br></br>
                        This experience has not only enhanced my technical abilities but also taught me essential soft skills such as team collaboration, time management, and self-discipline.
                        <br></br>
                        I am committed to continuous learning and improvement, dedicating time every day to practice and refine my coding skills.
                        <br></br>
                        My goal is to seize opportunities in the tech industry and grow into a professional programmer who can create meaningful and impactful solutions.
                    </p>
                    <div className="resume">
                        <a href="/Resume_Milinthorn.pdf" target="_blank">Resume ➜</a>
                    </div>
                </div>
                <div className="skill">
                    <h4>Tech Stack:</h4>
                    {datalogo.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            width={60}
                            initial="initial"
                            animate="animate"
                            whileInView="floating"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1 }}
                            style={{ margin: 10 }}
                        />
                    ))}
                </div>
            </div>

            <footer id="contact" className="contact">
                <div className="circle">
                    <a href="https://github.com/Milinthorn/42Cadet-Journey" target="_blank">
                        <img className="img1" src="/GitHub-Logo.png" alt="GitHub" />
                    </a>
                </div>
                <div className="circle">
                    <a href="mailto:icechascnw@gmail.com" target="_blank">
                        <img className="img2" src="/Gmail-Logo.png" alt="Gmail" />
                    </a>
                </div>
                <div className="circle">
                    <a href="https://www.linkedin.com/in/milinthorn-pinthasiri-b7b914346/" target="_blank">
                        <img src="/Linkedin-Logo.webp" alt="LinkedIn" />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default home;
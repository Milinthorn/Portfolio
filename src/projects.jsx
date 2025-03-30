import React, { useState } from "react";

const projects = () => {
    const [isclick, setClick] = useState(null);

    return (
        <>
            <div className="project">
                <h2>Frontend Projects</h2>
                <ul className="first">
                    <li onClick={() => setClick(isclick === "submission" ? null : "submission")}>Submission Form</li>
                    {isclick === "submission" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`React`}
                                <br />
                                <b>Key learning: </b>
                                <br />
                                {`1. React Hook (useState and useEffect)
2. Data Fetching (Fetch API + Async/Await)
3. Javascript Expression
4. Regex Pattern
5. Form Handling (Input Types, React-select and Event listeners(onChange and onBlur))
6. PreventDefault`}
                                <br />
                                <b>Challenge Faced: </b>
                                <br />
                                {`1. Handling email and phone number pattern by using Regex.
2. There was overlap rendering because multiple components were using the same state.
    The solution is to create separate state variables for each component.
3. Handling data storage, After user submission, the data is stored in the web application and displayed in the console.
4. Taking time learning new knowledge for this first project.`}

                            </pre>
                            <a href="https://github.com/Milinthorn/SubmissionForm.git" target="_blank">see my project ➜</a>
                        </div>
                    )}
                    <li onClick={() => setClick(isclick === "todolist" ? null : "todolist")}>To do List</li>
                    {isclick === "todolist" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`React`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`1. React Hook (useState)
2. String Method (trim) and Array Method (includes, filter, map)
3. Javascript Expression
4. PreventDefault`}
                                <br></br>
                                <b>Challenge Faced: </b>
                                <br></br>
                                {`1. When handling multiple functions in a project, solve them gradually by working on one part at a time
2. Resolved syntax errors through comprehensive research and testing prior to implementation.`}
                            </pre>
                            <a href="https://github.com/Milinthorn/To-do-list.git" target="_blank">see my project ➜</a>
                        </div>
                    )}
                    <li onClick={() => setClick(isclick === "portfolio" ? null : "portfolio")}>Portfolio</li>
                    {isclick === "portfolio" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`React`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`1. React Hook (useState, useNavigation, useLocation)
2. Framer-motion
3. React-router-dom`}
                                <br></br>
                                <b>Challenge Faced: </b>
                                <br></br>
                                {`Learn new tools and try to understand before using such as react-router-dom for navigation,
utilized useNavigation hooks,
and created dynamic animations with Framer Motion, improving my UI design skills as well.`}
                            </pre>
                            <a href="https://github.com/Milinthorn/Portfolio.git" target="_blank">see my project ➜</a>
                        </div>
                    )}
                </ul>
                <h2>42 Bangkok Projects</h2>
                <ul className="second">
                    <li onClick={() => setClick(isclick === "libft" ? null : "libft")}>Libft</li>
                    {isclick === "libft" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`C language`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`      Libft is a hands-on project C fundamentals by rebuilding standard library functions manually (e.g., strlen, memcpy),
while extending their utility with custom additions. 
This serves as a foundational skill-building exercise in coding, aimed at preparing for next projects.`}
                                <br></br>
                                <b>Challenge Faced:</b>
                                <br></br>
                                {`      Time management is crucial due to the numerous functions that need to be handled.
`}
                            </pre>
                            <a href="https://github.com/Milinthorn/42Cadet-Journey/tree/main/Libft" target="_blank">see my project ➜</a>
                        </div>
                    )}
                    <li onClick={() => setClick(isclick === "printf" ? null : "printf")}>Printf</li>
                    {isclick === "printf" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`C language`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`1. Variadic Functions (va_list, va_arg, va_start, va_end)
2. Rebuilding Printf function manually.
3. Format specifiers`}
                                <br></br>
                                <b>Challenge Faced: </b>
                                <br></br>
                                {`Be confused about the return value when the prototype specified int ft_printf(...).
After researching, I concluded that printf returns an int for error handling:
a positive value indicates the number of characters printed, while a negative value signals an error.`}
                            </pre>
                            <a href="https://github.com/Milinthorn/42Cadet-Journey/tree/main/ft_printf" target="_blank">see my project ➜</a>
                        </div>
                    )}
                    <li onClick={() => setClick(isclick === "getnextline" ? null : "getnextline")}>Get next line</li>
                    {isclick === "getnextline" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`C language`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`1. Static variables
2. file descriptors (open(), read(), and close())
3. Memory management and buffer handling`}
                                <br></br>
                                <b>Challenge Faced:</b>
                                <br></br>
                                {`Spent time figuring out the logic to make the code work efficiently just like the assignment required. 
Also dealt with testing code when edge cases weren't properly handled upfront.`}
                            </pre>
                            <a href="https://github.com/Milinthorn/42Cadet-Journey/tree/main/get_next_line" target="_blank">see my project ➜</a>
                        </div>
                    )}
                    <li onClick={() => setClick(isclick === "minitalk" ? null : "minitalk")}>Minitalk</li>
                    {isclick === "minitalk" && (
                        <div className="context">
                            <pre>
                                <b>Tech stack: </b> {`C language`}
                                <br></br>
                                <b>Key learning: </b>
                                <br></br>
                                {`This project is a simple client-server communication system
1. UNIX Signal Communication (SIGUSR1/SIGUSR2)
2. Client-Side Implementation (Converted characters to binary bits (1 = SIGUSR1, 0 = SIGUSR2))
3. Server-Side Implementation (Used signal() or sigaction() to handle incoming signals)
4. Low-Level Programming such as Bit manipulation, process control (getpid(), kill()).`}
                                <br></br>
                                <b>Challenge Faced: </b>
                                <br></br>
                                {`This project involved extensive research to understand and implement unfamiliar functions for the first time.
The process of exploring documentation, testing prototypes
and debugging significantly extended the project timeline
but ultimately deepened my mastery of these new tools.`}
                            </pre>
                            <a href="https://github.com/Milinthorn/42Cadet-Journey/tree/main/minitalk" target="_blank">see my project ➜</a>
                        </div>
                    )}
                </ul>
            </div>

        </>
    )
}

export default projects;
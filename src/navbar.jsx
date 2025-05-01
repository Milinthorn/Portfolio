import { NavLink, useNavigate, useLocation } from "react-router-dom";


const navbar = () => {

    const navigate = useNavigate();

    const goToContact = () => {
        if (location.pathname !== "/home") {
            navigate("/home");
            setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 200);
        } else {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    return (
        <nav>
            <div className="nav-container">
                <ul className="navbar">
                    <li>
                        <NavLink to="/home" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Project</NavLink>
                    </li>
                    <li>
                        <div onClick={goToContact} >
                            Contact
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default navbar; 
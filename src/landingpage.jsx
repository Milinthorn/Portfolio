import { useNavigate } from "react-router-dom";
import { useState } from "react";


const landingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="detail">
                <h2>Hello World!</h2>
                <h1>Milinthorn Pinthasiri</h1>
                <h2>Web Developer</h2>
                <button className="button-detail" onClick={() => navigate("/home")}>Let’s Get to Know Me!</button>
            </div>
        </div>
    );
};

export default landingPage;

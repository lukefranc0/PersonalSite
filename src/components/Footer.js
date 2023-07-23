import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return(
        <div className = "footer">
            <div className = "socialMedia">
                <a href = "https://www.instagram.com/lukefranc0/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon/>
                </a>
                <a href="https://www.linkedin.com/in/luke-franco-102559248/" target="_blank" rel="noopener noreferrer">
                 <LinkedInIcon />
                </a>
             </div>
            <p> &copy; 2023 imlukefranco.com </p>
            <p> lukeff03@gmail.com </p>
        </div>
    );
}

export default Footer
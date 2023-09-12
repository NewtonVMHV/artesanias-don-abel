import style from "./Socials.module.css";
import React from "react";
import {FaFacebook} from "react-icons/fa";

const Socials = () => {
    const socials = [
        {
            id: "1",
            name: "Facebook",
            link: "https://www.facebook.com/profile.php?id=100063737492871",
            icon: <FaFacebook />,
        },
    ];

    return (
        <address className={style.socials}>
            {socials.map((social) => (
                <a className={style.social} key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" title={social.name}>
                    {social.icon}
                </a>
            ))}
        </address>
    )
}

export default Socials;

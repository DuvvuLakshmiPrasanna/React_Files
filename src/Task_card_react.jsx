import React from "react";
import "./Task_card_react.css";
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';

const Task_card_react = () => {
    return (
        <>
        <div>
        <h1>TECHNICAL HUB</h1>
        <div className="parent"></div>
        <div className="photo"></div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <img className="thub" src="./technicalhub.png " width="110px" />
        <img className="aditya" src="./aditya university.png"width="80px" height="25px"/>
        <div className="name"><i>Duvvu Lakshmi Prasanna</i></div>
        <div className="role">FULL STACK TRAINEE<FaReact/></div>

        <div className="mail"><FaEnvelope/>prasannayadav2468@gmail.com</div>
        <div className="linkedin"><FaLinkedin/>Prasanna yadav
        </div>
        <div className="github"><FaGithub/>Prasanna_yadav_</div>
        <div className="clg"></div>

        </div>
        </>
    );
}
export default Task_card_react;
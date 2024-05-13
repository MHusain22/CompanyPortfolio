import React from "react";
import "./About.css";
import Head from "../../Components/UI/Head/Head";
import Button from "../../Components/UI/Button/Button";
import about from '../Images/about.png';
import { GoProjectRoadmap } from "react-icons/go";
import { MdAutoGraph } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

const About = () => {
  return (
    <div className="about" id="about">
      <Head>About</Head>
      <div className="aboutHeading">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, tempora? Quibusdam, Lorem ipsum dolor sit. ut!</h1>
        <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis commodi totam. animi provident. dolor sit amet consectetur, adipisicing elit. Eius earum sed hic voluptatum id autem quo culpa ratione aliquid eveniet tempora, eligendi sint.</p>
        <div className="aboutRow">
          <div className="aboutCol">
            <GoProjectRoadmap color="var(--var-yellow)" size={50} />
            <h1>22</h1>
            <p>Project Completed</p>
          </div>
          <div className="aboutCol">
            <MdAutoGraph color="var(--var-yellow)" size={50} />
            <h1>7+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="aboutCol">
            <MdPeopleAlt color="var(--var-yellow)" size={50} />
            <h1>22</h1>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
      {/* <div className="AboutMain">
        <div className="leftAbout">
            <div className="left2">
            <h1>About Our Company</h1>
            <p>
              Expanding and making your business stronger. We are an IT company
              where we offer Web development, App development and graphics
              designing services to our beloved clients. We beliving in Aiming
              and Transforming your business. <br />
              Expanding and making your business stronger. We are an IT company
              where we offer Web development, App development and graphics
              designing services to our beloved clients. We beliving in Aiming
              and Transforming your business.
            </p>
            <Button>Let's Chat</Button>
            </div>
            <div className="right2">
              <img src={about} alt="" />
            </div>
          </div>
        
         */}

        {/* <div className="rightAbout">
            <ul>
              <li>Web Development</li>
              <li>Web Automation</li>
              <li>Data Science</li>
            </ul>
            <ul>
              <li>AI ML</li>
              <li>Devops</li>
              <li>Cyber Security</li>
            </ul>
         
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default About;

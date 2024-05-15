import React from "react";
import "./Services.css";
import ServicesList from "./ServicesList";
import Head from "../UI/Head/Head";
import coding from "../Images/coding.png";
import datascience from "../Images/datascience.png";
import webd from "../Images/webd.png";
import devops from "../Images/devops.png";
import cs from "../Images/cybersecurity.png";
import ai from "../Images/chip.png";

const Services = () => {
  return (
    <div id="services">
      <Head className="serviceHead">Services</Head>
      <div className="ServicesMain">
        <div class="contain">
          <div class="card">
            <div class="imgBx" data-text="Web Development">
              <img src={coding} />
            </div>
            <div class="content">
              <div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="imgBx" data-text="Web Automation">
              <img src={webd} />
            </div>
            <div class="content">
              <div>
                <h3>Web Automation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="imgBx" data-text="AI ML">
              <img src={ai} />
            </div>
            <div class="content">
              <div>
                <h3>AI ML</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="imgBx" data-text="Data Science">
              <img src={datascience} />
            </div>
            <div class="content">
              <div>
                <h3>Data Science</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="imgBx" data-text="Devops">
              <img src={devops} />
            </div>
            <div class="content">
              <div>
                <h3>Devops</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="imgBx" data-text="Cyber Security">
              <img src={cs} />
            </div>
            <div class="content">
              <div>
                <h3>Cyber Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="ServicesMain">
    //   <Head>Services</Head>
    //   <div className="cards3">
    //     <ServicesList
    //     icons={coding}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //     <ServicesList
    //     icons={datascience}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //     <ServicesList
    //     icons={webd}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //   </div>
    //   <div className="cards3">
    //     <ServicesList
    //     icons={devops}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //     <ServicesList
    //     icons={cs}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //     <ServicesList
    //     icons={ai}
    //       Heading="Web Development"
    //       Content="We Offer Open-Source Web Creation Services So That You Can View, Absorb, And Change The Contents As You See Fit. Our Team Of Professional Web Developers Makes Sure That The User-Interactive Front End Of Your Website Or Web App Looks Good."
    //     />
    //   </div>
    // </div>
  );
};

export default Services;

import React from "react";
import "./Hero.css";
import { IoIosSettings } from "react-icons/io";

const Hero = () => {
  return (
    <div className="Hero">
      <div>
        <div className="description">
          <div className="row">
            <div className="column">
              <h1 className="h">
              Revolutionizing businesses through innovative tech solutions.
              </h1>
              <p>
                Empowering businesses with innovative solutions in web
                development, automation, AI/ML, data science, and cybersecurity
                for enhanced performance and security.
              </p>
              <button className="signup">Let's chat</button>
            </div>
            <div className="column">
              <div className="editor">
                <div className="editor-template" id="code1">
                  <div className="title">
                    <div>
                      <IoIosSettings />
                    </div>
                    <div>
                      <code>HTML</code>
                    </div>
                    <div>
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="code">
                    <code>
                      {" "}
                      <span className="burnt">&#60;div </span>{" "}
                      <span className="yellow">className</span>={" "}
                      <span className="green">"rectangle"</span>{" "}
                      <span className="burnt">&gt; &#60;/div&gt;</span>
                    </code>
                  </div>
                </div>
                <div className="editor-template" id="code2">
                  <div className="title">
                    <div>
                      <IoIosSettings />
                    </div>
                    <div>
                      <code>SCSS</code>
                    </div>
                    <div>
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="code">
                    <code>
                      {" "}
                      <span class="yellow">.rect</span> &#10100; <br />
                      <span class="purple">background</span>:{" "}
                      <span class="yellow">linear-gradient</span>({" "}
                      <span class="orange">-119deg</span>,
                      <span class="yellow">$gray</span>{" "}
                      <span class="orange">0%</span>,
                      <span class="yellow">$dark-gray</span>{" "}
                      <span class="yellow">100%</span>);
                      <br />
                      &#x2775;
                    </code>
                  </div>
                  <div className="editor-template" id="code3">
                    <div className="title">
                      <div>
                        <IoIosSettings />
                      </div>
                      <div>
                        <code>JS</code>
                      </div>
                      <div>
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="code">
                      <code>
                        {" "}
                        <span className="yellow">var</span>{" "}
                        <span className="blue">colors</span> = [
                        <span className="green">
                          "#74B087", "#DE7300", "#74B087"
                        </span>
                        ];
                        <br />
                        <span className="yellow">function</span>{" "}
                        <span className="blue">animate()</span> ;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

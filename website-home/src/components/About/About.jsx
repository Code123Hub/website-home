

import React from "react";
import laptop from "../../assets/laptop.webp";
import Navbar from "../Navbar";
import Header from "../Header/Header";
import "./About.css";
import { Card, CardMedia } from "@mui/material";
import vase from "../../assets/vase.webp";
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ height: "189px" }}></div>
      <div className="aboutus-div">
        <p className="div-p">Welcome to our company! We are dedicated to...</p>

        <img src={laptop} alt="laptop" />
      </div>

      <div className="centered-card" style={{marginTop:'20px'}}>
        <Card className="about-card">
          <img src={vase} alt="vase" />
          <div className="about-card-div">
            <h2>Why we Exist?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</p>
              <p>
               Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              </p>
              <p> It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Card>
      </div>

      <div className="centered-card" style={{marginTop:'30px'}}>
        <Card className="about-card">
        <div className="about-card-div">
            <h2>Why we Exist?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img src={vase} alt="vase" />
          
        </Card>
      </div>
      
      
      <Footer/>
    </div>


  );
};

export default AboutUs;

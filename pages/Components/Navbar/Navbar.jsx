import React from "react";
import Styled, { keyframes } from "styled-components";
import logo from "./Images/Image_10.png";
import Home from "../Home/Home";
import Aboutus from "../About/Aboutus";
import Service from "../Services/Services";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
      
        <Navbar1>
        <I>
        <Image className="i" src={logo}></Image>
        </I>
          <Link href="/">
            <li id="h">HOME </li>
          </Link>
          <Link href="/Aboutus">
            <li id="a">ABOUT US</li>
          </Link>
          <Link href="/Services">
          <li id="s">SERVICES</li>
          </Link>
          <Link href="/Projects">
          <li id="p">PROJECTS</li>
          </Link>
          <Link href="/Contact">
          <li id="c">CONTACT</li>
          </Link>
        </Navbar1>
        
    </>
  );
};

export default Navbar;


const Wrapper = Styled.div`
max-width:70em;
margin:0 auto;
`;

const Navbar1 = Styled.div`
  @media only screen and (max-width:767px){
    width: 505px;
      margin:0 auto;
      background:red;
  }

	width: 100%;
  display: grid;
  align-items:center;
  // background:red;
  a {
    color: none;
    text-decoration: none;
  }
  position: absolute;

  height: 126px;
  
  z-index: 1;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  list-style: none;

  :hover {
    color: rgba(31, 81, 64, 1);
  }
  #h {
    left: 980px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 80px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    display: grid;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
    @media only screen and (max-width:1850px){
      left : 800px;
    }
    @media only screen and (max-width:767px){
      display:none;
    }
    
  }
  #a {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 134px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
    @media only screen and (max-width:1850px){
      left : 950px;
    }
    @media only screen and (max-width:767px){
      display:none;
    }
  }
  #s {
    left: 1320px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 125px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
    @media only screen and (max-width:1850px){
      left : 1150px;
    }
    @media only screen and (max-width:767px){
      display:none;
    }
  }
  #p {
    left: 1508px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
    @media only screen and (max-width:1850px){
      left : 1350px;
    }
    @media only screen and (max-width:767px){
      display:none;
    }
  }
  #c {
    left: 1728px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
    @media only screen and (max-width:1850px){
      left : 1550px;
    }
    @media only screen and (max-width:767px){
      display:none;
    }
  }
 
`;
const I = Styled.div`
  position: absolute;
  width: 165px;
  height: 75px;
  left: 67px;
  top: 44px;
  overflow: visible;
  @media only screen and (max-width:767px){
  top: 25px;
left: 20px;
width: 98px;
height: 44px;
  }
`;
 
const Container = Styled.div `
  width: 100%;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
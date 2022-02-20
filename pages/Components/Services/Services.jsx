import React from "react";
import Navbar from "../Navbar/Navbar";
import Styled, { keyframes } from "styled-components";
import Footer from "../Footer/Footer";
import Image from "next/image";
import Serimg from "./Images/Mask Group 11.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Publicimg from "./Images/ss.png";
import Sq from "./Images/squares.png";
import Sign from "./Images/sign.png";
import Hand from "./Images/hand.png";

const Services = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Fade bottom duration={3100} distance="310px">
          <Imgcon>
            <Fade bottom duration={3100} distance="310px">
              <Img>
                <Image id="" src={Serimg}></Image>
              </Img>
            </Fade>
            <Fade bottom duration={3100} distance="310px">
              <p className="h1">Our Services</p>
              <p className="h2"> Services</p>
            </Fade>
          </Imgcon>
        </Fade>
        <Belowhero>
          <Fade bottom duration={3100} distance="310px">
            <Pubimg>
              <Image src={Publicimg}></Image>
            </Pubimg>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="t1">Public Utilities</p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="p">
              As the general contractor, we first create the highest level of
              trust and integrity with our clients.
            </p>
          </Fade>

          <Precon>
            <Fade bottom duration={4100} distance="510px">
              <Image src={Hand}></Image>
            </Fade>
          </Precon>

          <Fade bottom duration={3100} distance="310px">
            <p className="precon">Preconstruction & Planning</p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="preconbelo">
              Every construction is unique in scope, but process is systemically
              applied to each construction project.
            </p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="gov">Government Projects</p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="belogov">
              As in any other process in construction the value of management is
              huge.
            </p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="gencon">General Contracting</p>
          </Fade>
          <Fade bottom duration={3100} distance="310px">
            <p className="belogencon">
              Our construction team is made up of more than 250 dedicated
              professionals who bring the latest advances in construction.
            </p>
          </Fade>

          <Govproj>
            <Fade bottom duration={3100} distance="510px">
              <Image src={Sq}></Image>
            </Fade>
          </Govproj>

          <Gen>
            <Fade bottom duration={3100} distance="310px">
              <Image src={Sign}></Image>
            </Fade>
          </Gen>
        </Belowhero>
      </Container>
      <Fo>
        <Footer />
      </Fo>
    </>
  );
};

export default Services;

const Imgcon = Styled.div`
  position: absolute;
  width: 100%;
  height: 1206px;
  left: 0;
  right:0;
  top: 128px;
  overflow: visible;
  // background:red;
  .h1{
    top: 397px;
left: 670px;
width: 482px;
height: 92px;
    position: absolute;
    overflow: visible;
    width: 79px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
    @media only screen and (max-width:767px){
//     top: 162px;
// left: 108px;
// width: 158px;
// height: 46px;
// font-size: 36px;
display:none;
    }
  }
  .h2{
    display:none;
    top: 397px;
left: 670px;
width: 482px;
height: 92px;
    position: absolute;
    overflow: visible;
    width: 79px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
    @media only screen and (max-width:767px){
      top: 162px;
  left: 128px;
  width: 158px;
  height: 46px;
  font-size: 36px;
  font-family: Numans;
  font-style: normal;
  font-weight: bold;
  
  color: rgba(252, 252, 250, 1);
  display:inline;
      }
  }
  @media only screen and (max-width:767px){
    top: 125px;
left: 10px;
width: 370px;
height: 294px;
// background: #393838 0% 0% no-repeat padding-box;
mix-blend-mode: multiply;
border-radius: 17px;
right:20px;
position:absolute;
  }
`;

const Img = Styled.div`

  position: absolute;
  top: 171px;
  left: 67px;
  width: 1786px;
  height: 906px;
  // background:green;
  @media only screen and (max-width:767px){
    top: 125px;
left: 10px;
width: 370px;
height: 294px;
// background: #393838 0% 0% no-repeat padding-box;
mix-blend-mode: multiply;
border-radius: 17px;
right:20px;
  }
`;

const Container = Styled.div`

margin-inline:0 auto;
width: min(90%, 90rem);
padding: 3.5rem 0;
font-family: Numans;

`;
const Pubimg = Styled.div`

position: absolute;
top: 1095px;
left: 67px;
width: 893px;
height: 670px;
border-radius:15px;

@media only screen and (max-width:767px){
top: 704px;
left: 20px;
width: 380px;
height: 285px;
position:absoulute;
}

`;

const Belowhero = Styled.div`
position: absolute;
width: 100%;
height: 1206px;
left: 0;
right:0;
top: 1288px;
overflow: visible;
// background:red;
.t1{
  position:absolute;
  top: 1440px;
  left: 1266px;
 width: 579px;
height: 68px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    color: #1F5241;
    
    @media only screen and (max-width:767px){

    top: -657px;
left: 121px;
width: 232px;
height: 29px;
font-size: 24px;
position:absolute;
color:#1F5241;
    }
}
.p{
  font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size:17px;
    color: #1F5241;
  position:absolute;
  top: 1527px;
left: 1226px;
width: 438px;
height: 94px;

opacity: 1;
@media only screen and (max-width:767px){

top: -586px;
left: 31px;
width: 372px;
height: 80px;
font-size:20px;
position:absolute;
}
}
.precon{
  font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size:37px;
    color: black;
  position:absolute;
  top: 2176px;
  left: 143px;
  width: 640px;
  height: 68px;
}
.preconbelo{
  position:absolute;
  top: 2263px;
  left: 145px;
  width: 456px;
  height: 94px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: black;
}
.gov{
  top: 2899px;
left: 1168px;
width: 496px;
height: 68px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    color: black;
    position:absolute;
}
.belogov{
  top: 2985px;
left: 1181px;
width: 470px;
height: 62px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: black;
    position:absolute;
}
.gencon{
  top: 3619px;
left: 195px;
width: 640px;
height: 68px;
font-family: Numans;
font-style: normal;
font-weight: bold;
font-size:37px;
color: black;
position:absolute;
}
.belogencon{
  top: 3706px;
left: 195px;
width: 536px;
height: 94px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: black;
    position:absolute;
}
`;

const Precon = Styled.div`
top: 1913px;
left: 960px;
width: 893px;
height: 670px;
position: absolute;
// background: transparent url('img/Mask Group 12.png') 0% 0% no-repeat padding-box;
opacity: 1;
@media only screen and (max-width:767px){
top: 1281px;
left: 20px;
width: 380px;
height: 285px;
position:absolute;
}

`;

const Govproj = Styled.div`
top: 2638px;
left: 67px;
width: 893px;
height: 670px;
position: absolute;`;

const Gen = Styled.div`
top: 3363px;
left: 960px;
width: 893px;
height: 670px;
position: absolute;
`;
const Fo = Styled.div`
position: absolute;
  width: 100%;
  height: 750px;
  left: 0px;
  top: -8900px;
  overflow: visible;`;

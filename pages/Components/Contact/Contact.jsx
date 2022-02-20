import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import Tele from './Scroll Group 3@2x.png'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
const Contact = () => {

  return (
    <>
      <Navbar/>
      <Fade  bottom duration={2000} distance="310px" >
      <Form>
      <Fade  bottom duration={2000} distance="310px" >
        <Img>
        <Image className='img' src={Tele}/>
        </Img>
        </Fade>
        <Fade  bottom duration={2000} distance="310px" >
        <h1 className='got'>Got a Project in mind? Ping us now!</h1>
        <input className='name' type='text' placeholder='Name'/>
        <input className='mailid' type='text' placeholder='Mailid'/>
        <input className='mes' type='text' placeholder='Message'/>
        <button className='knowmore'>Submit</button>
        </Fade>

      </Form>
      </Fade>
    </>
  )
};

export default Contact;

const Form = styled.div`
@media only screen and (max-width:767px){
top: 0px;
left: 0px;
width: 505px;
height: 1083px;
position:absolute;
}
margin: 0 auto;

margin-top: 177px;
left: 0px;
right: 0px;
width: 100%;
height: 100%;
bottom: 0px;
background: #D6D5D0;
opactiy:1;
.got{
  top: 100px;
left: 902px;
width: 1007px;
height: 174px;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-weight: 1120px;
    font-size: 75px;
    color: #1F5241;
    position: absolute;
    @media only screen and (max-width:767px){
      top: 516px;
      left: 17px;
      width: 356px;
      height: 92px;
text-align: left;
position:absolute;
color: #1F5241;
font-size:30px;
font-weight:bold;
    }

}
.name{
  top: 316px;
left: 862px;
width: 402px;
height: 75px;
text-align: left;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
border-radius: 23px;
opacity: 1;
position: absolute;
margin:0 auto;
max-width:500px;

@media only screen and (max-width:767px){
top: 637px;
left: 17px;
width: 383px;
position:absolute;
height: 50px;
}

}
.mailid{
  top: 316px;
left: 1300px;
width: 445px;
height: 75px;
position: absolute;
border-radius: 23px;
opacity: 1;
text-align: left;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
@media only screen and (max-width:767px){
  top: 705px;
left: 17px;
width: 383px;
height: 50px;
}
}
.mes{
  @media only screen and (max-width:767px){
    top: 773px;
left: 17px;
width: 383px;
height: 186px;
  }
  top: 457px;
left: 865px;
width: 891px;
height: 212px;
// background: transparent url('img/Rectangle 1322.png') 0% 0% no-repeat padding-box;
border-radius: 23px;
opacity: 1;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
position: absolute;
}
.knowmore{
  @media only screen and (max-width:767px){
    top: 987px;
left: 17px;
width: 246px;
height: 45px;
position: absolute;
  }
  font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    
background: #1F5241;
  top: 728px;
left: 902px;
width: 276px;
height: 75px;
position: absolute;

color: #FCFCFA;
border-radius: 16px;
opacity: 1;
}

`;
const Wrapper  = styled.div`
margin:0 auto;
max-width:500px;
display:grid;`;

const Img = styled.div`
top: 187px;
left: 0px;
width: 989px;


mix-blend-mode: normal;
opacity: 1;
.img{
  top: 187px;
left: 0px;
width: 989px;
height: 954px;

mix-blend-mode: normal;
opacity: 1;
}
@media only screen and (max-width:767px){
  top: 28px;
  left: -10px;
  width: 424px;
  height: 601px;
right:0px;
position:absolute;
}

`;
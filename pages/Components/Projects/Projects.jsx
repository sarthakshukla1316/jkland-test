import React from 'react'
import Styled from 'styled-components'
import Navbar from "../Navbar/Navbar";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import Doorimg from './Images/door.png'
import Chand from './Images/chand.png'
import Link from 'next/link'
// import Kit from './Images/kit.png'

const Projects = () => {
  return (
    <>
    <Navbar/>
    
    <Container1>
        <Hone>
        Residential Projects
        </Hone>
        <Oneimg>
            <Image src={Doorimg}/>
        </Oneimg>
        <Secimg>
        <Image src={Doorimg}/>
        </Secimg>
        <Thirdimg>
        <Image src={Doorimg}/>
        </Thirdimg>
        <Fourimg>
        <Image src={Doorimg}/>
        </Fourimg>
        <Bigvdo>
        <Image src={Chand}/>
        </Bigvdo>
        <Fo1>
        <Footercontainer>
      <div id="Group_27">
		{/* <svg class="Rectangle_1385">
			<rect id="Rectangle_1385" rx="0" ly="30" x="0" y="0" width="100%" height="750">
			</rect>
		</svg> */}
		<div id="J_AND_K_CONSTRUCTION">
			<span>J AND K<br/>CONSTRUCTION</span>
		</div>
		<div id="INSTAGRAM">
			<span>INSTAGRAM</span>
		</div>
		<div id="Terms_of_Use">
			<span>Terms of Use</span>
		</div>
		<div id="FACEBOOK">
			<span>FACEBOOK</span>
		</div>
		<div id="Privacy_Policy">
			<span>Privacy Policy</span>
		</div>
		<Link href=''>
		<div id="BACK_TO_TOP">
			<span>BACK TO TOP</span>
		</div>
		</Link>
		<div id="Copyright_2022">
			<span>Copyright 2022</span>
		</div>
		<div id="GET_IN_TOUCH">
			<span>GET IN TOUCH</span>
		</div>
		<div id="n_45_Laurinburg_Rd_Raeford_NC_">
			<span>645 Laurinburg Rd<br/>Raeford, NC 28376</span>
		</div>
		<div id="n__910-248-6464_infojandkbuild">
			<span>+1 910-248-6464<br/>info@jandkbuilders.com</span>
		</div>
	</div>
	</Footercontainer>
        </Fo1>
    </Container1>
    </>
  )
}

export default Projects

const Footercontainer = Styled.div`
position: absolute;
width: 100%;
height: 750px;
left: 0px;
right:0px;
bottom:0px;
top: 7236px;
overflow: visible;


#Group_27 {
	position: absolute;
	width: 100%;
	height: 750px;
	left: 0px;
	top: 7236px;
	right: 0px;
	
	background-color:rgba(31,82,65,1);
}
.Rectangle_1385 {
position: absolute;
overflow: visible;
width: 2029px;
height: 750px;
left: 0px;
top: 0px;
}
#J_AND_K_CONSTRUCTION {
left: 128px;
top: 275px;
position: absolute;
overflow: visible;
width: 820px;
white-space: nowrap;
line-height: 106px;
margin-top: -13px;
text-align: left;
font-family: Termina;
font-style: normal;
font-weight: normal;
font-size: 80px;
color: rgba(252,252,250,1);
letter-spacing: -0.1px;
}
#INSTAGRAM {
left: 128px;
top: 87px;
position: absolute;
overflow: visible;
width: 182px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#Terms_of_Use {
left: 128px;
top: 605px;
position: absolute;
overflow: visible;
width: 191px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#FACEBOOK {
left: 372px;
top: 87px;
position: absolute;
overflow: visible;
width: 172px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#Privacy_Policy {
left: 372px;
top: 605px;
position: absolute;
overflow: visible;
width: 206px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#BACK_TO_TOP {
left: 1709px;
top: 87px;
position: absolute;
overflow: visible;
width: 206px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#Copyright_2022 {
left: 1685px;
top: 605px;
position: absolute;
overflow: visible;
width: 234px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#GET_IN_TOUCH {
left: 1337px;
top: 87px;
position: absolute;
overflow: visible;
width: 222px;
white-space: nowrap;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#n_45_Laurinburg_Rd_Raeford_NC_ {
left: 1337px;
top: 296px;
position: absolute;
overflow: visible;
width: 280px;
white-space: nowrap;
line-height: 38px;
margin-top: -4px;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#n__910-248-6464_infojandkbuild {
left: 1337px;
top: 388px;
position: absolute;
overflow: visible;
width: 355px;
white-space: nowrap;
line-height: 38px;
margin-top: -4px;
text-align: left;
font-family: Numans;
font-style: normal;
font-weight: normal;
font-size: 30px;
color: rgba(252,252,250,1);
}
#Rectangle_1385 {
fill: rgba(31,82,65,1);
}
.Rectangle_1385 {
position: absolute;
overflow: visible;
width: 2029px;
height: 750px;
left: 0px;
top: 0px;
`
;

const Fo1 = Styled.div`
  position: absolute;
  width: 100%;
  height: 760px;
  left: 0px;
  top: -11300px;
  overflow: visible;
`;

const Container1 = Styled.div`
max-width:70em;
margin:0 auto;
`;
const Hone =  Styled.div`
top: 225px;
left: 548px;
width: 767px;
height: 92px;
position:absolute;
text-align: left;
  font-family: Numans;
  font-style: normal;
  font-weight: bold;
  font-size: 57px;
  color:#1F5241;
// background: transparent url('img/Residential Projects.png') 0% 0% no-repeat padding-box;

position:absolute;
:hover{
    opacity:100%;
    transition-timing-function: ease-out;
  transition-duration: 1.5s;
}`;


const Oneimg = Styled.div`
top: 443px;
left: 67px;
width: 979px;
height: 547px;
opacity: 30;
position:absolute;
:hover{
    opacity:100%;
    transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
// background: transparent url('img/Mask Group 8.png') 0% 0% no-repeat padding-box;

`;
const Secimg = Styled.div`
top: 443px;
left: 1079px;
width: 774px;
height: 547px;
// background: red;
border-radius: 10px;
opacity: 0.26;
position:absolute;
:hover{
    opacity:100%;
    transition-timing-function: ease-out;
  transition-duration: 1.5s;
}`;
const Thirdimg = Styled.div`
top: 1138px;
left: 67px;
width: 774px;
height: 547px;
position:absolute;
opacity: 1;`;
const Fourimg = Styled.div`
top: 1138px;
left: 874px;
width: 979px;
height: 547px;
opacity: 0.26;
position:absolute;
:hover{
    opacity:100%;
    transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;
const Bigvdo = Styled.div`
top: 1842px;
left: 67px;
width: 1786px;
height: 904px;
background: transparent url('img/Rectangle 1461.png') 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 0.26;
position:absolute;
:hover{
    opacity:100%;
    transition-timing-function: ease-out;
  transition-duration: 1.5s;
}`;
const Hero1 = Styled.div`

margin: 0 auto;
width: 100%;
  position: absolute;
 
  height: 9560px;
  background-color: rgba(252, 252, 250, 1);
  overflow: visible;
  --web-view-name: HOME – 1;
  --web-view-id: HOME__1;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;

 
  #Mask_Group_8 {
    position: absolute;
    width: 1532px;
    height: 777px;
    left: 67px;
    top: 6556px;
    
    overflow: visible;
  }
  #Mask_Group_9 {
    position: absolute;
    width: 1532px;
    height: 777px;
    left: 1652px;
    top: 6556px;
    overflow: visible;
  }
  #Rectangle_57 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_57 {
    position: absolute;
    overflow: visible;
    width: 1920px;
    height: 1289px;
    left: 0px;
    top: 3329px;
  }
  #HOME {
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
    color: rgba(31, 82, 65, 1);
  }
  #Our_promise_as_a_contractor_is {
    left: 138px;
    top: 698px;
    position: absolute;
    overflow: visible;
    width: 685px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_is {
    left: 831px;
    top: 4155px;
    position: absolute;
    overflow: visible;
    width: 815px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_wi {
    left: 138px;
    top: 1458px;
    position: absolute;
    overflow: visible;
    width: 784px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Building_Homes_and__Commercial {
    left: 138px;
    top: 501px;
    position: absolute;
    overflow: visible;
    width: 799px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
  }
  #WHY_CHOOSE_US {
    left: 606px;
    top: 2372px;
    position: absolute;
    overflow: visible;
    width: 736px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(255, 255, 255, 1);
  }
  #ABOUT_US {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 133px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #SERVICES {
    left: 1330px;
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
  }
  #CONTACT {
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
  }
  #Rectangle_3 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_3 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 809px;
  }
  #Rectangle_1329 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1329 {
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 1083px;
    left: 0px;
    top: 2249px;
    right: 0px;
    background: rgba(31, 82, 65, 1);
  }
  #Rectangle_13292 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_13292 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 1083px;
    left: 0px;
    top: 2249px;
    right: 0px;
    background: rgba(31, 82, 65, 1);
  }
  #Rectangle_1385 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1385 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 750px;
    left: -61px;
    top: 8869px;
  }
  #OUR_SERVICES {
    background: rgba(31, 82, 65, 1);
    left: 170px;
    top: 832px;
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Group_22 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 1465px;
    overflow: visible;
  }
  #Rectangle_1327 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1327 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #KNOW_MORE {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 300px;
    background: rgba(31, 82, 65, 1);
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Path_1 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_1 {
    overflow: visible;
    position: absolute;
    width: 0.239px;
    height: 0.758px;
    left: 322.481px;
    top: 2189.006px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_2 {
    fill: rgba(0, 0, 0, 1);
  }
  .Path_2 {
    overflow: visible;
    position: absolute;
    width: 1596.522px;
    height: 837.1px;
    left: 322.481px;
    top: 1410.9px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_4 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_4 {
    overflow: visible;
    position: absolute;
    width: 4.489px;
    height: 1.534px;
    left: 1845.538px;
    top: 2252.466px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_5 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_5 {
    overflow: visible;
    position: absolute;
    width: 53.129px;
    height: 104.27px;
    left: 971.334px;
    top: 1697.801px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Restaurants {
    left: 70px;
    top: 598px;
    position: absolute;
    overflow: visible;
    width: 175px;
    white-space: nowrap;
    line-height: 33px;
    margin-top: -1.5px;
    text-align: left;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(252, 252, 250, 1);
  }
  #Rectangle_80 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_80 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 59px;
    top: 2575px;
  }

  #Rectangle_1330 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1330 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 518px;
    top: 2575px;
  }
  #Rectangle_1331 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1331 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 977px;
    top: 2575px;
  }
  #Rectangle_1332 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1332 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 1438px;
    top: 2575px;
  }
  #We_are_passionate {
    left: 128px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
    transition-duration: 0.7s;
    :hover {
      margin-bottom: 30px;
    }
  }
  #Our_Team {
    left: 1049px;
    top: 7905px;
    position: absolute;
    overflow: visible;
    width: 151px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Honest__Efficient {
    left: 587px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Always_Dependable {
    left: 1034px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 311px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #US_Certified {
    left: 1547px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 207px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co {
    left: 126px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_b {
    left: 585px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_ca {
    left: 1044px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_cb {
    left: 1505px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #KNOW_MORE_cd {
    left: 46px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 178px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_25 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 4375px;
    overflow: visible;
  }
  #Rectangle_1327_cf {
    fill: transparent;
    stroke: rgba(252, 252, 250, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
  }
  .Rectangle_1327_cf {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #ABOUT_US_cg {
    left: 63px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 144px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_24 {
    position: absolute;
    width: 1983px;
    height: 1322px;
    left: 0px;
    top: 3326px;
    overflow: visible;
  }
  #Rectangle_1379_cj {
    fill: url(#Rectangle_1379_cj);
  }
  .Rectangle_1379_cj {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 361px;
    left: -61px;
    top: 3245px;
  }
  #YOUR_BEST_GENERAL__CONTRACTOR_ {
    left: 836px;
    top: 542px;
    position: absolute;
    overflow: visible;
    width: 781px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
  }
`;
const Img = Styled.div`

  position: absolute;
  
  height: 666px;
  left: 57px;
  right: 57px;
  top: 168px;
  overflow: visible;
  

`;
const Container = Styled.div`
  width: 100%;
 
  left:0;
  margin:0 auto;
  margin-right:0 auto;
  margin-left:0 auto;
`;
const Imgcon = Styled.div`
  position: absolute;
  width: 100%;
  height: 1206px;
  left: 0;
  right:0;
  top: 128px;
  overflow: visible;
  // background:red;
`;
const Why = Styled.div`
  position: absolute;
  overflow: visible;
  width:100%;
  height: 1083px;
  left: 0px;
  top: 2249px;
  right: 0px;
  background: rgba(31, 82, 65, 1);

  #WHY_CHOOSE_US {
    left: 606px;
    top: 2372px;
    position: absolute;
    overflow: visible;
    width: 736px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(255, 255, 255, 1);
  }
  #ABOUT_US {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 133px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #SERVICES {
    left: 1330px;
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
  }
  #CONTACT {
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
  }
  #Rectangle_3 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_3 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 809px;
  }
  #Rectangle_1329 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1329 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 1083px;
    left: 0px;
    top: 2249px;
    right: 0px;
    background: rgba(31, 82, 65, 1);
  }
  #Rectangle_1385 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1385 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 750px;
    left: -61px;
    top: 8869px;
  }
  #OUR_SERVICES {
    background: rgba(31, 82, 65, 1);
    left: 170px;
    top: 832px;
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Group_22 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 1465px;
    overflow: visible;
  }
  #Rectangle_1327 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1327 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #KNOW_MORE {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
    background: rgba(31, 82, 65, 1);
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Path_1 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_1 {
    overflow: visible;
    position: absolute;
    width: 0.239px;
    height: 0.758px;
    left: 322.481px;
    top: 2189.006px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_2 {
    fill: rgba(0, 0, 0, 1);
  }
  .Path_2 {
    overflow: visible;
    position: absolute;
    width: 1596.522px;
    height: 837.1px;
    left: 322.481px;
    top: 1410.9px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_4 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_4 {
    overflow: visible;
    position: absolute;
    width: 4.489px;
    height: 1.534px;
    left: 1845.538px;
    top: 2252.466px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_5 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_5 {
    overflow: visible;
    position: absolute;
    width: 53.129px;
    height: 104.27px;
    left: 971.334px;
    top: 1697.801px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Restaurants {
    left: 70px;
    top: 598px;
    position: absolute;
    overflow: visible;
    width: 175px;
    white-space: nowrap;
    line-height: 33px;
    margin-top: -1.5px;
    text-align: left;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(252, 252, 250, 1);
  }
  #Rectangle_80 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_80 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 59px;
    top: 2575px;
  }

  #Rectangle_1330 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1330 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 518px;
    top: 2575px;
  }
  #Rectangle_1331 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1331 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 977px;
    top: 2575px;
  }
  #Rectangle_1332 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1332 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 1438px;
    top: 2575px;
  }
  #We_are_passionate {
    left: 128px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
    transition-duration: 0.7s;
    :hover {
      margin-bottom: 30px;
    }
  }
  #Our_Team {
    left: 1049px;
    top: 7905px;
    position: absolute;
    overflow: visible;
    width: 151px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Honest__Efficient {
    left: 587px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Always_Dependable {
    left: 1034px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 311px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #US_Certified {
    left: 1547px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 207px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co {
    left: 126px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_b {
    left: 585px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_ca {
    left: 1044px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_cb {
    left: 1505px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #KNOW_MORE_cd {
    left: 46px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 178px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_25 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 4375px;
    overflow: visible;
  }
  #Rectangle_1327_cf {
    fill: transparent;
    stroke: rgba(252, 252, 250, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
  }
  .Rectangle_1327_cf {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #ABOUT_US_cg {
    left: 63px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 144px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_24 {
    position: absolute;
    width: 1983px;
    height: 1322px;
    left: 0px;
    top: 3326px;
    overflow: visible;
  }
  #Rectangle_1379_cj {
    fill: url(#Rectangle_1379_cj);
  }
  .Rectangle_1379_cj {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 361px;
    left: -61px;
    top: 3245px;
  }
  // #YOUR_BEST_GENERAL__CONTRACTOR_ {
  // 	left: 836px;
  // 	top: 3942px;
  // 	position: absolute;
  // 	overflow: visible;
  // 	width: 781px;
  // 	white-space: nowrap;
  // 	line-height: 85px;
  // 	margin-top: -4px;
  // 	text-align: left;
  // 	font-family: Halcom;
  // 	font-style: normal;
  // 	font-weight: bold;
  // 	font-size: 77px;
  // 	color: rgba(252,252,250,1);
  // }
`;
const Yourbest = Styled.div`

  position: absolute;
  
  width: 100%;
  height: 1289px;
  left: 0px;
  right: 0px;
  top: 3329px;
  background: rgba(31, 82, 65, 1);

  #J_and_K_General_Contractors_is {
    left: 831px;
    top: 800px;
    position: absolute;
    overflow: visible;
    width: 815px;
    // color:black;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_wi {
    left: 138px;
    top: 1258px;
    position: absolute;
    overflow: visible;
    width: 784px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Aboutus {
    overflow: visible;
    width: 268px;
    height: 75px;
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 1025px;
    overflow: visible;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    background: transparent;
    border: 3px solid #FFFFFF;
border-radius: 16px;
    // stroke-width: 2px;
    // stroke-linejoin: miter;
    // stroke-linecap: butt;
    // stroke-miterlimit: 4;
    // shape-rendering: auto;
  }
`;
const Cc = Styled.div``;

const Sechero = Styled.div`
top: 1079px;
left: 785px;
width: 1135px;
height: 1165px;
background: transparent url('img/Group 5.png') 0% 0% no-repeat padding-box;
opacity: 1;`;

const Wrapper = Styled.div`

  margin: 0 auto;
  width: 50%;
  
`;

const Health = Styled.div`

top: 0px;
left: 0px;
width: 660px;
height: 683px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(46%) saturate(293%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;
const Hoverimg = Styled.div`
top: 4924px;
width:100%;
 // background:red;
position:absolute;
margin:0 auto;
height: 1423px;

p{
  margin-top: -13.5px;
  text-align: left;
  font-family: Numans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: white;
  z-index:2;
}
`;
const Edu = Styled.div`
top: 0px;
left: 642px;
width: 665px;
height: 683px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(26%) saturate(283%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;

const Commercial = Styled.div`
top: 0px;
left: 1302px;
width: 672px;
height: 643px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(26%) saturate(283%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;
const Govbuild = Styled.div`
top: 702px;
left: 0px;
width: 670px;
height: 683px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(26%) saturate(283%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}`;

const Resi = Styled.div`
top: 700px;
left: 644px;
width: 672px;
height: 683px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(26%) saturate(283%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;
const Resta = Styled.div`

top:700px;
left: 1302px;
width: 672px;
height: 643px;
position:absolute;
// background: transparent url('img/Component 1 – 1.png') 0% 0% no-repeat padding-box;
opacity: 1;
filter: invert(40%) sepia(26%) saturate(283%) hue-rotate(109deg) brightness(100%) contrast(88%);
:hover{
  filter:none;
  transition-timing-function: ease-out;
  transition-duration: 1.5s;
}
`;
const Lead = Styled.div`
position: absolute;
text-align: center;
  font-family: Numans;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  color:#1F5241;
top: 6446px;
left: 369px;
width: 1182px;
height: 48px;
// background: transparent url('img/Leading the way in commercial and residential construction.png') 0% 0% no-repeat padding-box;
opacity: 1;
`;

const Ceo = Styled.div`
position: absolute;
top: 7635px;
left: 178px;
width: 798px;
height: 1041px;
// background: transparent url('img/Screenshot 2021-12-20 at 12.25.26 AM.png') 0% 0% no-repeat padding-box;
opacity: 1;`;

const Word = Styled.div`
text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 75px;
    color: #1F5241;
    position:absolute;
top: 8028px;
left: 1049px;
width: 494px;
height: 174px;
// background: transparent url('img/A word from Our CEO.png') 0% 0% no-repeat padding-box;
opacity: 1;`;

const Ceowords = Styled.div`
top: 8255px;
left: 1049px;
width: 694px;
height: 222px;
text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #1F5241;
    position:absolute;`;

const Fo = Styled.div`
  position: absolute;
  width: 100%;
  height: 760px;
  left: 0px;
  top: -5500px;
  overflow: visible;
`;

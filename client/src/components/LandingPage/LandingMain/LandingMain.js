

import React, { useEffect, useState } from 'react';
import './LandingMain.scss'
import LandingMiddle from './LandingMiddle';
const LandingMain = () => {

  const [position,setPosition] =useState(0);

  function onScroll() {
    setPosition(window.scrollY)
  }
  useEffect(()=>{
         window.addEventListener('scroll',onScroll);
         return ()=>{
           window.removeEventListener('scroll',onscroll);
         }
  },[])
    return (
     <div>
  <div className='Landing_title' style={{ 
        top:'-230px',left:'100px'
        ,opacity:'1', backgroundPositionY: position / 2,paddingBottom:"100px",overflowX:"hidden",width:"120%"}}>
       {/* <img alt='제주도' src='https://s3.ap-northeast-2.amazonaws.com/cloimage/home/rails/clo/public/ckeditor_assets/pictures/1611/content_1.bmp'
        width='1700px' height='750px'></img> */}
        {/* <div style={{position:'absolute',
          top:'200px',left:'200px',
           fontSize:'50px',color:'#000069',weight:'500'}}>Hello Jeju</div> */}
       <section aria-label="Floating Logo">
              <div class="tilt">
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>W</span>
                <span>!</span>
           
              </div>
              <div class="tilt">
                <span>J</span>
                <span>E</span>
                <span>J</span>
                <span>U</span>
               
           
              </div>
            </section>
{/* 
           <LandingMainRight></LandingMainRight> */}
      </div>
      <div style={{position:"absolute" ,top:"170px",left:"400px"}}className="background lighthouse_style ">  
 
          <div class="vale">
          </div>
          <div class="sea">
          </div>
          
          <div class="lighthouse">
            <div class="top"></div>
            <div class="light"></div>
            <div class="light"></div>
            <div class="body"></div>
          </div>

          </div>
           
     </div>
    
        
  
    );
};

export default LandingMain;
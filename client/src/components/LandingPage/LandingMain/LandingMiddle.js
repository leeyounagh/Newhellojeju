import React, { useEffect } from 'react';
import './LandingMiddle.scss';

import MiddleRight from './Section/MiddleRight';
import LandingBottom from './LandingBottom';

const LandingMiddle = () => {
  var clock = {
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
}
useEffect(()=>{
  Date()
},[])
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

 
    return (
        <div className='body' style={{width:'120%',height:'600px',
      overflowY:"hidden",position:'absolute',top:"640px",left:"0px",display:"sticky"}}>

<div  className='LandingMain_Translate2 fade-in'style={{position:"relative",left:'300px'}} id="clock">
    <p style={{position:"relative",top:"50px"}}class="date">{  clock.date }</p>
    <p class="time">{clock.time}</p>
   
</div>
<MiddleRight></MiddleRight>

        </div>
    );
};

export default LandingMiddle;
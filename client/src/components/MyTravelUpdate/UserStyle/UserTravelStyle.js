import React, { useEffect, useState } from 'react';
import './UserTravelStyle.scss'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const data = [
    {
     id:1,
     story:[{res:"여행계획을 짤때 제일먼저 조사하는것은 그지역의 맛집이다."},
     {spot:"여행계획을 짤때 제일먼저 조사하는것은 그지역의 관광지이다."},
     {shopping: "여행계획을 짤때 제일먼저 조사하는것은 그지역의 소품샵, 기념품샵이다." }
    ,
   {hotel:  "여행계획을 짤때 제일먼저 조사하는것은 그지역의 숙박업소이다."}
  ]
    },
    {
     id:2,
     story:[{res:"맛집은 2시간이상 줄을 서서 기다려야되더라도 꼭 맛봐야된다."},
     {spot: "주변사람으로부터 활동적인 사람이라고 많이 듣는 편이다."},
     {shopping:  "보통 돈을 쓰면서 스트레스를 푸는편이다." }
    ,
   {hotel:   "사람 많은곳보다 적은곳이 좋으며 본인은 집순이다."}
  ]
   
    },
    {
     id:3,
     story:[{res:"주변으로부터 맛집에대한 질문을 많이 듣는다. "},
     {spot:  "여행을 갔다온후 제일 기억에 남는것은 관광지인 경우가 많다 "},
     {shopping:  "여행을 갔다온후 제일 기억에 남는것은 해당지역에서 구매한 기념품들이다." }
    ,
   {hotel:   "여행을 갔다온후 제일 기억에 남는것은 호텔에서 힐링한 기억이다."}
  ]

     
    },
    {
        id:4,
        story:[{res:"맛집탐방을 좋아한다."},
        {spot:  "관광지에서 무언가를 깨닫는 즐거움이 최고다."},
        {shopping:  "여행할때 물건을 구매함으로써 그때의 추억을 회상한다." }
       ,
      {hotel:   "평소에 예쁜호텔을 검색을 많이하는편이다."}
     ]
   
        
       },
    {
        id:5,
        story:[{res:"무엇보다도 맛집기행이 최고다"},
        {spot:  "무엇보다도 관광지기행이 최고다"},
        {shopping:  "무엇보다도 쇼핑기행이 최고다" }
       ,
      {hotel:   "무엇보다도 호캉스가 최고다"}
     ]
   
        
       }
    ]
const UserStyle = (props) => {
    const [UserTravelStyle,setUserTravelStyle] = useState('');
    const [count,setCount] =useState(0);
    const [lastStyle,setlaststyle] =useState(false) 

 


   const StyleUpload = () =>{


  

      let body={
        UserStyle:UserTravelStyle
      }



    axios.post(`/api/users/addToStyle`,body)
    .then(response =>{
      if(response.data.success){
        alert('스타일 설정완료!');
  
         console.log(response.data)
      } else{
          alert('스타일 업로드에 실패했습니다.')
      }
    })
   }
    const Stylehandler = (event) =>{
        setUserTravelStyle(event.currentTarget.id)
   
        setlaststyle(true)
          
    }

  const StyleRender = () =>{
    if(UserTravelStyle==='맛집여행자'){
        return(
            <div style={{display:"flex",justifyContents:"center"}}>
             <div style={{position:"relative",left:"200px"}}>
             <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/bc/d0/1a/bcd01abdb94ca13dccfcd56e83c5944e.jpg' width='400px' height='400px'/>
             </div>
                
            </div>
        )
    }else if(UserTravelStyle==='관광지중심여행자'){
        return(
            <div style={{display:"flex",}}>
              <div style={{position:"relative",left:"200px"}}>
              <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/e9/10/c6/e910c69f6fc409a381747d22fa908c83.jpg' width='400px' height='400px'/>
              </div>
         
             </div>
                
            
        )
    }else if(UserTravelStyle==='쇼핑중심여행자'){
        return(
            <div style={{display:"flex",justifyContents:"center"}}>
             <div style={{position:"relative",left:"200px"}}>
             <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/62/ab/ad/62abad6dd69808a8e74b3a5d10a6052f.jpg' width='400px' height='400px'/>
             </div>
                
            </div>
        )
    }else if(UserTravelStyle==='호캉스중심여행자'){
        return(
            <div style={{position:"relative",left:"200px"}}>
             <img style={{borderRadius:"20px",display:"flex",justifyContents:"center"}} src='https://i.pinimg.com/564x/95/8d/ac/958dac43e60f054116c84cef0c1135a9.jpg' width='400px' height='400px'/>
         
                
            </div>
        )
    }
  }
 const Renderer = () =>{
    return(
        <>{
                lastStyle?<div >
                    <h2 style={{textAlign:"center"}}>당신의 여행스타일은: {UserTravelStyle}</h2>
                    {
                        StyleRender()
                    }
                <button className='btn_hover'type='submit' style={{position:"relative",top:"-30px",left:"340px",borderRadius:"20px",border:'none',
               background:"white",width:"120px"}}onClick={StyleUpload}>선택완료</button>
                </div> :
                <div>
                    <h2 style={{textAlign:"center"}}>당신의 여행스타일을 선택해주십시오</h2>
                        <div style={{display:"flex"}}>
                            <div className='res_hover'style={{width:"200px",height:"400px"}}  id='맛집여행자'onClick={Stylehandler}>
                                <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/bc/d0/1a/bcd01abdb94ca13dccfcd56e83c5944e.jpg' width='200px' height='400px'/>
                            <h2 style={{position:'relative',top:"-40px",textAlign:"center",color:'white' }}   >
                맛집 여행자
                </h2>
                            </div>
                  <div className='spot_hover' id='관광지중심여행자'style={{width:"200px",height:"400px"}} onClick={Stylehandler}>
                  <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/e9/10/c6/e910c69f6fc409a381747d22fa908c83.jpg' width='200px' height='400px'/>
                  <h2 style={{position:'relative',top:"-40px",textAlign:"center",color:'white' }}  >관광지중심여행자</h2>
                  </div>
              <div className='shopping_hover'id='쇼핑중심여행자' style={{width:"200px",height:"400px"}}onClick={Stylehandler}>
              <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/62/ab/ad/62abad6dd69808a8e74b3a5d10a6052f.jpg' width='200px' height='400px'/>
              <h2  style={{position:'relative',top:"-40px",textAlign:"center",color:'white' }} >
                    쇼핑중심여행자
                    </h2>
              </div>
           <div className='hotel_hover'id='호캉스중심여행자' style={{width:"200px",height:"400px"}} onClick={Stylehandler}>
           <img style={{borderRadius:"20px"}} src='https://i.pinimg.com/564x/95/8d/ac/958dac43e60f054116c84cef0c1135a9.jpg' width='200px' height='400px'/>
           <h2 style={{position:'relative',top:"-40px",textAlign:"center",color:'white' }}>
                    호캉스중심여행자
                    </h2>
           </div>
              
                        </div>
                </div>
        }
        </>
    )
 }

 

    return (
        <div className='usertravelStyle_font'style={{position:"absolute",top:'100px',
   left:'230px',width:"800px" }}>
          {Renderer()}
       
             
        </div>
    );
};

export default UserStyle;
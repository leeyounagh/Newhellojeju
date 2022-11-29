import axios from 'axios';
import { GrNext,GrPrevious } from 'react-icons/gr';
import React, { useEffect,useRef,useState } from 'react';
import './LandingFooter.scss';
import UserStyle from '../../MyTravelUpdate/UserStyle/UserTravelStyle';



const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr`

const LandingFooter = (props) => {


    const contents = useRef('c5');


    let contentsPage =`&category=${contents.current}`;
    const [data,setData] =useState([])
    const [position,setPosition] =useState(0)
    const [imgPage,setImgPage] =useState(1);
    const totalImglength = 200*data.length;



   useEffect(()=>{
  

   
   

  
    },[])

   useEffect(()=>{
    Rendering();
    Axios();
   },[contents.current.focus])

   const Axios = () =>{
    axios.get(`${mainUrl}${contentsPage}`)
    .then((response)=>{console.log(response.data.items);
        setData(response.data.items);



 
   

  })
    .catch(error=>console.log(error))
   }
    const userRender = () =>{
        if(props.userdata&&props.userdata.name){
            return(
                <div>
                   {<h2 style={{position:"absolute",top:"40px"}}>{props.userdata.name}님을 위한 추천</h2>} 
                   {props.userdata.UserStyle.length===0?<a style={{position:"absolute",top:"50px",left:"840px",border:'none',background:'#89a6ae',pointer:"cursor",color:"black"}} href='/usertravelstyle'><h3>UserStyle설정하러가기</h3></a>:<button style={{position:"absolute",top:"50px",left:"770px",border:'none',background:'#89a6ae',pointer:"cursor"}} onClick={typeRendering}>나의 여행스타일에맞게추천을원할시 Click!</button>}
                </div>
            )
           }
          
        
    }
    const ImgMove ={
        position:'relative',
        top:"20px",
        left:`${position}px`,
        transition:'1.0s all ease-out',
        margin:'5px'
     }
     const ImgLeftMove = () =>{
        if(position===0){
            setPosition(0)
           } else{
               setPosition(position+700)
               setImgPage(imgPage-1)
               console.log(imgPage)
           }
    
       
     } 
     const ImgRightMove =() =>{
    
        setPosition(position-700)
        setImgPage(imgPage+1)
        console.log('포지션확인',position)
     }
 
 

     const typeRendering = () =>{
         
         
            if(props.userdata.UserStyle[props.userdata.UserStyle.length-1]==="관광지중심여행자")
            {
                contents.current = 'c1';
                contentsPage ='&category=c1'
                Axios()
                
                console.log(contents.current)
                
                
            }else if(props.userdata.UserStyle[props.userdata.UserStyle.length-1]==="쇼핑중심여행자"){
                contents.current= 'c2';
                contentsPage ='&category=c2'
                Axios()
                
                console.log(contents.current)
            }else if(props.userdata.UserStyle[props.userdata.UserStyle.length-1]==="호캉스중심여행자"){
                contents.current = 'c3';
                contentsPage ='&category=c3'
                Axios()
               
                console.log(contents.current)
         
            }else if(props.userdata.UserStyle[props.userdata.UserStyle.length-1]==="맛집여행자"){
               
                contents.current = 'c4';
                contentsPage ='&category=c4'
                Axios()
                console.log(contents.current)
                  
           
        
            }else{
                contents.current ='c5'
            }
       
     }

     const Rendering = () =>{
              return(
                data.map((item,i)=>{
                    return(
                        <div style={ImgMove} key={i}>
                           <a href={`/detail/${item.contentsid}`}>
                           <img style={{width:"200px",height:"150px"}} alt={item.title}src={item.repPhoto.photoid.thumbnailpath}></img>
                           </a>
                           <a href={`/detail/${item.contentsid}`}>
                           <div style={{background:"black",position:'relative',top:'-50px',
                fontSize:'5px',padding:'15px',height:"50px",opacity:"0.5",zIndex:'10'
                }}> <h2 style={{textAlign:"center",fontSize:"10px",color:'white',zIndex:'1',width:'160px',
                height:"100px"}}>{item.title}</h2></div>
                            </a>    
                        </div>
                    )
                  })
              )
     }
    
    return (
        <div className='footer_font'style={{height:"500px",position:"absolute",top:'1800px',
    width:"120%", background: '#89a6ae'}}>

        <div style={{position:"relative",top:"15%",left:"6%"}}>
            {userRender()}
           
        </div>
        <div style={{position:"absolute",top:"240px",left:"60px"}}>
        {imgPage===1?null:<GrPrevious size="20px"
                        style={{fontSize:"12px",border:"none",
                       }} onClick={ImgLeftMove}>이전</GrPrevious>}
        </div>
  


            <div className='footer_clip footer_font' style={{position:"absolute",top:"150px",left:"6%",width:"70%",
        }}>
               
              <div style={{display:"flex"}}>
                  {
                      Rendering()
                  }

              </div>
             
            </div>
            <div style={{position:"absolute",top:"240px",left:"1120px",zIndex:'200'}}>
      {totalImglength<Math.abs(position)?null:<GrNext 
 size="20px"style={{fontSize:"12px",border:"none"}} onClick={ImgRightMove} >다음</GrNext>}
 {/* <GrNext 
 size="20px"style={{fontSize:"12px",border:"none"}} onClick={ImgRightMove} >다음</GrNext> */}
      </div>
          
        </div>
    );
};

export default LandingFooter;
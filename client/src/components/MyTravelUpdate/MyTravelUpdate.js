import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCalendarPlusFill } from 'react-icons/bs';
import axios from 'axios';
import MyscheduleDetail from './MyscheduleDetail';
import './/MytravelUpdate.scss'
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {removeforschedule} from '../../_actions/User_action';


const MyTravelUpdate = (props) => {

  let dispatch =useDispatch()

    const[listControl,setlistControl] =useState(false)
    // useEffect(()=>{
    //     listHandler()
    // },[removeHandler])

    useEffect(()=>{
        listHandler();
       
        <BsFillTrashFill></BsFillTrashFill>
        
    },[])
    const removeHandler = (scheduleId) =>{
      console.log('scheduleId',scheduleId)
      //  axios.get(`/api/users/removefromschedule?id=${scheduleId}`)
      //    .then(response =>{
            
      //          console.log(response.data)
      //     return response.data}).catch((error)=>{
      //         console.log('error',error)
      //     })

      dispatch(removeforschedule(scheduleId)).catch((err)=>console.log(err))
        
     }
    
useEffect(()=>{
  list();

      
},[removeHandler])
 
    

   const list = ()=>{
     if(props.user.userData&&props.user.userData.schedule){
        <MyscheduleDetail schedule={props.user.userData.schedule}/>
        return props.user.userData.schedule.map((item,index)=>{
              
            return (
                <div key={index} style={{marginRight:"10px",
                  border:"1px solid #94b1b9",height:"250px",width:"250px",
                  background:"#f4f4f4",borderRadius:'10px',flexDirection:"column",overflow:'auto'}}>
                  
                    <div style={{marginTop:"15px",display:'flex',justifyContent:'center'}}>
                     <h3 style={{textAlign:"center"}}>여행제목:{item.title} </h3>
                        </div>
                        
                        <div style={{marginTop:"3px",display:'flex',justifyContent:'center'}}>
                        <h3>여행스타일:{item.style}</h3>
                        </div>
                        <div style={{marginTop:"3px",display:'flex',justifyContent:'center'}}>
                          <h3>
                          출발일:{item.startDate.substr(0,10)===null?<div>none</div>:item.startDate.substr(0,10)}
                          </h3>
                       
                        </div>
                            <div style={{marginTop:"3px",display:'flex',justifyContent:'center'}}>
                            <h3>
                            돌아가는날:{item.endDate.substr(0,10)===null?<div>none</div>:item.endDate.substr(0,10)}
                            </h3>
                           
                            </div>
                      <div style={{marginTop:"3px",display:'flex',justifyContent:'center',marginBottom:"10px",color:'black'}}>
                      <a style={{color:'black'}}href={`/mytravel/${item.id}`}><h3>자세히 보기..</h3></a>
                      </div>
                        <div style={{display:"flex",justifyContent:'center',cursor:'pointer',marginBottom:"10px",
                      color:'black'}}>
                       
                        <button className='mytravel_btn' style={{border:'none',background:"white",
                      borderRadius:"50px",cursor:"pointer",
                      width:"100px",height:"30px"}}type='submit' onClick={()=>{removeHandler(item.id) }} >일정삭제</button>
                  
                     
                        </div>
                 
                 
                   
                 
                 
                </div>
            )
 
        })
     }
   }

   const userDetail = () =>{
    if( props.user.userData){
        return (
            <div >
                
                      
           
            <h2 style={{position:"relative",top:"30px",left:"40%"}}>{props.user.userData.name}님의 제주여행</h2>
            {props.user.userData.UserStyle.length===0?<div style={{position:'relative',top:'60px',left:'45px',fontSize:"12px"}}><a style={{color:"black"}} href='/usertravelstyle'><h3>UserStyle설정하러가기</h3></a>
            </div>:<div style={{position:'relative',top:'40px',left:'45px',fontSize:"12px"}}><h2>UserStyle:{props.user.userData.UserStyle[props.user.userData.UserStyle.length-1]}</h2> </div>}
            
           
            <div style={{position:'relative',top:'80px',left:'45px',fontSize:"12px"}}><h2>이메일:{props.user.userData.email}</h2></div>
        
                
            </div>
        )
    }
   }

   const goodlist = ()=>{
    if(props.user.userData&&props.user.userData.good){

     
             
           return (
          
                 
                   <div style={{width:"100px",display:"flex",justifyContent:"space-around",
                   position:"relative",left:"80%",top:"-30px"}}>
                  <div style={{marginRight:'10px',fontSize:'12px',whiteSpace:"nowrap"}}><h2>찜리스트</h2> </div> 
                   <div>
                   <a href='/userstyle' style={{color:'#f58d9c',fontSize:'12px'}}><h2>{props.user.userData.good.length}</h2></a>
                   
                   </div>
                    
                </div>
                
                   
            
           )

     
    }
  }

  const listHandler = () =>{

    if(props.user.userData&&props.user.userData.schedule){
            if(props.user.userData.schedule.length>0){
              return (
                <div  style={{position:'relative', top:'20%',left:'15%',
                display:'flex',width:"70%",}}>
                   
                    {list()}
                 </div>
              )
                }else{
                    return (
                        <div  style={{position:'relative', top:'30px',zIndex:"50",left:'',
                        display:'flex'}}>
                           
                            <h2>등록된 일정이 없습니다.</h2>
                         </div>
                      )
                }     
    }
  }
    return ( 
        <div  className='travelDetail1'style={{height:"750px"}}>
        
         <div style={{border:'1px solid lightgray', width:'70%',height:"30%",
         position:'relative', top:'100px',left:"15%",background:"#f4f4f4",borderRadius:"10px"}}>
            {/* <div> <h2 style={{position:'absolute', top:'20px',left:'320px'}}> My Travel</h2></div> */}
         <div>
            <div>
                {userDetail()}
        
  
            </div>

            <span>
               <div style={{}}>
                {
                goodlist()
                }
               </div>
                <div  style={{position:'relative',top:"0px",left:'80%',display:'flex'}}>
                    <div style={{fontSize:'12px',}}><h2>나의 일정</h2> </div>
                <div><a href='/myschedule' style={{width:"30px",marginLeft:"15px",color:'black'
           }}><BsCalendarPlusFill  style={{width:"25px",height:"25px"}} ></BsCalendarPlusFill></a>  </div>  
                </div>

            </span>
         </div>
         </div>
         {/* <div style={{position:'absolute', top:'400px',left:'290px',width:'900px'}}>
         <h3>나의 일정 리스트</h3>
         </div> */}
       
         {
          props.user.userData&& props.user.userData.UserStyle.length>0?<a href='/usertravelstyle' style={{position:'relative', top:'150px',left:'70%',width:'900px'}}> <h3 style={{color:"black"}}>userStyle 다시 설정하러 가기</h3> </a>:
          null
         }
    
         
      
         <div style={{position:'relative', top:'120px',left:'250px',width:"200px"}}>
         <h2>나의 일정 리스트</h2>
       
         </div>
        
         {
            listHandler()
         }

        </div>
    );
};

export default React.memo(MyTravelUpdate);
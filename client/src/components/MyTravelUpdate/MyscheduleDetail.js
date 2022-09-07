
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './/MytravelUpdate.scss'

const MyscheduleDetail = (props) => {
    const {id} =useParams();
    let navigate =useNavigate()
    console.log(id)
   
    useEffect(()=>{
        scheduleDetail()
    },[])
    const scheduleDetail = () =>{
        console.log(props.user.userData)
     if(props.user.userData&&props.user.userData.schedule){
       
      const newId = props.user.userData.schedule.findIndex((item)=>item.id ===id)

       console.log(newId)

       let newDetail =  props.user.userData.schedule[newId]
       return(
        <div>
            <div style={{fontSize:'20px',marginTop:'20px',position:"relative",top:"230px",left:"45%",zIndex:"50"}}>
            제목: {newDetail.title}
            </div>
         
           <div style={{position:"relative",top:"170px",left:"20%",height:'400px',border:'1px solid lightgray', width:"60%",
         borderRadius:'30px',background:"#DAEAF1",}}>
          
          <div style={{display:"flex",justifyContent:"space-around",position:"relative",top:"100px"}}>
          <div style={{}}>
          <h3>여행스타일:{newDetail.style}</h3>
         
          </div>
      
            <div>
              <h3>
              제주도 도착하는날:{newDetail.startDate.substr(0,10)}
              </h3>
         
   
        
         </div>
         <div>
      <h3>
      집으로 가는날:{newDetail.endDate.substr(0,10)}
      </h3>
   
    </div>
          </div>
     
          
          <div style={{width:'90%',position:"relative",left:"5%",top:"120px"}}> 
          <h3>
          여행일정:{newDetail.desc}
          </h3>
         
          </div>

         
          <br/>
     
          
           </div>
        </div>
       )
       
     } 
    }
    return (
        <div className='travelDetail1'  style={{height:"750px",}}>
           <div  style={{position:'relative',
         top:'150px',left:'45%'}}> <h1 >나의 스케쥴</h1></div>
        {scheduleDetail()}
  
        </div>
    );
};

export default MyscheduleDetail;
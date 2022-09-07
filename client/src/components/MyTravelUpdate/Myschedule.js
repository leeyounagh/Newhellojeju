import React, { useState,useCallback, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Myschedule.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addschedule } from "../../_actions/User_action";
import { parse as uuidParse } from 'uuid';
import moment from 'moment';	
import { DateRange } from 'react-date-range';
import { v4 } from 'uuid';
const UUID = require('uuid-int');

const Myschedule = (props) => {
    
  const id = 0;

  const generator = UUID(id);
   let [title,setTitle] =useState('');
   let[style,setStyle] =useState('');
   let [desc,setDesc] = useState('');
   const dispatch = useDispatch();
   const NaviGate = useNavigate()
   const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const uuid = generator.uuid();
console.log(uuid); // 3270411116609537
  console.log(v4());
 
    console.log(state[0].startDate)
        const titleHandler = (event) =>{
            setTitle(event.currentTarget.value);
            console.log(title)
        }
        const selectedHandler = (event) =>{
          setStyle(event.currentTarget.value);
          console.log(style)
        }
        const descdHandler = (event) =>{
          setDesc(event.currentTarget.value);
          console.log(desc)
        }
           const onsubmitHandler = (event) =>{
                
                console.log(props.user.userData);
                if(!title || !style || !desc){
                    return alert("모든값을 넣어주셔야됩니다.")
                }
                const body = {
                  writer:props.user.userData._id,
                  title:title,
                  desc:desc,
                  style:style,
                  startDate:state[0].startDate,
                  endDate:state[0].endDate,
                  id:v4()
                 
                }

                dispatch(addschedule(body));
                NaviGate('/mytravel')
           }

    return (
      <div className='schedule travelDetail1' style={{height:"600px"}}>
         <form onSubmit={onsubmitHandler}>
      <div style={{position:'relative',top:"100px",left:'250px',
        width:'70%',height:'600px',border:'1px solid lightgray',borderRadius:'30px',background:"#DAEAF1",
      }}>
        
            <div  >
           
             <h4 style={{position:'relative', left:"50%",top:'65px'}}>제목:</h4> 
            <input style={{width:'40%',height:'30px',borderRadius:'30px',cursor:'block',
          border:'none',paddingLeft:"3px",position:'relative', left:"54%",top:'30px',zIndex:"100"}} type="text" onChange={titleHandler} value={title} autofocus />
             
         
            <div style={{marginTop:'20px',display:'flex',
           borderRadius:'30px',fontSize:"12px",position:"relative",
           left:"50px",top:"-30px"}}>
         
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            style={{width:'400px',height:'350px',borderRadius:"50px",paddingBottom:"10px"}}
                />
                           
            </div>
            <br/>
            
            <textarea placeholder=" 여행일정을 적어주세요.."   value={desc} onChange={descdHandler}
               style={{position:"relative", left:"50%", top:'-450px',
              width:"45%",height:"400px",borderRadius:'20px',border:'none',padding:'10px'}} autofocus>

               </textarea>
               <div style={{position:"relative", left:"85%", top:"-450px",}}>
               <select  className='select'name="여행스타일"  style={{zIndex:"50",padding:'0px',border:"none", background:' white'}}
                onChange={selectedHandler} value={style}>
                {/* <option  selected disabled value="호캉스 러버" style={{color:'gray'}}>여행스타일</option> */}
                <option value="스타일">여행스타일</option>
                <option value="호캉스 bias">호캉스 bias</option>
                <option value="쇼핑 bias">쇼핑 bias</option>
                <option value="관광지 bias">관광지 bias</option>
                <option value="맛집 bias">맛집 bias</option>
               
                </select>
               </div>
             
             
              
              
             <button className='sc_btn'style={{position:"relative", left:"43%", top:'-450px',color:'black',borderRadius:"50px",
             background:' white',border:"none",width:"60px",width:"100px",height:"40px"
           }} type="submit"><h2>등록</h2></button>

         
          
           </div>
           <br/>
                      
             
        
          
           
        </div>
      </form>

     
      </div>
     
      
    
       
    );
};

export default React.memo(Myschedule);
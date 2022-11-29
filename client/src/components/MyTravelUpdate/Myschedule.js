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
      <div className='schedule travelDetail1' style={{height:'550px'}}>
         <form onSubmit={onsubmitHandler}>
      <div style={{position:'absolute',top:"100px",left:'250px',
        width:'60%',height:'460px',border:'1px solid lightgray',borderRadius:'30px',background:"#DAEAF1",
      }}>
        
            <div  >
           
             <h4 style={{position:'absolute', left:"355px",top:'60px'}}>제목:</h4> 
            <input style={{width:'300px',height:'30px',borderRadius:'30px',cursor:'block',
          border:'none',paddingLeft:"3px",position:'absolute', left:"390px",top:'55px'}} type="text" onChange={titleHandler} value={title} autofocus />
             
         
            <div style={{marginTop:'20px',display:'flex',
           borderRadius:'30px',fontSize:"12px",width:'250px',height:'360px',position:"absolute",
           left:"50px",top:"25px"}}>
         
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            style={{width:'250px',height:'250px',borderRadius:"50px",paddingBottom:"10px"}}
                />
                           
            </div>
            <br/>
           
             
                <select  className='select'name="여행스타일"  style={{position:"absolute", left:"600px", top:'420px',padding:'0px',border:"none", background:' white'}}
                onChange={selectedHandler} value={style}>
                {/* <option  selected disabled value="호캉스 러버" style={{color:'gray'}}>여행스타일</option> */}
                <option value="스타일">여행스타일</option>
                <option value="호캉스 bias">호캉스 bias</option>
                <option value="쇼핑 bias">쇼핑 bias</option>
                <option value="관광지 bias">관광지 bias</option>
                <option value="맛집 bias">맛집 bias</option>
               
                </select>
               
               <textarea placeholder=" 여행일정을 적어주세요.."   value={desc} onChange={descdHandler}
               style={{position:"absolute", left:"350px", top:'100px',
              width:"350px",height:"310px",borderRadius:'20px',border:'none',padding:'10px'}} autofocus>

               </textarea>
              
             <button className='sc_btn'style={{position:"absolute", left:"340px", top:'420px',color:'black',borderRadius:"50px",
             background:' white',border:"none",width:"60px"
           }} type="submit">등록</button>

         
          
           </div>
           <br/>
                      
             
        
          
           
        </div>
      </form>
      {/* <div style={{position:"absolute", left:"950px", top:'520px',
           }} >
        <button onClick={(e) =>{
          e.preventDefault()
          NaviGate('/mytravel')
        } }>mytravel</button>
      </div> */}
     
      </div>
     
      
    
       
    );
};

export default React.memo(Myschedule);
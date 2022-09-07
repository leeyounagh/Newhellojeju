import React, { useCallback, useEffect,useState } from 'react';
import './TravelCommunity.scss'
import axios from 'axios'
import Pagination from './PageNation';
import { GrNext,GrPrevious } from 'react-icons/gr';

const TravelCommunity = () => {
  

    const [letter,Setletter] =useState([])
   const [Skip,setSkip] =useState(0)
   const [limit,setLimit] =useState(10)
   const [position,setPosition] =useState(0)
   const [page, setPage] = useState(1);
   const offset = (page - 1) * limit; //페이지 처음시작하는 인덱스번호 
  const [imgPage,setImgPage] =useState(1)
  let[style,setStyle] =useState('');
  let [Search,setSearch] =useState('')
    const totalImglength = 150*letter.length;


    
 
    useEffect(()=>{
         let body ={
            Skip:Skip,
            limit:limit
         }

         getProduct(body);
      

    },[])




   
     const getProduct =(body) =>{
        axios.post('/api/users/addcommunity/letter',body)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)

                
                Setletter(response.data.productInfo.reverse());
            
              
                
              
            }else{
                alert('글을 가져오는데 실패했습니다.')
            }
        })
     }
  
     const LatestUpdate =() =>{
        return letter.map((item,index)=>{
            return(
                <div  key={index} style={letterMove}>
                        <a href={`/community/${item._id}`}>
                   <img width='170px' height='200px' alt={item.Communutytitle}
                src={`http://localhost:5000/${item.images[0]}`}></img></a>
                <div style={{border:"1px solid black",width:"170px",height:'40px',
                    background:"black", position:'relative',top:'-40px',opacity:"0.3"}}>
                     
                </div>
             
                <a href={`/community/${item._id}`}>      <div style={{color:"black",position:'relative',top:'-80px',zIndex:'300',
                    color:'white',fontSize:'5px',padding:'5px'}}>{item.Communutytitle}</div></a>
                        
                    
                </div>
            )
        })
     }

     const letterMove ={
        position:'relative',
        left:`${position}px`,
        transition:'1.0s all ease-out',
        margin:'5px'
     }
   
   
     const RenderList  =  () =>{


     return(letter.filter((val)=>{
        if(Search==""){
            return val
        }else if(style==="작성자"&&val.writer.name.toLowerCase().includes(Search.toLowerCase())){
                 return val
        }else if(style==="제목"&&val.Communutytitle.toLowerCase().includes(Search.toLowerCase())){
            return val
   }
    }).slice(offset, offset + limit).map((item,index)=>{
        return(
           <div key={index} style={{display:'flex',justifyContent:'space-around',margin:'60px', borderBottom:'1px solid lightgray',
           width:"100%",height:"80px",position:'relative',left:"50px",top:"100px",margin:"5px"}}> 
               <div style={{position:'absolute',left:"0px"}}>
               <a href={`/community/${item._id}`}>
                   <img width='100px' height='80px' alt={item.Communutytitle}
                src={`http://localhost:5000/${item.images[0]}`}></img></a>
               </div>
                    <div style={{position:'absolute',left:'120px',top:"25px",textOverflow:'ellipsis',
                    width:'450px',whiteSpace:'nowrap',overflow:'hidden',display:'block'}}>
                    <a href={`/community/${item._id}`}> <h3>{item.Communutytitle}</h3></a>
                    </div>
                    {item.writer.name?  <div style={{position:'relative',left:"40%",top:"25px"}}> <h3>작성자:{item.writer.name}</h3></div>:
                    <div style={{position:'relative',left:"550px"}}><h4>닉네임없음</h4></div>}
           
               
           </div>
        )
         
   }))   

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
    
     const SearchHandler = (event) =>{
        setSearch(event.currentTarget.value)
        console.log(Search)
     }

     const selectedHandler = (event) =>{
        setStyle(event.currentTarget.value);
        console.log(style)
      }
    return (
        <div className='commununity_font'>
            
                <div style={{position:'relative',top:'150px',left:'40%'}}>
                   <h1> Hello Jeju Community</h1>
                </div>
                <h2 style={{position:'relative',top:'150px',left:'15%',}}>최신업데이트</h2>
                <div style={{position:'absolute',top:'250px',left:'200px',
         clip:'shape' }}>
          
                    <div className ='clip'style={{width:'1180px',height:'200px',
                display:'flex'}}>
                    
                     {LatestUpdate()}
                    
                   
                     </div>
                   
                    </div>
                    <div style={{position:'absolute',left:"11%",top:'350px'}}>
                        {imgPage===1?null:<GrPrevious size="20px"
                        style={{fontSize:"12px",border:"none",
                       }} onClick={ImgLeftMove}>이전</GrPrevious>}
               
               </div>
                    <div style={{position:'absolute',left:"92%",top:'350px'}}> 
                    {totalImglength<Math.abs(position)?null:<GrNext 
 size="20px"
                     style={{fontSize:"12px",border:"none"}} onClick={ImgRightMove} >다음</GrNext>}
                </div>
         
              <div  style={{position:'absolute',top:'400px',left:'30px'}}>
                <div style={{ width:'700px',height:"100px",
           }}>
                <h1 style={{position:'relative',left:"25%",top:'150px'}}>
                    Community
                </h1>
                <div style={{  color:'black'}}>
                  <a style={{color:'black',position:'relative',left:"172%",top:'120px',fontSize:"1.3rem",zIndex:"100"}} href='/communityupdate'>게시물작성</a>
                </div>
                </div>
             
                <div style={{height:'500px',width:"1200px",position:"relative",left:"10%",top:"30px",
            margin:'0px'}}>
               {RenderList()}
                </div>
                <div style={{position:'absolute', left:'600px',top:"175%",width:"30%"}}>
                <Pagination
                    total={letter.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    />
                </div>
                <div style={{position:"relative", top:"500px",left:"95%"}}>
                    <select onChange={selectedHandler} style={{marginRight:"10px"}}value={style} name="게시판분류">
                        <option value='분류'>
                        분류
                        </option>
                        <option value='작성자'>
                          작성자
                        </option>
                        <option value='제목'>
                         제목
                        </option> 
                    </select>
                    <input value={Search} style={{width:"150px",height:"20px"}} onChange={SearchHandler}></input>
                </div>
       
             
              </div>

            
        </div>
    );
};

export default TravelCommunity;
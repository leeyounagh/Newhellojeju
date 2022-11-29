import React, { createContext,useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
// import GMap from './GMap';
import {rastaurantdata} from './rastaurantdata'
import {hotel} from './hotel'
import {shopping} from './shopping'
import {spot} from './spot'
import { GoogleMap, useJsApiLoader,Marker,
  InfoBox  } from '@react-google-maps/api';
  import { AiFillCloseCircle } from 'react-icons/ai';
  import { Scrollbars } from 'react-custom-scrollbars-2';
import "./Recomendation.scss"

export let Context =createContext()
const customStyles = {
    content: {
      top: '0px',
      left:'0px',
      zindex:'400',
      right: 'auto',
      bottom: 'auto',
      width:"1250px",
      height:"500px",
     
    
      overflow:'none'
   
    //   transform: 'translate(-50%, -50%)',
    },
  };
  
  const containerStyle = {
    width: '700px',
    height: '400px'
  };
 
const Recomendation = (props) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const placeInfo =useRef()
   let restaurant = rastaurantdata;
   const [datanumber,setdatanumber] =useState(1)

   const [check,setChecked] = useState(false)
   const [center,setCenter] =useState( {
    lat:Number(33.37212380975274),lng:Number(126.53518867943278)
})

const [markerClick,SetMarkerClick] =useState(false)
 const ref =useRef(0)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGRsNeYWBKmbw5-YWDwHVL8EOnXx-KTRc"
  })

  const [map, setMap] = React.useState(null)
  const [zoom,setZoom]= useState(11)
const options = { closeBoxURL: '', enableEventPropagation: true };

    function openModal(event) {
      setIsOpen(true);
      
     
     setdatanumber(event.target.dataset.number)

     placeInfo.current =event.target.dataset.number
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const placeHandler =(index)=>{
     
      
      setChecked(true)
    //  console.log('레프값',imgRef.current,check)
      //클릭을하면 gmap에 있는 함수에 contentsid를 전송 그함수에서 전송받은 컨텐츠아이디와 마커들의 아이디를 비교해서 센터위치 변경
    }
   
 

    useEffect(()=>{
      dataHandler()
    },[Modal])
 
    // useEffect(()=>{
    //   SetMarkerClick();
     
    // },[])
    const Test=(props)=> {

  
      if(markerClick&&ref.current){
      
     
           return(
             
             <div style={{overflow:"hidden"}}>
             {
              <InfoBox
            
              options={options}
              position={{lat:Number(props.data[ref.current].latitude),lng:Number(props.data[ref.current].longitude)}} 
              zoomOnClick ={false}
              >
            
              <div className='map_font' style={{ background: "#efefef", width:"200px",height:"200px",fontWeight:"700"}}>
              <div style={{ fontColor: `#08233B` }}>
              <div>
              
              <img style={{marginBottom:"10px"}} alt={props.data[ref.current].title} src={props.data[ref.current].thumbnailpath} width='200px' height='130px'></img>
              <div style={{position:"relative",display:'flex',justifyContent:"center",fontSize:"15px"}}>
                <h5>{props.data[ref.current].title}</h5>
              </div>
              <div style={{width:"100px",height:"20px",
               background:"white",display:"flex",justifyContent:"center",position:"relative",
                left:"50px"}}>
              <a style={{fontSize:"12px",color:'black',fontWeight:"900"}}href={`/detail/${props.data[ref.current].contentsid}`}> 자세히보기.. </a>
              </div>
       
              </div>
              </div>
              </div>
              </InfoBox>
             }
           </div>
           ) 
     
          
       
            
         } else if (markerClick===false&&props.imgRef&&props.check ) {
     
           return(
             
             <div  style={{overflow:"none"}}>
             {
              <InfoBox
            
              options={options}
              position={{lat:Number(props.data[props.imgRef].latitude),lng:Number(props.data[props.imgRef].longitude)}} 
              zoomOnClick ={false}
              >
                 <div  className='map_font' style={{ background: "#efefef", width:"200px",height:"200px",fontWeight:"800"}}>
              <div>
              
              <img style={{marginBottom:"10px"}} alt={props.data[ref.current].title} src={props.data[ref.current].thumbnailpath} width='200px' height='130px'></img>
              <div style={{position:"relative",display:'flex',justifyContent:"center",fontSize:"15px"}}>
                <h5>{props.data[ref.current].title}</h5>
              </div>
              <div style={{width:"100px",height:"20px",
               background:"white",display:"flex",justifyContent:"center",position:"relative",
                left:"50px"}}>
              <a style={{fontSize:"12px",color:'black',fontWeight:"900"}}href={`/detail/${props.data[ref.current].contentsid}`}> 자세히보기.. </a>
              </div>
       
              </div>
              </div>
              </InfoBox>
             }
           </div>
           ) 
     
         } else{
             return( 
               <div   style={{overflow:"none"}}>
               {
                <InfoBox
              
                options={options}
                position={{lat:Number(props.data[ref.current].latitude),lng:Number(props.data[ref.current].longitude)}} 
                zoomOnClick ={false}
                >
                 <div  className='map_font' style={{ background: "#efefef", width:"200px",height:"200px",    fontWeight:"700",
                 
}}>
              <div>
              
              <img style={{marginBottom:"10px"}} alt={props.data[ref.current].title} src={props.data[ref.current].thumbnailpath} width='200px' height='130px'></img>
              <div style={{position:"relative",display:'flex',justifyContent:"center",fontSize:"15px"}}>
                <h5>{props.data[ref.current].title}</h5>
              </div>
              <div style={{width:"100px",height:"20px",
               background:"white",display:"flex",justifyContent:"center",position:"relative",
                left:"50px",marginBottom:"30px"}}>
              <a style={{fontSize:"12px",color:'black',fontWeight:"900"}}href={`/detail/${props.data[ref.current].contentsid}`}> 자세히보기.. </a>
              </div>
       
              </div>
              </div>
                </InfoBox>
               }
             </div>
             ) 
           }
      
         
      }
      
      const infoboxHandler =(index ) =>{
         
     
       SetMarkerClick(true);
               
       ref.current = index;
     
     
            
     }
     

    const Map  = (props) =>{
      return isLoaded ? (
        <div>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
           
          >
            {
              props.data.map((item,i)=>{
            
                return(
                    <div>
            <Marker onClick={(event)=>{
                infoboxHandler(i);
                setCenter({
                  lat:Number(item.latitude),lng:Number(item.longitude)
              }) 
         
           console.log(i)
             } } position={{lat:Number(item.latitude),lng:Number(item.longitude)}} 
           data-id={item.contentsid} key={i} 
           
           >
           
          
       
            </Marker>
    
                  
           
                    </div>
                  )
              }
           
              )
            }
    
             {<Test data={ props.data}></Test>}
        
            <></>
            
          </GoogleMap>
       
        </div>
          
          
      ) : <></>
    }
 

    const dataHandler =  () =>{
      if(Number(datanumber)===1 ){
        return(
        <div className='map_font'>
            <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",
          opacity:"4",position:"relative",top:'50px',background:"rgb(248, 248, 248)",
          }}>
               <Scrollbars style={{ width: 500, height: 400, color:"black" }}>
               {
               hotel.map((item,i)=>{
                    return(
                       <div>
                         
                           <div style={{width:'500px',height:'150px',margin:'10px',
                          background:"white"}}>
                           <img style={{marginTop:'10px'}} alt= {item.title} src= {item.thumbnailpath}
                           width="150px" height='120px' data-tag={item.contentsid} 
                           onClick={()=>{
                            infoboxHandler(i);
                            setCenter({
                              lat:Number(item.latitude),lng:Number(item.longitude)
                          }) 
                           }}></img>
                           <div style={{position:'relative',top:'-120px',left:'150px',marginLeft:'10px'}}>
                           <h3 >{item.title}</h3>
                           <div style={{width:"300px"}}>
                            <h5 > {item.tag}</h5>
                           
                           </div>
                          
                           </div>
                             
                          
                           </div>
      
    
                           
                          
                           
                        
                           
                       </div>
                    )
               })
             } 
               </Scrollbars>
         
            
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",
          opacity:"4",position:"relative",top:'-350px',left:'500px'}}>

            {
             <Map data ={hotel} ></Map>
            }
            
            {/* <GMap data ={hotel}  check={check}></GMap> */}
      
           </div>

        </div>

        
        )
    
      }else if(Number(datanumber) ===2 ){
        return(
          <div className='map_font'>
  <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",
          opacity:"4",position:"relative",top:'50px',
          background:"rgb(248, 248, 248)"}}>
             <Scrollbars style={{ width: 500, height: 400, color:"black" }}>
             {
               shopping.map((item,i)=>{
                    return(
                      <div>
                           <div style={{width:'500px',height:'150px',margin:'10px',
                          background:"white"}}>
                           <img style={{marginTop:'10px'}} alt= {item.title} src= {item.thumbnailpath}
                           width="150px" height='120px' data-tag={item.contentsid} 
                           onClick={()=>{
                            infoboxHandler(i);
                            setCenter({
                              lat:Number(item.latitude),lng:Number(item.longitude)
                          }) 
                           }}></img>
                           <div style={{position:'relative',top:'-120px',left:'150px',marginLeft:'10px'}}>
                           <h3>{item.title}</h3>
                           <div style={{width:"300px"}}>
                           <h5 > {item.tag}</h5>
                           </div>
                          
                           </div>
                             
                          
                           </div>
                          
                           
                        
                           
                       </div>
                    )
               })
             } 
             </Scrollbars>
      
            
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",
          opacity:"4",position:"relative",top:'-350px',left:'500px',background:"rgb(248, 248, 248)"}}>

        <Map data ={shopping} ></Map>
          {/* <GMap data ={shopping} ></GMap> */}
         
           </div>
          </div>
    
        )
    
      } else if(Number(datanumber) ===3){
        return(
          <div className='map_font'> 
  <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",
          opacity:"4",position:"relative",top:'50px',background:"rgb(248, 248, 248)",
         }}>   <Scrollbars style={{ width: 500, height: 400, color:"black" }}>
             {
               restaurant.map((item,i)=>{
                    return(
                      <div>
                      <div style={{width:'500px',height:'150px',margin:'10px',
                     background:"white"}}>
                      <img style={{marginTop:'10px'}} alt= {item.title} src= {item.thumbnailpath}
                      width="150px" height='120px' data-tag={item.contentsid} 
                      onClick={()=>{
                       infoboxHandler(i);
                       setCenter({
                         lat:Number(item.latitude),lng:Number(item.longitude)
                     }) 
                      }}></img>
                      <div style={{position:'relative',top:'-120px',left:'150px',marginLeft:'10px'}}>
                      <h3>{item.title}</h3>
                      <div style={{width:"300px"}}>
                      <h5 > {item.tag}</h5>
                      </div>
                     
                      </div>
                        
                     
                      </div>
                     
                      
                   
                      
                  </div>
                    )
               })
             } 
            </Scrollbars>
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
          opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
{/*               
               <GMap data ={restaurant}></GMap> */}
              
              <Map data ={restaurant} ></Map>
           </div>

          
          </div>
    
        )
      }else if(
        Number(datanumber)===4
      )       return(
        <div className='map_font'>
<div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
        opacity:"4",position:"relative",top:'50px',border:'1px solid black',background:"rgb(248, 248, 248)",
       }}>
           <Scrollbars style={{ width: 500, height: 400, color:"black" }}>
           {
             spot.map((item,i)=>{
                  return(
                    <div>
                    <div style={{width:'500px',height:'150px',margin:'10px',
                   background:"white"}}>
                    <img style={{marginTop:'10px'}} alt= {item.title} src= {item.thumbnailpath}
                    width="150px" height='120px' data-tag={item.contentsid} 
                    onClick={()=>{
                     infoboxHandler(i);
                     setCenter({
                       lat:Number(item.latitude),lng:Number(item.longitude)
                   }) 
                    }}></img>
                    <div style={{position:'relative',top:'-120px',left:'150px',marginLeft:'10px'}}>
                    <h3>{item.title}</h3>
                    <div style={{width:"300px"}}>
                    <h5 > {item.tag}</h5>
                    </div>
                   
                    </div>
                      
                   
                    </div>
                   
                    
                 
                    
                </div>
                  )
             })
           } 
           </Scrollbars>
          
          
         </div>
         <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
        opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
         
          {/* <GMap data ={spot} ></GMap> */}
          <Map data ={spot} ></Map>
       
         </div>
        </div>
  
      )
}

     const modalHandler =(event) =>{

      

     
        return(
            <div style={{overFlow:"none"}}>
      
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

            <AiFillCloseCircle style={{position:"absolute",right:'50px',
            width:"40px",height:"40px",}}onClick={closeModal}>close</AiFillCloseCircle>
          
  
             {dataHandler()}
            </Modal>
         
        </div>
        )
      
     }

        
 

    return (
        <div style={{width:'900px',height:"400px",paddingBottom:'50px'}}>
            <div style={{display:'flex',position:'relative',left:'285px'}}>
                <h2>Hello 제주 추천</h2>
            </div>
            <div style={{display:'flex',justifyContent:"space-around",position:'relative',
        top:'50px',left:'-150px'}}>
            <div style={{marginBottom:'150px'}}>
                <div>#호텔</div>
                <img style={{width:'150px',height:"120px",cursor:'pointer'}}alt='호텔' src='image/hotel.png'
                onClick={(event)=>openModal(event)} data-number={1}></img>
            </div>
            <div style={{}}>
                <h4>#쇼핑</h4>
                <div>
                    <img style={{width:'150px',height:'120px',cursor:'pointer'} } alt='쇼핑' src='image/쇼핑.png'
                    data-number={2} onClick={(event)=>openModal(event)}></img>
                </div>
            </div>
            <div>
            <div style={{width:'150px',height:'100px',marginBottom:'50px',
           }}>
                <div>#맛집</div>
                <img style={{width:'150px',height:'120px',cursor:'pointer'}} alt='맛집' src='image/restaurant.png'
                data-number={3} onClick={(event)=>openModal(event)}></img>
            </div>
            </div>
          
            <div>
            <div style={{position:'absolute',}}>
                <h4>#관광지</h4>
                <div>
                    <img style={{width:'150px',height:'120px'} } alt='관광지' src='image/beach.png'
                    data-number={4} onClick={(event)=>openModal(event)}></img>
                </div>
            </div>
            </div>
          
            </div>
          
         {modalHandler()}
        </div>
    );
};

export default React.forwardRef(Recomendation)                                ;
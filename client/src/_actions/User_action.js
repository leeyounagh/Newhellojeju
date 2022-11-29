import axios from 'axios';


import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    Add_TO_GOOD,
    ADD_SCHEDULE,
    REMOVE_GOOD_ITEM,
    ADD_COMMUNITY,
    REMOVE_SCHEDULE 
} from './types';


export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response =>response.data)
    return {
        type: AUTH_USER,
        payload: request
    }
}



export function addToGood(id,image,address,title) {
   let body={
        contentsId:id,
        image:image,
        address:address,
        title:title
    }
    const request = axios.post('/api/users/addToGood',body)
    .then(response =>response.data)
return {
    type: Add_TO_GOOD,
    payload: request
}
 
}


 

export function removeFromgood(contentsId) {


 
    const request = axios.get(`/api/users/removeFromGood?id=${contentsId}`)
    .then(response =>{
        
        return response.data}).catch((error)=>{
            console.log('error',error)
        })

    return {
        type: REMOVE_GOOD_ITEM,
        payload: request
    }
     
  
 }

 
export function addschedule(body) {


 
    const request = axios.post(`/api/users/addschedule`,body)
    .then(response =>{
        if(response.data.success===true){
          alert('스케쥴 업로드 성공했습니다.');
        
          
        
            
        }else{
          alert('스케쥴 업로드  실패했습니다.');
        }
    })

    return {
        type:  ADD_SCHEDULE,
        payload: request
    }
     
  
 }

 export function addcommunity(body) {


 
    const request = axios.post(`/api/users/addcommunity`,body)
    .then(response =>{
        if(response.data.success===true){
          alert('게시글 등록에 성공했습니다.');
        
          
        
            
        }else{
          alert('게시글 등록에 실패했습니다.');
        }
    })

    return {
        type: ADD_COMMUNITY,
        payload: request
    }
     
  
 }
 export function removeforschedule (contentsId) {
 
    const request =axios.get(`/api/users/removefromschedule?id=${contentsId}`)
         .then(response =>{
            
               console.log(response.data)
          return response.data}).catch((error)=>{
              console.log('error',error)
          })

     return {
         type: REMOVE_SCHEDULE,
         payload: request
     }
      
   
  }
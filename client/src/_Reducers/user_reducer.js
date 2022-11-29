import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    Add_TO_GOOD,
    REMOVE_GOOD_ITEM,
    ADD_SCHEDULE ,
    ADD_COMMUNITY,
    REMOVE_SCHEDULE
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
           
          case  REGISTER_USER:
              return {...state,register:action.payload}

              case  AUTH_USER:
                return {...state,userData:action.payload}

                case Add_TO_GOOD:
                    return {...state,
                        userData:{
                        ...state.userData,
                        good:action.payload
                    }}
                    case   REMOVE_GOOD_ITEM:
                        return {...state,userData:{
                            ...state.userData,
                            good:action.payload
                        }}

                        case     ADD_SCHEDULE :
                            return {...state,userData:{
                                ...state.userData,
                                schedule:action.payload
                            }}

                            
                        case     ADD_COMMUNITY :
                            return {...state,userData:{
                                ...state.userData,
                                commutity:action.payload}
                            }

                            case     REMOVE_SCHEDULE:
                                return {...state,userData:{
                                    ...state.userData,
                                    schedule:action.payload}
                                }
                
              
        default:
            return state;
    }
}
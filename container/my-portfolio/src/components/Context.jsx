import React, { useReducer, createContext, useEffect, act } from 'react';
import axios from 'axios';
import Answer from './answer/Answer'; // This component isn't used here but is imported
import { data } from 'react-router-dom';

export const dataContext = createContext();

export default function Context({ children }) {

 
    // Reducer function
    const servant =  (state, action) => {
         console.log(action.type);
        switch (action.type) {
            case 'about':{ 
               return { ...state, data:action.data.answer, name:action.data.name} 
            }
            
            case 'projects':
                {  
                return { ...state, data:action.data.answer, name:action.data.name}; 
            }

            case 'skills':
                { 
                // Returning updated state after the async call
                return { ...state,  data:action.data.answer,name:action.data.name }; 
            }


            default:
                return { ...state,  data:action.data.answer,name:action.data.name }; 
        }
    };

    const initialState = {
       data:null,
       name:null
       
    }; // Initial state

    // useReducer hook
    const [state, dispatch] = useReducer(servant, initialState);

   

    return (
        <dataContext.Provider value={{ state, dispatch }}>
              {children}
        </dataContext.Provider>
    );
}

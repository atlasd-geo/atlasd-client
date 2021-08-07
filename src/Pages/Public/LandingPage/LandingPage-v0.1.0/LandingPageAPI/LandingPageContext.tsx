import React, { 
    FC, 
    createContext,
    useReducer, 
    useContext,
    useEffect
} from 'react';


export interface LandingPageContextProps {
    _inProvider: boolean,
}


export const LandingPageDefaultContext : LandingPageContextProps = {
    _inProvider: true,
}

export const LandingPageOutsideProviderContext : LandingPageContextProps = {
    ...LandingPageDefaultContext,
    _inProvider: false,
}

export const LandingPageContext = createContext(LandingPageOutsideProviderContext);

/**
* @description 
*/
export const LandingPageReducer = (state : LandingPageContextProps, action : {
    type : string,
    payload : any
} )=>{
    switch (action.type) {

        default : {
            return {
                ...state,
                ...action.payload
            } as LandingPageContextProps
        }

    }
}


export type LandingPageProviderProps = {
    
}


export const LandingPageProvider : FC<LandingPageProviderProps>  = ({children}) =>{

    const [state, dispatch] = useReducer(LandingPageReducer, LandingPageDefaultContext);

    useEffect(()=>{
        
    })

    return (
        <LandingPageContext.Provider value={state}>{children}</LandingPageContext.Provider>
    )

}

/**
* @description 
*/
export const useLandingPageContext = ()=>{

    const context = useContext(LandingPageContext);

    if(!context._inProvider){
        throw new Error("useLandingPageContext must be called within a LandingPageProvider.");
    }

    return context;

}
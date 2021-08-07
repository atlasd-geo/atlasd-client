import React, { 
    FC, 
    createContext,
    useReducer, 
    useContext,
    useEffect
} from 'react';


export interface AnvilContextProps {
    _inProvider: boolean,
}


export const AnvilDefaultContext : AnvilContextProps = {
    _inProvider: true,
}

export const AnvilOutsideProviderContext : AnvilContextProps = {
    ...AnvilDefaultContext,
    _inProvider: false,
}

export const AnvilContext = createContext(AnvilOutsideProviderContext);

/**
* @description 
*/
export const AnvilReducer = (state : AnvilContextProps, action : {
    type : string,
    payload : any
} )=>{
    switch (action.type) {

        default : {
            return {
                ...state,
                ...action.payload
            } as AnvilContextProps
        }

    }
}


export type AnvilProviderProps = {
    
}


export const AnvilProvider : FC<AnvilProviderProps>  = ({children}) =>{

    const [state, dispatch] = useReducer(AnvilReducer, AnvilDefaultContext);

    useEffect(()=>{
        
    })

    return (
        <AnvilContext.Provider value={state}>{children}</AnvilContext.Provider>
    )

}

/**
* @description 
*/
export const useAnvilContext = ()=>{

    const context = useContext(AnvilContext);

    if(!context._inProvider){
        throw new Error("useAnvilContext must be called within a AnvilProvider.");
    }

    return context;

}
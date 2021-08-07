import React, { 
    FC, 
    createContext,
    useReducer, 
    useContext,
    useEffect
} from 'react';


export interface <FTName>ContextProps {
    _inProvider: boolean,
}


export const <FTName>DefaultContext : <FTName>ContextProps = {
    _inProvider: true,
}

export const <FTName>OutsideProviderContext : <FTName>ContextProps = {
    ...<FTName>DefaultContext,
    _inProvider: false,
}

export const <FTName>Context = createContext(<FTName>OutsideProviderContext);

/**
* @description 
*/
export const <FTName>Reducer = (state : <FTName>ContextProps, action : {
    type : string,
    payload : any
} )=>{
    switch (action.type) {

        default : {
            return {
                ...state,
                ...action.payload
            } as <FTName>ContextProps
        }

    }
}


export type <FTName>ProviderProps = {
    
}


export const <FTName>Provider : FC<<FTName>ProviderProps>  = ({children}) =>{

    const [state, dispatch] = useReducer(<FTName>Reducer, <FTName>DefaultContext);

    useEffect(()=>{
        
    })

    return (
        <<FTName>Context.Provider value={state}>{children}</<FTName>Context.Provider>
    )

}

/**
* @description 
*/
export const use<FTName>Context = ()=>{

    const context = useContext(<FTName>Context);

    if(!context._inProvider){
        throw new Error("use[FTName]Context must be called within a [FTName]Provider.");
    }

    return context;

}
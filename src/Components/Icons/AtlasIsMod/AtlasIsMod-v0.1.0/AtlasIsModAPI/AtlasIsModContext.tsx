import React, { 
    FC, 
    createContext,
    useReducer, 
    useContext,
    useEffect
} from 'react';


export interface AtlasIsModContextProps {
    _inProvider: boolean,
}


export const AtlasIsModDefaultContext : AtlasIsModContextProps = {
    _inProvider: true,
}

export const AtlasIsModOutsideProviderContext : AtlasIsModContextProps = {
    ...AtlasIsModDefaultContext,
    _inProvider: false,
}

export const AtlasIsModContext = createContext(AtlasIsModOutsideProviderContext);

/**
* @description 
*/
export const AtlasIsModReducer = (state : AtlasIsModContextProps, action : {
    type : string,
    payload : any
} )=>{
    switch (action.type) {

        default : {
            return {
                ...state,
                ...action.payload
            } as AtlasIsModContextProps
        }

    }
}


export type AtlasIsModProviderProps = {
    
}


export const AtlasIsModProvider : FC<AtlasIsModProviderProps>  = ({children}) =>{

    const [state, dispatch] = useReducer(AtlasIsModReducer, AtlasIsModDefaultContext);

    useEffect(()=>{
        
    })

    return (
        <AtlasIsModContext.Provider value={state}>{children}</AtlasIsModContext.Provider>
    )

}

/**
* @description 
*/
export const useAtlasIsModContext = ()=>{

    const context = useContext(AtlasIsModContext);

    if(!context._inProvider){
        throw new Error("useAtlasIsModContext must be called within a AtlasIsModProvider.");
    }

    return context;

}
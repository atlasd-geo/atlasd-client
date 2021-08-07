import React, { 
    FC, 
    createContext,
    useReducer, 
    useContext,
    useEffect
} from 'react';

/**
 * @description The ContributorIntroContext Provider provides context with these props.
 */
export interface ContributorIntroContextProps {
    _inProvider: boolean,
}

/**
 * @description By default, a ContributorIntro context within a ContributoIconContextProvider has following props and values upon initialization.
 */
export const ContributorIntroDefaultContext : ContributorIntroContextProps = {
    _inProvider: true,
}

/**
 * @description  A ContributorIntro context outside a ContributoIconContextProvider has following props and values upon initialization.
 */
export const ContributorIntroOutsideProviderContext : ContributorIntroContextProps = {
    ...ContributorIntroDefaultContext,
    _inProvider: false,
}

/**
 * @description The ContributorIntro context.
 */
export const ContributorIntroContext = createContext(ContributorIntroOutsideProviderContext);

/**
 * @description Handles changes to ConributorIntroContextState.
 * @param state is the state of the ContributorIntroContext
 * @param action is a Rredux-style action-type, action-payload object. 
 * @returns an updated version of the state.
 */
export const ContributorIntroReducer = (state : ContributorIntroContextProps, action : {
    type : string,
    payload : any
} )=>{
    switch (action.type) {

        default : {
            return {
                ...state,
                ...action.payload
            } as ContributorIntroContextProps
        }

    }
}

/**
 * @description Behavior of the ContributorIntroProvider can be modified with the following props.
 */
export type ContributorIntroProviderProps = {
    
}

/**
 * @description The ContributoIntro context provider.
 * @param param0 
 * @returns 
 */
export const ContributorIntroProvider : FC<ContributorIntroProviderProps>  = ({children}) =>{

    const [state, dispatch] = useReducer(ContributorIntroReducer, ContributorIntroDefaultContext);

    useEffect(()=>{
        
    })

    return (
        <ContributorIntroContext.Provider value={state}>{children}</ContributorIntroContext.Provider>
    )

}

/**
* @description A hook to access the ContributorIntro context.
*/
export const useContributorIntroContext = ()=>{

    const context = useContext(ContributorIntroContext);

    if(!context._inProvider){
        throw new Error("useContributorIntroContext must be called within a ContributorIntroProvider.");
    }

    return context;

}
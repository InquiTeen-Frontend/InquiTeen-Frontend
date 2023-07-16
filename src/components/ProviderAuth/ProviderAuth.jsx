import { INITIAL_STATE, reducerAuth } from "./ReducerAuth";
import { ContextAuth } from "./ContextAuth";
import { useReducer } from "react";

export default function ProviderAuth({children}){
    const [ state, dispatch ] = useReducer(reducerAuth, INITIAL_STATE)

    const values = {state, dispatch}

    return(
        <ContextAuth.Provider value={values}>
            {children}
        </ContextAuth.Provider>
    )
}
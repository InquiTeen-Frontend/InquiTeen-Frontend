import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../../ProviderAuth/ContextAuth";
import { TYPES } from "../../ProviderAuth/Types";

export default function ErrorModal({title, text, icon }){
    const navigate = useNavigate()
    const { dispatch } = useContext(ContextAuth)

    Swal.fire({
        title:title,
        text:text,
        icon:icon
    }).then(()=>{
        dispatch({
            type:TYPES.DELETE_DATA
        })
        navigate('/users/signin')
    })
}
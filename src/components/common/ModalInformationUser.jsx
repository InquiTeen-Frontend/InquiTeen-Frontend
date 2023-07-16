import Swal from "sweetalert2";
import { ContextAuth } from "../ProviderAuth/ContextAuth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import copyClipboard from '../../assets/components/copyClipboard.svg'

export default function ModalInformationUser(){
    const { state } = useContext(ContextAuth)

    const handlerCopy = () => {
        const url = `https://inquiteen.netlify.app/sendMessage/${state.username}`;
      
        const textField = document.createElement('input');
        textField.style.opacity = 0;
        textField.value = url;
        document.body.appendChild(textField);
        textField.select();
        
        let success = false;
        try {
          success = document.execCommand('copy');
        } catch (err) {
          success = false;
        }
      
        document.body.removeChild(textField);
      
        if (success) {
          Swal.fire({
            text: 'Share with friends or in your stories!',
            position: 'bottom',
            background: '#8BC34A',
            color: 'white',
            backdrop: 'none',
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true
          });
        } else {
          Swal.fire({
            text: 'Failed, try again later.',
            position: 'bottom',
            background: 'red',
            color: 'white',
            backdrop: 'none',
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true
          });
        }
      };      

    return(
        <section className="flex items-center justify-around flex-col h-56 ">
                <h1 className="text-3xl">Welcome to InquiTeen <b>{state.username}</b></h1>
                <article className="w-96 rounded-lgflex items-center justify-center flex-col p-2 pt-5 text-slate-100" >
                    <div className="h-1/2 w-full flex items-center justify-center gap-2">
                        <button onClick={handlerCopy} className="flex items-center justify-center gap-2 bg-white text-purple-700 p-1 rounded">
                            <img src={copyClipboard} width={30} alt="" />
                            <span className='cursor-pointer'>Copy your link here!</span>
                        </button>
                        <Link to={`/messages/${state.username}`} className="bg-purple-600 text-white p-2 rounded">View own messages</Link >
                    </div>
                </article>
            </section>
    )
}
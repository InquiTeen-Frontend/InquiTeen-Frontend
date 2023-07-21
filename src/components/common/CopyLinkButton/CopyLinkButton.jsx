import Swal from "sweetalert2";
import { useContext } from "react";
import { ContextAuth } from "../../ProviderAuth/ContextAuth";
import copyClipboard from '../../../assets/components/copyClipboard.svg'


export default function CopyLinkButton(){
    const { state } = useContext(ContextAuth)

    const handlerCopy = () => {
        if(!state.username){
          Swal.fire({
            title:'You have to login first 😉',
            text:'Or register if necessary',
            position:'bottom',
            backdrop:'none',
            showConfirmButton:false,
            timer:2500,
            timerProgressBar:true
          })
          
          return
        }

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
    <button onClick={handlerCopy} className="flex items-center justify-center gap-2 bg-white text-purple-700 p-1 rounded">
        <img src={copyClipboard} width={30} alt="" />
        <span className='cursor-pointer'>Copy your link here!</span>
    </button>
  )  
}
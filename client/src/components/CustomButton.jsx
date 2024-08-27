import { useSnapshot } from "valtio"
import state from  "../store"
// eslint-disable-next-line react/prop-types
export default function CustomButton({type, title, customStyles,handleClick}) {

  const snap = useSnapshot(state);

  const generateStyle =(type)=>{
    if(type === 'filled'){
      return {backgroundColor: snap.color, color: 'white'}
    }
  }
  return (
    <button style={generateStyle(type)} className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} onClick={handleClick}>{title}</button>
  )
}

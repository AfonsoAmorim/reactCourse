//renderização de hook 
import {useState} from "react";

const Manage = ()=>{
    const [number, setNumber] = useState(10);

    console.log(number);
return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(50)} >Mudar o state</button>
    </div>
)

}

export default Manage;


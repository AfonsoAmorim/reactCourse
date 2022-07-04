import {useState} from "react";


const Lista = () => {
    const [lista] = useState(["Aline", "Carlos", "Amorim", "Maria"]);
 
    return (
    <div>
        <ul>
            {lista.map((i)=>(
                <li>{i.toUpperCase()}</li>
            ))}
        </ul>
    </div>
  ) 
;}

export default Lista;
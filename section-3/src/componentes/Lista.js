import {useState} from "react";


const Lista = () => {
    const [lista] = useState(["Aline", "Carlos", "Amorim", "Maria"]);
 
    const [users] = useState([
        {id: 1, name: "Aline Josi", age: 22},
        {id: 2, name: "ALonso Morais", age: 12},
        {id: 3, name: "Jonas Seven", age: 55},
        {id: 4, name: "Livia Aline", age: 77},
    ])

    return (
    <div>
        <ul>
            {lista.map((item, indice)=>(
                <li key={indice}>{item.toUpperCase()}</li>
            ))}
        </ul>
        <ul>
            {users.map((usuario)=>(
              <li key={usuario.id}> {usuario.name} - {usuario.age}</li>  
            ))}
        </ul>


    </div>
  ) 
;}

export default Lista;
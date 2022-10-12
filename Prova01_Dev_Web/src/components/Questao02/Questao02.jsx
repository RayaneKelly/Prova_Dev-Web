import React, { useState } from "react";

const Questao02 = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [soma, setSoma] = useState(0);
    const [sub, setSub] = useState(0);
    const [mult, setMult]= useState(0);
    const [div,setDiv]= useState(0);

    const [resultado, setResultado]= useState(0)

    



    const somar = () =>{
        
        setSoma(parseFloat(num1)+ parseFloat(num2))     
        setResultado(soma)   
        // return soma
    }

    const subtracao = () =>{

        setSub(parseFloat(num1)-parseFloat(num2))  
        setResultado(sub)
        // return sub  
        
    }
    const multiplicacao = () =>{

        setMult(parseFloat(num1)* parseFloat(num2))   
        // return mult  
        return setResultado(mult)
        
    }

    const divisao = () =>{

        setDiv(parseFloat(num1)/parseFloat(num2))  
        // return div
        return setResultado(div)
        
    }

    const results = () =>{

         return resultado
    }
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </form>
            <div >
                <button onClick={somar} style={{margin:7, width:30, height:30}}>+</button>
                <button onClick={subtracao} style={{margin:7, width:30, height:30}}>-</button>
                <button onClick={multiplicacao} style={{margin:7, width:30, height:30}}>*</button>
                <button onClick={divisao} style={{margin:7, width:30, height:30}}>/</button>


                <p>Resultado </p>
                {results()}
            </div>

        </div>
    )
}

export default Questao02
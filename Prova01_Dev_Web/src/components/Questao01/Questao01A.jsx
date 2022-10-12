import React from "react";

const Questao01A = (props) => {
    const { nome, sobrenome, curso } = props

    return (
        <div style={{textAlign:'left', margin: 50}}>
            <h2> Nome: {nome} </h2> 
            <h2> Sobrenome: {sobrenome}</h2> 
            <h2>Curso:{curso}</h2> 

        </div>
    )
}

export default Questao01A
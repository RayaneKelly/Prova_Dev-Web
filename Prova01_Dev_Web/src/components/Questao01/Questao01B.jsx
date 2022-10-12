import React from "react";

const Questao01B = (props)=>{
    let Disciplinas =['FUP','IHC', 'PIDM']
    return (
        <div style={{textAlign:'left', margin: 50}}>
            <h4>Disciplinas</h4>

            {
                Disciplinas.map(
                    (disciplina) => {
                        return (
                            <p> {disciplina}</p>
                        )
                    }
                      
                )
            }

        </div>

    )
}


export default Questao01B;
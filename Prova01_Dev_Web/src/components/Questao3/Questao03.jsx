import axios from "axios";
import React, { useEffect, useState } from "react";

const Questao03 = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

 

    useEffect(
        () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+offset)
                .then(
                    (response) => {
                        // console.log('aqui', response.data.results)
                        setPokemons(response.data.results)

                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, [offset]
    )

        
    const listaPokemons = () => {
        // console.log('poke',pokemons)
        return pokemons.map(
            (element,index) => {

                    return (
                        <tr>
                            <td>{element.name}</td>
                        </tr>
                    )
                }
            )
        
        // return (
        //     <div>
        //         {JSON.stringify(pokemons)}
        //     </div>
        // )

    }

    const adicionarPoke = () =>{
        setOffset(offset+10)
    }

    return (
        <div>
            <h1>Lista de Pokemons </h1>
            <table className='table table-striped'>
    
                <tbody>
                    {listaPokemons()}
                </tbody>
            </table>


            <button onClick={adicionarPoke}>Mostrar +10 pokemons</button>
        </div>
    )

}

export default Questao03


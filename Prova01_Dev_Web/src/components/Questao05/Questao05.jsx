import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const Questao05 = () => {

    const [pop, setPop] = useState(0)
    const [popMenos, setPopMenos] = useState(2000000000)
    const [nameMais, setNameMais] = useState('')
    const [nameMenos, setNameMenos] = useState('')
    const [pais, setPais] = useState('africa')
    const [dadosPais, setDadosPais] = useState([])


    useEffect(
        () => {
            axios.get('https://restcountries.com/v2/region/'+pais+'?fields=name,population')
                .then(
                    (response) => {
                        setDadosPais(response.data)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, []
    )

    const listaPaises = () => {
        return dadosPais.map(
            (element, index) => {
                return (

                    <tr>
                        <td>{element.name}</td>
                        <td style={{ textAlign: "left" }}>{element.population}</td>
                    </tr>


                )
            }
        )

    }
    const mudarAmerica = () => {
        setPais('americas')
    }

    const mudarAsia = () => {
        setPais('asia')
    }

    const calculoPopulosos = () => {

        if ((pais === 'africa') || (pais === 'americas')) {

            dadosPais.map(
                (element, index) => {
                    if (pop < element.population) {
                        setPop(element.population)
                        setNameMais(element.name)
                        return null
                    }

                }
            )
            // }
            return (<p> O País mais populoso é: {nameMais}</p>)
        }

        else if (pais === 'asia') {

            dadosPais.map(
                (element, index) => {
                    if (popMenos > element.population) {
                        setPopMenos(element.population)
                        setNameMenos(element.name)
                        // console.log('nome', pop, 'nome', element.name)
                    

                    }

                }
            )
            // }

            return (<p> O País menos populoso é: {nameMenos}</p>)
        }
    }
    return (
        <div>
            <div style={{ marginTop: 30 }}>
                <button onClick={mudarAmerica} style={{ margin: 20 }}>Americas</button>
                <button onClick={mudarAsia}>Asia</button>
                {
                    calculoPopulosos()
                }
            </div>

            <table className='table'>
                <thead class="table-light">
                    <tr>
                        <th>País</th>
                        <th>População</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises()}
                </tbody>
            </table>
        </div>
    )
}

export default Questao05
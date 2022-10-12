import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const Questao05 = () => {

    const [pop, setPop] = useState(0)
    const [popMenos, setPopMenos]= useState(0)
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

    const calculoPopulosos = () => {
       

        if (pais === 'asia') {
    
            dadosPais.map(
                (element, index) => {
                    if (popMenos> element.population) {
                        setPopMenos(element.population)
                        console.log('pops menos do valor maior',popMenos)
        
                            setNameMenos(element.name)
                            console.log('aaaa', pop, 'nome', element.name)
                        // }
                       
                    }

                }
            )
            // }
            return (<p> O País menos populoso é: {nameMenos}</p>) 
        }
        

        if (pais === 'africa' || pais === 'americas') {

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
      

    }

    const calculoMenosPopulosos = () => {
        // if (pais === 'asia') {
            if (pais === 'africa' || pais === 'americas') {
            dadosPais.map(
                (element, index) => {
                    if (pop < element.population) {
                        setPopMenos(element.population)

                       
                            console.log('aaaa', popMenos, 'nome', element.name)
                        // }
                       
                    }

                }
            )
            // }
            return (<p> O País menos populoso é: {nameMenos}</p>)
        }

    
        }
        



    const mudarAmerica = () => {
        setPais('americas')
    }

    const mudarAsia =() =>{
        setPais('asia')
    }



    return (
        <div>
            <div style={{marginTop:30}}>
                <button onClick={mudarAmerica} style={{margin:20}}>Americas</button>
                <button onClick={mudarAsia}>Asia</button>
                {
                    calculoPopulosos()
                    // calculoMenosPopulosos()
            
                    
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
import axios from "axios"
import { useEffect, useState } from "react"

const Questao04 = () => {
    const [africa, setAfrica] = useState([])
    const [pop, setPop] = useState(0)
    const [name, setName] = useState('')

    useEffect(
        () => {
            axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
                .then(
                    (response) => {
                        setAfrica(response.data)
                        // setPop(response.data.population)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, []
    )

    const listaPaisesAfrica = () => {
        return africa.map(
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

    const maisPopuloso = () => {
        return africa.map(
            (element, index) => {
                if (pop < element.population) {
                    setPop(element.population)
                    setName(element.name)
                    return null
                }

            }
        )
    }

    return (
        <div>
            <h2>Paises da Africa</h2>

            <h3> O País mais populoso é: {name}</h3>

            {maisPopuloso()}


            <table className='table'>

                <thead class="table-light">
                    <tr>
                        <th>País</th>
                        <th>População</th>

                    </tr>
                </thead>
                <tbody>
                    {listaPaisesAfrica()}
                </tbody>




            </table>


        </div>
    )
}

export default Questao04
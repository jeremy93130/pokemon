import { useState, useEffect } from "react"


const Home = () => {
    const [pokemon, setPokemon] = useState([])
    // const [id, setId] = useState(1)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(res => res.json())
            .then(res => setPokemon(res)
            )
    }, [])


    return (
        <div>
            <img src={pokemon} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <p>{pokemon.height} - {pokemon.weight}</p>
        </div>
    )
}

export default Home
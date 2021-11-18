import { useState, useEffect } from "react"


const Home = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(res => res.json())
            .then(res => setPokemon(res)
            )
    }, [])

    function randomButton() {
        let random = Math.floor(Math.random() * (151 - 1 + 1) + 1)
        setId(random)

        fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(res => res.json())
            .then(res => setPokemon(res)
            )
    }

    return (
        <>
            {pokemon === null ?
                <h2>Il n'y a pas de pokemon</h2>
                :
                <div className="aligne">
                    <div className="container flex">
                        <div className="image">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} alt={pokemon.name} />
                            <div className="infos">
                                <h1>{pokemon.name}</h1>
                                <p>height : {pokemon.height} -  weight : {pokemon.weight}</p>
                                <p>types: </p>
                                {pokemon.types.map(type => (
                                    <li>{type.type.name}</li>
                                ))}
                            </div>
                        </div>
                        <div className="image">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`} alt={pokemon.name} />
                            <div className="infos">
                                <h1>{pokemon.name}</h1>
                                <p>height : {pokemon.height} -  weight : {pokemon.weight}</p>
                                <p>types: </p>
                                {pokemon.types.map(type => (
                                    <li>{type.type.name}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button type="button" onClick={randomButton}>Random Pokemon</button>
                    </div>
                </div>

            }

        </>

    )
}

export default Home
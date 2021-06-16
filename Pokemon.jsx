import React, {useState, useEffect} from "react"
import {Stylesheet, View} from "react-native"
import Individual from "./Individual"
import SearchPokemon from "./SearchPokemon"

export default function Pokemon(){
    const styles = Stylesheet.create({
        container:{
            flex: 1
        },
        individualPokemon:{

        }
    })

    const [first100Pokemon, setFirst100Pokemon] = useState([])
    const [foundPokemon, setFoundPokemon] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    const URL = `https://pokeapi.co/api/v2/pokemon/`

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = () => {
        for (let i = 0; i < 151; i++){
            fetch(pokeUrl)
                .then(response => response.json())
                .then(data => setFirst100Pokemon([first100Pokemon, ...data]))
        }
    }

    const renderPokemon = () => {
        return first100Pokemon.map((pokemon) => {
            <Individual key={pokemon.id} pokemon={pokemon} />
        })
    }

    const setPokemonName = (name) => {
        setSearchTerm(name)
    }

    const filterAPI = () => {
        let newURL = URL + `${searchTerm}`
        fetch(newURL)
            .then(response => response.json())
            .then(data => setFoundPokemon([foundPokemon, ...data]))
    }

    

    return (
        <View style={styles.container}>
            <SearchPokemon setPokemonName={setPokemonName} />
            {renderPokemon()}
        </View>
    )


}
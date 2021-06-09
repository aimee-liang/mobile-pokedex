import React, {useState, useEffect} from "react"
import {Stylesheet, View} from "react-native"
import Individual from "./Individual"

export default function Pokemon(){
    const styles = Stylesheet.create({
        container:{
            flex: 1
        },
        individualPokemon:{

        }
    })

    const [first100Pokemon, setFirst100Pokemon] = useState([])
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`

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

    return (
        <View style={styles.container}>
            {renderPokemon()}
        </View>
    )


}
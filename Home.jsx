import React, {useState, useEffect} from 'react'
import Individual from './Individual'
import Pokemon from './Pokemon'
import SearchPokemon from './SearchPokemon'
import {Stylesheet, View, Text} from 'react-native'

export default function Home (){

    // const styles = Stylesheet.create({
    //     container: {
    //         flex: 1,
    //         alignItems: "center"
    //     },
    //     header: {
    //         backgroundColor: "red"
    //     },
    //     pokedexText: {
    //         color: "yellow",
    //         fontSize: 26
    //     }
    // })

    // const [pokemon, setPokemon] = useState([])

    // const fetchPokemon = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //         .then(response => response.json())
    //         .then(data => setPokemon(data.results))
    //         .catch(err => console.error(err))
    // }

    // const allUrls = () => {
    //     pokemon.forEach((pokeObj) => {
    //         return <Individual pokemon={pokeObj} url={pokeObj.url} />
    //     })
    // }

    // useEffect(() => {
    //     fetchPokemon()
    // }, [])

    const [searchTerm, setSearchTerm] = useState("")
    const [foundPokemon, setFoundPokemon] = useState([])
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`

    const setPokemonName = name => {
        setSearchTerm(name)
    }

    const filterAPI = () => {
        let newURL = pokeUrl + `${searchTerm}`
        fetch(newURL)
            .then(response => response.json())
            .then(data => setFoundPokemon([foundPokemon, ...data]))
    }

    const renderTheFoundPokemon = () => {
        return <div>{foundPokemon}</div>
    }

    return (
        <View>
            <Text>Pokedex</Text>
            {/* {allUrls()} */}
            <SearchPokemon/>
            <Pokemon/>
            {/* <Individual pokemon={pokemon}/> */}
        </View>
    )
}
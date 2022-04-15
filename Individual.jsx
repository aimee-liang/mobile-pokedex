import React, {useState, useEffect} from 'react'
import {Stylesheet, View, Text, Image} from 'react-native'

export default function Individual(props){
    // const styles = Stylesheet.create({
    //     container: {
    //         flex: 1
    //     },
    //     frontSprite:{
    //         height: "200",
    //         width: "200"
    //     },
    //     pokeName: {
    //         fontWeight: "bold"
    //     }
    // })

    const [pokeData, setPokeData] = useState([])
    const pokeObj = props.pokemon
    
    // const fetchPokeUrl = () => {
    //     fetch(props.pokemon)
    // }

    const pokeDiv = pokeObj => {
        pokeObj.forEach((poke) => {
            return (
                <Text>{poke.name}</Text>
            )
        })
    }


    return (
        <View>
            {pokeDiv(pokeObj)}
        </View>
    )
}
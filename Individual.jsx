import React from 'react'
import {Stylesheet, View, Text, Image} from 'react-native'

export default function Individual(props){
    const styles= Stylesheet.create({
        container: {
            flex: 1
        },
        frontSprite:{
            height: "200",
            width: "200"
        },
        pokeName: {
            
        }
    })

    return (
        <View style={styles.container}>
            <Image style={styles.frontSprite}>{props.pokemon["sprites"]["front_default"]}</Image>
            <Text>{props.pokemon.name}</Text>
            <Text>{props.pokemon["types"]["type"]["name"]}</Text>
        </View>
    )
}
import React from 'react'
import {Stylesheet, View, Text, Image} from 'react-native'

export default function Individual(props){
    const styles= Stylesheet.create({
        container: {
            flex: 1
        }
    })

    return (
        <View style={styles.container}>
            <Image>{props.pokemon["sprites"]["front_default"]}</Image>
            <Text>{props.pokemon.name}</Text>
            <Text>{props.pokemon["types"]["type"]["name"]}</Text>
        </View>
    )
}
import React from 'react'
import {Stylesheet, View, Text} from 'react-native'

export default function Berry(props){
    const styles= Stylesheet.create({
        container: {
            flex: 1
        },
        berryName: {
            fontSize: 24,
            fontWeight: "bold"
        },
        pokeType: {
            fontSize: 18
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.berryName}>{props.berry["name"]}</Text>
            <Text style={styles.pokeType}>{props.berry["natural_gift_type"]["name"]}</Text>
        </View>
    )
}

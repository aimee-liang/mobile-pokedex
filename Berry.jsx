import React from 'react'
import {Stylesheet, View, Text} from 'react-native'

export default function Berry(props){
    const styles= Stylesheet.create({
        container: {
            flex: 1
        },
        berryName: {
            fontWeight: "bold"
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.berryName}>{props.berry["name"]}</Text>
        </View>
    )
}

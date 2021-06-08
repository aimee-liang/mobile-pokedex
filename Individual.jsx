import React from 'react'
import {Stylesheet, View, Text} from 'react-native'

export default function Individual(){
    const styles= Stylesheet.create({
        container: {
            flex: 1
        }
    })

    return (
        <View style={styles.container}>

        </View>
    )
}
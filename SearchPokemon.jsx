import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        }
    })

    return (
        <View style={styles.container}>
            <TextInput>
                
            </TextInput>
        </View>
    )
}
import React, {useState} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        }
    })

    const [pokemonName, setPokemonName] = useState("")

    return (
        <View style={styles.container}>
            <TextInput onChangeText={}></TextInput>
        </View>
    )
}
import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        }
    })

    const [pokeName, setPokeName] = useState("")

    const searchBarHandler = () => {
        props.setPokemonName(pokeName)
        setPokemonName("")
        Keyboard.dismiss()
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setPokeName} value={pokeName} placeholder="Enter a Pokemon Name"></TextInput>
            <Button onPress={searchBarHandler} title="🔎" />
        </View>
    )
}
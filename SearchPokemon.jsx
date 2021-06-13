import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Modal } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        }
    })

    const [pokemonName, setPokemonName] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setPokemonName} value={pokemonName} placeholder="Enter a Pokemon Name"></TextInput>
        </View>
    )
}
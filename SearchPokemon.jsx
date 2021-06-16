import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Modal, Button, Keyboard } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        },
        modalContainer:{

        }
    })

    const [pokeName, setPokeName] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const updateVisibility = () => {
        setModalVisible(!modalVisible)
    }

    const searchBarHandler = () => {
        props.setPokemonName(pokeName)
        setPokemonName("")
        Keyboard.dismiss()
    }

    return (
        <>
            <Modal visible={modalVisible} onPress={updateVisibility}>Looking for a Pokemon? </Modal>
            <View style={styles.container}>
                <TextInput onChangeText={setPokeName} value={pokeName} placeholder="Enter a Pokemon Name"></TextInput>
                <Button onPress={searchBarHandler} title="🔎"/>
            </View>
        </>
    )
}
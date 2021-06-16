import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Modal, Button } from 'react-native'

export default function SearchPokemon(){
    const styles = StyleSheet.create({
        container:{
            flex: 1
        },
        modalContainer:{

        }
    })

    const [pokemonName, setPokemonName] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const updateVisibility = () => {
        setModalVisible(!modalVisible)
    }

    const searchBarHandler = () => {
        
    }

    return (
        <>
            <Modal visible={modalVisible} onPress={updateVisibility}>Looking for a Pokemon? </Modal>
            <View style={styles.container}>
                <TextInput onChangeText={setPokemonName} value={pokemonName} placeholder="Enter a Pokemon Name"></TextInput>
                <Button></Button>
            </View>
        </>
    )
}
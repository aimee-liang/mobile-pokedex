import React, {useState} from 'react'
import {Stylesheet, View, Text, Modal} from 'react-native'
import {NativeRouter, Route} from 'react-router-native'

export default function Home (){

    const styles = Stylesheet.create({
        container: {
            flex: 1,
            alignItems: "center"
        },
        header: {
            backgroundColor: "red"
        },
        pokedexText: {
            color: "yellow",
            fontSize: 26
        }
    })

    const [modalVisible, setModalVisible] = useState(false)

    const updateVisibility = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <NativeRouter>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.pokedexText}>Pokedex</Text>
                </View>

                <Modal visible={modalVisible} onPress={updateVisibility}></Modal>
                <Route exact path="/pokemon" render={() => <Pokemon />} />
                <Route exact path="/berries" render={() => <Berries/>} />
            </View>
        </NativeRouter>
    )
}
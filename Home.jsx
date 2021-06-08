import React from 'react'
import {Stylesheet} from 'react-native'
import {NativeRouter, Route} from 'react-router-native'

export default function Home (){

    const styles = Stylesheet.create({
        container: {
            flex: 1,
            alignItems: "center"
        }
    })

    return (
        <NativeRouter>
            <View style={styles.container}>
                <Route exact path="/pokemon" render={() => <Pokemon />} />
                <Route exact path="/berries" render={() => <Berries/>} />
            </View>
        </NativeRouter>
    )
}
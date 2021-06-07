import React from 'react'
import {Stylesheet} from 'react-native'
import {NativeRouter, Route} from 'react-router-native'

export default function Home (){

    const styles = Stylesheet.create({
        flex: 1,
        alignItems: "center"
    })

    return (
        <NativeRouter>
            <Route exact path="/pokemon" />

        </NativeRouter>
    )
}
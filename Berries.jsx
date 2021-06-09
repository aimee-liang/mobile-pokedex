import React, {useState, useEffect} from 'react'
import {Stylesheet} from 'react-native'
import Berry from "./Berry"

export default function Berries(){
    const styles = Stylesheet.create({
        container: {
            flex: 1
        }
    })

    const [allBerries, setAllBerries] = useState([])
    const berriesUrl = `https://pokeapi.co/api/v2/berry/${i}`

    useEffect(() => {
        fetchBerries()
    }, [])

    const fetchBerries = () => {
        for (let i = 0; i <= 50; i++){
            fetch(berriesUrl)
                .then(response => response.json())
                .then(data => setAllBerries([allBerries, ...data]))
        }
    }

    const renderBerries = () => {
        return allBerries.map((berry) => {
            <Berry key={berry.id} berry={berry} />
        })
    }

    return (
        <View style={styles.container}>
            {renderBerries()}
        </View>
    )
}
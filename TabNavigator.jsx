import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'


const TabNavigator = createBottomTabNavigator({
    Pokemon: {
        screen: Pokemon
    },
    Berries: {
        screen: Berries
    }
})
import { View, Text } from 'react-native'
import React from 'react'

//assets
import Icon from '../assets/icons/Icon'

//theme
import { color } from '../theme/colors'

//screens
import DefaultLayout from './Layouts/DefaultLayout'

// common
import Button from '../components/commons/Button'


const SplashScreen = () => {
    return (
        <DefaultLayout>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                    name="Logo"
                    fill={color.Black}
                    width={200}
                    height={200}
                />
                <Button title="Next" />
            </View>
        </DefaultLayout>
    )
}

export default SplashScreen
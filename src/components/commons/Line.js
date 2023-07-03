import React from 'react'
import { View } from 'react-native'

export const Line = ({ ...props }) => {
    return (
        <View
            style={[
                {
                    backgroundColor: props.color,
                    alignSelf: 'center',
                    width: props.width ? props.width : '100%',
                    height: props.height,
                    ...props.styles
                },
            ]}
        />
    )
}
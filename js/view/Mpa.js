import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { MapView } from 'react-native-amap3d'

const { width, height } = Dimensions.get('window')

class Map extends React.PureComponent {
    state = {
        latitude: 39.91095,
        longitude: 116.37296
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height
            }}>
                <MapView
                    style={{ width: '100%', height: '100%' }}
                    center={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    }}
                />
            </View>
        )
    }
}

export default Map

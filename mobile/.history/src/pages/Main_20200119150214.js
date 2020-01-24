import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [curretRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function LoadInitPosition() {
            const { granted } = await requestPermissionsAsync();
            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }
        LoadInitPosition();
    }, []);

    return <MapView initialRegion={curretRegion} style={styles.map} />
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})

export default Main;
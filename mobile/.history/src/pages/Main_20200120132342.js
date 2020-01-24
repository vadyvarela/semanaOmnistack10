import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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

    if(!curretRegion){
        return null;
    }

    return (
        <MapView initialRegion={curretRegion} style={styles.map}>
            <Marker coordinate={}>
                <Image style={styles.avatar} source={{ uri:  }} />
            <Marker/>
        <MapView/>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: "#fff",
    }
})

export default Main;
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    useEffect(() => {
        async function LoadInitPosition() {

        }
        LoadInitPosition();
    }, []);

    return <MapView style={styles.map} />
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})

export default Main;
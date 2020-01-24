import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {
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
            <Marker coordinate={() => {
                navigation.navigate('Profile', {
                    github_username: 
                })
            }}>
                <Image style={styles.avatar} source={{ uri:  }} />
                <Callout onPress={}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Vady Varela</Text>
                        <Text style={styles.devBio}>Text</Text>
                        <Text style={styles.devTechs}>React Native, ReactJs, NodeJs</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
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
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    }
})

export default Main;
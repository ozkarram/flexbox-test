import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100
    },
    container: {
        backgroundColor: '#ff2c2a',
    }
});

export default class Pug extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.square}
                    source={require('../Images/pug.png')}
                />
            </View>
        );
    }
}
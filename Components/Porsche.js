import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100
    },
    container: {
        backgroundColor: '#0f0aff',
    }
});

export default class Porsche extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.square}
                    source={require('../Images/porsche.png')}
                />
            </View>
        );
    }
}
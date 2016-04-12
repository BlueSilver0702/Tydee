'use strict';
import React, { Component, PixelRatio, StyleSheet, Text, View } from 'react-native';

class Item extends Component {
    render() {
        console.log("panel was loaded");

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <Text style={styles.value}>{this.props.value}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {

    },
    label: {
        color: '#333333',
        marginLeft: 10,
        marginTop: 10
    },
    value: {
        color: '#333333',
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center'
    }
});

module.exports = Item;
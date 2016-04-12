'use strict';
import React, { Component, Image, PixelRatio, StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Actions} from 'react-native-router-flux'

var settings = (<Icon name="cog" size={24} color="#BBB" />);

class Header extends Component {
    render() {
        console.log("header was loaded");

        return (
            <View style={styles.header}>
                <Button key="btnSettings" containerStyle={styles.button} style={styles.text} onPress={Actions.settings}>{settings}</Button>
                <Image source={require('image!tydee')} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    button: {
        position: 'absolute',
        left: 10,
        top: 30
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 0,
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 40
    }
});

module.exports = Header;
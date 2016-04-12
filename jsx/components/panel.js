'use strict';
import React, { Component, PixelRatio, StyleSheet, View } from 'react-native';

class Panel extends Component {
    render() {
        console.log("panel was loaded");

        return (
            <View style={styles.panel}>
                {this.props.children}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    panel: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginHorizontal: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: .3
    }
});

module.exports = Panel;
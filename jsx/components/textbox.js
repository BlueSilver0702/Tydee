'use strict';
import React, { Component, PixelRatio, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from 'react-native-form'

class Textbox extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            text: undefined
        });
    }

    render() {
        console.log("panel was loaded");

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    name={this.props.name}
                    style={styles.textbox}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    label: {
        color: '#333333',
        marginLeft: 10,
        marginTop: 10
    },
    textbox: {
        color: '#333333',
        marginVertical: 5,
        marginLeft: 30,
        marginRight: 10,
        height: 40
    }
});

module.exports = Textbox;
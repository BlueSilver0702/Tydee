import React, { Component, Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'
import Form from 'react-native-form'
import Item from '../components/item'
import TextBox from '../components/textbox'

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageHolder}>
                    <Image style={styles.image} source={{uri: this.props.profile.picture}}/>
                </View>

                <Text style={styles.title}>User Info</Text>
                <View style={styles.group}>
                    <Item label="Authenticated Platform:" value={this.props.profile.identities[0].provider == 'google-oauth2' ? 'Google' : 'Facebook'} />
                    <Item label="Name:" value={this.props.profile.name} />
                </View>

                <Text style={styles.title}>Address</Text>
                <View style={styles.group}>
                    <Form ref="form">
                        <TextBox label="Street" name="street" />
                        <TextBox label="City" name="city" />
                        <TextBox label="State" name="state" />
                        <TextBox label="Zip" name="zip" />
                    </Form>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70
    },
    group: {
        backgroundColor: '#F7F7F7',
        borderColor: '#BBBBBB',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        flex: 0,
        marginVertical: 10,
        paddingBottom: 10
    },
    image: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        width: 100,
        height: 100
    },
    imageHolder: {
        alignItems: 'center'
    },
    title: {
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    }
});

module.exports = Settings;
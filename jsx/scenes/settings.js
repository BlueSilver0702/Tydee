import React, { Component, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'
import Communications from 'react-native-communications'

class Settings extends Component {
    render(){
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>ACCOUNT</Text>
                <View style={styles.group}>
                    <Button key="btnProfile" containerStyle={styles.button} style={styles.text} onPress={Actions.profile}>Profile</Button>
                    <Button key="btnSubscription" containerStyle={styles.button} style={styles.text} onPress={Actions.subscription}>Subscription</Button>
                    <Button key="btnHistory" containerStyle={styles.button} style={styles.text} onPress={Actions.history}>History</Button>
                </View>

                <Text style={styles.title}>LEGAL</Text>
                <View style={styles.group}>
                    <Button key="btnPrivacy" containerStyle={styles.button} style={styles.text} onPress={() => Communications.web('http://tydee.io/legal/privacypolicy.html')}>Privacy Policy</Button>
                    <Button key="btnTerms" containerStyle={styles.button} style={styles.text} onPress={() => Communications.web('http://tydee.io/legal/termsofservice.html')}>Terms of Service</Button>
                </View>

                <View style={styles.group}>
                    <Button key="btnReport" containerStyle={styles.button} style={styles.text} onPress={() => Communications.email('issues@tydee.io','youremail@yourdomain.com',null,'Tydee App | Report A Problem','Please describe the issue below:')}>Report A Problem</Button>
                </View>

                <View style={styles.group}>
                    <Button key="btnLogout" containerStyle={styles.button} style={styles.text} onPress={() => this.logout()}>Logout</Button>
                </View>
            </ScrollView>
        );
    }

    logout() {
        this.setState({
            logged: false,
            profile: undefined,
            token: undefined
        });

        Actions.home;
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#DDDDDD',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center'
    },
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
        marginVertical: 10
    },
    text: {
        color: '#555555'
    },
    title: {
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    }
});

module.exports = Settings;
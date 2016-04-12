import React, { Component, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import Panel from '../components/panel'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons'
import {Actions} from 'react-native-router-flux'

import cred from '../../ignore/credentials';
//import Firebase  from 'firebase';

//let ref = new Firebase(_getFirebaseRef());

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: 0,
            postResult: undefined,
            result: undefined,
            scene: undefined
        };

        //this.queueRef = new Firebase(_getFirebaseRef()+'/queue');
    }

    //listenForQueue(queueRef) {
    //    queueRef.on('value', (snap) => {
    //        // get children as an array
    //        var queue = [];
    //        snap.forEach((child) => {
    //            queue.push({
    //                title: child.val().title,
    //                _key: child.key()
    //            });
    //        });
    //
    //        //this.setState({
    //        //    dataSource: this.state.dataSource.cloneWithRows(queue)
    //        //});
    //    });
    //}

    //componentDidMount() {
    //    this.listenForQueue(this.queueRef);
    //}

    render(){
        console.log("home was loaded");

        const code = {
            0: {
                button: 'Schedule Pickup',
                message: 'Charlestowne Apartments' + '\n' + '50 Creekside Drive NW, Apt 232',
                phase: 'idle',
                status: ''
            },
            1: {
                button: 'Cancel Pickup',
                message: 'Your trash will be picked up' + '\n' + 'Monday January 2' + '\n' + 'Between 6 p.m. - 8 p.m.',
                phase: 'scheduled',
                status: 'SCHEDULED'
            },
            2: {
                button: 'Confirm Tydee Pickup',
                message: 'Your trash will be picked up' + '\n' + 'Monday January 2' + '\n' + 'Between 6 p.m. - 8 p.m.',
                phase: 'enroute',
                status: 'ON OUR WAY'
            },
            3: {
                button: 'Rate your Pickup',
                message: 'Confirm your trash was' + '\n' + 'successfully picked up today' + '\n' + 'and earn Member Points',
                phase: 'complete',
                status: 'ALL TYDEE'
            }
        };

        return (
            <View style={styles.container}>
                <Header />

                <View style={styles.section}>
                    <Image style={styles.background} source={require('image!homeBG')}>
                        <View style={styles.body}>
                            <Panel>
                                <View style={styles.status}>
                                    <Text style={this.state.code > 0 ? styles.titleActive : styles.title}>
                                        Pickup Indicator
                                    </Text>
                                    <View style={styles.indicator}>
                                        <View style={this.state.code == 3 ? styles.indicatorActive3 : styles.indicator3}>
                                            <Text style={styles.text}>
                                                {this.state.code == 3 ? code[3].status : ''}
                                            </Text>
                                        </View>
                                        <View style={this.state.code > 1 ? styles.indicatorActive2 : styles.indicator2}>
                                            <Text style={styles.textActive}>
                                                {this.state.code > 1 ? code[2].status : ''}
                                            </Text>
                                        </View>
                                        <View style={this.state.code > 0 ? styles.indicatorActive1 : styles.indicator1}>
                                            <Text style={styles.text}>
                                                {this.state.code > 0 ? code[1].status : ''}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </Panel>

                            <Panel>
                                <View style={styles.action}>
                                    <Text style={styles.message}>
                                        {this.state.code ? code[this.state.code].message : code[0].message}
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.actionButton}
                                                  //onPress={() => this.changeStatus()}
                                    >
                                    <Text style={styles.actionText}>
                                        {this.state.code ? code[this.state.code].button : code[0].button}
                                    </Text>
                                </TouchableOpacity>
                            </Panel>

                            <Panel>
                                <TouchableOpacity style={styles.referral}
                                    //onPress={() => navigator.pop()}
                                    >
                                    <Text style={styles.link}>Refer a friend today!</Text>
                                    <Image style={styles.iconRight} source={require('image!next')} />
                                </TouchableOpacity>
                            </Panel>
                        </View>
                    </Image>
                </View>
            </View>
        );
    }

    //updateQueue() {
    //    console.log("Authenticated successfully with payload:");
    //
    //    this.queueRef.push({
    //        "address": {
    //            "complex": "The complex worked",
    //            "street": "123 street",
    //            "city": "City",
    //            "state": "ST",
    //            "zip": "01234"
    //        },
    //        "status": 2,
    //        "tydeeId": this.props.profile.userId
    //    });
    //
    //    this.setState({
    //        logged: true
    //    });
    //}

    //changeStatus() {
    //    this.updateQueue(this.props.ref_token, this.props.authData);
    //}
}

var styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    section: {
        flex: 1,
        overflow: 'hidden'
    },

    action: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        position: 'relative'
    },
    actionButton: {
        backgroundColor: '#258902',
        borderRadius: 25,
        flex: 1,
        height: 50,
        overflow: 'hidden',
        padding: 13
    },
    actionText: {
        color: '#ffffff',
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    body: {
        flex: 1,
        justifyContent: 'space-around'
    },
    button: {
        marginHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    content: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginHorizontal: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: .3
    },
    footer: {
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        flex: 0,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: -0.5},
        shadowOpacity: .3
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        flex: 0,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        paddingTop: 30,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: .3
    },
    iconRight: {
        marginHorizontal: 10,
        position: 'absolute',
        right: 20
    },
    indicator: {
        alignSelf: 'center',
        //backgroundColor: '#f00',
        flex: 1,
        flexDirection: 'row',
        height: 26,
        //marginHorizontal: 20,
        //marginVertical: 20,
        position: 'relative',
        //shadowColor: '#000000',
        //shadowOffset: {width: 1, height: 1},
        //shadowOpacity: .3,
        width: 330
    },
    indicator1: {
        backgroundColor: '#EEEEEE',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        left: 0,
        paddingHorizontal: 12,
        position: 'absolute',
        width: 116
    },
    indicatorActive1: {
        backgroundColor: '#BBD7B1',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        left: 0,
        paddingHorizontal: 12,
        position: 'absolute',
        width: 116
    },
    indicator2: {
        backgroundColor: '#E0E0E0',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        left: 108,
        paddingHorizontal: 12,
        position: 'absolute',
        width: 116
    },
    indicatorActive2: {
        backgroundColor: '#89A8CD',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        left: 108,
        paddingHorizontal: 12,
        position: 'absolute',
        width: 116
    },
    indicator3: {
        backgroundColor: '#EEEEEE',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        paddingHorizontal: 12,
        position: 'absolute',
        right: 0,
        width: 116
    },
    indicatorActive3: {
        backgroundColor: '#BBD7B1',
        borderRadius: 12.5,
        flex: 1,
        height: 26,
        paddingHorizontal: 12,
        position: 'absolute',
        right: 0,
        width: 116
    },
    //indicatorFocusEvenText: {
    //    color: '#FFFFFF',
    //    fontSize: 10,
    //    marginVertical: 6
    //},
    //indicatorFocusOddText: {
    //    fontSize: 10,
    //    marginVertical: 6
    //},
    //indicatorHolder: {
    //    height: 75,
    //    paddingLeft: 15,
    //    paddingRight: 15,
    //    paddingTop: 8
    //},
    link: {
        color: '#000000',
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    message: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    //scene: {
    //    padding: 20,
    //    flexDirection: 'column'
    //},
    //search: {},
    //searchbar: {
    //    backgroundColor: '#C9C9CE',
    //    height: 44,
    //    marginTop:64,
    //    opacity: 90,
    //    padding: 9,
    //    shadowColor: '#000000',
    //    shadowOffset: {width: 0, height: -0.5},
    //    shadowOpacity: .06
    //},
    //searchBarInput: {
    //    height: 28,
    //    padding: 4,
    //    marginRight: 5,
    //    flex: 4,
    //    fontSize: 14,
    //    backgroundColor: '#FFFFFF',
    //    borderRadius: 5.3,
    //    color: '#8E8E93',
    //    textAlign: 'center'
    //},
    referral: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        position: 'relative'
    },
    section: {
        flex: 1,
        //flexDirection: 'row',
        opacity: 0.6,
        overflow: 'hidden'
    },
    status: {
        flex: 1,
        margin: 10
    },
    text: {
        flex: 1,
        fontSize: 14,
        marginVertical: 4,
        textAlign: 'center'
    },
    textActive: {
        color: '#FFFFFF',
        flex: 1,
        fontSize: 14,
        marginVertical: 4,
        textAlign: 'center'
    },
    title: {
        color: '#CCCCCC',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 10
    },
    titleActive: {
        //backgroundColor: '#ff0',
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 10
    }
});

module.exports = Home;
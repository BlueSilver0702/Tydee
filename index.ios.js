import React, { AppRegistry, Component, Navigator, StyleSheet, Text, View } from 'react-native'
import { Actions, Modal, Reducer, Router, Scene, TabBar } from 'react-native-router-flux'
import Auth0Lock from 'react-native-lock-ios'

import Home from './jsx/scenes/home'
import Settings from './jsx/scenes/settings'
import Profile from './jsx/scenes/profile'
import History from './jsx/scenes/history'

//import Firebase  from 'firebase';
//import FirebaseTokenGenerator from 'firebase-token-generator';

import cred from './ignore/credentials';

const lock = new Auth0Lock({
    clientId: _getAuth0ClientID(),
    domain: _getAuth0Domain()
});

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        console.log("STATE:", state);
        return defaultReducer(state, action);
    }
};

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="settings" component={Settings} title="Settings" />
        <Scene key="profile" component={Profile} />
        <Scene key="history" component={History}/>
    </Scene>
);

class Tydee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: undefined,
            profile: undefined,
            token: undefined
        };
    }

    render() {
        if (!this.state.logged) this.login();

        return <Router  createReducer={reducerCreate} scenes={scenes} profile={this.state.profile}/>
    }

    login() {
        lock.show({
            authParams: {
                scope: "openid"
            }
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }

            // firebase token: Firebase app configuration -> secrets
            //let tokenGenerator = new FirebaseTokenGenerator(_getFirebaseToken());
            //
            //// use the token generator to create a new token with the userId
            //let ref_token = tokenGenerator.createToken({ uid: profile.userId });

            this.setState({
                logged: true,
                profile: profile,
                token: token
            });

            //this.fetchUserToken(ref_token)
        });
    }
}

AppRegistry.registerComponent('Tydee', () => Tydee);

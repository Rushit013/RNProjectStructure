import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {login, setIsLoggedIn} from '../../redux/actions/login';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {showToastMessage} from '../../utils';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      email: '',
      emailErr: '',
      password: '',
      passErr: '',
      authErr: '',
      secureTextEntry: true,
      loading: false,
      rememberMe: true,
    };
  }

  componentDidMount = async () => {
    showToastMessage('danger', 'MESSAGE TO DISPLAY');
    // If Remember Me Check Box Is True On Previous Login Then Get Previous
    // User Stored Email and Password
    let userEmail = await AsyncStorage.getItem('rememberEmail');
    let userPass = await AsyncStorage.getItem('remeberPass');
    if (userEmail !== null || userEmail !== undefined) {
      this.setState({email: userEmail});
    }
    if (userPass !== null || userPass !== undefined) {
      this.setState({password: userPass});
    }
  };

  onLogin = async () => {
    const isConnected = true; // Check Internet Connection
    if (isConnected == false) {
      showToastMessage('danger', 'Please check your internet connection');
      return;
    }
    const {email, password, rememberMe} = this.state;
    let emailErr = '';
    let passErr = '';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let isValid = true;
    let error = '';
    if (email == null || email.trim() == '') {
      emailErr = 'Please enter email address!';
      isValid = false;
      error = emailErr;
    } else if (reg.test(email) === false) {
      emailErr = 'Please enter valid email address!';
      isValid = false;
      error = emailErr;
    }

    if (password == null || password.trim() == '') {
      passErr = 'Please enter password!';
      isValid = false;
      error = error == '' ? passErr : error;
    }
    this.setState({
      emailErr: emailErr,
      passErr: passErr,
    });
    if (isValid) {
      let data = {
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({loading: true});
      this.props
        .login(data)
        .then(res => {
          this.setState({loading: false});
          if (res.meta.status === true) {
            if (rememberMe) {
              //   Save Email And Passoword If Remember Check Box Is True
              AsyncStorage.setItem('rememberEmail', data.email);
              AsyncStorage.setItem('remeberPass', data.password);
            } else if (!rememberMe) {
              let userEmail = AsyncStorage.getItem('rememberEmail');
              let userPass = AsyncStorage.getItem('remeberPass');
              if (
                userEmail != null ||
                userPass !== undefined ||
                userPass != null ||
                userPass !== undefined
              ) {
                AsyncStorage.removeItem('rememberEmail');
                AsyncStorage.removeItem('remeberPass');
              }
            } else {
            }
            this.props.setIsLoggedIn(true);
            this.props.navigation.navigate('App');
            showToastMessage('success', 'SUCCESS RESPONSE MESSAGE');
          } else if (res.meta.status === false) {
            showToastMessage('danger', 'ERROR MESSAGE');
          }
        })
        .catch(err => {
          showToastMessage('danger', 'Network Error');
          this.setState({loading: false});
        });
    }
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={styles.Wrapper}>
          <Text>Your Login Screen</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  login,
  setIsLoggedIn,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

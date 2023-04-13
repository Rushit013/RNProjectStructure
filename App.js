import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  BackHandler,
  Platform,
  Text,
  TextInput,
} from 'react-native';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store/store';
import {Colors} from './src/constants';
import HoldOnPopUp from './src/components/Modal/Center/HoldOnPopUp';
import FlashMessage from 'react-native-flash-message';

class App extends Component {
  constructor(props) {
    console.log = () => null;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    super(props);
    this.state = {
      isConnected: null,
      showHoldPopUp: false,
    };
  }

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  backAction = async () => {
    if (store.getState().login.isLoggedIn == false) {
      this.setState({
        showHoldPopUp: true,
      });
    } else {
      BackHandler.exitApp();
    }
  };

  render() {
    const {showHoldPopUp} = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              barStyle={
                Platform.OS === 'ios' ? 'dark-content' : 'light-content'
              }
              backgroundColor={
                Platform.OS === 'ios' ? Colors.ui_grey_05 : Colors.ui_grey_10
              }
            />
            <Routes />
          </SafeAreaView>
        </PersistGate>
        <HoldOnPopUp
          visible={showHoldPopUp}
          onRequestClose={() => {
            this.setState({
              showHoldPopUp: false,
            });
          }}
          onRequestClear={() => {
            this.setState({
              showHoldPopUp: false,
            });
            BackHandler.exitApp();
          }}
        />
        <FlashMessage />
      </Provider>
    );
  }
}

export default App;

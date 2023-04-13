import {StyleSheet} from 'react-native';
import {Fonts} from '../../../constants';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.regular,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,
    letterSpacing: 1,
  },
  Wrapper: {
    width: '100%',
    flexDirection: 'column',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.regular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 1,
    marginBottom: 10,
  },
  bottomButtonView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default styles;

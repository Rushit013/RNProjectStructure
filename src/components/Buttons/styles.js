import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 10,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginEnd: 10,
  },
});

export default styles;

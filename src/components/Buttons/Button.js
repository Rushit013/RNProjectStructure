import React, {Component} from 'react';
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Fonts} from '../../constants';
import styles from './styles';

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  getButtonColor(type) {
    switch (type) {
      case 'primary':
        return Colors.ui_grey_05;
      case 'secondary':
        return Colors.ui_grey_05;
      case 'light':
        return Colors.ui_grey_05;
      default:
        return Colors.ui_grey_05;
    }
  }

  getTitleColor(type) {
    switch (type) {
      case 'primary':
        return 'black';
      case 'secondary':
        return 'black';
      case 'light':
        return 'black';
      default:
        return 'black';
    }
  }

  getBorderColor(type) {
    switch (type) {
      case 'primary':
        return 'white';
      case 'secondary':
        return 'white';
      case 'light':
        return 'white';
      default:
        return 'white';
    }
  }

  render() {
    const {
      title,
      onPress,
      buttonWidth,
      disabled,
      paddingVertical,
      type,
      loading,
      isIcon,
      icon,
      margin,
      marginBottom,
      marginTop,
      fontSize,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={loading ? true : disabled}
        style={[
          styles.container,
          {
            width: buttonWidth,
            alignSelf: this.props.alignSelf ? this.props.alignSelf : 'center',
            backgroundColor: disabled
              ? Colors.ui_grey_70
              : this.getButtonColor(type),
            paddingVertical: paddingVertical,
            borderColor: disabled
              ? Colors.ui_grey_70
              : this.getBorderColor(type),
            borderWidth: 0.9,
            margin: margin == undefined ? 10 : margin,
            marginBottom: marginBottom == undefined ? 0 : marginBottom,
          },
        ]}
        onPress={onPress}>
        <View style={{flexDirection: 'row', opacity: loading ? 0.5 : 1}}>
          {isIcon ? <Image source={icon} style={styles.iconStyle} /> : null}

          <Text
            allowFontScaling={false}
            style={[
              styles.buttonTitle,
              {
                color: disabled ? Colors.ui_grey_10 : this.getTitleColor(type),
                fontSize: fontSize ? fontSize : 18,
              },
            ]}>
            {title.toUpperCase()}
          </Text>
          {loading && (
            <ActivityIndicator color={Colors.white} style={{marginStart: 5}} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isIcon: PropTypes.bool,
  icon: PropTypes.any,

  type: PropTypes.oneOf([
    'primary',
    'positive',
    'negative',
    'secondary',
    'ghost',
    'light',
    'camera',
    'red',
    'hard',
    'cancel',
  ]),

  /**
   * StyleSheet props
   */
  buttonWidth: PropTypes.any,
  paddingVertical: PropTypes.number,

  /**
   * Callbacks
   */
  onPress: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  title: 'Submit',
  buttonWidth: '100%',
  disabled: false,
  loading: false,
  isIcon: false,
  paddingVertical: 12,
  onPress: null,
};

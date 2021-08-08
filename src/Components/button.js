import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {verticalScale, moderateScale} from '../Styles/scale';
import Colors from '../Styles/color';
import Fonts from '../Styles/fonts';

const Button = props => {
  const {buttonColor = Colors.green, buttonText = 'Button'} = props;

  return (
    <TouchableOpacity
      style={{...Styles.customButtonContainer, backgroundColor: buttonColor}}>
      <Text style={{...Styles.customButtonText}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  customButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    paddingHorizontal: moderateScale(28),
    paddingVertical: verticalScale(16),
    borderRadius: 8,
  },
  customButtonText: {
    ...Fonts.bold_14_16,
    color: Colors.white,
  },
});

export default Button;

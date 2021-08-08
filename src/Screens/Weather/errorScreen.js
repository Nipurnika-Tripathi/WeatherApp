import React from 'react';
import {View, Text} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../../Components/button';
import Colors from '../../Styles/color';
import Styles from './styles';

const ErrorScreen = () => {
  return (
    <View style={Styles.errorContainer}>
      <Text style={Styles.errorMessage}>{I18n.t('something_went_wrong')}</Text>
      <Button buttonColor={Colors.red} buttonText={I18n.t('retry')} />
    </View>
  );
};

export default ErrorScreen;

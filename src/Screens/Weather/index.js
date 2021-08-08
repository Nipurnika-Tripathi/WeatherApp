import React from 'react';
import {View, Text, FlatList} from 'react-native';
import I18n from 'react-native-i18n';
import _isEmpty from 'lodash/isEmpty';

import Colors from '../../Styles/color';
import ErrorScreen from './errorScreen';
import Styles from './styles';
const Data = [
  {
    day: 'Monday',
    temp: '8',
  },
  {
    day: 'Monday',
    temp: '8',
  },
  {
    day: 'Monday',
    temp: '8',
  },
  {
    day: 'Monday',
    temp: '8',
  },
  {
    day: 'Monday',
    temp: '8',
  },
];

const renderCardData = ({item, index}) => {
  return (
    <View style={Styles.contentSubContainer}>
      <Text style={Styles.contentText}>{item?.day}</Text>
      <Text style={Styles.contentText}>{item?.temp}</Text>
    </View>
  );
};

const seperator = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.lightGrey,
      }}
    />
  );
};

const WeatherForecast = () => {
  return (
    <View style={Styles.container}>
      {!_isEmpty(Data) ? (
        <>
          <View style={Styles.subContainer}>
            <Text style={Styles.heading}>
              {I18n.t('todays_weather_update')}
            </Text>
            <Text style={Styles.content}>10</Text>
            <Text style={Styles.subContent}>Delhi</Text>
          </View>
          <View style={Styles.contentContainer}>
            <FlatList
              data={Data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderCardData}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={seperator}
            />
          </View>
        </>
      ) : (
        <ErrorScreen />
      )}
    </View>
  );
};

export default WeatherForecast;

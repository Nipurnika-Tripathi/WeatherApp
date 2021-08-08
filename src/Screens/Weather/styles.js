import {StyleSheet} from 'react-native';

import {verticalScale, moderateScale} from '../../Styles/scale';
import Colors from '../../Styles/color';
import Fonts from '../../Styles/fonts';

const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.green},
  subContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  errorContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    ...Fonts.medium_24_33,
    marginVertical: moderateScale(15),
    textAlign: 'center',
    marginBottom: verticalScale(34),
  },
  content: {
    ...Fonts.bold_46_50,
    color: Colors.white,
    marginVertical: moderateScale(15),
  },
  heading: {...Fonts.regular_16_19, color: Colors.white},
  subContent: {
    ...Fonts.bold_17_23,
    color: Colors.white,
  },
  contentContainer: {borderTopColor: Colors.lightGrey, borderWidth: 1},
  contentSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.dimGrey,
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(20),
  },
  contentText: {...Fonts.regular_16_19, color: Colors.grey},
});

export default Styles;

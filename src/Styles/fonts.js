import {scale, lineHeightScale} from './scale';

const bold_46_50 = {
  fontSize: scale(46),
  lineHeight: lineHeightScale(46, 50 / 46),
  fontFamily: 'Roboto-Bold',
};

const bold_17_23 = {
  fontSize: scale(17),
  lineHeight: lineHeightScale(17, 23 / 17),
  fontFamily: 'Roboto-Bold',
};

const bold_14_16 = {
  fontSize: scale(14),
  lineHeight: lineHeightScale(14, 16 / 14),
  fontFamily: 'Roboto-Bold',
};

const regular_16_19 = {
  fontSize: scale(16),
  lineHeight: lineHeightScale(16, 19 / 16),
  fontFamily: 'Roboto-Regular',
};

const medium_24_33 = {
  fontSize: scale(24),
  lineHeight: lineHeightScale(24, 33 / 24),
  fontFamily: 'Roboto-Medium',
};

export default {
  bold_46_50,
  bold_17_23,
  regular_16_19,
  medium_24_33,
  bold_14_16,
};

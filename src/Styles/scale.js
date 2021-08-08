import {Dimensions, Platform} from 'react-native';
const BASE_DIMENSIONS = {
  mobile: {
    width: 360,
    height: 640,
  },
  tablet: {
    width: 600,
    height: 1024,
  },
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const percentageCalculation = (max, val) => max * (val / 100);

const fontCalculation = (height, width, val) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;
const {width, height} = Dimensions.get('window');
let updatedHeight = height;
let updatedWidth = width;

const isIPhoneWithNotch =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (Dimensions.get('window').height >= 812 ||
    Dimensions.get('window').width >= 812);

if (isIPhoneWithNotch) {
  if (width === 896 || height === 896) {
    updatedHeight = 720;
  } else if (width >= 812 || height >= 812) {
    updatedHeight = 667;
  }
}

// Fix max height to 812 to avoid overscaling.
updatedHeight =
  updatedHeight > 812 ? updatedHeight * (667 / 812) : updatedHeight;
updatedWidth = updatedHeight * (guidelineBaseWidth / guidelineBaseHeight);

const normalizedWidth = size => (updatedWidth / guidelineBaseWidth) * size;
const normalizedHeight = size => (updatedHeight / guidelineBaseHeight) * size;

const scale = size => normalizedWidth(size);
const verticalScale = size => normalizedHeight(size);
const moderateScale = (size, factor = 0.5) =>
  size + (normalizedWidth(size) - size) * factor;
const lineHeightScale = (fontSize, factor = 1.2) =>
  Math.ceil(normalizedHeight(fontSize * factor));

const responsiveWidth = percent => percentageCalculation(screenWidth, percent);
const responsiveHeight = percent =>
  percentageCalculation(screenHeight, percent);
const responsiveFontSize = percent => {
  return fontCalculation(screenHeight, screenWidth, percent);
};

export {
  scale,
  verticalScale,
  moderateScale,
  lineHeightScale,
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
};

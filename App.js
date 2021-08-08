import * as React from 'react';
import I18n from 'react-native-i18n';

import AppNavigator from './src/Navigator';

console.log('app file');

I18n.fallbacks = true;
I18n.translations = {
  en: require('./src/Translations/en.json'),
};
I18n.locale = 'en';

function App() {
  return <AppNavigator />;
}

export default App;

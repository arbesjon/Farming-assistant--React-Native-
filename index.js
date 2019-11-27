import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Farmingassistant', () => App);

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: '100%',
    zIndex: 100,
    padding: 10,
  },
});

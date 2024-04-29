import { Platform, StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default styles;

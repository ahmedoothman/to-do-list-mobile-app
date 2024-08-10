import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDoList from './ToDoList';
export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList></ToDoList>
      {/*  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/login';
import Register from './src/screens/register';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>{/* Rest of your app code */}
    {/* <View style={styles.container}> */}
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'simple_push' }} initialRouteName='register'>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </Stack.Navigator>
      {/* <Text>Open up App.js to start working your app!</Text>
      <StatusBar style="auto" />
    </View> */}
    </NavigationContainer>
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

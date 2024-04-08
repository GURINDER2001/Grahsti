import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! asakjcnkasj</Text>
    //   <StatusBar style="inverted" />
    //   <ActivityIndicator/>
    // </View>
    <AuthContext.Provider value={authContext} >
    <NavigationContainer>
      {!activeuser ?
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'simple_push' }} initialRouteName='register'>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
        :
        <Drawer.Navigator drawerContent={props => <CustomSideMenu setActiveuser={setActiveuser} activeuser={activeuser} {...props} />} initialRouteName={'home'} backBehavior='order' screenOptions={{ drawerPosition: "right", headerShown: false }}>

          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="stock/level" component={Level} />
          <Drawer.Screen name="stock/unit" component={Unit} />
          <Drawer.Screen name="stock/chapter" component={Chapter} />
          <Drawer.Screen name="profile" component={Profile} />
          <Drawer.Screen name="search" component={Search} />
          {/* <Drawer.Screen name="login" component={Login} value={{setActiveuser:'asfsf'}} options={{headerShown: false,gestureHandlerProps:{enabled:false}}}/> */}
        </Drawer.Navigator>
      }
    </NavigationContainer>
  </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

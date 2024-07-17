import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentRegistrationScreen from './screens/StudentRegistrationScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import CenterRegistrationScreen from './screens/CenterRegistrationScreen';
import CenterLoginScreen from './screens/CenterLoginScreen';
const Stack=createNativeStackNavigator();
const Drower=createDrawerNavigator();
 const App=()=> {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name='HomeScreen' component={HomeScreen} 
      options={{
        headerShown:false,
       
      }}/>
      <Stack.Screen name='STUDENT REGISTRATION' component={StudentRegistrationScreen} 
      options={{
        headerShown:false,
       
      }}
      />
      <Stack.Screen name='STUDENT LOGIN' component={StudentLoginScreen} 
      options={{
        headerShown:false,
       
      }}
      />
      <Stack.Screen name='CENTER REGISTRATION' component={CenterRegistrationScreen} 
      options={{
        headerShown:false,
       
      }}
      />
      <Stack.Screen name='CENTER LOGIN' component={CenterLoginScreen}
       options={{
        headerShown:false,
       
      }}
      />
    </Stack.Navigator>
    
   </NavigationContainer> 
  );
}



export default App;
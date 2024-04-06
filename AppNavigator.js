import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash1 from './src/screen/Splash1';
import Splash2 from './src/screen/Splash2';
import Splash3 from './src/screen/Splash3';
import Splash4 from './src/screen/Splash4';
import HomeDash from './src/user/HomeDash';
import Signin from './src/screen/Signin';
import Signup from './src/screen/Signup';
import SignupTrain from './src/screen/SignupTrain';
import Screen6 from './src/screen/Screen6';
import { TrainArray, YogaCenter } from './src/screen/TestingData';
import Screen5 from './src/screen/Screen5';
import Screen1 from './src/screen/Screen1';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="1"
          component={Splash1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="2"
          component={Splash2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="3"
          component={Splash3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="4"
          component={Splash4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup_train"
          component={SignupTrain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userdash"
          component={HomeDash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="topTrain"
          component={Screen6}
          options={{ headerShown: false }}
          initialParams={{ items: TrainArray }}
        />
        <Stack.Screen
          name="topStudio"
          component={Screen5}
          options={{ headerShown: false }}
          initialParams={{ items: YogaCenter }}
        />
        <Stack.Screen
          name="screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

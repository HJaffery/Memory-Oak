/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GlobalFont from 'react-native-global-font';
// import Screen1 from './src/screens/home';
// import SchoolCollection from './src/screens/memoryDetail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Iconn from 'react-native-vector-icons/FontAwesome';
import Iconnn from 'react-native-vector-icons/FontAwesome5';
// import {createStackNavigator} from '@react-navigation/stack';
import Color from '../MomeryOak/src/assets/constants/colors';
import Signin from '../MomeryOak/src/screens/SignIn';
import Splash from '../MomeryOak/src/screens/splashScreen';
import Socialsignin from '../MomeryOak/src/screens/socialSignup';
import Home from '../MomeryOak/src/screens/home';
import MemoryDetail from '../MomeryOak/src/screens/memoryDetail';
import Group from '../MomeryOak/src/screens/Groups';
import GroupTab from '../MomeryOak/src/screens/grouptab';
// import Group from '../MomeryOak/src/screens/Groups';
import Memory from '../MomeryOak/src/screens/memories';
// import BSheet from '../MomeryOak/src/component/BottomSheet';
// import OurFun from './src/screens/grouptab';
// import MutualFriends from '../MomeryOak/src/screens/MutualFriends';
// import FriendsScreen from './src/screens/MembersProfile';
// import Creatememory from '../MomeryOak/src/component/creatememorybsheet';

// import Masnory from '../MomeryOak/src/component/Masonry';
// import Fchat from './src/screens/grouptab';
// import Memories from './src/screens/memories';
// import Login from './src/screens/SignIn';
// import AddMembers from '../MomeryOak/src/component/AddMembers';
// // import AddGroup from './src/component/CreateGroup';
// import AddParticipant from '../MomeryOak/src/component/AddParticipants';
// import EditMmeory from '../MomeryOak/src/component/EditMemory';
// import Splash from './src/screens/splashScreen';
// import MemberDetails from './src/screens/MembersProfile';
// import CreateGroup from '../MomeryOak/src/component/CreateGroup';
// import SectionList from '../MomeryOak/src/component/SectionList';
// import Schoolcollection from './src/screens/memoryDetail';
// import SocialLogin from './src/screens/socialSignup';
import Addparticipant from '../MomeryOak/src/component/AddParticipants';
import {createStackNavigator} from '@react-navigation/stack';
import Memories from '../MomeryOak/src/screens/memories';
import Membersprofile from '../MomeryOak/src/screens/MembersProfile';
import CreateMemory from '../MomeryOak/src/component/creatememorybsheet';
import Masnory from '../MomeryOak/src/component/Masonry';
// import Memorory from './src/screens/memories';
// import Home from '../MomeryOak/src/screens/home';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthenticationStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Signin" component={Signin} />

      <Stack.Screen name="SocialSignin" component={Socialsignin} />
    </Stack.Navigator>
  );
}

function MainStack({navigation}) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />

      {/* <Stack.Screen name="SocialSignin" component={Socialsignin} /> */}
    </Stack.Navigator>
  );
}

function GroupStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Groups" component={Group} />
      <Stack.Screen name="GroupTab" component={GroupTab} />
      <Stack.Screen name="MembersProfile" component={Membersprofile} />

      {/* <Stack.Screen name="SocialSignin" component={Socialsignin} /> */}
    </Stack.Navigator>
  );
}

// function MainStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="Login" headerMode="none">
//       <Stack.Screen name="Home" component={Home} />

//       {/* <Stack.Screen name="SocialSignin" component={Socialsignin} /> */}
//     </Stack.Navigator>
//   );
// }

function MemoryStack({navigation}) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Memory" component={Memories} />
      <Stack.Screen name="MemoryDetail" component={MemoryDetail} />

      {/* <Stack.Screen name="SocialSignin" component={Socialsignin} /> */}
    </Stack.Navigator>
  );
}

const TAB_TO_RESET = 'Screen1';
const resetHomeStackOnTabPress = ({navigation, route}) => ({
  tabPress: e => {
    const state = navigation.dangerouslyGetState();

    if (state) {
      // Grab all the tabs that are NOT the one we just pressed
      const nonTargetTabs = state.routes.filter(r => r.key !== e.target);

      nonTargetTabs.forEach(tab => {
        // Find the tab we want to reset and grab the key of the nested stack
        const tabName = TAB_TO_RESET;
        const stackKey = tab?.state?.key;

        if (stackKey && tabName === TAB_TO_RESET) {
          // Pass the stack key that we want to reset and use popToTop to reset it
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          bottom: 25,

          left: 20,
          right: 20,
          elevation: 4,
          backgroundColor: 'white',
          borderRadius: 17,
          width: '90%',
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Screen1"
        component={MainStack}
        // listeners={resetHomeStackOnTabPress}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  // top: 10,
                  backgroundColor: 'white',
                  borderWidth: 0.3,
                  borderColor: 'grey',
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                }}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderWidth: 0.3,
                    borderColor: 'grey',
                    backgroundColor: Color.purple,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Icon size={20} color="silver" name="home" />
                </View>
              </View>
            ) : (
              <Icon size={20} color="silver" name="home" />
            ),
        }}
      />
      <Tab.Screen
        name="Memories"
        component={MemoryStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  // top: 10,
                  backgroundColor: 'white',
                  borderWidth: 0.3,
                  borderColor: 'grey',
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                }}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderWidth: 0.3,
                    borderColor: 'grey',
                    backgroundColor: Color.lightPurple,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Iconn size={20} color="silver" name="photo" />
                </View>
              </View>
            ) : (
              <Iconn size={20} color="silver" name="photo" />
            ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  // top: 10,
                  backgroundColor: 'white',
                  borderWidth: 0.3,
                  borderColor: 'grey',
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                }}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderWidth: 0.3,
                    borderColor: 'grey',
                    backgroundColor: Color.lightPurple,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Iconnn size={20} color="silver" name="users" />
                </View>
              </View>
            ) : (
              <Iconnn size={20} color="silver" name="users" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

function CombineStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Authstack" component={AuthenticationStack} />

      <Stack.Screen name="MainTab" component={MyTabs} />
    </Stack.Navigator>
  );
}

const App = () => {
  const [splash, setsplash] = React.useState(true);
  const timeout = () => {
    setTimeout(() => setsplash(false), 3000);
  };
  const applyFonts = () => {
    let fontName = 'Quicksand';
    GlobalFont.applyGlobal(fontName);
  };
  React.useEffect(() => {
    timeout(), applyFonts();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Color.lightPurple} barStyle="dark-content" />
      {/* {!splash ? <CombineStack /> : <Splash />} */}
      {/* <Memories /> */}
      <Masnory />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

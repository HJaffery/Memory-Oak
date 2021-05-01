import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor={Color.purple} barStyle="light-content" />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Icon
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => navigation.pop()}
            />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
              Memory Oak
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}>
        <View style={{width: '100%', padding: 30}}>
          <View style={{marginLeft: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Log In</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainTab')}
            style={{
              marginTop: 25,
              marginBottom: 5,
              paddingVertical: 10,
              backgroundColor: 'white',
              width: '100%',
              paddingHorizontal: 15,
              flexDirection: 'row',
              borderRadius: 15,
              alignItems: 'center',
              borderWidth: 0.4,
              borderColor: 'grey',
              alignSelf: 'center',
            }}>
            <View style={{width: '20%'}}>
              <SocialIcon
                iconSize={20}
                raised={false}
                iconColor="#565656"
                style={styles.iconstyle}
                type="google"
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black'}}>Login with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MainTab')}
            style={{
              marginTop: 25,
              marginBottom: 5,
              paddingVertical: 10,
              backgroundColor: 'white',
              width: '100%',
              paddingHorizontal: 15,
              flexDirection: 'row',
              borderRadius: 15,
              alignItems: 'center',
              borderWidth: 0.4,
              borderColor: 'grey',
              alignSelf: 'center',
            }}>
            <View style={{width: '20%'}}>
              <SocialIcon
                iconSize={20}
                raised={false}
                iconColor="#565656"
                style={styles.iconstyle}
                type="apple"
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'black'}}>Login with Apple</Text>
            </View>
          </TouchableOpacity>

          {/* <View style={styles.endline}>
            <Text>Don't have an account?</Text>
            <View style={{marginLeft: 5}}>
              <Text
                style={{
                  color: Color.purple,
                  textDecorationLine: 'underline',
                }}>
                Register
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
      <View
        style={{
          height: '20%',
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Don't have an account?</Text>
        <View style={{marginLeft: 5}}>
          <Text
            style={{
              color: Color.purple,
              textDecorationLine: 'underline',
            }}>
            Register
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: Color.purple,
    // flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
    // alignItems: 'center',
  },
  scrollview: {
    // width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,

    marginTop: -30,

    flex: 1,
  },
  inputcontainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Color.purple,

    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '94%',

    lineHeight: 3,

    padding: 2,

    color: 'black',
  },
  checkboxrow: {
    marginVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  checkbox: {
    padding: 0,
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 5,
  },
  btn: {
    width: '100%',
    height: 45,
    marginVertical: 30,
    alignSelf: 'center',
  },
  align: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#A2A2A2',
    height: 0.5,
    width: 50,
    marginHorizontal: 3,
  },
  dividertext: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,

    paddingHorizontal: 5,
    alignSelf: 'center',
    color: 'black',
  },
  socialicon: {
    marginVertical: 20,
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },
  iconstyle: {
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    // borderWidth: 0.1,
  },
  endline: {
    // marginVertical: 20,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1,
    height: 250,
    alignItems: 'flex-end',
  },
});
export default Login;

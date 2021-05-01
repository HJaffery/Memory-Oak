import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Feather';

import {ScrollView} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {CheckBox} from 'react-native-elements';
import LoginBtn from '../component/custombtn';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailerror, setEmailerror] = useState(false);
  const [passworderr, setpassworderror] = useState(false);
  const [password, setPassword] = useState('');
  const [sucess, setsuccess] = useState(false);
  const [errmsg, seterr] = useState('all fields must not be empty*');
  const [signin, setSignin] = useState(false);
  const handlemail = text => {
    setEmail(text);
  };

  const handlepassword = text => {
    setPassword(text);
  };
  const [showpassword, setshowpassowrd] = React.useState(true);
  const [checked, setchecked] = React.useState(false);

  const handlechecked = () => {
    if (checked) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };

  const handlesignup = () => {
    if (email == '' || password == '') {
      setSignin(true);
      seterr('All fields must not be Empty*');
    } else if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      ) === false
    ) {
      seterr('Please Enter a valid Email*');
      setEmailerror(true);
      setSignin(false);
    } else if (password.length <= 5) {
      setSignin(true);
      setEmailerror(false);
      setsuccess(true);
      seterr('Password must contain atleast 6 characters*');
    } else {
      setsuccess(true);
      setEmailerror(false);
      setSignin(false);
      navigation.navigate('SocialSignin');
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor={Color.purple} barStyle="light-content" />
      <View style={styles.header}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: 'white',
                fontFamily: 'Quicksand',
              }}>
              Memory Oak
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}>
        <View style={{width: '100%', padding: 30}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Log In</Text>
          </View>
          <View style={{marginTop: 25, marginBottom: 5}}>
            <Text style={{color: 'grey', fontSize: 15}}>Email</Text>

            <View style={styles.inputcontainer}>
              <TextInput
                onChangeText={text => handlemail(text)}
                style={styles.input}
              />
              {sucess && (
                <View style={{width: '6%'}}>
                  <SvgUri
                    width="100%"
                    height="15"
                    source={require('../assets/images/check.svg')}
                  />
                </View>
              )}
            </View>
          </View>
          {emailerror && (
            <View style={{}}>
              <Text style={{color: 'red', fontSize: 12}}>{errmsg}</Text>
            </View>
          )}

          <View style={{marginTop: 25, marginBottom: 5}}>
            <Text style={{color: 'grey', fontSize: 15}}>Password</Text>

            <View style={styles.inputcontainer}>
              <TextInput
                onChangeText={text => handlepassword(text)}
                secureTextEntry={showpassword}
                style={styles.input}
              />
              {showpassword && (
                <TouchableOpacity
                  onPress={() => {
                    setshowpassowrd(false);
                  }}
                  style={{width: '6%'}}>
                  <SvgUri
                    width="100%"
                    height="15"
                    source={require('../assets/images/password_view.svg')}
                  />
                </TouchableOpacity>
              )}

              {!showpassword && (
                <View style={{width: '6%', alignItems: 'center'}}>
                  <Icon
                    onPress={() => {
                      setshowpassowrd(true);
                    }}
                    name="eye"
                    size={17}
                    color="#878787"
                  />
                </View>
              )}
            </View>
            {passworderr && (
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'red', fontSize: 12}}>
                  password must contain atleast 6 characters*
                </Text>
              </View>
            )}
          </View>
          <View style={{marginBottom: 10}}>
            {signin && (
              <View style={{}}>
                <Text style={{color: 'red', fontSize: 12}}>{errmsg}</Text>
              </View>
            )}
          </View>
          <View style={styles.checkboxrow}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View>
                <CheckBox
                  onPress={handlechecked}
                  size={20}
                  checked={checked}
                  containerStyle={styles.checkbox}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text>Remember me</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{color: Color.purple, textDecorationLine: 'underline'}}>
                Forgot password?
              </Text>
            </View>
          </View>

          <View style={styles.btn}>
            <LoginBtn
              name={'Log In'}
              width="90%"
              background={Color.purple}
              color={'white'}
              onPress={handlesignup}
            />
          </View>
          <View style={styles.align}>
            <View style={styles.divider} />
            <View>
              <Text style={styles.dividertext}>Or</Text>
            </View>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialicon}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('SocialSignin')}>
              <SocialIcon
                // onPress={() => navigation.navigate('SocialSignin')}
                iconSize={15}
                iconColor="#565656"
                style={styles.iconstyle}
                type="google"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('SocialSignin')}>
              <SocialIcon
                iconSize={15} // light
                // raised={false}
                iconColor="#565656"
                type="apple"
                style={styles.iconstyle}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.endline}>
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: Color.purple,

    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  scrollview: {
    width: '100%',
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
    borderWidth: 0.1,
  },
  endline: {
    marginVertical: 20,
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },
});
export default Login;

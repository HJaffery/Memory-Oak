import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import {View, Text, ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/Feather';
import Members from '../screens/Members';
import Memory from '../screens/MemoriesFunchat';
import Color from '../assets/constants/colors';
export default class TabsScrollableExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('navigation', this.props.navigation);
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: '30%',
            width: '100%',

            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            overflow: 'hidden',
            marginBottom: 10,
            //marginTop: 30,
          }}>
          <ImageBackground
            source={require('../assets/images/images.jpg')}
            style={{
              // height: '20%',

              flex: 1,
              resizeMode: 'contain',
              paddingTop: 25,
              paddingHorizontal: 15,
              // justifyContent: 'space-between',
              // paddingLeft: 15,
              // flexDirection: 'row',
              // borderBottomLeftRadius: 40,
              // borderBottomRightRadius: 40,
              // paddingHorizontal: 30,
              // paddingVertical: 20,
              // justifyContent: 'space-between',
              //justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{}}>
                <Icon
                  onPress={() => this.props.navigation.pop()}
                  name="arrow-back"
                  size={24}
                  color="white"
                />
              </View>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 25,
                  // borderWidth: 1,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // alignSelf: 'center',
                }}>
                <Iconn name="edit-2" size={14} color={Color.purple} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'green',
                justifyContent: 'space-around',
              }}>
              <View>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Our Fun Chat
                </Text>
              </View>
            </View>

            {/* 
            <View style={{flexDirection: 'column'}}>
              <Text>yes ssj iss ijsis ijs skjhs</Text>
            </View> */}
          </ImageBackground>
        </View>
        <Container
          style={{backgroundColor: 'white', width: '90%', alignSelf: 'center'}}>
          {/* <Header hasTabs /> */}
          <Tabs
            tabBarInactiveTextColor="black"
            tabBarUnderlineStyle={{
              backgroundColor: 'white',
              borderColor: Color.purple,
              borderBottomWidth: 1,
            }}
            tabContainerStyle={{
              borderBottomWidth: 0.3,
              borderBottomColor: 'grey',
              elevation: 0,
            }}>
            <Tab
              heading="Members (5)"
              activeTextStyle={{color: Color.purple, fontWeight: 'bold'}}
              activeTabStyle={{
                backgroundColor: 'white',
              }}
              tabStyle={{backgroundColor: 'white'}}>
              <Members navigation={this.props.navigation} />
            </Tab>

            <Tab
              activeTextStyle={{color: Color.purple, fontWeight: 'bold'}}
              activeTabStyle={{
                backgroundColor: 'white',
                // borderBottomWidth: 3,
                // borderBottomColor: Color.purple,
              }}
              heading="Memories (22)"
              tabStyle={{backgroundColor: 'white'}}>
              <Memory />
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

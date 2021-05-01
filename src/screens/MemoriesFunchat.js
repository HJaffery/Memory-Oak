import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Btn from '../component/custombtn';
const TabsScrollableExample = () => {
  const [arr, setarr] = React.useState([
    {
      id: 1,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 2,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 3,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 4,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 5,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 6,
      url: require('../assets/images/images.jpg'),
    },
  ]);
  const [count, setcount] = React.useState(arr.length);
  const [morepics, setmpics] = React.useState([]);
  const [number, setnumber] = React.useState(0);
  console.log('count', count);

  const handleimages = () => {
    console.log('pressed');
    // const temp = [...arr];
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '80%',
          marginTop: 20,
          height: 45,
          marginBottom: 10,
          // backgroundColor: 'green',
          alignSelf: 'center',
        }}>
        <Btn name="+ New Memory" />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{marginRight: 13, marginVertical: 10}}>
            <Text>March</Text>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}
            data={arr}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
            renderItem={(item, index) => {
              console.log(item);
              if (item.index <= 2) {
                // setnumber(number + 1);
                // console.log('updated', number);
                return (
                  <Image
                    source={item.item.url}
                    style={{
                      height: 80,
                      width: 130,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  />
                );
              } else if (item.index == 3 && count > 4) {
                console.log('elseif');
                let num = count;
                return (
                  <TouchableOpacity
                    onPress={handleimages}
                    style={{
                      // backgroundColor: 'red',
                      height: 80,
                      // opacity: 0.3,
                      width: 130,
                      borderRadius: 20,
                      marginRight: 10,
                    }}>
                    <Image
                      source={item.item.url}
                      style={{
                        opacity: 0.6,
                        height: 80,
                        width: 130,
                        borderRadius: 20,
                        marginRight: 10,
                        // marginHorizontal: 25,
                      }}
                    />

                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'transparent',
                        borderRadius: 20,
                        // zIndex: 90,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        // opacity: 0.3,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        +{num - 3}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        more
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              } else if (item.index === 3 && count == 4) {
                return (
                  <Image
                    source={item.item.url}
                    style={{
                      height: 80,
                      width: 110,
                      borderRadius: 20,
                      // marginHorizontal: 25,
                      marginRight: 10,
                    }}
                  />
                );
              }
            }}
          />

          <View style={{marginRight: 13, marginVertical: 10}}>
            <Text>January</Text>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}
            data={arr}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
            renderItem={(item, index) => {
              console.log(item);
              if (item.index <= 2) {
                return (
                  <Image
                    source={item.item.url}
                    style={{
                      height: 80,
                      width: 130,
                      borderRadius: 20,
                      // marginHorizontal: 10,
                      marginRight: 10,
                    }}
                  />
                );
              } else if (item.index == 3 && count > 4) {
                console.log('elseif');
                let num = count;
                return (
                  <TouchableOpacity
                    onPress={handleimages}
                    style={{
                      // backgroundColor: 'red',
                      height: 80,
                      // opacity: 0.3,
                      width: 130,
                      borderRadius: 20,
                      // marginHorizontal: 10,
                      marginRight: 10,
                    }}>
                    <Image
                      source={item.item.url}
                      style={{
                        opacity: 0.6,
                        height: 80,
                        width: 130,
                        borderRadius: 20,
                        // marginHorizontal: 25,
                      }}
                    />

                    {/* <Image
                      source={item.item.url}
                      style={{
                        height: 80,
                        width: 110,
                        borderRadius: 20,
                        marginHorizontal: 25,
                      }}
                    /> */}
                    {/* <Text>yes</Text> */}
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'transparent',
                        borderRadius: 20,
                        // zIndex: 90,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        // opacity: 0.3,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        +{num - 3}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        more
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              } else if (item.index === 3 && count == 4) {
                return (
                  <Image
                    source={item.item.url}
                    style={{
                      height: 80,
                      width: 110,
                      borderRadius: 20,
                      // marginHorizontal: 25,
                      marginRight: 10,
                    }}
                  />
                );
              }
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          height: '22.5%',
          width: '100%',
          backgroundColor: 'white',
        }}></View>
    </View>
  );
};
export default TabsScrollableExample;

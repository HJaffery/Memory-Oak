import MasonryList from 'react-native-masonry-list';
import React, {useRef} from 'react';
import {SwipeRow} from 'react-native-swipe-list-view';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import {Image} from 'native-base';
const Masonary = () => {
  const rowref = useRef();
  const [left, setleft] = React.useState(50);
  const [count, setcount] = React.useState(0);
  const [images, setimages] = React.useState([
    {
      source: {
        uri: 'https://miro.medium.com/max/1050/1*H-25KB7EbSHjv70HXrdl6w.png',
      },
    },

    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
    {
      source: {
        uri: 'https://miro.medium.com/max/1050/1*H-25KB7EbSHjv70HXrdl6w.png',
      },
    },
    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
    {
      source: {
        uri:
          'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
      },
    },
  ]);

  React.useEffect(() => {
    let temp = [...images];
    images.map((image, index) => {
      let i = image;

      if (index % 2 == 0) {
        let temp_val = {...temp[index]};
        temp_val.dimensions = {width: 5, height: 4};

        temp[index] = temp_val;
        // console.log('temp', temp);
        // setimages(temp);
      } else {
        // let temp = [...images];
        let temp_val = {...temp[index]};
        temp_val.dimensions = {width: 1080, height: 1400};

        temp[index] = temp_val;
      }
      setimages(temp);
      console.log('temp', temp);
    });
  }, [count]);
  // images = images.map((image, index) => {
  //   let i = image;

  //   if (index % 2 == 0) {
  //
  //     // i.dimensions = {width: 5, height: 4};
  //   } else {

  //
  //     // i.dimensions = {width: 1080, height: 1400};
  //   }
  //   return i;
  // });

  return (
    <MasonryList
      // rerender={true}
      completeCustomComponent={({source, data, rowMap}) => {
        // console.log(images);
        return (
          <SwipeRow
            ref={rowref}
            stopLeftSwipe={50}
            disableLeftSwipe
            leftOpenValue={left}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  // console.log(rowref.current._root);

                  console.log('data', data.index);

                  let i = data.index;

                  let temp = images.filter((image, index) => {
                    console.log(index);
                    if (index != i) {
                      return image;
                    } else if (index == 0) {
                      return null;
                    }
                  });
                  setimages(temp);
                  console.log('images', images);
                  setleft(0);
                  setleft(50);
                  setcount(count + 1);
                }}
                style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
                <Icon name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={{uri: source.uri}}
                style={{
                  height: data.masonryDimensions.height,
                  width: data.masonryDimensions.width,
                  marginLeft: data.masonryDimensions.gutter,
                  marginBottom: data.masonryDimensions.gutter,
                  borderRadius: 20,
                }}
              />
            </View>
          </SwipeRow>
        );
      }}
      images={images}
      spacing={2}
      imageContainerStyle={styles.imagecontainer}
      onEndReached={() => {}}
      emptyView={() => {
        return <View style={{flex: 1, backgroundColor: 'white'}}></View>;
      }}
    />
  );
};
const styles = StyleSheet.create({
  imagecontainer: {
    backgroundColor: 'white',
    borderWidth: 1,

    borderRadius: 20,
  },
});
export default Masonary;

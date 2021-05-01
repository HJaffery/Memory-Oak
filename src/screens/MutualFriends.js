import React, {Component} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Card from '../component/CustCard'
class AccordionView extends Component {
  state = {
    activeSections: [],
    count: 0,
    arrindex: 0,
    SECTIONS: [
      {
        title: 'Mutual Friends ( 3 )',

        Radius: 10,
        isactive: false,
        iconname: 'chevron-down',
      },
      {
        title: 'Mutual Groups ( 13 )',

        Radius: 10,
        isactive: false,
        iconname: 'chevron-down',
      },
      {
        title: 'Mutual Memories ( 30 )',

        Radius: 10,
        isactive: false,
        iconname: 'chevron-down',
      },
    ],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          elevation: 3,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',

          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: section.Radius,
          borderBottomRightRadius: section.Radius,
          paddingVertical: 15,
          marginTop: 10,
        }}>
        <View>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        <View>
          <Icon name={section.iconname} size={20} color="black" />
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <View style={styles.contentimage}>
          <Image
            source={require('../assets/images/images.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.contentcard}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'normal'}}>
                Jenifer Lawrence
              </Text>
            </View>

            <View style={styles.contenticon}>
              <Icon size={20} color="#9e9e9e" size={15} name="cross" />
            </View>
          </View>
        </View>
      </View>
    );
  };

  _updateSections = async activeSections => {
    this.setState({activeSections});
    this.setState({count: this.state.count + 1});

    this.setState({arrindex: activeSections[0]});
    console.log('arrindex', this.state.arrindex);
    if (typeof activeSections[0] == 'number') {
      if (activeSections[0] !== this.state.arrindex && this.state.count !== 0) {
        let temp = [...this.state.SECTIONS];
        let temp_e = {...temp[this.state.arrindex]};
        temp_e.iconname = 'chevron-down';
        temp_e.Radius = 10;
        temp[this.state.arrindex] = temp_e;
        await this.setState({SECTIONS: temp});
      }

      let index = activeSections[0];
      this.setState({arrindex: activeSections[0]});

      let temp_state = [...this.state.SECTIONS];
      let temp_element = {...temp_state[index]};

      temp_element.iconname = 'chevron-up';
      temp_element.Radius = 0;
      temp_state[index] = temp_element;
      this.setState({SECTIONS: temp_state});
    } else if (typeof activeSections[0] != 'number') {
      let temp_state = [...this.state.SECTIONS];
      let temp_element = {...temp_state[this.state.arrindex]};
      temp_element.Radius = 10;
      temp_element.iconname = 'chevron-down';
      temp_state[this.state.arrindex] = temp_element;
      this.setState({SECTIONS: temp_state});
    }
  };

  render() {
    return (
      <Accordion
        sections={this.state.SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        underlayColor="white"
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'green',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    backgroundColor: 'white',

    elevation: 3,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',

    width: '90%',
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentimage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 8,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  contentcard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contenticon: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderheadersection: {},

  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: 'white',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
export default AccordionView;

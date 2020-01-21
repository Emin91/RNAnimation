import React, { Component } from 'react'
import { StyleSheet, View, Text, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      fadeValue: new Animated.Value(0),
      animValue: new Animated.Value(1)
    };
  }

  pressIn = () => {
    Animated.spring(this.state.animValue, {
      toValue: 0.8,
    }).start();
  }

  pressOut = () => {
    Animated.spring(this.state.animValue, {
      toValue: 1,
      friction: 2,
      tension: 90,
    }).start();
  }

  fade = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.btnOne} onPress={() => this.start()}>
          <Text style={styles.btnOneText}>Click to show Button 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.fade()}>
          <Animated.View style={[styles.btnTwo, { opacity: this.state.fadeValue, }]}>
            <Text style={styles.btnTwoText}>Click to hide</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPressIn={this.pressIn} onPressOut={this.pressOut}>
          <Animated.View style={[styles.btnPressMe, {
            transform: [
              {
                scale: this.state.animValue
              }
            ]
          }
          ]}>
            <Text style={styles.btnTwoText}>Press me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOne: {
    backgroundColor: '#c0392b',
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 9,
    borderWidth: 4,
    marginBottom: 20,
    borderColor: 'white',
    justifyContent: 'center',
  },
  btnOneText: {
    fontSize: 25,
    color: '#fff',
  },
  btnTwo: {
    backgroundColor: '#2980b9',
    height: 150,
    width: 250,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTwoText: {
    fontSize: 30,
    color: '#fff',
  },
  btnPressMe: {
    width: 250,
    height: 80,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',

  }
})

export default Animation
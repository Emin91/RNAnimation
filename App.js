import React, { Component } from 'react'
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native'

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      fadeValue: new Animated.Value(0),
    };
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
        <TouchableOpacity style={styles.btnOne} onPress={()=>this.start()}>
          <Text style={styles.btnOneText}>Click to show Button 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.fade()}>
          <Animated.View style={[styles.btnTwo, {opacity: this.state.fadeValue,}]}> 
            <Text style={styles.btnTwoText}>Click to hide</Text>
          </Animated.View>
        </TouchableOpacity>
      
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
    backgroundColor: '#fff',
    
  }
})

export default Animation
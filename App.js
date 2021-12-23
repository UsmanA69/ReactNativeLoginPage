import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2683f8',
    width: 420,
  },
  headingBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily:'DancingScript-Bold',
  },
  input: {
    color: 'gray',
    width: 300,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
  btnBox: {
    width: 313,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  btn: {
    color: 'black',
    fontSize:16,
    textAlign:'center',
    color:'gray'
  },
});

const App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.headingBox}>
            <Text style={styles.heading}>Login</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
          />
          <View style={styles.btnBox}>
            <TouchableOpacity style={{backgroundColor:'#fcd242',padding:10,width:"35%"}}>
              <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#fcd242',padding:10,width:"35%"}}>
              <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

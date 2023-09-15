import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [number,setNumber] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <Text>my first app</Text>
      <Text style={{color:"red", fontWeight:900, fontSize:30}}>text test</Text>
      <Text>{number}</Text>
      <Pressable
      title='subtract'
      onPress={()=>setNumber(prev => prev + 1)}
      style = {styles.button}
      >
      <Text>add</Text>
      </Pressable>
      <Pressable
      title='subtract'
      onPress={()=>setNumber(prev => prev - 1 > 0 && prev - 1)}
      style = {styles.button}
      >
      <Text>subtract</Text>
      </Pressable>
      <Button title='alert button' onPress={()=> alert('First ever alert on mobile, hello friends')}/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button:{
    borderStyle:"solid",
    borderWidth:"1px",
    backgroundColor:"cyan",
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin:50,
    color:"red"
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {View, Text,StyleSheet,} from 'react-native';



const Header=()=>{
 return (
 
 <View style={styles.contianer}>
 <Text style={styles.text}>Welcome</Text>
   </View>
    )
};


const styles = StyleSheet.create({
contianer:{
padding:15,
hieght:60,
backgroundColor:'orange'

 },
 text:{
textAlign:'center',
fontSize:22,
fontWeight:'bold',
color:'white'
 }

});

export default Header;
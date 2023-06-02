import React from 'react';
import {View, Text,Image,StyleSheet,} from 'react-native';



const Footer=()=>{
 return (
 
 <View style={styles.contianer}>
 <Text style={styles.text}>&copy; Al-Hassan's App</Text>
   </View>
    )
};


const styles = StyleSheet.create({
contianer:{
padding:5,
hieght:10,
backgroundColor:'orange',
borderTopLeftRadius:10,
borderTopRightRadius:10,


 },
 text:{
textAlign:'center',
fontSize:18,

color:'white'
 }

});

export default Footer;
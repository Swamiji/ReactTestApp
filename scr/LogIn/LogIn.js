import React,{Component} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
//import {StackNavigator,createStackNavigator} from 'react-navigation';
import LoginForm from '../LoginForm/LoginForm/';
import SignIn from '../SignIn/SignIn';


export default class LogIn extends Component {
    render(){
        return(
             <View style={styles.container}>

             <View style={styles.logoContainer}>
             <Image 
               source={require('../image/Octocat.png')}
               style={styles.logo}     
             />
             <Text style={styles.title}> An App made for Estar Using React Native </Text>
             <LoginForm/>
             </View>
            <View style={styles.fontContainer}>
            </View>
             </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db'
    },
     logoContainer:{
       alignItems:'center',
       flexGrow:1,
       justifyContent:'center'
     },
     logo :{
         width:100,
         height:100
     },
     title :{
         color : '#FFF',
         textAlign:'center',
         marginTop:10,
         width:160,
         opacity:0.9
     }
     

});
import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {StackNavigator,createStackNavigator} from 'react-navigation';
import SignIn from '../SignIn/SignIn';

export default class LogInForm extends Component {


    constructor(props) {
        super(props);
    }
    render(){
        return(
               <View style={styles.container}>
              <TextInput 
              style={styles.input}
              placeholder="Email or UserName"
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid="transparent"
              />
              <TextInput 
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid="transparent"
              secureTextEntry
              />
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            <Text style={styles.buttonText1}>Don't have Account ? 
            <Text 
            style={styles.buttonText2} 
            onPress={this._onCreateOnePressed}
            > Create One</Text> 
            </Text>
               </View>
        );

        }
    }

    _onCreateOnePressed=()=>{
       this.props.navigation.navigate('SignIn');
    }

    LogInForm = createStackNavigator({
        LogInForm: { screen: LogInForm },
        SignIn: { screen: SignIn }
    });

    const styles = StyleSheet.create({

        container:{
         padding:20
        },
        input:{
           width:300,
           height:40,
           backgroundColor:'rgba(255,255,255,0.2)',
           marginBottom:20,
           paddingHorizontal:10,
           color:'#FFF'
        },
        buttonContainer:{
            paddingVertical:15,
            backgroundColor:'#2980b9'
        },
        buttonText:{
         color:'#FFF',
          textAlign:'center',
          fontWeight:'700'
        },
        buttonText1:{
            color:'#FFF',
             textAlign:'center',
             fontWeight:'700',
             paddingTop:30,
             paddingHorizontal:10,
             justifyContent: 'flex-start',
             flexDirection:'row'

           },
           buttonText2:{
            color:'#FFF',
             textAlign:'center',
             fontWeight:'700',
             paddingTop:30,
             paddingHorizontal:10,
             textDecorationLine: 'underline',
             justifyContent: 'flex-start',
             flexDirection:'row',
            
            
           },

    });
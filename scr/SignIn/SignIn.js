import React,{Component} from 'react';
import {StyleSheet,View,TextInput,Image,Text,TouchableOpacity} from 'react-native';


export default class SignIn extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.logoContainer}>
             <Image
             source={require('../image/Octocat.png')}
             style={styles.logo}
             />
             <Text  style={styles.title}>An App made for Estar Using React Native</Text>

            <TextInput
              style={styles.input}
              placeholder='First Name'
              placeholderTextColor='rgba(255,255,255,0.7)'
              underlineColorAndroid='transparent'
             />

            <TextInput
               style={styles.input}
               placeholder='Last Name'
               placeholderTextColor='rgba(255,255,255,0.7)'
               underlineColorAndroid='transparent'
            />
             <TextInput
               style={styles.input}
               placeholder='Email or UserName'
               placeholderTextColor='rgba(255,255,255,0.7)'
               underlineColorAndroid='transparent'
            />
             <TextInput
               style={styles.input}
               placeholder='Password'
               placeholderTextColor='rgba(255,255,255,0.7)'
               underlineColorAndroid='transparent'
               secureTextEntry
            />
             </View>
             <View style={styles.buttonPositionContainer} >
            <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          <Text style={styles.buttonText1}>Already have Account ? 
            <Text 
            style={styles.buttonText2} 
            onPress={this._onCreateOnePressed}
            > LogIn</Text> 
            </Text>
            </View>
            </View>
           );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#3498db',
        padding:20
    },
    input:{
        width:320,
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginTop:20,
        paddingHorizontal:10,
        color:'#FFF'
    },
    logoContainer:{
        alignItems:'center',
        //flexGrow:1,
        justifyContent:'center',
        marginTop:30
    },
    logo:{
        width:100,
        height:100
    },
    title:{
       textAlign:'center',
       color:'#FFF',
       opacity:0.9,
       marginTop:10,
       width:160
    },
    buttonContainer:{
        width:320,
        height:40,
        justifyContent:'center',
        backgroundColor:'#2980b9'
    },
    buttonPositionContainer:{
        alignItems:'center',
        marginTop:30,
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
       }

});
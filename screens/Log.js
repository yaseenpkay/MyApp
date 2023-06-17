import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View , SafeAreaView, ImageBackground} from 'react-native'
import React from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';



const Log = () => {


    const [loaded] = useFonts({
        Lexend_ExtraBold: require('../assets/fonts/Lexend-ExtraBold.ttf'),
        Lexend_SemiBold: require('../assets/fonts/Lexend-SemiBold.ttf'),
        Lexend_Regular: require('../assets/fonts/Lexend-Regular.ttf'),
        Lexend_Medium: require('../assets/fonts/Lexend-Medium.ttf'),
      });
    

  if (!loaded) {
    return null;
  }

  return (
    
    <View style={{backgroundColor:'#10002B', flex:1 }}>

    <Image style={styles.ellipseTop}
                source={require('../assets/Ellipse1.png')}/>

      <View style={styles.mainConatiner}>
      
            
      <Text style={{fontFamily:'Lexend_ExtraBold', color: 'white', fontSize:32,marginHorizontal:35,marginVertical:30}}>Login</Text>
        <View style={{flexDirection: 'row',backgroundColor: '#10002B',marginHorizontal:35, borderRadius:7,width:300,height:73 ,padding:13,...styles.elevation
        }}>
          
           

            <Image
              style={styles.tinyLogo}
              source={require('../assets/email.png')}
            />
            <Text style={{fontFamily:'Lexend_Medium',color:'#E0AAFF',opacity:0.3,bottom:7,left:15}}>EMAIL </Text>

            <TextInput
            style={styles.input}
            textAlign='left'
            color = "#E0AAFF"
            placeholder=""
            
            
            />
        </View>
        
        

        <View style={{flexDirection: 'row',marginHorizontal:35,padding:9,width:295,height:64,borderColor:'#E0AAFF',borderBottomWidth:1,top:15}}>

        <Image
              style={styles.smallIcons}
              source={require('../assets/Password.png')}
            />
            <TextInput
            style={styles.lineInput}
            textAlign='left'
            color = "#E0AAFF"
            placeholderTextColor="#E0AAFF"
            placeholder="PASSWORD"
            secureTextEntry={true}
            
            />
        </View>

        

        <TouchableOpacity style={{height:53,width:156,/* borderColor:'white',borderWidth:5 */}}>
       
          <LinearGradient
            colors={['#3C096C', '#8445B8', '#C77DFF']}
            style={styles.loginButton}
            start={{x:0,y:0}}
            end={{x:1,y:0}}>
            <Text style={{fontFamily:'Lexend_Medium',color:"white",fontSize:20,textAlign:"center"}}>LOGIN</Text>
 
          </LinearGradient>
        </TouchableOpacity>
          
        


      </View>


      <View style={{ flex: 1 }}>
      {/* Bottom component */}
      <View style={styles.bottomComponent}>
        <Image style={styles.ellipseBottom} source={require('../assets/Ellipse2.png')} />
      </View>

      {/* Top component */}
      <View style={styles.topComponent}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.bottomText}>Sign up</Text>
        </Text>
      </View>
    </View>

      
      
      
      

    </View>
  )
}

export default Log

const styles = StyleSheet.create({

    mainConatiner:{
      flex:1,
      
    },
  
    input: {
        width:235,
        height: 73,
        borderEndColor:"black",
        //textAlign:'left',
        color :"#E0AAFF",
        fontSize:18,
        opacity:.7,
        fontFamily:'Lexend_SemiBold',
        /* borderWidth:3,
        borderColor:'white', */
        bottom:8,
        left:-35
        
    },

    lineInput:{
      paddingLeft:10,
      fontFamily:'Lexend_Medium',
      opacity:.3,
      width:295,
      //top:10
      
    },

    smallIcons:{
      top:8,
      
    },

    loginButton:{
      position:'relative',
      top:47,
      left:140,
      height:53,
      width:156,
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      padding:9,
      backgroundColor: '#68a0cf',
      borderRadius: 50,
      marginHorizontal:35,
      
      
    },

    tinyLogo: {
        width: 34.6,
        height: 26.5,
        //alignItems:'center',
        alignSelf:'center'
      },

             
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

      elevation: {
        elevation: 10,
        shadowColor: 'black',
        
        

      },
      ellipseTop:{
        marginHorizontal:130,
      

      },

      ellipseBottom:{
        //justifyContent:'flex-end',
        bottom:0,
        //height:177

      },

      bottomComponent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
      },

      topComponent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
      },
      signupText: {
        textAlign: 'center',
        color: '#E0AAFF',
        fontSize:16,
        fontFamily:'Lexend_Regular',
        bottom:55,
        opacity:.7
      },
      bottomText: {
        fontWeight: 'bold',
        color: 'white',
        opacity:1
      },

      mainConatiner:{
        left:25,
        bottom:1,

      },
})


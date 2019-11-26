import React from 'react';
import {Text,View,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').width/4;

const ButtonNumber = ({title,buttonHandler,type})=> {
  let buttonSize = styles.buttonContainer;
  if(type === 2)
    buttonSize = {...buttonSize,width:SCREEN_HEIGHT*2};
  if(type === 3)
  buttonSize = {...buttonSize,width:SCREEN_HEIGHT*3};
  if(type === 4)
  buttonSize = {...buttonSize,...styles.operationButtonContainer};
  return (
    <View style={buttonSize}>
      <TouchableOpacity onPress={()=>buttonHandler(title)}>
          <View style={styles.internalContainer}>
            <Text style={styles.buttonText}>
              {title}
            </Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer:{
    height: SCREEN_HEIGHT,
    width: SCREEN_HEIGHT,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.3)',
    
    backgroundColor:"#f0f0f0", 
  },
  internalContainer:{
    height:'100%',
    width:'100%',
    alignContent:'center',
    justifyContent:'center',
    padding:5,
  },  
  operationButtonContainer:{
    alignContent:'center',
    alignItems:'center',
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonText:{
    textAlign:'center',
    fontSize:20
  }
});
export default ButtonNumber;

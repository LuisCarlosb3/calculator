import React,{useState} from 'react';
import { View,StyleSheet } from 'react-native';
import Display from './components/display';
import ButtonNumber from './components/buttonNumber';

export default function Index() {
  const [number,setNumber] = useState('0');
  const [storedNumber,setStoredNumber] = useState(null);
  const [operation,setOperation] = useState(null);
  
  

  const clearMemory = () =>{
    setNumber('0');
    setStoredNumber(0);
    setOperation(null);
  }
  const showResult = n =>{
    setNumber(`${n}`);
    setStoredNumber(`${n}`);
    setOperation(null);
  }
  const addDigit = n =>{
    if(n==='.' && number.includes('.')){
      return null;
    }
    setNumber(`${(number+n).replace(/^0+/,'')}`);
  }
  const addOperation = op =>{
    if(number!=='0'){
      setOperation(op);
      setStoredNumber(number);
      setNumber('0');
    }
    if(storedNumber){
      setOperation(op)
    }
  }
  const doMath = ()=>{
    console.log(`${storedNumber} ${operation} ${number}`);
    if(number && storedNumber && operation){
      const resul = eval(`${(parseFloat(storedNumber))} ${operation} ${parseFloat(number)}`);
      showResult(resul);
    }
  }
  const values = [
    {id:'0',title:'AC',type:3,buttonHandler:clearMemory},
    {id:'1',title:'/',type:4,buttonHandler:addOperation},
    {id:'2',title:'7',type:1,buttonHandler:addDigit},
    {id:'3',title:'8',type:1,buttonHandler:addDigit},
    {id:'4',title:'9',type:1,buttonHandler:addDigit},
    {id:'5',title:'*',type:4,buttonHandler:addOperation},
    {id:'6',title:'4',type:1,buttonHandler:addDigit},
    {id:'7',title:'5',type:1,buttonHandler:addDigit},
    {id:'8',title:'6',type:1,buttonHandler:addDigit},
    {id:'9',title:'-',type:4,buttonHandler:addOperation},
    {id:'10',title:'1',type:1,buttonHandler:addDigit},
    {id:'11',title:'2',type:1,buttonHandler:addDigit},
    {id:'12',title:'3',type:1,buttonHandler:addDigit},
    {id:'13',title:'+',type:4,buttonHandler:addOperation},
    {id:'14',title:'0',type:2,buttonHandler:addDigit},
    {id:'15',title:'.',type:1,buttonHandler:addDigit},
    {id:'16',title:'=',type:4,buttonHandler:doMath},
  ];
  const ValuesList = () =>{
    return values.map((value)=>{
      return(
        <ButtonNumber key={value.id} title={value.title} buttonHandler={value.buttonHandler} type={value.type}/>
      );
    })
  }
  return (
    <View style={styles.screeContainer}>  
      <Display value={number}/>
      <View style={styles.buttonContainer}>
        <ValuesList/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screeContainer:{
    height:'100%',
    width:'100%',
    flex:1,
    flexDirection:'column'
  },
  buttonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
  }
});
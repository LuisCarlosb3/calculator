import React from 'react';

import { View,Text,StyleSheet } from 'react-native';

const Display = ({value}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={1}>
                {value}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:'flex-end',
        height:'40%',
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:10,
    },
    text:{
        color:'#ffffff',
        fontSize:40,
    }
});
export default Display;

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ReachUs = () => {
  return (
    <View>
      <View style={{bottom:18}}>
        <Text style={{fontSize:25,fontWeight:"500", marginHorizontal:12}}>Reach Us</Text>
        <View style={{marginHorizontal:12,marginVertical:12}}>
            <Text style={styles.inpTxt}>Name</Text>
            <TextInput placeholder='Enter Your Name' style={styles.inpfield} />
        </View > 

        <View style={{marginHorizontal:12,marginVertical:12}}>
            <Text style={styles.inpTxt}>Mobile</Text>
            <TextInput placeholder='Enter Your Mobile no. Here' 
             keyboardType="phone-pad" style={styles.inpfield}/>
        </View> 
        <View style={{marginHorizontal:12,marginVertical:12}}>
            <Text style={styles.inpTxt}>E-Mail</Text>
            <TextInput placeholder='Enter Your E-mail' style={styles.inpfield} />
        </View> 
        <View style={{marginHorizontal:12,marginVertical:12}}>
            <Text style={styles.inpTxt}>Message</Text>
            <TextInput placeholder='Enter Your Message' 
            multiline={true} 
            style={styles.inpfield}
            />
        </View> 
        <View style={styles.submitContainer}>
            <TouchableOpacity style={{backgroundColor:"#ff6347", paddingVertical:8,paddingHorizontal:26,borderRadius:22,}}>
                <Text style={{fontSize:22,color:'white',fontWeight:"500" ,textAlign:'center',marginHorizontal:5}} >
                    Send
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ReachUs

const styles = StyleSheet.create({
    inpTxt:{
     fontSize:20,
     fontWeight:"400"
    },
    inpfield:{
        backgroundColor:'white',
        padding:10,
        borderRadius:12
    },
    submitContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
     
  
    }
})
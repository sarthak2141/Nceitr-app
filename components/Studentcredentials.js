
import { Image, ScrollView, StyleSheet, Text,  TouchableOpacity,  View } from 'react-native'
import React from 'react'

const students=[
    {
        id:'01',
        image:require('../assets/images/student2.png'),
        text:"STUDENT REGISTRATION"
        
    },
    {
        id:'02',
        image:require('../assets/images/student3.png'),
        text:"STUDENT LOGIN"
        
    },
    {
        id:'03',
        image:require('../assets/images/student4.png'),
        text:"CENTER REGISTRATION"
        
    },
    {
        id:'04',
        image:require('../assets/images/student1.png'),
        text:"CENTER LOGIN"
        
    },
]

const Studentcredentials = ({navigation}) => {
  return (
    <View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.studentsscroll}>
     {
        students.map((cardval,index)=>(
           
               

           
                <View style={styles.studentscard} key={index}>
                    <Image source={cardval.image} style={styles.studentsImg}/>
                    <TouchableOpacity style={styles.studentsbtn} onPress={()=>navigation.navigate(`${cardval.text}`)}>
                    <Text style={styles.studentstxt} >{cardval.text}</Text>
                    </TouchableOpacity>
                </View>
                
           
        ))
     }
      </ScrollView>
    </View>
  )
}

export default Studentcredentials

const styles = StyleSheet.create({
    studentsscroll:{
        flexDirection:'row',
        paddingVertical:20,
        bottom:25,
    },
    studentscard:{
        width:220,
        overflow:"hidden",
       backgroundColor:"white",
       marginHorizontal:8,
       alignItems:"center",
       borderBlockColor:"white",
      borderRadius:13 ,
      shadowColor:"black",
      elevation:1,
   
    
    
      

       
    },
    studentsImg:{
        width:204,
        height:210,
        resizeMode: "contain",
        marginBottom:10
        
    },
    studentstxt:{
       
       color:"white",
       fontSize: 17,
        fontWeight: "600",
        
         flexWrap:"wrap",
         textAlign:'center',
          
         
    },
    studentsbtn:{
        backgroundColor:'#ff6347',
        width:'100%',
        padding:7,
    }

})
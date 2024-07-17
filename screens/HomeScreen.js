import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  StatusBar,
  Easing,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";

import { useEffect } from "react";

import CardList from "../components/CardList";
import InfoList from "../components/InfoList";
import ChoseProgram from "../components/ChoseProgram";
import Studentcredentials from "../components/Studentcredentials";
import ReachUs from "../components/ReachUs";
import ContactCard from "../components/ContactCard";
import StudentRegistrationScreen from "./StudentRegistrationScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("window");

      

const HomeScreen = ({ navigation }) => {
  const [activeIndex,setActiveIndex]=useState(0);
  
  const flatLisatRef=useRef();

// //Auto Scroll
// useEffect(()=>{
// let interval=  setInterval(()=>{
//     if(activeIndex===carouselData.length-1){
//       flatLisatRef.current.scrollToIndex({
//         index:0,
//         animation:true,
//       });
//     }
//     else{
//       flatLisatRef.current.scrollToIndex({
//         index:activeIndex+1,
//         animation:true,
//       })
//     }
//   },2000);
//   return ()=>clearInterval(interval)
// });


 const getItemLayout=(data,index)=>({
length:width,
offset:width*index,
index:index,
})
// data for crousel
  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/img1.png"),
    },
    {
      id: "02",
      image: require("../assets/images/img2.png"),
    },
    {
      id: "03",
      image: require("../assets/images/img3.png"),
    },
    {
      id: "04",
      image: require("../assets/images/img4.png"),
    },
    {
      id: "05",
      image: require("../assets/images/img5.png"),
    },
  ];
  //display Images //UI
  const renderItem = ({ item, index }) => {
    return (
      
      <View key={index}>
        <Image
          source={item.image}
          style={{ height: 150, width: width, resizeMode: "contain" }}
        />
      </View>
    );
  };
  //handle scroll-->>
  const handleScroll=(event)=>{
    //get the scroll position
    const scrollPosition=event.nativeEvent.contentOffset.x;
    // console.log({scrollPosition});
    //get the index of current active item
    const index=scrollPosition/width;
    
  setActiveIndex(index);
 
  };

  //render dot indicators-->>
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      // if the active index=== index
      if(activeIndex===index){
        return(
          <View
          key={index}
          style={{
            backgroundColor: "#002343",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal:5,
            
          }}>

          </View>
        );
      }
      else{
        return (
          <View
            key={index}
            style={{
              backgroundColor: "lightgrey",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal:5,
            }}
          ></View>
        );
      }
      
    });
  };

  const [activeItem, setActiveItem] = useState(null);

  const handlePress = (item) => {
    setActiveItem(prevItem => prevItem === item ? null : item);

  };

  const navItems = [
    { label: "Home", icon: "home" },
    { label: "Centers", icon: "location-on" },
    { label: "Verification", icon: "verified" },
    { label: "Programmes", icon: "school" },
    { label: "Result", icon: "assessment" },
    { label: "Latest Updates", icon: "update" },
    { label: "Gallery", icon: "photo-library" },
    { label: "Downloads", icon: "file-download" },
    { label: "Contact", icon: "contacts" },
    { label: "About Us", icon: "info" },
  ];



  return (
    

    <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1, width:width}}>
     
      <StatusBar  translucent
        backgroundColor="transparent"
        barStyle="dark-content"/>
      
 
 
 

 
      

<View style={styles.homeImgContainer}>






<View style={{zIndex:200,width:34,marginTop:-23 }}>
      <TouchableOpacity onPress={()=>(navigation.navigate('MenuScreen'))}  >
      <Icon name="menu" size={35} color="black" style={{marginLeft:5,top:72,left:10, }}/>
     </TouchableOpacity>
     </View>





     
  <Image  source={require('../assets/images/homeImg.jpg')} resizeMode='cover' style={styles.homeImg}/>
</View>



        <View style={styles.Containermodal}>
          <View style={styles.contentContainer}>

          
     
    

{/*      
        <View style={styles.mainTxt}>
        
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "500",
              bottom:1.4,
                textAlign:'center'
               
              }}
            >
              N.C.E.T.I.R
            </Text>
        </View> */}
         
        {/* <View>
          <FlatList
         
            data={carouselData}
            renderItem={renderItem}
            horizontal={true}
            pagingEnabled={true}
            onScroll={handleScroll}
          keyExtractor={(item)=>item.id}
          getItemLayout={getItemLayout}
         
          ref={flatLisatRef}
          ></FlatList>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 6,
              
            }}
          >
            {renderDotIndicators()}
          </View>
        </View> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navbar}>
 
      {/* {['HOME', 'ABOUT US', 'PROGRAMES', 'CENTERS', 'VERIFICATION', 'RESULT', 'LATEST UPDATES', 'GALLERY', 'DOWNLOADS', 'CONTACT'].map((item) => ( */}
      {    navItems.map((item,index)=>(
     <View key={index} style={{alignItems:'center',marginHorizontal:11}}>
      <View key={index} style={[styles.navItemContainer,activeItem === item.label &&styles.navItemContainers]}>
     
          <TouchableOpacity style={styles.navItem} onPress={() => handlePress(item.label)}>
            <MaterialIcons 
            name={item.icon}
            size={30}
            color={activeItem===item.label?"white":"black"}
             
            />
              
          
            
        
          </TouchableOpacity>
         
       </View>
         <Text style={styles.navText}>{item.label}</Text>
         </View>
      ))}
    </ScrollView>


<View style={{flexDirection:"row"}}>
  <Text  style={{fontSize:22,fontWeight:"500",marginHorizontal:6}}>
    Our Programes 
  </Text>
  <Image source={require('../assets/images/bookImg.png')} style={{width:35,height:35,marginTop:2}}/>
</View>
{/* CardList */}
<View>
<CardList/>
</View>
{/* InfoList */}
<View>
  <InfoList/>
</View>

{/* ChoseProgram */}

<View>
  <ChoseProgram/>
</View>
{/* Studentcredentials */}
<View >
  <Studentcredentials navigation={navigation}/>
</View>


{/* ReachUs */}
<View>
  <ReachUs/>
</View>
{/* //contact card */}

<View>
  <ContactCard/>
</View>

</View>
</View>

      
     
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainTxt: {
    flex:1,
     alignItems:'center',
    justifyContent:'center'
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
  navbar: {
    // backgroundColor: '#002b49', 

    
    paddingVertical: 10,
    
  },
  navItem: {
    paddingHorizontal: 4,
    justifyContent: 'center',
    marginHorizontal: 2, 
    alignItems:'center',
    borderRadius:40
    
  },
  navText: {
    color: 'black', 
    fontSize: 14,
    fontWeight: '700',
  },
  navItemContainer:{
    backgroundColor:'#a6c3ef',
    
   borderRadius:23,
   alignItems:'center',
   justifyContent:'center',
  height:50,
  width:50,
   borderRadius:40

  },
  navItemContainers:{
    backgroundColor:'#3f7bf8',
   
   

  },
  Containermodal:{
   borderTopLeftRadius:35,
  //  marginTop:44,
   backgroundColor:'#eff4fd',
   borderTopRightRadius:35,
   elevation:5,
   shadowColor:'black',
   shadowOpacity:0.3,
   marginTop:-32,
  
  },
  activeNavText: {
    color: 'white', 
  },
  
contentContainer:{
  marginTop:40
},
homeImgContainer: {
  flex:1,
  width: "100%", 
  height: 320, 
 marginTop:-12
  
},
homeImg: {
  width: "100%",
  height: "100%",
},


















});

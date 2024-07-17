import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,ScrollView, Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const screenWidth=Dimensions.get('window')
const CenterLoginScreen  = ({navigation}) => {
  return (

<ScrollView   showsVerticalScrollIndicator={false}
     style={{flex:1,width:screenWidth, backgroundColor:"#ffffff",marginTop:22}}>
       <StatusBar backgroundColor='grey' barStyle="dark-content"/>
        <View style={{backgroundColor:'#002343',flexDirection:"row" ,}} >
        <TouchableOpacity style={{width:45, }} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-back' size={30} style={{color:'white', padding:4, fontWeight:"600"}}/>
        </TouchableOpacity>
        <View style={{flex:1,alignItems:"center", }}>
        
        </View>
          
        </View>
        
      






    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/loginlogo.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>CENTER LOGIN</Text>
        <TextInput style={styles.inputfield} placeholder="USER NAME" />
        <TextInput style={styles.inputfield} placeholder="PASSWORD" secureTextEntry />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={()=>navigation.goBack()}>
          <Text style={styles.homeButtonText}>Home </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 300, 
    height: 300, 
    resizeMode: 'contain',
    alignItems:'center'
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputfield: {
    width:300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: '#00c6ff', // Adjust the color as needed
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:18
  },
  homeButton: {
    backgroundColor: '#ffc107', // Adjust the color as needed
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize:19
  },
});

export default CenterLoginScreen;

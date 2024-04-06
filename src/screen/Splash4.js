import React from 'react'
import { Text, SafeAreaView, ScrollView, View,Image, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default Splash3 = ({navigation}) => {
    const handleclick=()=>{
        navigation.navigate('signin');

    }
    const handleClick=()=>{
        navigation.navigate('signin');
    }
  return (
    <SafeAreaView>
        <ScrollView>
        <Text style={{color:"#6739FF",fontSize:12, alignSelf:"flex-end",position:"absolute", right:10,top:60}} onPress={handleClick}>Skip</Text>
            <View>
                <Image style={{width:370,height:270,alignSelf:"center",marginVertical:80}} source={require("../../images/splash3.png")} />
                <View style={{padding:10}}>
                    <Text style={{color:"#000", fontSize:22,fontWeight:"700", textAlign:"center"}}>Discover <Text style={{color:"#6739FF"}}>Workout</Text> and{"\n"}<Text style={{color:"#6739FF"}}>Yoga Trainer</Text></Text>
                    <Text style={{textAlign:"center", fontSize:11, marginTop:6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dapibus enim. Pellentesque lectus lectus, porttitor eu tellus ut, dapibus tincidunt arcu.</Text>
                    <View style={{flexDirection:"row", alignSelf:"center", marginTop:120}}>
                        <View style={styles.RoundNav}></View>
                        <View style={styles.RoundNav}></View>
                        <View style={[styles.RoundNav, {backgroundColor:"#6739FF",width:14,height:14,marginVertical:3}]}></View>
                    </View>
                    <TouchableNativeFeedback onPress={handleclick}>
                        <View style={styles.ArrowBtn}>
                            <Icon name="arrowright" size={25} style={{ color: "#fff", margin:7 }} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    RoundNav: {
        width:12,
        height: 12,
        backgroundColor: "#D9D9D9",
        margin:4,
        borderRadius: 10,
    },
    ArrowBtn:{
        width: 40,
        height: 40,
        backgroundColor: "#6739FF",
        borderRadius: 20,
        alignSelf: "flex-end",
        marginTop: -30,
        marginRight: 10
    }
})
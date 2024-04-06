import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View,TouchableOpacity } from 'react-native'

export default Splash1 = ({navigation}) => {
const handleclick=()=>{
    navigation.navigate('2');

}
const handleClick=()=>{
    navigation.navigate('signin');

}


  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Image style={{width:270,height:270,alignSelf:"center",marginVertical:40, borderRadius:150}} source={require("../../images/splash1.png")} />
                <View style={{backgroundColor:"#f2ecec", height:350,width:"100%",borderRadius:30, flexDirection:"column", padding:10}}>
                    <Text style={{color:"#000", fontSize:25,fontWeight:"900", textAlign:"center", marginTop:30}}>Discover The Right{"\n"}<Text style={{color:"#6739FF"}}>Yoga</Text> & <Text style={{color:"#6739FF"}}>Sports Club</Text></Text>
                    <Text style={{textAlign:"center", fontSize:11,marginTop:6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dapibus enim. Pellentesque lectus lectus, porttitor eu tellus ut, dapibus tincidunt arcu.</Text>
                    <TouchableOpacity onPress={handleclick}>
                        <View style={styles.StartBtn}>
                            <Text style={styles.BtnText}>Let's Get Started</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{textAlign:"center", marginTop:25,fontSize:14,color:"#000", fontWeight:"500"}}>Already have an account?<Text style={{color:"#6739FF"}} onPress={handleClick}> Sign in</Text></Text>
                </View>
            </View>
            </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    StartBtn: {
        width: "98%",
        height: 60,
        backgroundColor: "#6739FF",
        alignSelf: "center",
        marginTop: 30,
        margin: 10,
        borderRadius: 100,
        justifyContent: 'center'
    },
    BtnText: {
        fontSize: 22,
        color: "#ffffff",
        textAlign: "center",
        fontWeight:"600"
    }
})
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

export default Screen11 = ({items}) => {
  return (
    <SafeAreaView>
        <ScrollView>
        <Text style={{
                    fontSize: 20,
                    textAlign: 'center', color: "#000",
                    marginBottom: 20
                }}>My Membership</Text>

                {/* NavBar start */}
                <View style={{
                    backgroundColor: "#D5F7FF",
                    height: 40,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <Text style={[styles.navText, { color: "#0E50FA" }]}>Active</Text>
                    <Text style={styles.navText}>Completed</Text>
                    <Text style={styles.navText}>Cancelled</Text>
                </View>
                {/* NavBar End */}
                
                {/* Membership Item Container Start */}

                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop:20 }}>

                    {/* Membership Items Start */}

                    {items.filter(item => item.status === "active").map((item) => (
                        <View style={{
                            width: 370,
                            height: 190,
                            backgroundColor: "#eee",
                            borderRadius: 10,
                            marginVertical: 10
                        }} key={item.sn}>
                            <Image source={item.image} style={styles.Image} />
                            <View style={{ position: "absolute", flexDirection: "row", left: 300, margin: 12 }}>
                                <Image source={require('./images/star.png')} style={{ width: 20, height: 20 }} />
                                <Text style={{ fontSize: 15, color: "#000" }} >{item.rating}</Text>
                            </View>
                            <View style={{ width: 200, height: 120, position: 'absolute', marginLeft: 150, marginTop:10, justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#0094ff", fontSize: 14 }}>Yoga center</Text>
                                <Text style={{ color: "#000", fontSize: 20 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', marginLeft: -10 }}>
                                    <Icon name="location" size={30} style={{ color: "#999" }} />
                                    <Text style={{ fontSize: 18, color: "#999" }}>{item.location}</Text>
                                </View>
                                <Text style={{ color: "#0094ff", fontSize: 20 }}>Rs. {item.pricing}/ month</Text>
                            </View>
                            <View style={{flexDirection:"row", alignSelf:"center"}}>
                        <TouchableNativeFeedback>
                            <View style={[styles.MemButton, {backgroundColor:"#d0d0d0"}]}>
                                <Text style={[styles.MemText,{color:"#000"}]}>Cancel</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={[styles.MemButton, {backgroundColor: "#0099ff",}]}>
                                <Text style={[styles.MemText,{color:"#ffffff"}]}>E-Receipt</Text>
                            </View>
                        </TouchableNativeFeedback>
                        </View>
                        </View>
                    ))
                }

                {/* Membership Items End */}

                </View>

                {/* Membership Item Container End */}

        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    navText: {
        fontSize: 18,
        color: "#000",
        textAlignVertical: "center"
    },
    Image: {
        width: 120,
        height: 120,
        marginTop: 10,
        margin: 10,
        borderRadius: 10,
    },
    MemButton: {
        width: 130,
        height: 40,
        marginTop: 0,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 40
    },
    MemText: {
        fontSize: 15,
        textAlign: "center"
    }
})

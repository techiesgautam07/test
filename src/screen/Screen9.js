import React from 'react'
import { Text, SafeAreaView, Image, View, ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

const Screen9 = ({items}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center', color: "#000",
                    marginBottom: 20
                }}>My Appointment</Text>

                {/* NavBar start */}
                <View style={{
                    backgroundColor: "#D5F7FF",
                    height: 40,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <Text style={styles.navText}>Upcomming</Text>
                    <Text style={styles.navText}>Completed</Text>
                    <Text style={[styles.navText, { color: "#0E50FA" }]}>Cancelled</Text>
                </View>
                {/* NavBar End */}
                <View style={{flexDirection:"column", alignItems:"center",marginTop:20}}>

                    {/* Appointment Item Boxes start */}
                    {items.filter(item => item.status === "cancelled").map((item) => (
                        <View style={styles.ItemBox} key={item.sn}>
                            <View style={{ width: 330, height: 40, borderBottomWidth: 1, borderColor: "#C9C9C9", paddingVertical: 10 }}>
                                <Text style={{ color: "#0094FF", fontSize: 15 }}>{item.time}</Text>
                            </View>
                            <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10, margin: 10, left: -110 }} />

                            <View style={{ position: "absolute", marginTop: 60, left: 140 }}>
                                <Text style={{ color: "#000", fontSize: 20 }}>{item.name}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon name="location" size={20} style={{ color: "#0094ff" }} />
                                    <Text style={{ color: "#0094ff" }}>{item.location}</Text>
                                </View>
                                <Text style={{ color: "#000" }}>Booking ID: #{item.bookingId}</Text>
                            </View>
                            <View style={{ width: 330, height: 50, borderColor: "#C9C9C9", borderTopWidth: 1, position: "absolute", top: 160 }}>
                            </View>
                            <TouchableNativeFeedback>
                                <View style={styles.CanButton}>
                                    <Text style={styles.CanText}>Add Review</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    ))
            }
                {/* Appointment Item Boxes End */}

                </View>

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
    ItemBox: {
        width: 370,
        height: 210,
        backgroundColor: "#EEE",
        borderRadius: 10,
        marginVertical:10,
        alignItems: "center"
    },
    CanButton: {
        width: 330,
        height: 40,
        backgroundColor: "#0099ff",
        alignSelf: "center",
        marginTop:5,
        margin:10,
        borderRadius: 100,
        justifyContent: 'center'
    },
    CanText: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "500"
    }
});

export default Screen9;
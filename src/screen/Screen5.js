import React from 'react'
import { Text, SafeAreaView, Image, View, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';



const Screen5 = ({ route }) => {
    const {items} = route.params;
    return (
        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{
                    fontSize: 20,
                    textAlign: 'center', color: "#000",
                    marginBottom: 20
                }}>Nearby Yoga Studio</Text>
            <ScrollView style={{marginBottom:50}}>

                {/* Yoga Center Boxes start */}
                {items.map((item) => {
                    return (
                        <View style={{
                            width: 370,
                            height: 170,
                            backgroundColor: "#eee",
                            borderRadius: 10,
                            marginVertical: 10
                        }} key={item.sn}>
                            <Image source={item.image} style={styles.Image} />
                            <View style={{ position: "absolute", flexDirection: "row", left: 300, margin: 12 }}>
                                <Image source={require('../../images/star.png')} style={{ width: 20, height: 20 }} />
                                <Text style={{ fontSize: 15, color: "#000" }} >{item.rating}</Text>
                            </View>
                            <View style={{ width: 200, height: 150, position: 'absolute', marginLeft: 170, justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#0094ff", fontSize: 14 }}>Yoga center</Text>
                                <Text style={{ color: "#000", fontSize: 20 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', marginLeft: -10 }}>
                                    <Icon name="location" size={30} style={{ color: "#999" }} />
                                    <Text style={{ fontSize: 18, color: "#999" }}>{item.location}</Text>
                                </View>
                                <Text style={{ color: "#0094ff", fontSize: 20 }}>Rs. {item.pricing}/ month</Text>
                            </View>
                        </View>
                    )
                })
                }
                {/* Yoga Center Boxes end */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Image: {
        width: 150,
        height: 150,
        marginTop: 10,
        margin: 10,
        borderRadius: 10,
    }
});


export default Screen5;
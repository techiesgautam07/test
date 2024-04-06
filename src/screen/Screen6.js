import React from 'react'
import { Text, SafeAreaView, Image, View, ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native'

const Screen6 = ({ route}) => {
    const {items} = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center', color: "#000",
                    marginBottom: 20
                }}>Top Trainers</Text>
                <View style={{ flexDirection: 'column' }}>

                    {/* Trainer Items Box Start */}
                    {items.map((item) => {
                        return (
                            <View style={{ flexDirection: 'row', margin: 10 }} key={item.sn}>
                                <Image
                                    source={item.image} style={styles.Image}
                                />
                                <Text style={styles.ImgText}>{item.name}</Text>
                                <TouchableNativeFeedback>
                                    <View style={styles.DetButton}>
                                        <Text style={styles.BtnText}>Trainer Details</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        )
                    })
                    }
                    {/* Trainer Items Box End */}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    ImgText: {
        fontSize: 18,
        color: "#000",
        textAlignVertical: "center",
        marginLeft: 10
    },
    DetButton: {
        width: 120,
        height: 40,
        backgroundColor: "#0099ff",
        alignSelf: "center",
        borderRadius: 5,
        marginRight: 0,
        position: "absolute",
        left: 250,
        justifyContent: 'center'
    },
    BtnText: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "500"
    }
});
export default Screen6;
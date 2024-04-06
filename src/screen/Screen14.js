import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'

export default Screen14 = ({ items }) => {

    const [BtnSelect, SetBtnSelect] = useState(0);
    const [inp, setInp] = React.useState("");

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center', color: "#000",
                    marginBottom: 20
                }}>Cancel Membership</Text>
                <View style={{ flexDirection: "column", alignItems: "flex-start", margin: 15 }}>
                    <Text style={{ color: "#A9A9A9", fontSize: 18 }}>Please select the reason of cancellation:</Text>

                    {/* Radio Buttons start */}
                    {items.map((btn, index) => {
                        return (
                            <View style={{ flexDirection: "row" }} key={index} >
                                <TouchableOpacity onPress={() => { SetBtnSelect(btn.id) }}>
                                    <View style={[styles.radio, { borderColor: BtnSelect === btn.id ? "#0094FF" : "#A9A9A9" }]}>
                                        {BtnSelect === btn.id ? <View style={styles.BtnSelect}></View> : null}</View>
                                </TouchableOpacity>
                                <Text style={styles.BtnText}>{btn.name}</Text>
                            </View>
                        )
                    })
                    }
                    {/* Radio Buttons End */}

                    <Text style={{ marginTop: 30, fontSize: 25, color: "#A9A9A9" }}>Other</Text>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        maxLength={150}
                        onChangeText={setInp}
                        value={inp}
                        style={styles.ResText}
                        placeholder='Enter Your Reason Here'
                    />
                    <TouchableNativeFeedback>
                        <View style={styles.CanAppn}>
                            <Text style={styles.CanAppnText}>Cancel Membership</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    radio: {
        marginTop: 10,
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 15
    },
    BtnSelect: {
        width: 15,
        height: 15,
        backgroundColor: "#0094FF",
        margin: 6,
        borderRadius: 15
    },
    BtnText: {
        fontSize: 20,
        margin: 10,
        color: "#000"
    },
    ResText: {
        height: 230,
        width: "100%",
        borderRadius: 20,
        marginTop: 10,
        borderColor: "#e7f0ff",
        borderWidth: 2,
        padding: 10,
        backgroundColor: "#e7f0ff"

    },
    CanAppn: {
        width: "100%",
        height: 50,
        backgroundColor: "#0099ff",
        alignSelf: "center",
        marginTop: 25,
        margin: 10,
        borderRadius: 100,
        justifyContent: 'center'
    },
    CanAppnText: {
        fontSize: 25,
        color: "#ffffff",
        textAlign: "center"
    }
})
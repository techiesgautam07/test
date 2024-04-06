import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default Classes = ({ items }) => {
    const [BtnSelect, SetBtnSelect] = useState(0);
    return (
        <View>
            <Text style={{ color: "#000", fontSize: 20 }}>Select class Timing</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        marginTop: 10,
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#A9A9A9"
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
})
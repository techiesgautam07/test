import React from 'react'
import { Image, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default About = () => {
  return (
    <View>
      <Text style={{ color: "#000", fontSize: 20 }}>Description</Text>
      <Text>yoga studio interior design, open space with mats, pillows na obrazach Najlepszej jakości obrazy, fototapety, naklejki,
        plakaty  <Text style={{ color: "#4870FB", textDecorationLine: "underline" }}>Read More</Text></Text>
      <Text style={{ color: "#000", fontSize: 20, marginTop: 10 }}>Yoga Studio Owner</Text>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", }}>
        <View style={{ flexDirection: "row" }}>
          <Image style={{ width: 70, height: 70, borderRadius: 100 / 2 }} source={require("../../../images/img7.jpg")} />
          <View style={{ margin: 10 }}>
            <Text style={{ color: "#000", fontSize: 15, textAlign: "left" }}>Harsh</Text>
            <Text style={{ fontSize: 15 }}>Yoga Studio Owner</Text>
          </View>
        </View>
        <View style={{ width: 55, height: 55, borderRadius: 55 / 2, backgroundColor: "#e8e9ea", padding: 10 }}>
          <MaterialCommunityIcons name="message-text-outline" size={35} style={{ color: "#0E50FA" }} />
        </View>
        <View style={{ width: 55, height: 55, borderRadius: 55 / 2, backgroundColor: "#e8e9ea", padding: 10 }}>
          <SimpleLineIcons name="phone" size={35} style={{ color: "#0E50FA" }} />
        </View>
      </View>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 2, borderColor: "#D8DADC", paddingBottom: 5, marginTop: 20 }}>
        <Text style={{ color: "#000", fontSize: 20 }}>Address</Text>
        <Text style={{ color: "#0E50FA", fontSize: 20 }}>View on Map</Text>
      </View>
      <Image source={require("../../../images/map.jpg")} style={{ width: "100%", height: 250, marginTop: 15, borderRadius: 30 }} />
    </View>
  )
}

import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import About from './SubScreens/About'
import Classes from './SubScreens/Classes'
import Gallery from './SubScreens/Gallery'
import Review from './SubScreens/Review'
import { ClassTiming } from './TestingData'

export default Screen1 = () => {

  const [selectedTab, setSelectedTab] = useState("about");

  const currentScreen = () => {
    switch (selectedTab) {
      case "about": return <About />;
      case "classes": return <Classes items={ClassTiming} />;
      case "gallery": return <Gallery />;
      case "review": return <Review />
      default: return null;
    }
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Image source={require("../../images/StudioBack.jpg")} style={{ width: "100%", height: 250, resizeMode: "stretch" }} />
          <View style={{ margin: 10 }}>
            <Text style={{ color: "#4870FB", marginTop: 10 }}>Yoga Studio</Text>
            <Text style={{ color: "#000", fontSize: 30, marginTop: 10 }}>ProActive Yoga Hub</Text>
            <Text>1020 Ram Mandir, Gwalior, India</Text>
            <View style={{ flexDirection: "row", margin: 10, justifyContent: "space-around", marginHorizontal: -20 }}>
              <View style={[styles.NavUnder, selectedTab === "about" ? { borderBottomWidth: 5 } : null]}><Text onPress={() => { setSelectedTab("about") }} style={[styles.NavText, selectedTab === "about" ? { color: "#4870FB" } : null]}>About</Text></View>
              <View style={[styles.NavUnder, selectedTab === "classes" ? { borderBottomWidth: 5 } : null]}><Text onPress={() => { setSelectedTab("classes") }} style={[styles.NavText, selectedTab === "classes" ? { color: "#4870FB" } : null]}>Classes</Text></View>
              <View style={[styles.NavUnder, selectedTab === "gallery" ? { borderBottomWidth: 5 } : null]}><Text onPress={() => { setSelectedTab("gallery") }} style={[styles.NavText, selectedTab === "gallery" ? { color: "#4870FB" } : null]}>Gallery</Text></View>
              <View style={[styles.NavUnder, selectedTab === "review" ? { borderBottomWidth: 5 } : null]}><Text onPress={() => { setSelectedTab("review") }} style={[styles.NavText, selectedTab === "review" ? { color: "#4870FB" } : null]}>Review</Text></View>
            </View>
            <View>
              {currentScreen()}
            </View>
          </View>
          <View style={{ marginBottom: 150 }}>

          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{
        width: "100%", height: 120,
        borderWidth: 2, borderColor: "#D8DADC",
        position: "absolute", bottom: 0,
        borderRadius: 30, backgroundColor: "#fff",
        padding: 10, paddingTop: 20, marginBottom: 30, flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <Text style={{ color: "#000", fontSize: 18 }}>Total Price{'\n'}<Text style={{ color: "#0E50FA" }}>Rs. 1500/ month</Text>
        </Text>
        <TouchableNativeFeedback>
          <View style={styles.CanButton}>
            <Text style={styles.CanText}>Book Now</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  NavText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000"
  },
  NavUnder: {
    width: 70,
    height: 35,
    borderColor: "#4870FB",
    paddingBottom: 1,
  },
  CanButton: {
    width: 150,
    height: 60,
    backgroundColor: "#0E50FA",
    borderRadius: 100,
    justifyContent: 'center',
  },
  CanText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "500"
  }

})
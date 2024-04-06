import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Profile extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.profileText}>Profile</Text>
          <View style={styles.imageContainer}>
            <Image source={require("../../images/img8.jpg")} style={styles.image} />
          </View>
          <Text style={styles.nameText}>Esther Howard</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>
         <Image source={require("../../images/Group1.png")} />
            <Text style={styles.listFont}>Your Profile</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>
            <Image source={require("../../images/Vector.png")} />
            <Text style={styles.listFont}>Payment Method</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
           <View  style={styles.listItemData}>
           <Image source={require("../../images/Vector(4).png")} />
            <Text style={styles.listFont}>My Membership</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>
            <Image source={require("../../images/Vector(3).png")} />
            <Text style={styles.listFont}>My Workout</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>
            <Image source={require("../../images/Vector(3).png")} />
            <Text style={styles.listFont}>Setting</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>

            <Image source={require("../../images/Vector(1).png")} />
            
            <Text style={styles.listFont}>My Appointment</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemData}>
            <Image source={require("../../images/Vector(5).png")} />
            <Text style={styles.listFont}>Help Center</Text>
            </View>
            <Icon name="angle-right" size={30} color='#6739FF' />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 24,
     
    marginBottom: 10,
    color: 'black',
    letterSpacing : 6,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    fontWeight : 'bold',
    fontSize: 24,
    letterSpacing : 3,
  },
  list: {
    alignItems: 'center',
    marginBottom: 100,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will align items along the main axis (horizontal)
    alignItems: 'center',
     width: 300,
    padding: 7,
    marginVertical: 5,
    borderRadius: 5,
     
  },
  listFont: {
    fontSize: 20,
    color: 'black',
    marginLeft: 15,
    letterSpacing : 2,
  },
  listItemData : {
    flex: 1, // Take up available space
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
  }
});

export default Profile;

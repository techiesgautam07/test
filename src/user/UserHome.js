
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';



const UserHome = () => {
  const navigation = useNavigation()
  const [search, setSearch] = useState('');
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [categories] = useState([
    { id: 1, name: 'Kundalini yoga', image: require("../../images/Group.png") },
    { id: 2, name: 'Hatha yoga', image: require("../../images/Group.png") },
    { id: 3, name: 'Vinyasa yoga', image: require("../../images/Group.png") },
    { id: 4, name: 'Ashtanga yoga', image: require("../../images/Group.png") }
  ]);
  const [cards] = useState([
    { id: 1, rating: 4.3, title: 'Mindful Movement', price: '499', image: require("../../images/img1.jpg") },
    { id: 2, rating: 4.5, title: 'Yoga / Online', price: '599', image: require("../../images/img2.jpg") },
    { id: 3, rating: 4.1, title: 'Power Yoga', price: '449', image: require("../../images/img3.jpg") },
    { id: 4, rating: 4.4, title: 'Vinyasa Flow', price: '549', image: require("../../images/img4.jpg") }
  ]);
  const [classes] = useState([
    { id: 1, title: 'Pulse Yoga fitness center', price: '499', location : 'Pulse Yoga fitness center', image: require("../../images/img1.jpg") },
    { id: 2, title: 'Pulse Yoga fitness center', price: '599', location : 'Pulse Yoga fitness center', image: require("../../images/img2.jpg") },
    { id: 3, title: 'Pulse Yoga fitness center', price: '449', location : 'Pulse Yoga fitness center', image: require("../../images/img3.jpg") },
    { id: 4, title: 'Pulse Yoga fitness center', price: '549', location : 'Pulse Yoga fitness center', image: require("../../images/img4.jpg") }
  ]);

  const [trainer] = useState([
    { id: 1, name: 'Shivam', image: require("../../images/Group.png") },
    { id: 2, name: 'Harshit', image: require("../../images/Group.png") },
    { id: 3, name: 'Kapil', image: require("../../images/Group.png") },
    { id: 4, name: 'Jenny', image: require("../../images/Group.png") },
    { id: 5, name: 'Jenny', image: require("../../images/Group.png") }
  ]);

  const renderCardItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardRating}><Image source={require("../../images/star.png")} style={styles.starImage} />   {item.rating} </Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>Rs. {item.price}</Text>
    </View>
  );

  const handleToggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const allTrainers = () => {
    navigation.navigate('topTrain');
  };
  const allStudios = () => {
    navigation.navigate('topStudio');
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationTextlive}>Thatipur, Gwalior</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Yoga, trainer"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity
            onPress={handleToggle}
            style={styles.toggleButton}>
            <Text style={styles.toggleText}>
              {isToggleOn ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryHeaderText}>Category</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <Image style={styles.categoryImage} source={item.image} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
          />
        </View>

        <View style={styles.slider}>
        <View style={styles.categoryHeader}>
            <Text style={styles.categoryHeaderText}>Featured Workout</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
  <FlatList
    data={cards}
    renderItem={renderCardItem}
    keyExtractor={item => item.id.toString()}
    horizontal={true} // Set horizontal to true to make it a horizontal slider
    showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
  />
</View>



<View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryHeaderText}>Top Trainer</Text>
            <TouchableOpacity onPress={allTrainers}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={trainer}
            renderItem={({ item }) => (
              <View style={styles.TrainerItem}>
                <Image style={styles.TrainerImage} source={item.image} />
                <Text style={styles.TrainerName}>{item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
          />
        </View>


        <View style={styles.classContainer}>
  <View style={styles.categoryHeader}>
    <Text style={styles.categoryHeaderText}>Top Classes</Text>
    <TouchableOpacity onPress={allStudios}>
      <Text style={styles.seeAllText}>See all</Text>
    </TouchableOpacity>
  </View>
  
    {classes.map(item => (
      <View style={styles.classCard} key={item.id}>
        <Image style={styles.classImage} source={item.image} />
        <View style={styles.textcontainer}>
        <Text style={styles.classTitle}>{item.title}</Text>
        <Text style={styles.classLocation}>
          
          {item.location}</Text>
        <Text style={styles.classPrice}> Rs. {item.price}/ Month</Text>
        </View>
      </View>
    ))}
   
</View>

      </ScrollView>
    </View>
  )
}

export default UserHome


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationContainer: {
    padding: 10,
  },
  locationText: {
    fontSize: 10,
  },
  locationTextlive: {
    fontSize: 12,
    color: '#F6BB85',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 40,
    padding: 10,
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    width: 100,
  },
  toggleButton: {
    backgroundColor: '#6739FF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryContainer: {
    
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryHeaderText: {
    fontSize : 18,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllText: {
    fontSize : 16,
    color: '#F6BB85',
  },
  categoryItem: {
    marginRight: 23,
    alignItems: 'center',
  },
  categoryImage: {

    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 50,
  },
  categoryName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  slider: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    marginRight: 20,
    width: 200,
    height : 220 ,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6739FF',
    marginVertical : 10
  },
  starImage : {
     width : 15,
     height : 15
  },
 
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical : 10,
    color : "black"
  },
  cardPrice: {
    fontSize: 12,
    color: '#999',
  },
  TrainerItem: {
    marginRight: 25,
    alignItems: 'center',
  },
  TrainerImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 50,
  },
  TrainerName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  classContainer : {
    marginBottom:40,
    marginTop: 20,
    paddingHorizontal: 20,
    

     
  },
  classCard: {
     
    width: 350,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    flex : 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical : 20

  },
  textcontainer: {
 marginHorizontal : 20
  },
  classImage: {
    width: '40%',
    height: 130,
    borderRadius: 10,
    
  },
  classTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color : 'black',
  },
  classLocation: {
    fontSize: 12,
    color: '#999',
    marginVertical : 20,

  },
  classPrice: {
    fontSize: 12,
    color: '#6739FF',
  },

});

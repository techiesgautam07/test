import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default Screen13 = ({route, navigation}) => {
  const {items} = route.params; // Destructuring items from route.params
  const handleNavigateCompleted = () => {
    navigation.navigate('Completed');
  };
  const handleNavigateCancelled = () => {
    navigation.navigate('Cancelled');
  };
  const handleNavigateActive = () => {
    navigation.navigate('Active');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#000',
            marginBottom: 20,
          }}>
          My Membership
        </Text>

        {/* NavBar start */}
        <View
          style={{
            backgroundColor: '#D5F7FF',
            height: 40,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={handleNavigateActive}>
            <Text style={styles.navText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateCompleted}>
            <Text style={styles.navText}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateCancelled}>
            <Text style={[styles.navText, {color: '#0E50FA'}]}>Cancelled</Text>
          </TouchableOpacity>
        </View>
        {/* NavBar End */}

        {/* Membership Item Container Start */}

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* Membership Items Start */}

          {items
            .filter(item => item.status === 'cancelled')
            .map(item => (
              <View
                style={{
                  width: 370,
                  height: 190,
                  backgroundColor: '#eee',
                  borderRadius: 10,
                  marginVertical: 10,
                }}
                key={item.sn}>
                <Image source={item.image} style={styles.Image} />
                <View
                  style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    left: 300,
                    margin: 12,
                  }}>
                  <Image
                    source={require('../../images/star.png')}
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{fontSize: 15, color: '#000'}}>
                    {item.rating}
                  </Text>
                </View>
                <View
                  style={{
                    width: 200,
                    height: 120,
                    position: 'absolute',
                    marginLeft: 150,
                    marginTop: 10,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={{color: '#0094ff', fontSize: 14}}>
                    Yoga center
                  </Text>
                  <Text style={{color: '#000', fontSize: 20}}>{item.name}</Text>
                  <View style={{flexDirection: 'row', marginLeft: -10}}>
                    <Icon name="location" size={30} style={{color: '#999'}} />
                    <Text style={{fontSize: 18, color: '#999'}}>
                      {item.location}
                    </Text>
                  </View>
                  <Text style={{color: '#0094ff', fontSize: 20}}>
                    Rs. {item.pricing}/ month
                  </Text>
                </View>
                <TouchableNativeFeedback>
                  <View
                    style={[styles.CanMemButton, {backgroundColor: '#0099ff'}]}>
                    <Text style={[styles.CanMemText, {color: '#fff'}]}>
                      Re-Book
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            ))}

          {/* Membership Items End */}
        </View>

        {/* Membership Item Container End */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navText: {
    fontSize: 18,
    color: '#000',
    textAlignVertical: 'center',
    marginTop: 7,
  },
  Image: {
    width: 120,
    height: 120,
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
  },
  CanMemButton: {
    width: 350,
    height: 40,
    marginTop: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  CanMemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

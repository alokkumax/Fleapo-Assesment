import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LinearGradient from 'react-native-linear-gradient';
// import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';

const App = () => {
  // const [state, setState] = useState({
  //   curLoc: {
  //     latitude: 22.526826633705284,
  //     longitude: 88.361815786,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  //   destinationCords: {
  //     latitude: 22.5114703913077,
  //     longitude: 88.33130799765642,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // });
  // const {curLoc, destinationCords} = state;

  return (
    <SafeAreaView style={styles.bg}>
 
      <View style={styles.container1}>
        <View style={{padding: 10}}>

          <TouchableOpacity onPress={() => console.log('Profile tapped')}>
            <Image
              source={require('./assets/pin-2.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              fontFamily: 'Ubuntu-Light',
            }}>
            Your current location
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              fontFamily: 'Ubuntu-Medium',
            }}>
            6 Ballygunge Place, Kolkata 70..
          </Text>
        </View>

        <View>

          <TouchableOpacity onPress={() => console.log('Profile tapped')}>
            <Image
              source={require('./assets/profile.jpeg')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.container2}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'WorkSans-Medium',
              fontSize: 17,
              justifyContent: 'center',
              marginLeft: 14,
            }}>
            Contact ZORRRO Admin
          </Text>
        </View>

        <View style={{justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => console.log('Profile tapped')}>
            <Image
              source={require('./assets/phone-1.png')}
              resizeMode="contain"
              style={{
                width: 32,
                height: 32,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flexDirection: 'column', backgroundColor: '#fff'}}>
        {/* MAP */}
        <View
          style={{
            height: 250,
          }}>
          <ImageBackground
            source={require('./assets/Map.jpg')}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.google.com/maps');
              }}
              style={{
                position: 'absolute',
                margin: 20,
                justifyContent: 'center',
                backgroundColor: '#4c3f34',
                borderRadius: 5,
                bottom: 0,
                left: 0,
                height: 35,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'WorkSans-Medium',
                }}>
                Open in Maps
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {/* Implementaion of Google Maps  */}
        {/* <View>
          <MapView
            style={{height: 230}}
            initialRegion={curLoc}>

            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={'MY_API_KEY'}
            />
           </MapView>
        </View> */}


        <View style={{padding: 15, marginLeft: 5}}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'WorkSans-Medium',
              fontWeight: '500',
              color: '#333333',
            }}>
            Delivery Details
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: 'gray',
              fontSize: 15,
              fontFamily: 'Ubuntu-Regular',
            }}>
            Status
          </Text>
        </View>

        <View
          style={{
            marginTop: -2,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <BouncyCheckbox
              onPress={() => console.log('ckecked')}
              size={25}
              fillColor="#b5814e"
              unfillColor="#ffffff"
            />
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                marginLeft: -10,
              }}>
              Pick up
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <BouncyCheckbox
              onPress={() => console.log('ckecked')}
              size={25}
              fillColor="#b5814e"
              unfillColor="#ffffff"
            />
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                marginLeft: -10,
              }}>
              Photo
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <BouncyCheckbox
              onPress={() => console.log('ckecked')}
              size={25}
              fillColor="#b5814e"
              unfillColor="#ffffff"
              colo
            />

            <Text
              style={{
                fontSize: 15,
                color: '#000',
                marginLeft: -10,
              }}>
              Deliver
            </Text>
          </View>
        </View>
        {/* Separator */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e4e4e4',
            marginTop: 20,
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 17, color: '#000'}}>Rajarshi Banerjee</Text>
            <Text style={{fontSize: 16, color: '#000'}}>
              34, New Alipor, Kolkata 700029
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log('call tapped')}
            style={{
              height: 45,
              width: 45,
              backgroundColor: '#3ce262',
              borderRadius: 8,
              padding: 4,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./assets/phone-2.png')}
              resizeMode="contain"
              style={{
                alignSelf: 'center',
                width: 28,
                height: 28,
                borderRadius: 20,
                padding: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* separator */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e4e4e4',
            marginTop: 20,
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            paddingHorizontal: 20,
          }}>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <Text
              style={{
                fontSize: 17,
                color: 'gray',
                fontFamily: 'Ubuntu-Regular',
              }}>
              Amount
            </Text>
            <Text
              style={{
                fontFamily: 'WorkSans-Medium',
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                marginTop: 5,
              }}>
              Rs. 250
            </Text>

            <Text
              style={{
                fontSize: 17,
                color: 'gray',
                marginTop: 20,
                fontFamily: 'Ubuntu-Regular',
              }}>
              Total Kms Travelled
            </Text>
            <Text
              style={{
                fontFamily: 'WorkSans-Medium',
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                marginTop: 5,
              }}>
              16.2 Kms
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 17,
                color: 'gray',
                fontFamily: 'Ubuntu-Regular',
              }}>
              Payment Method
            </Text>
            <Text
              style={{
                fontFamily: 'WorkSans-Medium',
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                marginTop: 5,
              }}>
              Cash on Delivery
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'gray',
                fontWeight: '600',
                marginTop: 20,
                fontFamily: 'Ubuntu-Regular',
              }}>
              Deliver Time
            </Text>
            <Text
              style={{
                fontFamily: 'WorkSans-Medium',
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                marginTop: 5,
              }}>
              16.20
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginHorizontal: 25,
            marginVertical: 30,
          }}>
          <LinearGradient
            colors={['#c08d55', '#9e6d43']}
            style={{
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '700',
                letterSpacing: 3,
                alignSelf: 'center',
                fontFamily: 'Ubuntu-Medium',
              }}>
              DELIVER
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
      {/* bottom */}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#fff',
          shadowOpacity: 15,
          shadowOffset: 10,
          shadowColor: 'black',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={require('./assets/nav1.png')}
            style={{
              height: 25,
              width: 25,
            }}></Image>
          <Text style={{fontFamily: 'WorkSans_Medium'}}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={require('./assets/nav2.png')}
            style={{
              height: 25,
              width: 25,
            }}></Image>
          <Text style={{fontFamily: 'WorkSans_Medium'}}>Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={require('./assets/nav3.png')}
            style={{
              height: 25,
              width: 25,
            }}></Image>
          <Text style={{fontFamily: 'WorkSans_Medium'}}>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    height: 80,
    backgroundColor: 'white',
  },
  container2: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff9eb',

    alignItems: 'center',
  },
});

export default App;

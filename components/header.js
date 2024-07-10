
import { StyleSheet, Text, Image, View } from 'react-native';
import { AppLogo } from '../data/constants';



const Header = ({ navigation, route, options }) => {
    return (
      <View style={Header_styles.container}>
  
        <ImageSection source={AppLogo} />
        <Text style={Text_style.text}>Some so many fancyness slogan</Text>
      </View>
    );
  };
  
  const ImageSection = ({source}) => {
    return (
        <Image source={source} style={Image_style.image} />
    );
  };
  
  const Header_styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 120,
      backgroundColor: '#a5a5a5',
      paddingHorizontal: 20,
      paddingTop: 40,
  
    },
    button: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  const Text_style = StyleSheet.create({
    text: {
      flex: 4,
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      numberOfLines: 2,
      marginLeft: 20,
    },
  });
  
  const Image_style = StyleSheet.create({
      image: {
          flex: 1,
          width:50, // Adjust the size as needed
          height: 50, // Adjust the size as needed
          resizeMode: 'contain',
          marginLeft: 20,
  
  
      },
  });

  export default Header;
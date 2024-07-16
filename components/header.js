
import { StyleSheet, Text, Image, View } from 'react-native';
import { AppLogo } from '../data/constants';
import { fontStyles, backgroundStyles } from '../data/styles';


const Header = ({ navigation, route, options }) => {

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 120,
      backgroundColor: backgroundStyles.color.secondary,
      paddingHorizontal: 20,
      paddingTop: 40,
  },
  text: {
    flex: 4,
    color: fontStyles.color.secondary,
    fontSize: fontStyles.size.mainHeader,
    fontWeight: 'bold',
    numberOfLines: 2,
    marginLeft: 20,
    },
});

return (
    <View style={styles.container}>

      <ImageSection source={AppLogo} />
      <Text style={styles.text}>Some so many fancyness slogan</Text>
    </View>
  );
};

const ImageSection = ({source}) => {
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width:50, // Adjust the size as needed
      height: 50, // Adjust the size as needed
      resizeMode: 'contain',
      marginLeft: 20,
        
    },
  });

  return (
    <Image source={source} style={styles.image} />
  );
};



export default Header;
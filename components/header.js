
import { StyleSheet, Text, Image, View } from 'react-native';
import { AppLogo } from '../data/constants';
import { fontStyles, backgroundStyles, spacingStyles, borderStyles } from '../data/styles';
import { Image_View } from './elements';

const Header = ({ navigation, route, options }) => {

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
      backgroundColor: backgroundStyles.color.secondary,
      padding: spacingStyles.margin.high,
      paddingHorizontal: spacingStyles.margin.extraLarge,
      paddingTop: 50,
      
  },
  text: {
    flex: 1,
    color: fontStyles.color.secondary,
    fontSize: fontStyles.size.callout,
    fontWeight: 'bold',
    numberOfLines: 2,
    marginLeft: 20,
    },
});

return (
    <View style={styles.container}>

      <Image_View source={AppLogo.wide} height={20} width={100} radius={borderStyles.radius.low}/>
      <Text style={styles.text}>Some so many fancyness slogan</Text>
    </View>
  );
};



export default Header;
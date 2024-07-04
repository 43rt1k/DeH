import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { foodArray } from '../data/foodData';
import {sWidth, sHeight} from '../data/constants'
const MainMenu = ({ navigation }) => {
    return (
        <ScrollView> 
            {foodArray.map((food, index) => (
                <View key={index} style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={food.imagePath} style={styles.image}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textName}>{food.name}</Text>
                    </View>
                </View>
      ))}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    
    container: {
        height: 80,
        width: 370,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
        margin: 10,
        borderRadius: 10,
    },

    imageContainer: {
        flex: 1,
        height: '99%', 
        borderWidth: 2,
        borderColor: 'green',
        justifyContent: 'flex-end', // Align items to the start (left)
    },

    textContainer: {
        flex: 2,
        height: '99%',
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center', // Center text horizontally

    },


    image: {
        resizeMode: 'cover',
        height: 75,
        width: 75,
    },

    textName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
  });


export default MainMenu;

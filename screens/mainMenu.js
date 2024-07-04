import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { foodArray } from '../data/foodData';

const MainMenu = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {foodArray.map((food, index) => (
                <View key={index} style={styles.block}>
                <Text>{food.name}</Text>
        </View>
      ))}
      </ScrollView>
    );
};


const styles = StyleSheet.create({
  container: {
   
  },
  block: {
    height: 150,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  },
});


export default MainMenu;

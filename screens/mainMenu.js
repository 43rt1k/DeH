import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>
                Choose a new location for weather prediction
            </Text>

            
            

               

        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 10,
        flex: 1,
    },

    selectedLocation: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#F5F5F5',
        marginBottom: 30,
        textAlign: 'center',
        padding: 10,
    },

    prompt: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },

    customButton: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#4285F4',
    },

    customText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MainMenu;

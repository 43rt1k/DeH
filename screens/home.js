import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { foodArray } from '../data/foodData';
import { LogoLinksArray } from '../data/constants';
import { colors, fontSizes, border_styles } from '../data/styles';
import { VSeparator, HSeparator } from '../components/elements';
import { useState } from 'react';

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    


    return (

        <View>
            <ScrollView  style={{backgroundColor: colors.white}}>
                    <MainMenuListSection />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const MainMenuListSection = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const foodDetailsPress = (food) => {
        setSelectedFood(food);
        setModalVisible(true);
    };

    const renderModalContent = () => {
        if (selectedFood) {
            return (
                <View>
                    <Text style={styles.modalTitle}>{selectedFood.name}</Text>
                    <Text style={styles.modalContent}>Price: {selectedFood.price}</Text>
                    <Text style={styles.modalContent}>Calories: {selectedFood.nutrition.calories}</Text>
                    <Text style={styles.modalContent}>Proteins: {selectedFood.nutrition.proteines}g</Text>
                    <Text style={styles.modalContent}>Lipids: {selectedFood.nutrition.lipides}g</Text>
                    <Text style={styles.modalContent}>Glucides: {selectedFood.nutrition.glucides}g</Text>
                </View>
            );
        }
        return null;
    };

    return (
        <View>
            {foodArray.map((food, index) => (
            <TouchableOpacity key={index} onPress={() => foodDetailsPress(food)}>

                <View key={index} style={general_styles.container}>    
                    {/*Main container*/}
                    <ImageSection imagePath={food.imagePath} />

                    <InfoSection food={food} />
                </View> 
            </TouchableOpacity>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>

                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {renderModalContent()}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}>

                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


        </View>
    );
};

// Image Section component
const ImageSection = ({ imagePath }) => {
    return (
        <View style={Image_styles.container}>
            <Image source={imagePath} style={Image_styles.image} />
        </View>
    );
};

// Text Section component
const InfoSection = ({food}) => {
    
    const HeaderSection = ({food}) => {
        return (
            <View style={[Text_styles.headerContainer]}>
                <Text style={Text_styles.name}>{food.name}</Text>
                <Text style={Text_styles.price}>{food.price.toFixed(2)}.-</Text>
    
            </View>
        );
    };

    const LogoSection = () => {
        return (
            <View style={[Image_styles.logoContainer]}>
                {LogoLinksArray.map((logo, index) => (
                    <Image source={logo} key={index} style={Image_styles.logo}/>
            ))}
            </View>
        );
    };

    const NutritionSection = ({nutrition}) => {
        return (
            <View style={Text_styles.nutritionContainer}>
    
    
                <View style={Text_styles.col}>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Cal</Text>
                        <Text style={Text_styles.value}>{nutrition.calories}</Text>
                    </View>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Prot</Text>
                        <Text style={Text_styles.value}>{nutrition.proteines}g</Text>
                    </View>
                </View>
                


                <View style={Text_styles.col}>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Lip</Text>
                        <Text style={Text_styles.value}>{nutrition.lipides}g</Text>
                    </View>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Gluc</Text>
                        <Text style={Text_styles.value}>{nutrition.glucides}g</Text>
                    </View>
    
    
                </View>
        </View>
    
        );
    };

    //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    return (
        <View style={[Text_styles.container]}>

    
            <HeaderSection food={food} />
            <HSeparator height={1} />
            <View style={[Text_styles.infoContainer]}>

                <LogoSection />
                <HSeparator height={1} />
                <NutritionSection nutrition={food.nutrition} />
                
            </View>
        </View>
    );

    
    
};


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const Image_styles = StyleSheet.create({
    container: {
        justifyContent: 'center', // Center items vertically
        borderRadius: 12, // Make the border radius half of the image width/height for a circle
        overflow: 'hidden', // Ensure overflow is hidden for rounded corners

    },

    image: {
        resizeMode: 'cover',
        height: '100%',
        width: 125,
    },

    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    },
    logo: {
        resizeMode: 'contain',
        width: 25,    
    },
});

const Text_styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center', // Align text to the center
        //paddingLeft: 10, // Add padding to the left to create some space between image and text
        borderRadius: 20, // Make the border radius half of the image width/height for a circle


        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 14, 
        marginLeft: 10,
    },  

    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },

    name: {
        flex: 1,
        fontSize: fontSizes.header,
        fontWeight: 'bold',
        //marginBottom: 5,


    },

    infoContainer: {
        flex: 5,
        flexDirection: 'column',

        width: '100%',
    },

    price: {
        flex: 1,
        fontSize: fontSizes.price,
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the left

    },

    nutritionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },

    col: {
        flex: 1,
        flexDirection: 'column',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
    },
    
    label: {
        fontSize: fontSizes.nutrition,
        flex: 1,
        textAlign: 'left',
        textTransform: 'lowercase',

    },
    value: {
        fontSize: fontSizes.nutrition,
        flex: 1.5,
        textAlign: 'left',
        fontWeight: 'bold',

    },
});

// General styles
const general_styles = StyleSheet.create({
    container: {
        height: 125,
        width: 370,
        flexDirection: 'row',

        margin: 10,        


        //borderWidth: 2,
        borderColor: 'black',
        borderRadius: 14, 

        //backgroundColor: colors.grayDark,

    },


});


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalContent: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});





export default MainMenu;
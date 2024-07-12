import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { HSeparator } from '../components/elements';
import { LogoView } from './sections/homeSections';

const DetailsMenu = ({ modalVisible, setModalVisible, selectedFood }) => {

    const ImageView = ({ source }) => {
        return (
            <View style={DetailsMenu_style.imageContainer}>
                <Image source={source} style={DetailsMenu_style.image} />
            </View>
        );
    };

    const HumanDescription = ({food}) => {
        return (
            <View style={DetailsMenu_style.humanDescriptionContainer}>
                <Text style={DetailsMenu_style.humanDescriptionText}>{food.description}</Text>
            </View>
        );
    };

    const IngredientsView = ({food}) => {
        return (
            <View style={DetailsMenu_style.ingredientsContainer}>
                {Object.entries(food.ingredients).map(([ingredient, quantity], index) => (
                    <Text key={index} style={DetailsMenu_style.ingredientText}>
                        {ingredient}: {quantity}g</Text>
                ))}
            </View>
        );
    };
    
    const NutritionView = ({food}) => {
        return (
            <View style={DetailsMenu_style.nutritionContainer}>
                {Object.entries(food.nutrition).map(([nutrient, value], index) => (
                    <Text key={index} style={DetailsMenu_style.nutritionText}>
                        {nutrient}: {value}g</Text>
                ))}
            </View>
        );
    };

    const ModalContent = () => {

        return (
            <View style={DetailsMenu_style.modalContentContainer}>
                <ImageView source={selectedFood.imagePath} />

                <Text style={DetailsMenu_style.foodName}>{selectedFood.name}</Text>

                <View style={DetailsMenu_style.logoPriceContainer}>
                    <LogoView food={selectedFood}/>
                    <Text style={DetailsMenu_style.foodPrice}>{selectedFood.price}</Text>
                </View>

                <HSeparator width={2} />

                <HumanDescription food={selectedFood}/>

                <HSeparator width={2} />

                <View style={DetailsMenu_style.ingredientsNutritionContainer}>
                    <IngredientsView food={selectedFood} />
                    <NutritionView food={selectedFood} />

                </View>
               
            </View>
        );
    };


    const CloseButton = () => {
        return(
        <TouchableOpacity   style={DetailsMenu_style.closeButton}
                            onPress={() => setModalVisible(false)}>
            <Text style={DetailsMenu_style.closeButtonText}>Close</Text>
        </TouchableOpacity>
        )

    };


    return (

        <Modal  animationType="slide" transparent={true} visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
            
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => setModalVisible(false)}>

                <View style={DetailsMenu_style.modalOverlay }>
                    <ScrollView>
                        <TouchableWithoutFeedback onPress={() => {}}>

                            <View style={DetailsMenu_style.modalContainer}>
                                <ModalContent />
                                <CloseButton />
                            </View>
                        </TouchableWithoutFeedback>

                </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const DetailsMenu_style = StyleSheet.create({
    modalOverlay: {
        flex: 1,

        paddingVertical: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(226, 159, 159, 0.786)',
    },
    modalContainer: {
        flex: 1,
        width: '93%',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
    },
    modalContentContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        
    },
    
    imageContainer: {
        height: 250,

        width: '100%',
        alignItems: 'center',
        
        justifyContent: 'center', // Center items vertically
        borderRadius: 12, // Make the border radius half of the image width/height for a circle
        overflow: 'hidden', // Ensure overflow is hidden for rounded corners
    },
    image: {
        width: '100%',
        resizeMode: 'contain', //Ou cover pour remplir

    },


    foodName: {
        flex: 0.5,
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10,

    },


    logoPriceContainer: {
        flex: 0.3,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    foodPrice: {
        flex: 0.5,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the left
    },


    humanDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    humanDescriptionText: {
        fontSize: 15,
        marginVertical: 10,
    },

    ingredientsNutritionContainer: {
        flex: 1,
        flexDirection: 'row',
    }, 
    ingredientsContainer: {
        flex: 1,
    },
    nutritionContainer: {
        flex: 1,

    },


    content: {
        flex: 1,
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

export {DetailsMenu};

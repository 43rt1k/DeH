import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
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
            <View style={DetailsMenu_style.logoPriceContainer}>
                <Text style={DetailsMenu_style.humanDescriptionText}>{food.description}</Text>
            </View>
        );
    };

    const IngredientsView = ({food}) => {
        return (
            <View style={DetailsMenu_style.ingredientsContainer}>

            </View>
        );
    };
    
    const NutritionView = () => {
        return (
            <View style={DetailsMenu_style.nutritionContainer}>
                <Text style={DetailsMenu_style.content}>Calories: {selectedFood.nutrition.calories}</Text>
                <Text style={DetailsMenu_style.content}>Proteins: {selectedFood.nutrition.proteines}g</Text>
                <Text style={DetailsMenu_style.content}>Lipids: {selectedFood.nutrition.lipides}g</Text>
                <Text style={DetailsMenu_style.content}>Glucides: {selectedFood.nutrition.glucides}g</Text>
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
            
            <TouchableOpacity style={{flex: 1}} onPress={() => setModalVisible(false)}>

                <View style={DetailsMenu_style.modalOverlay }>
                    <View style={DetailsMenu_style.modalContainer}>
                        <ModalContent />
                        <CloseButton />
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const DetailsMenu_style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(117, 117, 117, 0.5)',
    },
    modalContainer: {
        width: '95%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalContentContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

    },

    imageContainer: {
        flex: 3,
        
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
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10,
    },


    logoPriceContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    foodPrice: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the left

    },


    humanDescriptionContainer: {

    },
    humanDescriptionText: {
        fontSize: 15,
    },

    ingredientsNutritionContainer: {
        flex: 1,
        flexDirection: 'column',
    }, 
    ingredientsContainer: {
        flex: 1,
    },
    nutritionContainer: {
        flex: 1,
        flexDirection: 'row',
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

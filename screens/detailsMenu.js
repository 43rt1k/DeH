import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, ScrollView, SectionListComponent } from 'react-native';
import { HSeparator } from '../components/elements';
import { LogoView } from '../components/elements';
import { fontStyles, borderStyles, backgroundStyles, colors } from '../data/styles';

const DetailsMenu_2Section = ({ modalVisible, setModalVisible, selectedFood }) => {

    const styles = StyleSheet.create({
        modalOverlay: {
            flex: 1,
    
            paddingVertical: 60, 
            alignItems: 'center',
            justifyContent: 'center',
            
            backgroundColor: backgroundStyles.transparent.primary(),
        },
        modalContainer: {
        
            padding: 10,
            marginHorizontal: 5,
            borderRadius: borderStyles.radius.medium,
            
            backgroundColor: backgroundStyles.color.secondary,
        },

    });
    
    return (

        <Modal  animationType="slide" 
                transparent={true} 
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                style={styles.modalOverlay}>
        
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => setModalVisible(false)}>

                <View style={styles.modalOverlay }>
                    <ScrollView>
                        <TouchableWithoutFeedback onPress={() => {}}>

                            <View style={styles.modalContainer}>
                                <ModalContent_3Section  selectedFood={selectedFood}/>
                                <Close_Button toDoFunc={setModalVisible} />
                            </View>
                        </TouchableWithoutFeedback>

                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    );
};

const Close_Button = ({toDoFunc, toDoVal = false}) => {

    const styles = StyleSheet.create({            
        container: {
            flex: 1,
            margin: 5,
            backgroundColor: colors.black,
            padding: 10,
            borderRadius: borderStyles.radius.medium,
            alignItems: 'center',
        },
        text: {
            fontWeight: 'bold',
            color: fontStyles.color.closeButton,
            fontSize: fontStyles.size.closeButton,
        },
    });

    return(
    <TouchableOpacity   style={styles.container}
                        onPress={() => toDoFunc(toDoVal)}>
        <Text style={styles.text}>Close</Text>
    </TouchableOpacity>
    )

};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const ModalContent_3Section = ({selectedFood}) => {
   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            
        },
        foodName: {
            flex: 0.5,
            fontSize: fontStyles.size.foodNameDesc,
            color: fontStyles.color.primary,
            fontWeight: 'bold',
            paddingVertical: 10,
    
        },
    
   
    });

    return (
        <View style={styles.container}>
            <Image_View source={selectedFood.imagePath} />

            <Text style={styles.foodName}>{selectedFood.name}</Text>

            <LogoPrice_View selectedFood={selectedFood} />

            <HSeparator width={2} />

            <HumanDescription_View food={selectedFood}/>

            <HSeparator width={2} />

            <IngNut_4Section selectedFood={selectedFood} />
           
        </View>
    );
};

const Image_View = ({ source }) => {

    const styles = StyleSheet.create({
        container: {
            height: 250,
            
            width: '100%',
            alignItems: 'center',
            
            justifyContent: 'center', // Center items vertically
            borderRadius: borderStyles.radius.high, // Make the border radius half of the image width/height for a circle
            overflow: 'hidden', // Ensure overflow is hidden for rounded corners
        },
        image: {
            width: '100%',
            resizeMode: 'contain', //Ou cover pour remplir
            
        },
    });

    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
};

const LogoPrice_View = ({selectedFood}) => {

    const styles = StyleSheet.create({
          
        container: {
            flex: 0.3,
            flexDirection: 'row',
            paddingHorizontal: 5,
            paddingVertical: 10,
            alignItems: 'center',
            
        },
        foodPrice: {
            flex: 0.5,
            fontSize: fontStyles.size.foodPriceDesc,
            fontWeight: 'bold',
            textAlign: 'right', // Align text to the left
            color: fontStyles.color.primary,
        },
    });

    return (
        <View style={styles.container}>
            <LogoView food={selectedFood}/>
            <Text style={styles.foodPrice}>{selectedFood.price}</Text>
        </View>
    );
};

const HumanDescription_View = ({food}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 5,
    
        },
        text: {
            fontSize: fontStyles.size.humanDesc,
            marginVertical: 10,
            color: fontStyles.color.primary,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{food.description}</Text>
        </View>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const IngNut_4Section = ({selectedFood}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            paddingBottom: 20,
        }, 
    });

    return (
        <View style={styles.container}>
            <Ingredients_View food={selectedFood} />
            <Nutrition_View food={selectedFood} />

        </View>
    );
};

const Ingredients_View = ({food}) => {

    return (
        <View style={IngNut_style.container}>
            {Object.entries(food.ingredients).map(([ingredient, quantity], index) => (
                <View style={IngNut_style.textContainer}>
                    <Text key={index} style={IngNut_style.label}>{ingredient}: </Text>
                    <Text key={index} style={IngNut_style.value}>{quantity}</Text>

                </View>
            ))}
        </View>
    );
};
const Nutrition_View = ({food}) => {

    return (
        <View style={IngNut_style.container}>
            {Object.entries(food.nutritions).map(([nutrition, quantity], index) => (
                <View style={IngNut_style.textContainer}>
                    <Text key={index} style={IngNut_style.label}>{nutrition}: </Text>
                    <Text key={index} style={IngNut_style.value}>{quantity}g</Text>

                </View>
            ))}
        </View>
    );
};

const IngNut_style = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
    },
    label: {
        flex: 1,
        fontSize: fontStyles.size.ingrLabel,
        color: fontStyles.color.primary,
    },
    value: {
        flex: 1,
        fontSize: fontStyles.size.ingrValue,
        color: fontStyles.color.primary,
    },
});


export {DetailsMenu_2Section};

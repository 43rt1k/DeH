import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, ScrollView, SectionListComponent } from 'react-native';
import { HSeparator, LogoView, Image_View, VSeparator, Close_Button} from '../components/elements';
import { fontStyles, borderStyles, backgroundStyles, colors, spacingStyles, backgroundPreset } from '../data/styles';

const DetailsMenu_2Section = ({ modalVisible, setModalVisible, selectedFood }) => {
    
    return (

        <Modal  
            animationType="slide" 
            transparent={true} 
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            style={backgroundPreset.modalOverlay}>
        
            <TouchableWithoutFeedback 
                style={{flex: 1}} 
                    onPress={() => setModalVisible(false)}>

                <View style={backgroundPreset.modalOverlay }>
                    <ScrollView>
                        <TouchableWithoutFeedback onPress={() => {}}>

                            <View style={backgroundPreset.modalContainer}>
                                <ModalContent_3Section  selectedFood={selectedFood}/>
                                <Close_Button setVisible={setModalVisible} />
                            </View>
                        </TouchableWithoutFeedback>

                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    );
};


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const ModalContent_3Section = ({selectedFood}) => {
   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            marginHorizontal: spacingStyles.margin.low,
            
        },
        foodName: {
            flex: 0.5,
            fontSize: fontStyles.size.title3,
            color: fontStyles.color.primary,
            fontWeight: 'bold',
            paddingVertical: spacingStyles.margin.high,
    
        },
    
   
    });
    const HSeparator_View = () => {
        return (
            <HSeparator width={2} color={borderStyles.color.secondary}/>
        );
    };
    
    return (
        <View style={styles.container}>
            
            <Image_View source={selectedFood.imagePath} height={250} />

            <Text style={styles.foodName}>{selectedFood.name}</Text>

            <LogoPrice_View selectedFood={selectedFood} />

            <HSeparator_View />

            <HumanDescription_View food={selectedFood}/>

            <HSeparator_View />

            <IngNut_4Section selectedFood={selectedFood} />
           
        </View>
    );
};

const LogoPrice_View = ({selectedFood}) => {

    const styles = StyleSheet.create({
          
        container: {
            flex: 0.3,
            flexDirection: 'row',
            paddingHorizontal: spacingStyles.margin.medium,
            paddingVertical: spacingStyles.margin.high,
            alignItems: 'center',
            
        },
        foodPrice: {
            flex: 0.5,
            fontSize: fontStyles.size.title1,
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
            padding: spacingStyles.margin.medium,
    
        },
        text: {
            fontSize: fontStyles.size.headline,
            marginVertical: spacingStyles.margin.high,
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
            padding: spacingStyles.margin.high,
            paddingBottom: spacingStyles.margin.high * 2,
        }, 
    });

    return (
        <View style={styles.container}>
            <Ingredients_View food={selectedFood} />

            <VSeparator width={1} color={borderStyles.color.ternary} />

            <Nutrition_View food={selectedFood} />

        </View>
    );
};

const Ingredients_View = ({food}) => {

    return (
        <View style={IngNut_style.container}>
            {Object.entries(food.ingredients).map(([ingredient, quantity], index) => (
                <View key={index} style={IngNut_style.textContainer}>
                    <Text style={IngNut_style.label}>{ingredient}: </Text>
                    <Text style={IngNut_style.value}>{quantity}</Text>

                </View>
            ))}
        </View>
    );
};
const Nutrition_View = ({food}) => {

    return (
        <View style={IngNut_style.container}>
            {Object.entries(food.nutritions).map(([nutrition, quantity], index) => (
                <View key={index} style={IngNut_style.textContainer}>
                    <Text style={IngNut_style.label}>{nutrition}: </Text>
                    <Text style={IngNut_style.value}>{quantity}g</Text>

                </View>
            ))}
        </View>
    );
};

const IngNut_style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: spacingStyles.margin.low,
    },
    label: {
        flex: 3,
        fontSize: fontStyles.size.subheadline,
        color: fontStyles.color.primary,
        textAlign: 'right',
        paddingRight: spacingStyles.margin.high,
    },
    value: {
        flex: 2,
        fontSize: fontStyles.size.subheadline,
        color: fontStyles.color.primary,
    },
});


export {DetailsMenu_2Section};

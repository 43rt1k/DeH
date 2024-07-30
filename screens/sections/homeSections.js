import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import { foodArray } from '../../data/foodData';
import { LogoLinksArray, LogoName, SortName , FilterName} from '../../data/constants';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles} from '../../data/styles';
import { HSeparator, LogoView, Image_View } from '../../components/elements';
import { useState, useRef } from 'react';
import { DetailsMenu_2Section} from '../detailsMenu'

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export const MainMenuList_1Section = () => {
   
    const styles = StyleSheet.create({
            
        container: {
            backgroundColor: backgroundStyles.color.primary,
        },
        menuContainer: {
            height: 150,
            width: 370,
            flexDirection: 'row',
            padding: spacingStyles.padding.high,
            borderRadius: borderStyles.radius.high,
            backgroundColor: backgroundStyles.color.secondary,

            margin: spacingStyles.margin.medium,  
            marginVertical: spacingStyles.margin.high,     
        },
    });
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const foodDetailsPress = (food) => {
        setSelectedFood(food);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {foodArray.map((food, index) => (
            <TouchableOpacity key={index} onPress={() => foodDetailsPress(food)}>

                <View key={index} style={styles.menuContainer}>    

                    <Image_View source={food.imagePath} width={125}/>

                    <Info_2Section food={food} />
                </View> 

            </TouchableOpacity>
            ))}

            <DetailsMenu_2Section   modalVisible={modalVisible}
                                    setModalVisible={setModalVisible}
                                    selectedFood={selectedFood}/>
        </View>
    );
};

const Immage_View = ({ source }) => {
    
    const styles = StyleSheet.create({
        
        container: {
            justifyContent: 'center', // Center items vertically
            borderRadius: borderStyles.radius.medium, // Make the border radius half of the image width/height for a circle
            overflow: 'hidden', // Ensure overflow is hidden for rounded corners

        },
        image: {
            resizeMode: 'cover',
            height: '100%',
            width: 125,
        },
    });

    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const Info_2Section = ({food}) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center', // Align text to the center
            //paddingLeft: 10, // Add padding to the left to create some space between image and text
            //borderRadius: 20, // Make the border radius half of the image width/height for a circle
    
        
    
            borderWidth: borderStyles.width.low,
            borderColor: borderStyles.color.primary,
            borderRadius: borderStyles.radius.high,
            paddingVertical: spacingStyles.padding.medium,
            marginLeft: spacingStyles.margin.high,
        },  
    
    
        infoContainer: {
            flex: 5,
            flexDirection: 'column',
    
            width: '100%',
        },
    });

    return (
        <View style={[styles.container]}>

    
            <Header_View food={food} />
            <HSeparator height={1}
                        color={borderStyles.color.primary}/>
            <View style={[styles.infoContainer]}>

                <LogoView food={food} />
                <HSeparator height={1} 
                            color={borderStyles.color.primary}/>
                <Nutrition_View nutritions={food.nutritions} />
                
            </View>
        </View>
    );

    
    
};

const Header_View = ({food}) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingHorizontal: spacingStyles.padding.medium,
        },
        foodName: {
            flex: 1,
            fontSize: fontStyles.size.foodName,
            fontWeight: 'bold',
            color: fontStyles.color.colored,
            paddingLeft: spacingStyles.padding.large,
            //marginBottom: 5,
        },
        foodPrice: {
            flex: 1,
            fontSize: fontStyles.size.foodPrice,
            fontWeight: 'bold',
            textAlign: 'right', // Align text to the left
            color: fontStyles.color.colored,
    
        },
    });
    
    return (
        <View style={[styles.container]}>
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodPrice}>{food.price.toFixed(2)}.-</Text>

        </View>
    );
};

const Nutrition_View = ({nutritions}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            padding: spacingStyles.padding.medium,
        },
        column: {
            flex: 1,
            flexDirection: 'column',
        },
        row: {
            flex: 1,
            flexDirection: 'row',
        },
        label: {
            fontSize: fontStyles.size.nutritionLabel,
            flex: 1,
            textAlign: 'left',
            textTransform: 'lowercase',
            color: fontStyles.color.primary,
    
        },
        value: {
            fontSize: fontStyles.size.nutritionValue,
            flex: 1.5,
            textAlign: 'left',
            fontWeight: 'bold',
            color: fontStyles.color.primary,
    
        },
    });

    return (
        <View style={styles.container}>


            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.label}>Cal</Text>
                    <Text style={styles.value}>{nutritions.calories}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Prot</Text>
                    <Text style={styles.value}>{nutritions.proteines}g</Text>
                </View>
            </View>
            


            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.label}>Lip</Text>
                    <Text style={styles.value}>{nutritions.lipides}g</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Gluc</Text>
                    <Text style={styles.value}>{nutritions.glucides}g</Text>
                </View>


            </View>
    </View>

    );
};





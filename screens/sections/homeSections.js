import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { foodArray } from '../../data/foodData';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles } from '../../data/styles';
import { HSeparator, LogoView, Image_View, VSeparator } from '../../components/elements';
import { DetailsMenu_2Section } from '../detailsMenu';
import { MainColors } from '../../data/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MainMenuList_1Section = ({ sortBy }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: backgroundStyles.color.primary,
            paddingBottom: spacingStyles.margin.extraLarge * 3.5,
        },
        menuContainer: {
            width: 370,
            height: 150,
            flexDirection: 'row',
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.medium,
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

    const sortFoods = (foods, criteria) => {
        switch (criteria) {
            case 'Price: Low to High':
                return [...foods].sort((a, b) => a.price - b.price);
            case 'Price: High to Low':
                return [...foods].sort((a, b) => b.price - a.price);
            case 'Calories: High to Low':
                return [...foods].sort((a, b) => b.nutritions.calories - a.nutritions.calories);
            case 'Popularity':
                // Assume there is a popularity attribute; adjust as needed
                return [...foods].sort((a, b) => b.popularity - a.popularity);
            default:
                return foods;
        }
    };

    const sortedFoodArray = sortFoods(foodArray, sortBy);

    return (
        <View style={styles.container}>
            {sortedFoodArray.map((food, index) => (
                <TouchableOpacity key={index} onPress={() => foodDetailsPress(food)}>
                    <View style={styles.menuContainer}>
                        <Image_View source={food.imagePath} width={125} />
                        <Info_2Section food={food} />
                    </View>
                </TouchableOpacity>
            ))}

            <DetailsMenu_2Section 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedFood={selectedFood} 
            />
        </View>
    );
};


const Info_2Section = ({ food }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 5,
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            //paddingHorizontal: spacingStyles.margin.low,
        },
    });


    return (
        <View style={styles.container}>

            <View style={{ flex: 15 }}>
                <Header_View food={food} />
                <HSeparator_View />
                <Nutrition_View nutritions={food.nutritions} />
                <HSeparator_View />
                <LogoView food={food} />
            </View>

            <Flash_View food={food} />

        </View>
    );
};

const Header_View = ({ food }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: spacingStyles.margin.medium,
            alignItems: 'center',
        },
        foodName: {
            flex: 3,
            fontSize: 15,
            fontWeight: 'bold',
            color: fontStyles.color.primary,
            padding: spacingStyles.margin.low,
            paddingHorizontal: spacingStyles.margin.low,
        },
        foodPrice: {
            flex: 2,
            fontSize: fontStyles.size.title2,
            paddingRight: spacingStyles.margin.low,
            fontWeight: 'bold',
            textAlign: 'right',
            color: fontStyles.color.primary,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodPrice}>{food.price.toFixed(2)}</Text>
        </View>
    );
};

const HSeparator_View = () => {
    const styles = StyleSheet.create({
        container: {
            height: 0.8,
            width: '98%',
            marginVertical: spacingStyles.margin.medium,
        },
    });

    return (
        <View style={styles.container}>
            <HSeparator height={0.8} color={borderStyles.color.ternary} />
        </View>
    );
};

const Nutrition_View = ({ nutritions }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: spacingStyles.margin.medium,
        },
        column: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        label: {
            fontSize: fontStyles.size.callout,
            textAlign: 'left',
            textTransform: 'lowercase',
            color: fontStyles.color.primary,
        },
        value: {
            fontSize: fontStyles.size.subheadline,
            textAlign: 'left',
            fontWeight: 'bold',
            color: fontStyles.color.primary,
        },
    });

    const VSeparator_View = () => {
        return (
            <VSeparator width={0.8} color={borderStyles.color.ternary} />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.label}>Cal</Text>
                <Text style={styles.value}>{nutritions.calories}</Text>
            </View>

            <VSeparator_View />

            <View style={styles.column}>
                <Text style={styles.label}>Prot</Text>
                <Text style={styles.value}>{nutritions.proteines}g</Text>
            </View>

            <VSeparator_View />

            <View style={styles.column}>
                <Text style={styles.label}>Lip</Text>
                <Text style={styles.value}>{nutritions.lipides}g</Text>
            </View>

            <VSeparator_View />

            <View style={styles.column}>
                <Text style={styles.label}>Gluc</Text>
                <Text style={styles.value}>{nutritions.glucides}g</Text>
            </View>
        </View>
    );
};

const Flash_View = ({ food }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',  // Space items evenly
            height: '100%',  // Ensure the container takes the full height for vertical centering
        },
        icon: {
            marginVertical: spacingStyles.margin.low,
        },
    });

    let iconColor;
    let flashCount;

    switch (food.mainColor) {
        case MainColors.green:
            iconColor = MainColors.green;
            flashCount = 1;
            break;
        case MainColors.yellow:
            iconColor = MainColors.yellow;
            flashCount = 2;
            break;
        case MainColors.red:
            iconColor = MainColors.red;
            flashCount = 3;
            break;
        default:
            iconColor = MainColors.green;
            flashCount = 1;
    }

    return (
        <View style={styles.container}>
            {Array.from({ length: flashCount }).map((_, index) => (
                <Icon
                    key={index}
                    name="flash-on"
                    size={20}
                    color={iconColor}
                    style={styles.icon}
                />
            ))}
        </View>
    );
};
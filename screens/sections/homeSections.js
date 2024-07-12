import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import { foodArray } from '../../data/foodData';
import { LogoLinksArray, LogoName, SortName , FilterName} from '../../data/constants';
import { fontSizes } from '../../data/styles';
import { HSeparator } from '../../components/elements';
import { useState, useRef } from 'react';
import { DetailsMenu} from '../detailsMenu'

const MainMenuListSection = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const foodDetailsPress = (food) => {
        setSelectedFood(food);
        setModalVisible(true);
    };
    

    const ImageView = ({ source }) => {
        return (
            <View style={MainMenuList_styles.imageContainer}>
                <Image source={source} style={MainMenuList_styles.image} />
            </View>
        );
    };

    return (
        <View>
            {foodArray.map((food, index) => (
            <TouchableOpacity key={index} onPress={() => foodDetailsPress(food)}>

                <View key={index} style={MainMenuList_styles.container}>    
                    {/*Main container*/}
                    <ImageView source={food.imagePath} />

                    <InfoView food={food} />
                </View> 

            </TouchableOpacity>
            ))}

            <DetailsMenu    modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            selectedFood={selectedFood}/>
        </View>
    );
};

// Text Section component
const InfoView = ({food}) => {
    
    const HeaderSection = ({food}) => {
        return (
            <View style={[InfoView_styles.headerContainer]}>
                <Text style={InfoView_styles.foodName}>{food.name}</Text>
                <Text style={InfoView_styles.foodPrice}>{food.price.toFixed(2)}.-</Text>
    
            </View>
        );
    };

   
    
    const NutritionView = ({nutrition}) => {
        return (
            <View style={InfoView_styles.nutritionContainer}>
    
    
                <View style={InfoView_styles.nutritionСol}>
                    <View style={InfoView_styles.nutritionRow}>
                        <Text style={InfoView_styles.nutritionLabel}>Cal</Text>
                        <Text style={InfoView_styles.nutritionValue}>{nutrition.calories}</Text>
                    </View>
                    <View style={InfoView_styles.nutritionRow}>
                        <Text style={InfoView_styles.nutritionLabel}>Prot</Text>
                        <Text style={InfoView_styles.nutritionValue}>{nutrition.proteines}g</Text>
                    </View>
                </View>
                


                <View style={InfoView_styles.nutritionСol}>
                    <View style={InfoView_styles.nutritionRow}>
                        <Text style={InfoView_styles.nutritionLabel}>Lip</Text>
                        <Text style={InfoView_styles.nutritionValue}>{nutrition.lipides}g</Text>
                    </View>
                    <View style={InfoView_styles.nutritionRow}>
                        <Text style={InfoView_styles.nutritionLabel}>Gluc</Text>
                        <Text style={InfoView_styles.nutritionValue}>{nutrition.glucides}g</Text>
                    </View>
    
    
                </View>
        </View>
    
        );
    };
    
    
    //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    return (
        <View style={[InfoView_styles.container]}>

    
            <HeaderSection food={food} />
            <HSeparator height={1} />
            <View style={[InfoView_styles.infoContainer]}>

                <LogoView food={food} />
                <HSeparator height={1} />
                <NutritionView nutrition={food.nutrition} />
                
            </View>
        </View>
    );

    
    
};

const LogoView = ({food}) => {
        
    return (
        <View style={[InfoView_styles.logoContainer]}>
            {food.logos.map((logo, index) => (
                <Image source={LogoLinksArray[logo]} key={index} style={InfoView_styles.logo}/>
        ))}
        </View>
    );
};
export {LogoView};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const MenuParamSection = () => {
    
    return (
        <View style={MenuParam_styles.container}>
            
            <FilterView />
            <SortByView />
        
        </View>
    );
};

const FilterView = () => {
    const options = [FilterName.vegi, FilterName.noLac, FilterName.noGlut];
    const label = FilterName.label;

    return (
        <View style={MenuParam_styles.paramContainer}>
            <MenuParamButton label={label} options={options}/>
        </View>
    );
};

const SortByView = () => {
    const options = [SortName.priceLtH, SortName.priceHtL, SortName.calHtL];
    const label = SortName.label;
    
    return (
        <View style={MenuParam_styles.paramContainer}>
            <MenuParamButton label={label} options={options} />
        </View>
        
    );
};

const MenuParamButton = ({label, options}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [buttonLayout, setButtonLayout] = useState(null);
    const buttonRef = useRef(null);

    if(options == null) options = ['undefined'];

    const optionPress = (option) => {
        setShowDropdown(false); // Close the dropdown after selecting an option
    };

    const showDropdownOptions = () => {
        buttonRef.current.measure((fx, fy, width, height, px, py) => {
            setButtonLayout({ x: px, y: py, width, height });
            setShowDropdown(true);
        });
    };

    const OptionButton = () => {
        return (
            <TouchableOpacity   ref={buttonRef} 
                                style={MenuParam_styles.button} 
                                onPress={showDropdownOptions}>
                <Text style={MenuParam_styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <OptionButton />

            {showDropdown && (
                <Modal  transparent={true} 
                        animationType='none'
                        visible={showDropdown}
                        onRequestClose={() => setShowDropdown(false)}>

                    <TouchableOpacity   style={MenuParam_styles.modalOverlay}
                                        onPress={() => setShowDropdown(false)}>

                        <View style={[MenuParam_styles.dropdown, { 
                                        top: buttonLayout ? buttonLayout.y : 0,
                                        left: buttonLayout ? buttonLayout.x + buttonLayout.width: 0, } ]}>

                            {options.map((option, index) => (
                                <TouchableOpacity   key={index} 
                                                    style={MenuParam_styles.dropdownButton}
                                                    onPress={() => optionPress(option)}>

                                    <Text style={MenuParam_styles.dropdownButtonText}>{option}</Text>

                                </TouchableOpacity>
                            ))}
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>

    );

};



//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const MainMenuList_styles = StyleSheet.create({
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


    imageContainer: {
        justifyContent: 'center', // Center items vertically
        borderRadius: 12, // Make the border radius half of the image width/height for a circle
        overflow: 'hidden', // Ensure overflow is hidden for rounded corners

    },
    image: {
        resizeMode: 'cover',
        height: '100%',
        width: 125,
    },

});

const InfoView_styles = StyleSheet.create({
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


    infoContainer: {
        flex: 5,
        flexDirection: 'column',

        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    foodName: {
        flex: 1,
        fontSize: fontSizes.header,
        fontWeight: 'bold',
        //marginBottom: 5,
    },
    foodPrice: {
        flex: 1,
        fontSize: fontSizes.price,
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the left

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
    

    nutritionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    nutritionСol: {
        flex: 1,
        flexDirection: 'column',
    },
    nutritionRow: {
        flex: 1,
        flexDirection: 'row',
    },
    nutritionLabel: {
        fontSize: fontSizes.nutrition,
        flex: 1,
        textAlign: 'left',
        textTransform: 'lowercase',

    },
    nutritionValue: {
        fontSize: fontSizes.nutrition,
        flex: 1.5,
        textAlign: 'left',
        fontWeight: 'bold',

    },

});

const MenuParam_styles = StyleSheet.create({
       
    container: {
        flexDirection: 'column',
        height: '10%',
        backgroundColor: 'grey',

    },
    paramContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 15,
        backgroundColor: 'red',
        justifyContent: 'center',


    },


    button: {
        width: 80,
        padding: 10,
        backgroundColor: '#b300ff',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
   
    },


    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        width: 150,
    },
    dropdownButton: {
        padding: 10,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    dropdownButtonText: {
        fontSize: 16,
    },
    
});
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



export { MainMenuListSection , MenuParamSection};



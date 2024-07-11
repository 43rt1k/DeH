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
    
    // Image Section component
    const ImageView = ({ imagePath }) => {
        return (
            <View style={Image_styles.container}>
                <Image source={imagePath} style={Image_styles.image} />
            </View>
        );
    };

    return (
        <View>
            {foodArray.map((food, index) => (
            <TouchableOpacity key={index} onPress={() => foodDetailsPress(food)}>

                <View key={index} style={styles.container}>    
                    {/*Main container*/}
                    <ImageView imagePath={food.imagePath} />

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
            <View style={[Text_styles.headerContainer]}>
                <Text style={Text_styles.name}>{food.name}</Text>
                <Text style={Text_styles.price}>{food.price.toFixed(2)}.-</Text>
    
            </View>
        );
    };

    const LogoView = ({food}) => {
        
        return (
            <View style={[Image_styles.logoContainer]}>
                {food.logos.map((logo, index) => (
                    <Image source={LogoLinksArray[logo]} key={index} style={Image_styles.logo}/>
            ))}
            </View>
        );
    };

    const NutritionView = ({nutrition}) => {
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

                <LogoView food={food} />
                <HSeparator height={1} />
                <NutritionView nutrition={food.nutrition} />
                
            </View>
        </View>
    );

    
    
};

const MenuParamSection = () => {
    return (
        <View style={styles.menuParamContainer}>
            
            <FilterView />
            <SortByView />
        
        </View>
    );
};

const FilterView = () => {
    const options = [FilterName.vegi, FilterName.noLac, FilterName.noGlut];
    const label = FilterName.label;

    return (
        <View style={styles.buttonContainer}>
            <MenuParamButton label={label} options={options}/>
        </View>
    );
};

const SortByView = () => {
    const options = [SortName.priceLtH, SortName.priceHtL, SortName.calHtL];
    const label = SortName.label;
    
    return (
        <View style={styles.buttonContainer}>
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
                                style={styles.button} 
                                onPress={showDropdownOptions}>
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container1}>
            
            <OptionButton />

            {showDropdown && (
                <Modal  transparent={true} 
                        animationType='none'
                        visible={showDropdown}
                        onRequestClose={() => setShowDropdown(false)}>

                    <TouchableOpacity   style={styles.modalOverlay}
                                        onPress={() => setShowDropdown(false)}>

                        <View style={[styles.dropdown, { 
                                        top: buttonLayout ? buttonLayout.y : 0,
                                        left: buttonLayout ? buttonLayout.x + buttonLayout.width: 0, } ]}>

                            {options.map((option, index) => (
                                <TouchableOpacity   key={index} 
                                                    style={styles.dropdownButton}
                                                    onPress={() => optionPress(option)}>

                                    <Text style={styles.dropdownButtonText}>{option}</Text>

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
const styles = StyleSheet.create({
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

    menuParamContainer: {
        flexDirection: 'column',
        height: '10%',
        backgroundColor: 'grey',

    },

    buttonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    



    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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



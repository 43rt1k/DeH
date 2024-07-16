import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import { foodArray } from '../../data/foodData';
import { LogoLinksArray, LogoName, SortName , FilterName} from '../../data/constants';
import { fontStyles, borderStyles, backgroundStyles} from '../../data/styles';
import { HSeparator, LogoView } from '../../components/elements';
import { useState, useRef } from 'react';
import { DetailsMenu_2Section} from '../detailsMenu'

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const MainMenuList_1Section = () => {
   
    const styles = StyleSheet.create({
            
        container: {
            backgroundColor: backgroundStyles.color.primary,
        },
        menuContainer: {
            height: 150,
            width: 370,
            flexDirection: 'row',
            padding: 10,
            borderRadius: borderStyles.radius.high,
            backgroundColor: backgroundStyles.color.secondary,

            margin: 5,  
            marginVertical: 10,     
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

                    <Image_View source={food.imagePath} />

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

const Image_View = ({ source }) => {
    
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
            paddingVertical: 5,
            marginLeft: 10,
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
            paddingHorizontal: 5,
        },
        foodName: {
            flex: 1,
            fontSize: fontStyles.size.foodName,
            fontWeight: 'bold',
            color: fontStyles.color.colored,
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
            padding: 5,
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

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const MenuParam_1Section = () => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: '5%',
            backgroundColor: backgroundStyles.color.primary,
    
        },
    });

    return (
        <View style={styles.container}>
            
            <Filter_2Section />
            <SortBy_2Section />
        
        </View>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const Filter_2Section = () => {

    const options = [FilterName.vegi, FilterName.noLac, FilterName.noGlut];
    const label = FilterName.label;

    return (
        <View style={MenuParam_styles.container}>
            <MenuParam_View label={label} options={options}/>
        </View>
    );
};

const SortBy_2Section = () => {
    const options = [SortName.priceLtH, SortName.priceHtL, SortName.calHtL];
    const label = SortName.label;
    
    return (
        <View style={MenuParam_styles.container}>
            <MenuParam_View label={label} options={options} />
        </View>
        
    );
};

const MenuParam_View = ({label, options}) => {

    const styles = StyleSheet.create({
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
        },
        dropdown: {
            position: 'absolute',
            backgroundColor: '#FFF',
            borderColor: '#CCC',
            borderWidth: borderStyles.width.low,
            borderRadius: borderStyles.radius.low,
            width: 150,
        },
    });

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


    return (
        <View>
            <MakeChoice_Button toDoFunc={showDropdownOptions} buttonRef={buttonRef} label={label}/>

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
                                <Option_Button toDoFunc={optionPress} index={index} option={option} />
                            ))}
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>

    );

};

const MakeChoice_Button = ({toDoFunc, buttonRef, label}) => {

    const styles = StyleSheet.create({
        
        container: {
            width: 80,
            padding: 10,
            backgroundColor: '#b300ff',
            borderRadius: borderStyles.radius.medium,
            alignItems: 'center',
        },
        text: {
            color: '#FFF',
            fontSize: fontStyles.size.subheadline,
    
        },
    });

    return (
        <TouchableOpacity   ref={buttonRef} 
                            style={styles.container} 
                            onPress={toDoFunc}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const Option_Button = ({toDoFunc, index, option}) => {

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            borderBottomColor: '#CCC',
            borderBottomWidth: borderStyles.width.low,
        },
           
        text: {
            fontSize: fontStyles.size.subheadline,
        },
    });

    return (
        <TouchableOpacity   key={index} 
                            style={styles.container}
                            onPress={() => toDoFunc(option)}>

            <Text style={MenuParam_styles.text}>{option}</Text>

        </TouchableOpacity>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const MenuParam_styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 15,
        //backgroundColor: 'red',
        justifyContent: 'center',


    },
});
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



export { MainMenuList_1Section , MenuParam_1Section};



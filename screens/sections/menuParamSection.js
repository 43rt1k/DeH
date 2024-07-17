import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { SortName , FilterName, Image_View} from '../../data/constants';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles} from '../../data/styles';

import { useState, useRef } from 'react';




export const MenuParam_1Section = () => {
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
            padding: spacingStyles.padding.high,
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
            padding: spacingStyles.padding.high,
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
        marginHorizontal: spacingStyles.margin.large,
        //backgroundColor: 'red',
        justifyContent: 'center',


    },
});


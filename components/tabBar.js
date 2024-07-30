import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavbarLinks } from '../data/constants';
import { Image_View } from './elements';
import { backgroundStyles, borderStyles, colors, spacingStyles } from '../data/styles';


const TabBar = ({ state, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#d80000',
            margin: spacingStyles.margin.medium,
            paddingHorizontal: 20,
            backgroundColor: backgroundStyles.color.secondary,
            position: 'absolute',
            bottom: 20, // Position 20 units from the bottom
            left: 20,   // Position 20 units from the left
            right: 20,  // Position 20 units from the right
            borderRadius: borderStyles.radius.high, // Optional: To give a floating effect with rounded corners
        },
        button: {
            flex: 1,
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderStyles.radius.medium,
            margin: spacingStyles.margin.medium,
            marginHorizontal: spacingStyles.margin.large,
            marginBottom: 10,
        },
    });

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {

                const isFocused = state.index === index;

                const onPress = () => {
                    
                    const event = navigation.emit({ type: 'tabPress' });

                    if (!isFocused) navigation.navigate(route.name);
                    
                };

                return (
                    <TouchableOpacity   key={route.key} onPress={onPress}
                                        style={[styles.button, { backgroundColor: isFocused ? '#262626' : '#6d6b6b75' }]} >

                        <Image_View source={NavbarLinks[route.name]} height={25} contain={true}/>
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};



export default TabBar;
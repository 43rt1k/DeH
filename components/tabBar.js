import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavbarLinks } from '../data/constants';

const TabBar = ({ state, navigation }) => {
    return (
        <View style={Bar_styles.container}>
            {state.routes.map((route, index) => {

                const isFocused = state.index === index;

                const onPress = () => {
                    
                    const event = navigation.emit({ type: 'tabPress' });

                    if (!isFocused) navigation.navigate(route.name);
                    
                };

                return (
                    <TouchableOpacity   key={route.key} onPress={onPress}
                                        style={[Bar_styles.button, { backgroundColor: isFocused ? '#262626' : '#6d6b6b75' }]} >

                        <ImageSection source={NavbarLinks[route.name]} />
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const ImageSection = ({source}) => {
    return (
        <Image source={source} style={Image_style.image} />
    );
};

const Image_style = StyleSheet.create({
    image: {

        width: 24, // Adjust the size as needed
        height: 24, // Adjust the size as needed
        resizeMode: 'contain',

    },
});

const Bar_styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default TabBar;
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import { backgroundStyles, colors } from '../data/styles';
import { MainMenuList_1Section } from './sections/homeSections'
import { MenuParam_1Section } from './sections/menuParamSection';
import React, { useState } from 'react';

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: backgroundStyles.color.primary,
        },
    });

    const [bounceAtBottom, setBounceAtBottom] = useState(false);

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const isAtBottom = contentOffset.y >= contentSize.height - layoutMeasurement.height;
        setBounceAtBottom(isAtBottom);
    };


    return (

        <View>
            <ScrollView  
                style={styles.container}
                bounces={bounceAtBottom}
                alwaysBounceVertical={false}
                decelerationRate='normal' // Use "fast" for a rigid feel
                onScroll={handleScroll}>

                <MenuParam_1Section />

                <MainMenuList_1Section />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import { backgroundStyles, colors, spacingStyles } from '../data/styles';
import { MainMenuList_1Section } from './sections/homeSections'
import { SortFilter_1Section } from './sections/sortFilterSection';
import React, { useState } from 'react';

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: backgroundStyles.color.primary,
            paddingBottom: spacingStyles.margin.extraLarge * 5,
        },
    });

    const [sortBy, setSortBy] = useState(null);

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
                alwaysBounceVertical={false}
                decelerationRate='normal' // Use "fast" for a rigid feel
                onScroll={handleScroll}>

                <SortFilter_1Section onSortChange={setSortBy} />

                <MainMenuList_1Section sortBy={sortBy} />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { foodArray } from '../data/foodData';
import { LogoLinksArray, LogoName } from '../data/constants';
import { colors, fontSizes, border_styles } from '../data/styles';
import { VSeparator, HSeparator } from '../components/elements';
import { useState } from 'react';
import {MainMenuListSection} from './sections/homeSections'
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    
    return (

        <View>
            <ScrollView  style={{backgroundColor: colors.white}}>
                    <MainMenuListSection />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
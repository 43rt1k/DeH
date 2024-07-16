import { View, ScrollView } from 'react-native';
import { colors } from '../data/styles';
import {MainMenuList_1Section, MenuParam_1Section} from './sections/homeSections'

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    
    return (

        <View>
            <ScrollView  style={{backgroundColor: colors.white}}>
                <MenuParam_1Section />

                <MainMenuList_1Section />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
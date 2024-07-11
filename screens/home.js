import { View, ScrollView } from 'react-native';
import { colors } from '../data/styles';
import {MainMenuListSection, MenuParamSection} from './sections/homeSections'

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    
    return (

        <View>
            <ScrollView  style={{backgroundColor: colors.white}}>
                <MenuParamSection />
                <MainMenuListSection />

            </ScrollView>

        </View>
    );
};




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
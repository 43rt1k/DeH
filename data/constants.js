import { Dimensions } from 'react-native';
const { sWidth, sHeight } = Dimensions.get('window');

export {sWidth, sHeight};

const PagesName = {
    HOME: "MainMenu",
    DETAILS: "DetailsMenu",
    PROFILE: "Profile",

};

export {PagesName};

const LogoLinksArray = [
    require('../assets/logo/logo1.png'),
    require('../assets/logo/logo2.png'),
    require('../assets/logo/logo3.png'),
    require('../assets/logo/logo4.png'),
    require('../assets/logo/logo5.png'),
    require('../assets/logo/logo6.png'),
];

const NavbarLinks = {
    [PagesName.HOME]: require('../assets/navbar/home.png'),
    [PagesName.PROFILE]: require('../assets/navbar/profile.png'),
};

const AppLogo = require('../assets/navbar/appLogo.png');

export {LogoLinksArray, NavbarLinks, AppLogo};
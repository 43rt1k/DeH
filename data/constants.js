import { Dimensions } from 'react-native';
const { sWidth, sHeight } = Dimensions.get('window');

export {sWidth, sHeight};

const PagesName = {
    HOME: "MainMenu",
    DETAILS: "DetailsMenu",
    PROFILE: "Profile",

};

const LogoName = {
    Logo1: "logo1",
    Logo2: "logo2",
    Logo3: "logo3",
    Logo4: "logo4",
    Logo5: "logo5",
    Logo6: "logo6"
};

//LtH - Lowest to highest
//HtL - Highest to lowest

const SortName = {
    label: "Trier",
    priceLtH: "Prix croissant",
    priceHtL: "Prix decroissant",
    calHtL: "Calories",
};

const FilterName = {
    label: "Filtrer",
    vegi: "Vegetarien",
    noLac: "Sans lactose",
    noGlut: "Sans gluten",
};



export {PagesName, LogoName, SortName, FilterName};

const LogoLinksArray = {
    [LogoName.Logo1]: require('../assets/logo/logo1.png'),
    [LogoName.Logo2]: require('../assets/logo/logo2.png'),
    [LogoName.Logo3]: require('../assets/logo/logo3.png'),
    [LogoName.Logo4]: require('../assets/logo/logo4.png'),
    [LogoName.Logo5]: require('../assets/logo/logo5.png'),
    [LogoName.Logo6]: require('../assets/logo/logo6.png'),
};

const NavbarLinks = {
    [PagesName.HOME]: require('../assets/navbar/home.png'),
    [PagesName.PROFILE]: require('../assets/navbar/profile.png'),
};

const AppLogo = require('../assets/navbar/appLogo.png');

export {LogoLinksArray, NavbarLinks, AppLogo};
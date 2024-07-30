import { Dimensions } from 'react-native';
const { sWidth, sHeight } = Dimensions.get('window');

export {sWidth, sHeight};

const PagesName = {
    HOME:           "MainMenu",
    DETAILS:        "DetailsMenu",
    PROFILE:        "Profile",

};

const LogoName = {
    Logo1:          "logo1",
    Logo2:          "logo2",
    Logo3:          "logo3",
    Logo4:          "logo4",
    Logo5:          "logo5",
    Logo6:          "logo6"
};


//LtH - Lowest to highest
//HtL - Highest to lowest

const SortName = {
    label:          "Trier",
    priceLtH:       "Prix croissant",
    priceHtL:       "Prix decroissant",
    calHtL:         "Calories",
};

const FilterName = {
    label:          "Filtrer",
    vegi:           "Vegetarien",
    noLac:          "Sans lactose",
    noGlut:         "Sans gluten",
};

const FoodPramName = {
    price:          "Prix",
    cal:            "Calories",
};

const ProfileName = {
    user:           "Profl",
    foodPref:       "Preferences",
    notif:          "Notifications",
    contactUs:      "Contat us",
    aboutUs:        "About us",
    privNPol:       "Païvassi Paullyssi",
};

export {PagesName, LogoName, SortName, FilterName, ProfileName};

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


const AppLogo = {
    square: require('../assets/navbar/appLogo.png'),
    wide: require('../assets/navbar/headerLogo.png'),
};

const AvatarLink = require('../assets/avatar.jpg');

export {LogoLinksArray, NavbarLinks, AppLogo, AvatarLink};


const placeHolderText = {
    aboutUs: `
    You shall have no other gods before me.
    • Explanation: Worship only the one true God. Do not prioritize or worship other deities or idols.

    You shall not make for yourself an image in the form of anything in heaven above or on the earth beneath or in the waters below.
    • Explanation: Do not create and worship physical representations or idols. Worship God directly.

    You shall not misuse the name of the Lord your God.
    • Explanation: Use God's name with respect and reverence. Avoid using it in vain or disrespectfully.

    Remember the Sabbath day by keeping it holy.
    • Explanation: Dedicate one day a week to rest and worship. This day should be kept sacred and separate from regular work.

    Honor your father and your mother.
    • Explanation: Show respect and obedience to your parents. Value their guidance and care.

    You shall not murder.
    • Explanation: Do not take another person's life. Respect the sanctity of human life.

    You shall not commit adultery.
    • Explanation: Remain faithful in marriage. Do not engage in sexual relations outside the marital relationship.
    `,

    privNPol: `
    Tu n'auras pas d'autres dieux devant moi.
    • Explication : Adore seulement le Dieu unique. Ne priorise pas et n'adore pas d'autres divinités ou idoles.

    Tu ne te feras pas d'image taillée, ni de représentation quelconque des choses qui sont en haut dans les cieux, en bas sur la terre, et dans les eaux plus bas que la terre.
    • Explication : Ne crée pas et n'adore pas de représentations physiques ou d'idoles. Adore Dieu directement.

    Tu ne prendras pas le nom de l'Éternel, ton Dieu, en vain.
    • Explication : Utilise le nom de Dieu avec respect et révérence. Évite de l'utiliser en vain ou de manière irrespectueuse.

    Souviens-toi du jour du sabbat, pour le sanctifier.
    • Explication : Consacre un jour par semaine au repos et au culte. Ce jour doit être gardé sacré et séparé du travail habituel.

    Honore ton père et ta mère.
    • Explication : Montre du respect et de l'obéissance à tes parents. Valorise leurs conseils et leurs soins.

    Tu ne tueras point.
    • Explication : Ne prends pas la vie d'une autre personne. Respecte la sainteté de la vie humaine.

    Tu ne commettras point d'adultère.
    • Explication : Reste fidèle dans le mariage. Ne t'engage pas dans des relations sexuelles en dehors de la relation conjugale.
    `,
    contactUs: `
    Non habebis deos alienos coram me.
    • Explicatio: Adora solum Deum unicum. Non praeponas neque adora alias divinitates vel idola.

    Non facies tibi sculptile nec omnem similitudinem eorum, quae sunt in caelo desuper et in terra deorsum, nec eorum, quae sunt in aquis sub terra.
    • Explicatio: Ne crees nec adores figuras physicarum vel idolorum. Adora Deum directe.

    Non usurpabis nomen Domini Dei tui frustra.
    • Explicatio: Utere nomine Dei cum reverentia et honore. Cave ne id frustra aut irreverenter utaris.

    Memento ut diem sabbati sanctifices.
    • Explicatio: Consecra unum diem septimanis ad requiem et cultum. Dies iste sit sacrosanctus et separatus ab opere cotidiano.

    Honora patrem tuum et matrem tuam.
    • Explicatio: Ostende reverentiam et obedientiam erga parentes tuos. Prudens consilium eorum et curam dilige.

    Non occides.
    • Explicatio: Ne auferas vitam alterius hominis. Serva sanctitatem vitae humanae.

    Non adulterabis.
    • Explicatio: Mane in matrimonio fidelis. Non te immisceas in relationes sexuales extra coniugales.
    `,
};

export {placeHolderText};
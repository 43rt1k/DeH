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
    privNPol:       "Conditions Générales d'Utilisation",
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

const TermsAndConditionsText = {

    title: `Conditions Générales d'Utilisation`,

    chapter1Title: `1 Dispositions Générales`,
    chapter1Content: `TheMeal, dont le siège est à Lausanne, Suisse ("TheMeal"), fournit des réfrigérateurs et autres dispositifs ("Dispositifs TheMeal") installés exclusivement dans des centres de fitness partenaires ("Centres de Fitness") et propose des produits alimentaires ("Produits TheMeal") aux membres de ces centres ("Clients"). Les présentes CGU régissent l'utilisation des Dispositifs TheMeal et l'accès à notre application mobile ainsi que la gestion des données personnelles. Ces CGU s'appliquent à tous les contrats et interactions entre TheMeal et les Clients, comme défini à l'article 3.`,

    chapter2Title: `2 Inscription et Accès à l'Application`,
    chapter2Content: `Avant d'accéder à l'application mobile de TheMeal, le Client devra créer un compte en fournissant son prénom, son nom et son adresse e-mail professionnelle. Ces informations seront fournies par le Centre de Fitness avec le consentement du Client. Le Client doit fournir des informations exactes et complètes. L'application permet au Client de consulter le menu à l'avance et d'accéder aux informations nutritionnelles détaillées des Produits TheMeal. Aucun enregistrement ou suivi d'achat n'est effectué via l'application.`,

    chapter3Title: `3 Utilisation des Dispositifs TheMeal`,
    chapter3Content: `Les Dispositifs TheMeal installés dans les Centres de Fitness permettent aux Clients de consulter et acheter les Produits TheMeal. Les Clients peuvent accéder aux Dispositifs en utilisant un badge personnel fourni par le Centre de Fitness. Les informations sur les Produits TheMeal, y compris les détails nutritionnels, sont disponibles via l'application mobile et les Dispositifs TheMeal. Aucune donnée d'achat ou transaction n'est collectée ou enregistrée par l'application.`,

    chapter4Title: `4 Protection des Données`,
    chapter4SubTitle1: `4.1 Bases Légales du Traitement des Données`,
    chapter4SubContent1: `En utilisant l'application et les Dispositifs TheMeal, le Client consent au traitement et à l'utilisation de ses données personnelles comme décrit ici. TheMeal peut également traiter les données sur la base d'intérêts légitimes pour l'amélioration de ses services.`,
    chapter4SubTitle2: `4.2 Finalités du Traitement des Données`,
    chapter4SubContent2: `TheMeal traite les données personnelles pour fournir des informations sur les Produits TheMeal et améliorer l'expérience utilisateur. Les données collectées permettent d'optimiser les informations disponibles dans l'application et de garantir la qualité des services offerts.`,
    chapter4SubTitle3: `4.3 Données Traitées`,
    chapter4SubContent3: `Lors de l'inscription sur l'application, TheMeal collecte les informations fournies (nom, prénom, adresse e-mail). Ces données sont utilisées uniquement pour fournir l'accès aux fonctionnalités de l'application et ne sont pas associées à des achats ou transactions.`,
    chapter4SubTitle4: `4.4 Sécurité des Données`,
    chapter4SubContent4: `TheMeal s'engage à protéger les données personnelles de ses Clients en mettant en place des mesures de sécurité appropriées contre les risques de perte, d'utilisation abusive ou de modification. Les données sont stockées de manière sécurisée et accessibles uniquement par des personnes autorisées.`,
    chapter4SubTitle5: `4.5 Droits des Clients`,
    chapter4SubContent5: `Les Clients disposent de tous les droits prévus par la Loi Fédérale Suisse sur la Protection des Données. Pour des raisons de sécurité, les demandes relatives à la protection des données doivent être envoyées par e-mail, avec les données correspondantes à l'expéditeur.`,
    chapter4SubTitle6: `4.6 Suppression des Données`,
    chapter4SubContent6: `Les données personnelles des Clients seront supprimées ou anonymisées si le Client demande la désactivation de son compte. TheMeal conserve les données uniquement pour la durée nécessaire à la fourniture de ses services.`,
    chapter4SubTitle7: `4.7 Responsable du Traitement et Contact`,
    chapter4SubContent7: `TheMeal est responsable du traitement des données conformément à la Loi Fédérale Suisse sur la Protection des Données. Les demandes relatives à la protection des données peuvent être adressées à l'adresse suivante : support@themeal.ch`,

    chapter5Title: `5 Dispositions Finales`,
    chapter5SubTitle1: `5.1 Modifications des CGU`,
    chapter5SubContent1: `Les modifications des présentes CGU seront publiées sur themeal.ch/terms-conditions. En accédant au site web ou à l'application de TheMeal après publication de toute modification, le Client accepte la version en vigueur des CGU.`,
    chapter5SubTitle2: `5.2 Droit Applicable et Juridiction`,
    chapter5SubContent2: `Ces CGU sont soumises au droit suisse. En cas de conflit entre une disposition des CGU et la loi impérative, la disposition légale prévaudra. Les autres dispositions des CGU restent valides. Les tribunaux de Lausanne, Suisse, seront compétents pour tout litige.`,

    effectiveDate: `En vigueur à partir du [Date de publication]`,
};

const AboutUsText = {
    title: `A propos de nous`,

    title1: `Bienvenue chez TheMeal`,
    content1: `Nous sommes une équipe passionnée par la nutrition et le sport, dédiée à améliorer l'alimentation des amateurs de fitness et des personnes soucieuses de leur santé. Basés à Lausanne, en Suisse, nous avons combiné nos compétences uniques pour créer une solution innovante et pratique pour tous ceux qui cherchent à manger sainement sans compromis sur la commodité.`,

    title2: `Notre Mission`,
    content2: `Chez TheMeal, notre mission est de rendre l'alimentation saine et adaptée accessible à tous, en particulier aux sportifs et aux pratiquants de fitness. Nous comprenons les défis liés à la recherche de repas nutritifs après un entraînement intense, c'est pourquoi nous avons développé des distributeurs automatiques intelligents, placés directement dans les centres de fitness. Ces frigos proposent des repas frais, équilibrés et riches en protéines.`,

    title3: `Notre Vision`,
    content3: `Nous croyons qu'une bonne nutrition est essentielle pour atteindre ses objectifs de fitness et mener une vie saine. En fournissant des informations détaillées sur les macronutriments et en offrant une variété de repas pour tous les régimes alimentaires, nous souhaitons encourager des choix alimentaires éclairés et soutenir nos clients dans leur parcours vers une meilleure santé.`,

    title4: `Nos Valeurs`,
    content4: `- Qualité : Utilisation d'ingrédients frais et locaux pour garantir des repas de haute qualité.\n- Innovation : Intégration de technologies avancées pour une expérience utilisateur optimale.\n- Accessibilité : Rendre des repas sains et nutritifs facilement accessibles dans les lieux où ils sont le plus nécessaires.\n- Engagement : Promouvoir un mode de vie sain et actif à travers nos produits et services.`,
};

const NotifText = {
    title: `Notifications`,

    name1: `Notification Exemple`,
};

const PrefText = {
    title: `Preferences`,

    title1: `General`,
    content1: `Preference Generale 1`,

    title2: `Alimentaire`,
    content2: `Preference alientaires 1`,

};

const ContactUsText = {
    title: `Contactez nous`,

};

export {placeHolderText, TermsAndConditionsText, AboutUsText, NotifText, PrefText, ContactUsText};
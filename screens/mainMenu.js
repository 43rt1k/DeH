import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { foodArray } from '../data/foodData';
import { LogoLinksArray } from '../data/constants';
import { colors, fontSizes } from '../data/styles';
import { VSeparator, HSeparator } from '../data/elements';
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Main Menu component
const MainMenu = ({ navigation }) => {
    
    
    return (
        <ScrollView  style={{backgroundColor: colors.white}}>
            {foodArray.map((food, index) => (
                <View key={index} style={general_styles.container}>    
                    {/*Main container*/}
                    <ImageSection imagePath={food.imagePath} />



                    <InfoSection food={food} />
                </View>
            ))}
        </ScrollView>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Image Section component
const ImageSection = ({ imagePath }) => {
    return (
        <View style={Image_styles.container}>
            <Image source={imagePath} style={Image_styles.image} />
        </View>
    );
};

// Text Section component
const InfoSection = ({food}) => {
    
    const HeaderSection = ({food}) => {
        return (
            <View style={[Text_styles.headerContainer]}>
                <Text style={Text_styles.name}>{food.name}</Text>
                <Text style={Text_styles.price}>{food.price.toFixed(2)}.-</Text>
    
            </View>
        );
    };

    const LogoSection = () => {
        return (
            <View style={[Image_styles.logoContainer]}>
                {LogoLinksArray.map((logo, index) => (
                    <Image source={logo} key={index} style={Image_styles.logo}/>
            ))}
            </View>
        );
    };

    const NutritionSection = ({nutrition}) => {
        return (
            <View style={Text_styles.nutritionContainer}>
    
    
                <View style={Text_styles.col}>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Cal</Text>
                        <Text style={Text_styles.value}>{nutrition.calories}</Text>
                    </View>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Prot</Text>
                        <Text style={Text_styles.value}>{nutrition.proteines}g</Text>
                    </View>
                </View>
                


                <View style={Text_styles.col}>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Lip</Text>
                        <Text style={Text_styles.value}>{nutrition.lipides}g</Text>
                    </View>
                    <View style={Text_styles.row}>
                        <Text style={Text_styles.label}>Gluc</Text>
                        <Text style={Text_styles.value}>{nutrition.glucides}g</Text>
                    </View>
    
    
                </View>
        </View>
    
        );
    };

    //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    return (
        <View style={[Text_styles.container]}>

    
            <HeaderSection food={food} />
            <HSeparator height={2} />
            <View style={[Text_styles.infoContainer]}>

                <LogoSection />
                <HSeparator height={2} />
                <NutritionSection nutrition={food.nutrition} />
                
            </View>
        </View>
    );

    
    
};







const Separator = () => {
    return (
        <View style={{
            height: 2,
            width:'100%',
            backgroundColor: colors.black,
        }}>
        </View>
    );
};



//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const Image_styles = StyleSheet.create({
    container: {
        justifyContent: 'center', // Center items vertically
        borderRadius: 20, // Make the border radius half of the image width/height for a circle
        overflow: 'hidden', // Ensure overflow is hidden for rounded corners

    },

    image: {
        resizeMode: 'cover',
        height: '100%',
        width: 125,
    },

    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    },
    logo: {
        resizeMode: 'contain',
        width: 25,    
    },
});

const Text_styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center', // Align text to the center
        //paddingLeft: 10, // Add padding to the left to create some space between image and text
        borderRadius: 20, // Make the border radius half of the image width/height for a circle

    },

    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },

    name: {
        flex: 1,
        fontSize: fontSizes.header,
        fontWeight: 'bold',
        //marginBottom: 5,


    },

    infoContainer: {
        flex: 5,
        flexDirection: 'column',

        width: '100%',
    },

    price: {
        flex: 1,
        fontSize: fontSizes.price,
        fontWeight: 'bold',
        textAlign: 'right', // Align text to the left

    },

    nutritionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },

    col: {
        flex: 1,
        flexDirection: 'column',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
    },
    
    label: {
        fontSize: fontSizes.nutrition,
        flex: 1,
        textAlign: 'left',
        textTransform: 'lowercase',

    },
    value: {
        fontSize: fontSizes.nutrition,
        flex: 1.5,
        textAlign: 'left',
        fontWeight: 'bold',

    },
});

// General styles
const general_styles = StyleSheet.create({
    container: {
        height: 125,
        width: 370,
        flexDirection: 'row',

        margin: 10,        


        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 22, 

        //backgroundColor: colors.grayDark,

    },
});

const border_styles = StyleSheet.create({
    black: {
        borderWidth: 1, 
        borderColor: 'black',
    },

    white: {
        borderWidth: 1,
        borderColor: 'white',
    },
    red: {
        borderWidth: 1,
        borderColor: 'red',
    },
    green: {
        borderWidth: 1,
        borderColor: 'green',
    },
    blue: {
        borderWidth: 1,
        borderColor: 'blue',
    },
    yellow: {
        borderWidth: 1,
        borderColor: 'yellow',
    },
    gray: {
        borderWidth: 1,
        borderColor: 'gray',
    },
    cyan: {
        borderWidth: 1,
        borderColor: 'cyan',
    },
    magenta: {
        borderWidth: 1,
        borderColor: 'magenta',
    },
    orange: {
        borderWidth: 1,
        borderColor: 'orange',
    },
    purple: {
        borderWidth: 1,
        borderColor: 'purple',
    },
    pink: {
        borderWidth: 1,
        borderColor: 'pink',
    },
    brown: {
        borderWidth: 1,
        borderColor: 'brown',
    },
});
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default MainMenu;
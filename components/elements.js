import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, borderStyles, spacingStyles, backgroundStyles } from '../data/styles';
import { LogoLinksArray, LogoName, SortName , FilterName} from '../data/constants';
import { fontStyles, MainColors } from '../data/styles';

export const HSeparator = ({height=1, color='black'}) => {
    const styles = StyleSheet.create({
        container: {
            height: height,
            width: '100%',
            backgroundColor: color,
        },
    });
    return (
        <View style={styles.container}></View>
    );
};


export const VSeparator = ({width=1, color='black'}) => {
    const styles = StyleSheet.create({
        container: {
            height: '100%',
            width: width,
            backgroundColor: color,
        },
    });
    
    return (
        <View style={styles.container}></View>
    );
};

export const Image_View = ({ source, width, height, contain, radius, flex}) => {
    if(flex == undefined) flex: 0;

    if(width == undefined) width = '100%';
    
    if(height == undefined) height = '100%';
    
    var _resizeMode;
    if(contain == undefined) _resizeMode = 'cover';
    else _resizeMode = 'contain';

    if(radius == undefined) _borderRadius = borderStyles.radius.medium
    else _borderRadius = radius;
    const styles = StyleSheet.create({
        
        container: {
            flex: flex,
            justifyContent: 'center', // Center items vertically
            alignItems: 'center', // Center items horizontally
            borderRadius: _borderRadius,
            overflow: 'hidden', // Ensure overflow is hidden for rounded corners
            height: height,
            width: width,

        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: _resizeMode,
        },
    });

    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
};


export const LogoView = ({food}) => {
    const styles = StyleSheet.create({
        logoContainer: {
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            paddingTop: 3,
            paddingHorizontal: 5,
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        logo: {
            resizeMode: 'contain',
            width: 25,    
        },
    });

    return (
        <View style={[styles.logoContainer]}>
            {food.logos.map((logo, index) => (
                <Image source={LogoLinksArray[logo]} key={index} style={styles.logo}/>
        ))}
        </View>
    );
};


export const Close_Button = ({setVisible, toDoVal = false}) => {

    const styles = StyleSheet.create({            
        container: {
            flex: 1,
            width: '100%',
            margin: spacingStyles.margin.medium,
            marginBottom: spacingStyles.margin.extraLarge,
            backgroundColor: colors.black,
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.medium,
            alignItems: 'center',
        },
        text: {
            fontWeight: 'bold',
            color: fontStyles.color.closeButton,
            fontSize: fontStyles.size.headline,
        },
    });

    return(
    <TouchableOpacity   
        style={styles.container}
        onPress={() => setVisible(toDoVal)}>
        <Text style={styles.text}>Close</Text>

    </TouchableOpacity>
    );

};

export const Send_Button = ({handleSend,  label = 'Envoyer'}) => {

    const styles = StyleSheet.create({            
        button: {
            height: 50,
            width: '100%',
            margin: spacingStyles.margin.medium,
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.medium,
            borderColor: borderStyles.color.secondary,
            borderWidth: borderStyles.width.medium,
            backgroundColor: backgroundStyles.color.secondary,
            alignItems: 'center',

        },
        text: {
            fontWeight: 'bold',
            color: fontStyles.color.sendButton,
            fontSize: fontStyles.size.headline,
        },
    });

    return(
        <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )


};

export const Succes_Text = ({submitted}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: 30,
            justifyContent: 'center',
          
        },
        text: {

            color: 'green',
            textAlign: 'center',

        },
    });

    return (
        <View style={styles.container}>
            {submitted && <Text style={styles.text}>C'est tout bon!</Text>}
        </View>
    );
};

export const Settings_Button = ({ label, isActive, onPress, large=false}) => {
    var width;

    if(large == false) width = '45%';
    else if(large == true) width = '95%';

    const styles = StyleSheet.create({
        container: {
            width: width,
            marginBottom: spacingStyles.margin.medium,
            padding: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.medium,
            borderWidth: 2,
            borderColor: borderStyles.color.secondary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        activeButton: {
            backgroundColor: backgroundStyles.color.ternary,
        },
        buttonText: {
            fontSize: fontStyles.size.subheadline,
            color: fontStyles.color.primary,
        },
    });
    
    return (
        <TouchableOpacity
            style={[styles.container, isActive && styles.activeButton]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

export const Settings_ToggleButton = ({ text, isActive, toggleState }) => {
    const styles = StyleSheet.create({
        container: {
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: backgroundStyles.color.secondary,
            borderRadius: borderStyles.radius.low,
            marginVertical: spacingStyles.margin.large,

        },
        text: {
            fontSize: fontStyles.size.headline,
            color: fontStyles.color.primary,
        },
        toggleButton: {
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderStyles.radius.medium,
            borderWidth: 1,
            borderColor: borderStyles.color.primary,
        },
        activeButton: {
            backgroundColor: MainColors.green,
        },
        inactiveButton: {
            backgroundColor: backgroundStyles.color.secondary,
        },
        buttonText: {
            color: fontStyles.color.primary,
            fontSize: fontStyles.size.subheadline,
        },
    });


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity
                style={[styles.toggleButton, isActive ? styles.activeButton : styles.inactiveButton]}
                onPress={toggleState}
            >
                <Text style={styles.buttonText}>{isActive ? 'On' : 'Off'}</Text>
            </TouchableOpacity>
        </View>
    );
};


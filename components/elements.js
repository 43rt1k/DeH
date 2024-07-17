import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { colors, borderStyles, spacingStyles } from '../data/styles';
import { LogoLinksArray, LogoName, SortName , FilterName} from '../data/constants';


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

export const Image_View = ({ source, width, height}) => {
    
    if(width == undefined) width = '100%';
    if(height == undefined) height = '100%';

    const styles = StyleSheet.create({
        
        container: {
            justifyContent: 'center', // Center items vertically
            alignItems: 'center', // Center items horizontally
            borderRadius: borderStyles.radius.medium, // Adjust as needed
            overflow: 'hidden', // Ensure overflow is hidden for rounded corners
            height: height,
            width: width,


        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover', // or 'contain' or 'stretch'
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
            paddingHorizontal: 5,
            justifyContent: 'space-evenly',
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
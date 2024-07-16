import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { colors } from '../data/styles';
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
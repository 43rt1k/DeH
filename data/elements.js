import React from 'react';
import { View } from 'react-native';
import { colors } from './styles';

export const HSeparator = ({height=1, color='black'}) => {
    return (
        <View style={{
            height: height,
            width:'100%',
            backgroundColor: color,
        }}>
        </View>
    );
};


export const VSeparator = ({width=1, color='black'}) => {
    return (
        <View style={{
            height: '100%',
            width: width,
            backgroundColor: color,
        }}>
        </View>
    );
};


import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AboutUsText } from '../../data/constants';
import { backgroundStyles, borderStyles, fontStyles, spacingStyles, textPreset } from '../../data/styles';
import { Close_Button } from '../../components/elements';

const AboutUs_2Section = ({setVisible}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: backgroundStyles.color.primary,
            padding: spacingStyles.margin.high,
            backgroundColor: backgroundStyles.color.secondary,
            paddingBottom: spacingStyles.margin.extraLarge * 4,
            borderRadius: borderStyles.radius.high,
        },
    
    });

    return (
        <ScrollView style={styles.container}>
            <View>

                <Text style={textPreset.firstTitle}>{AboutUsText.title}</Text>
                
                <Text style={textPreset.chapterTitle}>{AboutUsText.title1}</Text>
                <Text style={textPreset.small}>{AboutUsText.content1}</Text>

                <Text style={textPreset.chapterTitle}>Notre Mission</Text>
                <Text style={textPreset.small}>{AboutUsText.content2}</Text>

                <Text style={textPreset.chapterTitle}>Notre Vision</Text>
                <Text style={textPreset.small}>{AboutUsText.content3}</Text>

                <Text style={textPreset.chapterTitle}>Nos Valeurs</Text>
                <Text style={textPreset.small}>{AboutUsText.content4}</Text>

            </View>
            
            <Close_Button setVisible={setVisible}/>
        </ScrollView>
    );
};



export {AboutUs_2Section};
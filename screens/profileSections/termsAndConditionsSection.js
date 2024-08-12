import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TermsAndConditionsText } from '../../data/constants';
import { backgroundPreset, backgroundStyles, spacingStyles, textPreset, borderStyles } from '../../data/styles';
import { Close_Button } from '../../components/elements';

const TermsAndConditions_2Section = ({ setVisible }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: backgroundStyles.color.primary,
            padding: spacingStyles.margin.high,
            backgroundColor: backgroundStyles.color.secondary,
            paddingBottom: spacingStyles.margin.extraLarge * 5,
            borderRadius: borderStyles.radius.high,
        },
    });

    return (

        <ScrollView style={styles.container}>
            <View style={[{flex: 1}]}>
                <Text style={textPreset.firstTitle}>{TermsAndConditionsText.title}</Text>
                <Text style={textPreset.chapterTitle}>{TermsAndConditionsText.chapter1Title}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter1Content}</Text>
                <Text style={textPreset.chapterTitle}>{TermsAndConditionsText.chapter2Title}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter2Content}</Text>
                <Text style={textPreset.chapterTitle}>{TermsAndConditionsText.chapter3Title}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter3Content}</Text>
                <Text style={textPreset.chapterTitle}>{TermsAndConditionsText.chapter4Title}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle1}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent1}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle2}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent2}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle3}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent3}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle4}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent4}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle5}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent5}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle6}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent6}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter4SubTitle7}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter4SubContent7}</Text>
                <Text style={textPreset.chapterTitle}>{TermsAndConditionsText.chapter5Title}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter5SubTitle1}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter5SubContent1}</Text>
                <Text style={textPreset.sectionTitle}>{TermsAndConditionsText.chapter5SubTitle2}</Text>
                <Text style={textPreset.small}>{TermsAndConditionsText.chapter5SubContent2}</Text>
                <Text style={textPreset.commentItalic}>{TermsAndConditionsText.effectiveDate}</Text>
            </View>
            <Close_Button setVisible={setVisible} />
        </ScrollView>

    );
};

export { TermsAndConditions_2Section };
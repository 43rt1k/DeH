import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { backgroundStyles, borderStyles, fontStyles, spacingStyles, colors, MainColors, backgroundPreset } from '../../data/styles';
import { Close_Button, Settings_Button, Settings_ToggleButton } from '../../components/elements';
import { textPreset } from '../../data/styles';
import { NotifText } from '../../data/constants';
import { TextInput } from 'react-native';

const Pref_2Section = ({ setVisible }) => {
    const [prefStates, setPrefStates] = useState([false, false, false]); // State for three general preferences
    const [dietaryPreferences, setDietaryPreferences] = useState([]); // State for dietary preferences

    // Function to toggle general preference state
    const togglePrefState = (index) => {
        const updatedNotifStates = [...prefStates];
        updatedNotifStates[index] = !updatedNotifStates[index];
        setPrefStates(updatedNotifStates);
    };

    // Function to toggle dietary preference state
    const toggleDietaryPreference = (preference) => {
        setDietaryPreferences((prevPreferences) =>
            prevPreferences.includes(preference)
                ? prevPreferences.filter((item) => item !== preference)
                : [...prevPreferences, preference]
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.high,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: spacingStyles.margin.extraLarge * 5,

        },

    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={textPreset.firstTitle}>{NotifText.title}</Text>

            <GeneralPref_View prefStates={prefStates} togglePrefState={togglePrefState}/>

            <DietPref_View dietaryPreferences={dietaryPreferences} toggleDietaryPreference={toggleDietaryPreference}/>

            <EditProfile_View />

            <Close_Button setVisible={setVisible} />

        </ScrollView>
    );
};


const EditProfile_View = ({ setModalVisible }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
    };

    const styles = StyleSheet.create({
        container: {

            width: '90%',
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.high,
        
        },
        input: {
            height: 40,
            borderColor: borderStyles.color.secondary,
            borderWidth: 1,
            marginBottom: spacingStyles.margin.medium,
            paddingHorizontal: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.low,
            color: fontStyles.color.primary,
        },
        saveButton: {
            marginTop: spacingStyles.margin.medium,
            paddingVertical: spacingStyles.margin.medium,
            backgroundColor: backgroundStyles.color.primary,
            borderRadius: borderStyles.radius.medium,
            alignItems: 'center',
        },
        saveButtonText: {
            color: MainColors.green,
            fontSize: fontStyles.size.headline,
        },
    });

    return (

        <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    placeholderTextColor={fontStyles.color.ternary}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prénom"
                    placeholderTextColor={fontStyles.color.ternary}
                    value={surname}
                    onChangeText={setSurname}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={fontStyles.color.ternary}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    placeholderTextColor={fontStyles.color.ternary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Enregistrer</Text>
                </TouchableOpacity>

        </View>

    );
};




const GeneralPref_View = ({ prefStates, togglePrefState}) => {
    return (
        <View style={backgroundPreset.secondary}>
            <Text style={textPreset.chapterTitleCentered}>General Preferences</Text>
            {prefStates.map((isActive, index) => (
                <Settings_ToggleButton
                    key={index}
                    text={`Notification ${index + 1}`}
                    isActive={isActive}
                    toggleState={() => togglePrefState(index)}
                />
            ))}
        </View>
    );
};

const DietPref_View = ({dietaryPreferences, toggleDietaryPreference}) => {
    return (
        <View style={backgroundPreset.secondary}>
            <Text style={textPreset.chapterTitleCentered}>Dietary Preferences</Text>
            <View style={styles.dietaryButtonsContainer}>
                {['Vegetarian', 'No Lactose', 'No Gluten', 'Vegan', 'No Nuts', 'No Sugar'].map((preference) => (
                    <Settings_Button
                        key={preference}
                        label={preference}
                        isActive={dietaryPreferences.includes(preference)}
                        onPress={() => toggleDietaryPreference(preference)}
                    />
                ))}
            </View>
        </View>
    );
};


// Styles
const styles = StyleSheet.create({

 
    sectionTitle: {
        textAlign: 'center',
        marginBottom: spacingStyles.margin.medium,
        fontWeight: 'bold',
        fontSize: fontStyles.size.title3,
        color: fontStyles.color.secondary,
    },
    dietaryButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

});

export { Pref_2Section };
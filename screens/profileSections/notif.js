import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { backgroundStyles, borderStyles, fontStyles, spacingStyles, colors, MainColors } from '../../data/styles';
import { Close_Button, Settings_ToggleButton } from '../../components/elements';
import { textPreset } from '../../data/styles';
import { NotifText } from '../../data/constants';


const Notif_2Section = ({ setVisible }) => {
    const [notifStates, setNotifStates] = useState([false, false, false]); // State for three notifications

    // Function to toggle notification state
    const toggleNotifState = (index) => {
        const updatedNotifStates = [...notifStates];
        updatedNotifStates[index] = !updatedNotifStates[index];
        setNotifStates(updatedNotifStates);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            padding: spacingStyles.margin.high,
            borderRadius: borderStyles.radius.high,
        },
    
       
        
    });

    return (
        <ScrollView style={styles.container}>
            <Text style={textPreset.firstTitle}>{NotifText.title}</Text>

            {notifStates.map((isActive, index) => (
                <Settings_ToggleButton
                    key={index}
                    text={`Notification ${index + 1}`}
                    isActive={isActive}
                    toggleState={() => toggleNotifState(index)}
                />
            ))}
            <Close_Button setVisible={setVisible} />
        </ScrollView>
    );
};

export { Notif_2Section };
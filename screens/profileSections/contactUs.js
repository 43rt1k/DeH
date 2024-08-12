import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles, MainColors, textPreset, backgroundPreset } from '../../data/styles';
import { Close_Button, HSeparator, Send_Button, Succes_Text } from '../../components/elements';
import { ContactUsText } from '../../data/constants';


const ContactUs_2Section = ({ setVisible, onClose }) => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [ratings, setRatings] = useState(Array(5).fill(3));
    const [submittedQuestionnaire, setSubmittedQuestionnaire] = useState(false);

    const handleSendFeedback = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
    };

    const handleSendQuestionnaire = () => {
        setSubmittedQuestionnaire(true);
        setTimeout(() => setSubmittedQuestionnaire(false), 2000);
    };

    const handleSliderChange = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    const HSeparator_View = () => {

        const styles = StyleSheet.create({
            container: {
                marginVertical: spacingStyles.margin.extraLarge,
            },
        
        });

        return (
            <View style={styles.container}>

                <HSeparator width={'100%'} height={2} color={borderStyles.color.ternary}/>
            </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '95%',

            flexDirection: 'column',
            padding: spacingStyles.margin.low,
            paddingBottom: spacingStyles.margin.extraLarge * 4,
        },
    });

    return (

        <ScrollView style={styles.container}>
            <ContactUs_View  /> 
            

            <HSeparator_View />

            <Survey_View />

            <HSeparator_View />

            <Feedback_View setFeedback={setFeedback} handleSendFeedback={handleSendFeedback} feedback={feedback} submitted={submitted}/>

            <Close_Button setVisible={setVisible}/>
        </ScrollView>

    );
};

const ContactUs_View = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 3,
            flexDirection: 'column',
            margin: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.high,
            backgroundColor: backgroundStyles.color.quarnary,
            alignItems: 'center',
            justifyContent: 'center',


        },
        title: {
            fontSize: fontStyles.size.title2,
            textAlign: 'center',
            fontWeight: 'bold',
            margin: spacingStyles.margin.high,
            color: fontStyles.color.secondary,
        },

        contactInfo: {
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: spacingStyles.margin.medium,
        },
        
        icon: {
            flex: 1,
            marginRight: spacingStyles.margin.medium,
            textAlign: 'right',
            color: MainColors.green,
        },

    
        text: {
            flex: 3,
            padding: spacingStyles.margin.high,
            textAlign: 'left',
            fontSize: fontStyles.size.profileInfo,
            color: fontStyles.color.ternary,
        },
    
    });

    return (
        <View>

            <Text style={styles.title}>{ContactUsText.title}</Text>

            <View style={styles.container}>
            
                <View style={styles.contactInfo}>
                    <Icon name="email" size={20} style={styles.icon} />
                    <Text style={styles.text}>dehmail@exemple.com</Text>
                </View>

                <View style={styles.contactInfo}>
                    <Icon name="phone" size={20} style={styles.icon} />
                    <Text style={styles.text}>+4179123456</Text>
                </View>

                <View style={styles.contactInfo}>
                    <Icon name="language" size={20} style={styles.icon} />
                    <Text style={styles.text}>dehsiteexemple.com</Text>
                </View>


                <View style={styles.contactInfo}>
                    <Icon name="location-on" size={20} style={styles.icon} />
                    <Text style={styles.text}>example_adress</Text>
                </View>

            </View>
        </View>
    );
};

const Survey_View = () => {

    const [ratings, setRatings] = useState(Array(5).fill(3));
    const [submittedQuestionnaire, setSubmittedQuestionnaire] = useState(false);

    const handleSendQuestionnaire = () => {
        setSubmittedQuestionnaire(true);
        setTimeout(() => setSubmittedQuestionnaire(false), 2000);
    };

    const handleButtonChange = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };


    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            width: '100%',

            alignItems: 'center',
            paddingVertical: spacingStyles.margin.medium,

        },
        
        surveyContainer: {
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: - spacingStyles.margin.extraLarge,

        },

        allQuestionsContainer: {
            flex: 1,
            width: '100%',
            alignItems: 'center',

            borderRadius: borderStyles.radius.high,
            margin: spacingStyles.margin.medium,
            backgroundColor: backgroundStyles.color.secondary,

            },

        questionContainer: {
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            borderWidth: 0.5,
            marginBottom: spacingStyles.margin.high,
            borderColor: borderStyles.color.ternary,
            borderRadius: borderStyles.radius.high,
            padding: spacingStyles.margin.high,
        },
        questonText: {
            fontSize: fontStyles.size.body,
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: spacingStyles.margin.low,
            color: fontStyles.color.ternary,
        },
        submitContainer: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',

            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (

        <View style={styles.container}>

            <Text style={textPreset.sectionTitle}>Questionnaire</Text>

            <View style={[backgroundPreset.secondary, styles.surveyContainer]}>

                <Text style={[textPreset.commentItalic, {flex: 1}]}>Afin de nous aider à nous améliorer, répondez s'il vous plaît à quelques questions:</Text>

                <View style={styles.allQuestionsContainer}>
                
                    {Array(5).fill(null).map((_, index) => (

                        <View key={index} style={styles.questionContainer}>

                            <Text style={textPreset.medium}>Question Example?</Text>

                            <Survey_Button ratings={ratings} index={index} handleButtonChange={handleButtonChange}/>

                        </View>
                    ))}
                </View>
                <View style={styles.submitContainer}>
                    <Succes_Text submitted={submittedQuestionnaire} />
                    <Send_Button handleSend={handleSendQuestionnaire}/>
                </View>

            </View>
        </View>

    );
};

const Survey_Button = ({ratings, index, handleButtonChange}) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        buttonTextContainer: {
            flex: 1,

            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',

        },
        text: {
            flex: 1,
            height: 40,
            fontSize: fontStyles.size.label,
            color: fontStyles.color.quarnary,
            marginBottom: spacingStyles.margin.low,
        },
        button: {
            flex: 1,
            width: 20,
            height: 20,
            backgroundColor: backgroundStyles.color.primary,
            margin: spacingStyles.margin.small,
            marginBottom: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.low,
            borderWidth: borderStyles.radius.low / 2,
            borderColor: borderStyles.color.ternary,
        },
        selectedButton: {
            backgroundColor: MainColors.yellow,
        },
    
    });
    
    return (
        <View style={styles.container}>
            {['-2', '-1', '0', '+1', '+2'].map((label, idx) => (
                <View key={idx} style={styles.buttonTextContainer}>
                    <Text style={styles.text}>{label}</Text>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            ratings[index] === idx ? styles.selectedButton : null
                        ]}
                        onPress={() => handleButtonChange(index, idx)}
                    />
                </View>
            ))}
        </View>
    );
};

const Feedback_View = ({setFeedback, handleSendFeedback, feedback, submitted}) => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            maxWidth: '100%',
            alignItems: 'center',
            paddingVertical: spacingStyles.margin.medium,

        },
        textInputContainer: { 
            height: 300,
            width: '100%',
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',

            paddingBottom: spacingStyles.margin.large,
        },
        textInput: {
            flex: 1,
            width: '100%',
            marginVertical: spacingStyles.margin.medium,
            padding: spacingStyles.margin.large,
            borderRadius: borderStyles.radius.medium,
            borderWidth: borderStyles.width.low,
            borderColor: borderStyles.color.ternary, 
        },
        submitContainer: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',

            justifyContent: 'center',
            alignItems: 'center',
        },
    
    });


    return (
       <View style={styles.container}>

            <Text style={textPreset.sectionTitle}>Donnez-nous un feedback que vous voulez:</Text>

            <View style={[backgroundPreset.secondary, styles.textInputContainer]}>
                <TextInput
                    style={[textPreset.medium, styles.textInput]}
                    multiline
                    placeholder="Votre feedback" 
                    placeholderTextColor={fontStyles.color.ternary}
                    value={feedback}
                    onChangeText={setFeedback} />

                <View style={styles.submitContainer}>

                    <Succes_Text submitted={submitted} />
                    <Send_Button handleSend={handleSendFeedback}/>

                </View>
            </View>

        </View>

    );
};

export { ContactUs_2Section };
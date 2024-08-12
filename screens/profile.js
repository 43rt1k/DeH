import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles, MainColors } from '../data/styles';
import { AvatarLink, ProfileName, placeHolderText, TermsAndConditionsText, ContactUsText, PrefText, NotifText, AboutUsText} from '../data/constants';
import { backgroundPreset, textPreset, position_style } from '../data/styles';
import { HSeparator, Image_View, Send_Button } from '../components/elements';
import { TermsAndConditions_2Section } from '../screens/profileSections/termsAndConditionsSection';
import { ContactUs_2Section } from './profileSections/contactUs';
import { AboutUs_2Section } from './profileSections/aboutUs';
import { Notif_2Section } from './profileSections/notif';
import { Pref_2Section } from './profileSections/preferences';
import { TextInput } from 'react-native';
import { Close_Button } from '../components/elements';



const Profile = ({ navigation }) => {
    const [prefVisible, setPrefVisible] = useState(false);
    const [notifVisible, setNotifVisible] = useState(false);
    const [aboutUsVisible, setAboutUsVisible] = useState(false);
    const [contactUsVisible, setContactUsVisible] = useState(false);
    const [TermsAndConditionsVisible, setTermsAndConditions] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-equaly',
        },
    });

    return (
        <View style={[backgroundPreset.primary, styles.container]}>
            <MyProfile_1Section />
            <ProfileMenu_View 
                label={PrefText.title}  
                setVisible={setPrefVisible} />
            <ProfileMenu_View      
                label={NotifText.title}  
                setVisible={setNotifVisible} />
            <ProfileMenu_View           
                label={AboutUsText.title}  
                setVisible={setAboutUsVisible} />
            <ProfileMenu_View         
                label={ContactUsText.title}  
                setVisible={setContactUsVisible} />
            <ProfileMenu_View     
                label={TermsAndConditionsText.title}  
                setVisible={setTermsAndConditions} />


            <Void_View />

            <ProfileModal_1Section    
                visible={prefVisible} 
                setVisible={setPrefVisible}     
                content={<Pref_2Section setVisible={setPrefVisible}/>} />

            <ProfileModal_1Section    
                visible={notifVisible} 
                setVisible={setNotifVisible} 
                content={<Notif_2Section setVisible={setNotifVisible}/>} />

            <ProfileModal_1Section    
                visible={aboutUsVisible} 
                setVisible={setAboutUsVisible} 
                content={<AboutUs_2Section setVisible={setAboutUsVisible}/>} />
            <ProfileModal_1Section    
                visible={contactUsVisible} 
                setVisible={setContactUsVisible} 
                content={<ContactUs_2Section setVisible={setContactUsVisible}/> } />

            <ProfileModal_1Section    
                visible={TermsAndConditionsVisible} 
                setVisible={setTermsAndConditions} 
                content={<TermsAndConditions_2Section setVisible={setTermsAndConditions}/>} />
        </View>
    );
};

const MyProfile_1Section = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center', // Align items vertically centered
            justifyContent: 'space-between',
        },
    });

    return (
        <View style={[backgroundPreset.secondary, styles.container]}>

            <ProfileInfo_View />
            <Image_View source={AvatarLink} width={125} height={125}/>

        </View>
    );
};



const ProfileInfo_View = () => {
    const styles = StyleSheet.create({
        container: {
            margin: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.high,
            
            padding: spacingStyles.margin.high,

        },

        sectionTitleFont: {
            fontSize: fontStyles.size.title1,
            padding: spacingStyles.margin.medium,
        }, 
        smallFont: {
            fontSize: fontStyles.size.footnote,
            padding: spacingStyles.margin.medium,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={[textPreset.sectionTitle, styles.sectionTitleFont]}>Nom Prenom</Text>
            <Text style={[textPreset.small, styles.smallFont]}>emailAdress@gmail.com</Text>
        </View>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const ProfileMenu_View = ({ label, setVisible }) => {
    return (
        <TouchableOpacity
            style={[backgroundPreset.secondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={textPreset.sectionTitle}>{label}</Text>
        </TouchableOpacity>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const Void_View = () => {
    return <View style={{ flex: 3 }} />;
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const ProfileModal_1Section = ({ visible, setVisible, content }) => {
    const styles = StyleSheet.create({
   
        modalContainer: {
            width: '95%',
            flexGrow: 1,
        },
        scrollContainer: {
            flexGrow: 1, // Ensure the ScrollView takes up the available space
            marginVertical: 80,
            marginBottom: 800,
        },
    });

    return (
        <Modal  
            animationType="slide" 
            transparent={true} 
            visible={visible}
            onRequestClose={() => setVisible(false)}
            style={backgroundPreset.modalOverlay}
        >
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={backgroundPreset.modalOverlay}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <TouchableWithoutFeedback onPress={() => {}}>
                            <View style={[styles.modalContainer, backgroundPreset.modalContainer]}>
                                {content}
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



export default Profile;

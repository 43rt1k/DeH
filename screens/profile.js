import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { fontStyles, fontSizes, borderStyles, backgroundStyles, spacingStyles } from '../data/styles';
import { AvatarLink, ProfileName, placeHolderText } from '../data/constants';
import { background_style, text_style, position_style } from '../data/styles';
import { HSeparator, Image_View } from '../components/elements';

const Profile = ({ navigation }) => {
    const [foodPrefVisible, setFoodPrefVisible] = useState(false);
    const [notifVisible, setNotifVisible] = useState(false);
    const [aboutUsVisible, setAboutUsVisible] = useState(false);
    const [contactUsVisible, setContactUsVisible] = useState(false);
    const [privacyPolicyVisible, setPrivacyPolicyVisible] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
        },
    });

    return (
        <View style={[background_style.containerPrimary, styles.container]}>
            <MyProfile_1Section />
            <FoodPreferences_1Section   setVisible={setFoodPrefVisible} />
            <Notification_1Section      setVisible={setNotifVisible} />
            <AboutUs_1Section           setVisible={setAboutUsVisible} />
            <ContactUs_1Section         setVisible={setContactUsVisible} />
            <PrivacyPolicy_1Section     setVisible={setPrivacyPolicyVisible} />
            <Void_View />

            <ProfileModal_1Section    
                visible={foodPrefVisible} 
                setVisible={setFoodPrefVisible}     
                content={<FoodPreferencesContent_View />} />

            <ProfileModal_1Section    
                visible={notifVisible} 
                setVisible={setNotifVisible} 
                content={<NotificationContent_View />} />

            <ProfileModal_1Section    
                visible={aboutUsVisible} 
                setVisible={setAboutUsVisible} 
                content={<AboutUsContent_View />} />
            <ProfileModal_1Section    
                visible={contactUsVisible} 
                setVisible={setContactUsVisible} 
                content={<ContactContent_View />} />

            <ProfileModal_1Section    
                visible={privacyPolicyVisible} 
                setVisible={setPrivacyPolicyVisible} 
                content={<PrivacyPolicyContent_View />} />
        </View>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const MyProfile_1Section = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'row',
            padding: spacingStyles.padding.high,
        },
    });

    return (
        <View style={[  background_style.containerSecondary, 
                        position_style.centerCenter,
                        styles.container]}>
            <ProfileInfo_View />

            <Image_View source={AvatarLink} width={80} height={80}/>

        </View>
    );
};

const ProfileInfo_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 3,
            flexDirection: 'column',
            margin: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.high,
            backgroundColor: backgroundStyles.color.primary,
            alignItems: 'center',
            justifyContent: 'center',

        },
        text: {
            padding: spacingStyles.padding.high,
            fontSize: fontStyles.size.profileInfo,
            color: fontStyles.color.primary,
        },
    
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nom Prenom</Text>
            <Text style={styles.text}>emailAdress@gmail.com</Text>
        </View>
    );
};

const Avatar_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            margin: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.high,
            backgroundColor: backgroundStyles.color.primary,
            alignItems: 'center',
            justifyContent: 'center', // Center the image within the container
            overflow: 'hidden', // Ensure the image doesn't overflow the container's rounded corners
        },
        image: {
            width: '100%', // Ensure the image takes up the full width of the container
            height: '100%', // Ensure the image takes up the full height of the container
            resizeMode: 'contain', // Contain the image within the container without cropping
        }
    
    });

    return (
        <View style={styles.container}>
            <Image source={AvatarLink} style={styles.image} />
        </View>
    );
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const FoodPreferences_1Section = ({ setVisible }) => {
    return (
        <TouchableOpacity
            style={[background_style.containerSecondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={text_style.textPrimary}>{ProfileName.foodPref}</Text>
        </TouchableOpacity>
    );
};
const FoodPreferencesContent_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    
    });
    return (
        <View style={[styles.container]}>
            <Text style={[text_style.textPrimary]}>{placeHolderText.aboutUs}</Text>
        </View>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const Notification_1Section = ({ setVisible }) => {
    return (
        <TouchableOpacity 
            style={[background_style.containerSecondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={text_style.textPrimary}>{ProfileName.notif}</Text>
        </TouchableOpacity>
    );
};
const NotificationContent_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    
    });
    return (
        <View style={[styles.container]}>
            <Text style={[text_style.textPrimary]}>{placeHolderText.aboutUs}</Text>
        </View>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const AboutUs_1Section = ({ setVisible }) => {
    return (
        <TouchableOpacity   
            style={[background_style.containerSecondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={text_style.textPrimary}>{ProfileName.aboutUs}</Text>
        </TouchableOpacity>
    );
};
const AboutUsContent_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    
    });
    return (
        <View style={[styles.container]}>
            <Text style={[text_style.textPrimary]}>{placeHolderText.aboutUs}</Text>
        </View>
    );
};


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const ContactUs_1Section = ({ setVisible }) => {
    return (
        <TouchableOpacity
            style={[background_style.containerSecondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={text_style.textPrimary}>{ProfileName.contactUs}</Text>
        </TouchableOpacity>
    );
};
const ContactContent_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    
    });
    return (
        <View style={[styles.container]}>
            <Text style={[text_style.textPrimary]}>{placeHolderText.contactUs}</Text>
        </View>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const PrivacyPolicy_1Section = ({ setVisible }) => {
    return (
        <TouchableOpacity
            style={[background_style.containerSecondary, position_style.leftCenter]}
            onPress={() => setVisible(true)}>
            <Text style={text_style.textPrimary}>{ProfileName.privNPol}</Text>
        </TouchableOpacity>
    );
};
const PrivacyPolicyContent_View = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    
    });
    return (
        <View style={[styles.container]}>
            <Text style={[text_style.textPrimary]}>{placeHolderText.privNPol}</Text>
        </View>
    );
};
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const Void_View = () => {
    return <View style={{ flex: 3 }} />;
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const ProfileModal_1Section = ({ visible, setVisible, content }) => {

    const styles = StyleSheet.create({
        modalOverlay: {
            flex: 1,
    
            paddingVertical: spacingStyles.padding.extraLarge * 3, 
            alignItems: 'center',
            justifyContent: 'center',
            
            backgroundColor: backgroundStyles.transparent.primary(),
            
        },
        modalContainer: {
            width: '90%',
            height: '80%',
            padding: spacingStyles.padding.high,
            marginHorizontal: spacingStyles.margin.medium,
            borderRadius: borderStyles.radius.medium,
            
            backgroundColor: backgroundStyles.color.secondary,

        },
    
    });

    return (
        <Modal  
            animationType="slide" 
            transparent={true} 
            visible={visible}
            onRequestClose={() => setVisible(false)}
            style={styles.modalOverlay}>
        
            <TouchableWithoutFeedback 
                style={{flex: 1}} 
                    onPress={() => setVisible(false)}>

                <View style={styles.modalOverlay }>

                        <TouchableWithoutFeedback onPress={() => {}}>

                            <View style={styles.modalContainer}>

                                {content}

                            </View>
                        </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



export default Profile;

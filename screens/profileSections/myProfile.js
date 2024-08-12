



const EditProfileModal = ({ setModalVisible }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        // Logic to save the updated profile information
        setModalVisible(false);
    };

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        },
        modalContent: {
            width: '90%',
            padding: spacingStyles.margin.high,
            backgroundColor: backgroundStyles.color.primary,
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
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <ScrollView>
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
                </ScrollView>
                <Close_Button setVisible={setModalVisible} />
            </View>
        </View>
    );
};


import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';



const DetailsMenu = ({ modalVisible, setModalVisible, selectedFood }) => {

    const ModalContent = () => {

        return (
            <View>
                <Text style={Text_style.title}>{selectedFood.name}</Text>
                <Text style={Text_style.content}>Price: {selectedFood.price}</Text>
                <Text style={Text_style.content}>Calories: {selectedFood.nutrition.calories}</Text>
                <Text style={Text_style.content}>Proteins: {selectedFood.nutrition.proteines}g</Text>
                <Text style={Text_style.content}>Lipids: {selectedFood.nutrition.lipides}g</Text>
                <Text style={Text_style.content}>Glucides: {selectedFood.nutrition.glucides}g</Text>
            </View>
        );
    };



    const CloseButton = () => {
        return(
        <TouchableOpacity   style={Button_style.container}
                            onPress={() => setModalVisible(false)}>
            <Text style={Button_style.text}>Close</Text>
        </TouchableOpacity>
        )

    };


    return (

        <Modal  animationType="slide" transparent={true} visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>

            <View style={General_styles.modalOverlay}>
                <View style={General_styles.modalContainer}>
                    <ModalContent />
                    <CloseButton />
                </View>
            </View>
        </Modal>
    );
};

const Text_style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    
});

const Button_style = StyleSheet.create({
    
    container: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

const General_styles = StyleSheet.create({
  
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(117, 117, 117, 0.5)',
    },
    modalContainer: {
        width: '95%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },

});

export {DetailsMenu};

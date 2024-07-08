import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;


                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[styles.tabButton, { backgroundColor: isFocused ? '#262626' : '#6d6b6b75' }]}
                    >
                        <Text style={styles.tabLabel}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 50,

        alignItems: 'center',

        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 15,

    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    tabLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default TabBar;
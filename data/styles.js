import {StyleSheet } from 'react-native';

const colors = {
    grayUltraLight: '#F9F9F9', // Very light gray
    grayLight: '#E5E5E5', // Light gray
    grayMid: '#CCCCCC', // Mid gray
    gray: '#999999', // Standard gray
    grayDark: '#666666', // Dark gray
    grayDarker: '#333333', // Darker gray
    grayDarkest: '#1A1A1A', // Almost black
    black: '#000000', // Black
    white: '#FFFFFF', // White
  };
  

  const fontSizes = {
    header: 20,
    price: 22,
    nutrition: 18,


    
  };

  const border_styles = StyleSheet.create({
    black: {
        borderWidth: 1, 
        borderColor: 'black',
    },
    white: {
        borderWidth: 1,
        borderColor: 'white',
    },
    red: {
        borderWidth: 1,
        borderColor: 'red',
    },
    green: {
        borderWidth: 1,
        borderColor: 'green',
    },
    blue: {
        borderWidth: 1,
        borderColor: 'blue',
    },
    yellow: {
        borderWidth: 1,
        borderColor: 'yellow',
    },
    gray: {
        borderWidth: 1,
        borderColor: 'gray',
    },
    cyan: {
        borderWidth: 1,
        borderColor: 'cyan',
    },
    magenta: {
        borderWidth: 1,
        borderColor: 'magenta',
    },
    orange: {
        borderWidth: 1,
        borderColor: 'orange',
    },
    purple: {
        borderWidth: 1,
        borderColor: 'purple',
    },
    pink: {
        borderWidth: 1,
        borderColor: 'pink',
    },
    brown: {
        borderWidth: 1,
        borderColor: 'brown',
    },
});

  export { colors, fontSizes, border_styles};

import { StyleSheet } from 'react-native';


const hexToRgb = (hex) => {
    // Regular expression to match and parse different formats of hexadecimal colors
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    
    // If the hex string matches the shorthand format, expand it to the full format
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    // Regular expression to match and parse the full format of hexadecimal colors
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    // If the result is valid, return an object with RGB values; otherwise, return null
    return result
        ? {
              r: parseInt(result[1], 16), // Convert the first group to decimal (red)
              g: parseInt(result[2], 16), // Convert the second group to decimal (green)
              b: parseInt(result[3], 16), // Convert the third group to decimal (blue)
          }
        : null;
};

const colors = {
    grayUltraLight:     '#F9F9F9', // Very light gray
    grayLight:          '#E5E5E5', // Light gray
    grayMid:            '#CCCCCC', // Mid gray
    gray:               '#999999', // Standard gray
    grayDark:           '#666666', // Dark gray
    grayDarker:         '#333333', // Darker gray
    grayDarkest:        '#1A1A1A', // Almost black
    black:              '#000000', // Black
    white:              '#FFFFFF', // White
  };
  
const fontSizes = {
    largeTitle:     34,
    title1:         28,
    title2:         22,
    title3:         20,
    headline:       17,
    subheadline:    15,
    body:           17,
    callout:        16,
    footnote:       13,
    caption1:       12,
    caption2:       11,
};

const fontStyles = {
    size: {
        mainHeader:     fontSizes.callout,

        foodName:       fontSizes.title3,
        foodPrice:      fontSizes.title2,
        nutritionLabel: fontSizes.headline,
        nutritionValue: fontSizes.headline,

        foodNameDesc:   fontSizes.title1,
        foodPriceDesc:  fontSizes.title1,
        humanDesc:      fontSizes.headline,
        ingrLabel:      fontSizes.subheadline,
        ingrValue:      fontSizes.subheadline,

        closeButton:    fontSizes.headline,

        profileInfo:    fontSizes.headline,
    },

    color: {
        primary:        colors.grayMid,
        secondary:      colors.gray,

        colored:        '#9600a9',
        closeButton:    colors.gray,
    },


};

const borderStyles = {
    width: {
        low:            1,
        medium:         2,
        high :          3,
    },

    radius: {
        low:            5,
        medium:         10,
        high:           15,
    },

    color: {
        primary:   'white',
    },
};

const backgroundStyles = {
    color: {
        primary:        colors.black,
        secondary:      colors.grayDarkest,

    },

    transparent: {
        primary: (opacity = 0.6) => {
            const rgb = hexToRgb(colors.black,);
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
          },
          secondary: (opacity = 0.6) => {
            const rgb = hexToRgb(colors.grayDarkest);
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
          },
        },
};

const spacingStyles = {
    margin: {
        low:            2,
        medium:         5,
        high:           10,
        large:          15,
        extraLarge:     20
    },
    padding: {
        low:            2,
        medium:         5,
        high:           10,
        large:          15,
        extraLarge:     20,
    },
};

export { colors, fontSizes, fontStyles, borderStyles, backgroundStyles, spacingStyles};

const background_style = StyleSheet.create({
    
    containerPrimary: {
        backgroundColor: backgroundStyles.color.primary,
    },
    containerSecondary: {
        margin: spacingStyles.margin.high,
        padding: spacingStyles.padding.low,
        borderRadius: borderStyles.radius.high,
        backgroundColor: backgroundStyles.color.secondary,
    },
});

const text_style = StyleSheet.create({
    textPrimary: {
        color: fontStyles.color.primary,
        fontSize: fontSizes.headline,
        fontWeight: 'bold',
        padding: spacingStyles.padding.high,
    },

});

const position_style = StyleSheet.create({
    centerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacingStyles.padding.low,
    },
    leftCenter: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: spacingStyles.padding.low,
        paddingLeft: spacingStyles.padding.extraLarge,
    },
});

export {background_style, text_style, position_style};


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




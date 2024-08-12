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
  
const MainColors = {
    red:                '#b70000',
    yellow:             '#c19000',
    green:              '#229200',
};

const fontStyles = {

    size: {

        largeTitle:     34,
        title1:         28,
        title2:         22,
        title3:         20,
        headline:       18,
        subheadline:    15,
        body:           17,
        callout:        15,
        footnote:       13,
        caption1:       12,
        caption2:       11,
    },

    color: {
        primary:        colors.grayMid,
        secondary:      colors.gray,
        ternary:        colors.grayLight,
        quarnary:       colors.grayDark,

        colored:        '#9600a9',
        closeButton:    MainColors.red,
        sendButton:     MainColors.green,
    },


};

const borderStyles = {
    width: {
        tiny:           0.5,
        low:            1,
        medium:         2,
        high :          3,
        large:          5,
    },

    radius: {
        low:            5,
        medium:         10,
        high:           15,
    },

    color: {
        primary:        colors.white,
        secondary:      colors.gray,
        ternary:        colors.grayDark,
    },
};

const backgroundStyles = {
    color: {
        primary:        colors.black,
        secondary:      colors.grayDarkest,
        ternary:        colors.grayDark,
        quarnary:       colors.grayDarker,
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
};

export { colors, MainColors, fontStyles, borderStyles, backgroundStyles, spacingStyles};

const backgroundPreset = StyleSheet.create({
    
    primary: {
        backgroundColor: backgroundStyles.color.primary,
    },
    secondary: {
        flex: 1,
        margin: spacingStyles.margin.medium,
        padding: spacingStyles.margin.large,
        borderRadius: borderStyles.radius.high,
        backgroundColor: backgroundStyles.color.secondary,

    },
    modalOverlay: {
        flex: 1,
        paddingVertical: spacingStyles.margin.extraLarge * 3, 
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: backgroundStyles.transparent.primary(),

    },
    modalContainer: {
        justifyContent: 'center', // Center the content if it’s shorter than the container
        alignItems: 'center', // Center the content horizontally if needed
        padding: spacingStyles.margin.high,
        paddingHorizontal: spacingStyles.margin.high,

        marginHorizontal: spacingStyles.margin.medium,
        borderRadius: borderStyles.radius.medium,
        backgroundColor: backgroundStyles.color.secondary,
    },
});

const textPreset = StyleSheet.create({
    small: {
        fontSize: fontStyles.size.caption1,
        marginBottom: 8,
        color: fontStyles.color.primary,
        textAlign: 'justify',
    },
    medium: {
        color: fontStyles.color.primary,
        fontSize: fontStyles.headline,
        fontWeight: 'bold',
        padding: spacingStyles.margin.high,
    },
    firstTitle: {
        flex: 1,
        fontSize: fontStyles.size.title2,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: spacingStyles.margin.medium,
        color: fontStyles.color.secondary,
    },
    chapterTitle: {
        fontSize: fontStyles.size.title3,
        fontWeight: 'bold',
        marginTop: spacingStyles.margin.extraLarge,
        marginBottom: spacingStyles.margin.medium,
        color: fontStyles.color.ternary,
    },
    chapterTitleCentered: {
        textAlign: 'center',
        fontSize: fontStyles.size.title3,
        fontWeight: 'bold',
        marginBottom: spacingStyles.margin.extraLarge*2,
        color: fontStyles.color.ternary,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 4,
        color: fontStyles.color.secondary,
    },
    commentItalic: {
        flex: 1,
        textAlign: 'left',
        fontStyle: 'italic',
        color: fontStyles.color.secondary,
        fontSize: fontStyles.size.caption1,
        margin: spacingStyles.margin.high,
        marginBottom: spacingStyles.margin.large,
    }

});

const position_style = StyleSheet.create({
    centerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacingStyles.margin.low,
    },
    leftCenter: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: spacingStyles.margin.low,
        paddingLeft: spacingStyles.margin.extraLarge,
    },
});

export {backgroundPreset, textPreset, position_style};


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




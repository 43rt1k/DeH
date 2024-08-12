import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SortName, FilterName } from '../../data/constants';
import { fontStyles, borderStyles, backgroundStyles, spacingStyles } from '../../data/styles';
import { Settings_Button } from '../../components/elements';

export const SortFilter_1Section = ({ onSortChange }) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            backgroundColor: backgroundStyles.color.primary,
            padding: spacingStyles.margin.medium,
        },
    });

    return (
        <View style={styles.container}>
            <Filter_2Section />
            <SortBy_2Section onSortChange={onSortChange} />
        </View>
    );
};

const Filter_2Section = () => {
    const [activeFilters, setActiveFilters] = useState([]);

    const filters = [
        'Vegetarian',
        'No Lactose',
        'No Gluten',
        'Vegan',
        'No Nuts',
        'No Sugar'
    ];

    const toggleFilter = (filter) => {
        setActiveFilters((prevFilters) =>
            prevFilters.includes(filter)
                ? prevFilters.filter((item) => item !== filter)
                : [...prevFilters, filter]
        );
    };

    const clearFilters = () => {
        setActiveFilters([]);
    };

    const styles = StyleSheet.create({
        clearButtonContainer: {
            flex: 1,
            alignItems: 'center',
            marginTop: spacingStyles.margin.medium,
        },
    
    });

    return (
        <View style={[General_styles.sectionContainer]}>
            <Text style={General_styles.sectionTitle}>Filter Food</Text>
            <View style={General_styles.buttonsContainer}>
                {filters.map((filter) => (
                    <Settings_Button
                        key={filter}
                        label={filter}
                        isActive={activeFilters.includes(filter)}
                        onPress={() => toggleFilter(filter)}
                    />
                ))}
            </View>
            <View style={styles.clearButtonContainer}>
                <Settings_Button label="Clear Filters" onPress={clearFilters} large={true}/>
            </View>
        </View>
    );
};

const SortBy_2Section = ({ onSortChange }) => {
    const [activeSort, setActiveSort] = useState(null);

    const sorts = [
        'Price: Low to High',
        'Price: High to Low',
        'Calories: High to Low',
        'Popularity'
    ];

    const toggleSort = (sort) => {
        const newSort = activeSort === sort ? null : sort;
        setActiveSort(newSort);
        onSortChange(newSort);  // Notify parent about the sort change
    };

    return (
        <View style={[General_styles.sectionContainer]}>
            <Text style={General_styles.sectionTitle}>Sort By</Text>
            <View style={General_styles.buttonsContainer}>
                {sorts.map((sort) => (
                    <Settings_Button
                        key={sort}
                        label={sort}
                        isActive={activeSort === sort}
                        onPress={() => toggleSort(sort)}
                    />
                ))}
            </View>
        </View>
    );
};

const General_styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: spacingStyles.margin.high,
        padding: spacingStyles.margin.high,
        borderRadius: borderStyles.radius.medium,
        backgroundColor: backgroundStyles.color.secondary,
    },
    sectionTitle: {
        textAlign: 'center',
        marginBottom: spacingStyles.margin.medium,
        fontWeight: 'bold',
        fontSize: fontStyles.size.footnote,
        color: fontStyles.color.secondary,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GalleryImg } from '../TestingData';

const Gallery = () => {

    const renderImages = () => {
        return GalleryImg.map((item, index) => (
            <Image key={index} source={item.image} style={styles.image} />
        ));
    };

    return (
        <View style={styles.container}>
            {renderImages()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "flex-start",
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20,

    },
});

export default Gallery;

import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import { GalleryImg } from '../TestingData'

export default Gallery = () => {
    const screenWidth = useWindowDimensions().width;
    const numColumns = Math.floor(screenWidth / 170);
    const renderItem = ({ item }) => {
        return <Image source={item.image} style={{ width: 150, height: 150, margin: 20, }} />;
    };
    return (
        <SafeAreaView>
            <FlatList
                data={GalleryImg}
                renderItem={renderItem}
                numColumns={numColumns}
                key={numColumns} />
        </SafeAreaView>
    )
}
const style = StyleSheet.create({

})
import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./style"
import { ImagesAssets } from "../../../../assets/png";

function TeddyImg(props: any): JSX.Element {
    return (
        <ImageBackground
            source={ImagesAssets.Teddy}
            resizeMode="cover"
            style={{
                padding: 20,
                paddingVertical: 40,
                position: 'absolute',
                bottom: 1,
            }}>
            <View style={{ width: 100, height: 100 }}></View>

        </ImageBackground>
    )

}

export default TeddyImg
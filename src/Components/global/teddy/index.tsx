import React from "react";
import { Image } from "react-native";
import { ImagesAssets } from "../../../../assets/png";

function TeddyImg(props: { name: string, style?: any }): JSX.Element {
    return (
        props?.name?.slice(0, 1) ?
            <Image
                source={ImagesAssets.teddy[props?.name?.slice(0, 1)?.toLocaleUpperCase()]}
                style={{
                    height: 100,
                    width: 100,
                    ...props.style
                }} />
            : <></>
    )

}

export default TeddyImg
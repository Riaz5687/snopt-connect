import Image from "next/image";
import React from "react";

type CustomImageType = {
    height?: number;
    width?: number;
    alt?: string;
    src?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomImage = (props: CustomImageType) => {
    const {
        height = 200,
        width = 200,
        alt = "image",
        src = "",
        className = "",
        onClick = () => {},
    } = props;
    return (
        <Image
            onClick={(e) => onClick(e as any)}
            className={className}
            src={src}
            height={height}
            width={width}
            alt={alt}
        />
    );
};

export default CustomImage;

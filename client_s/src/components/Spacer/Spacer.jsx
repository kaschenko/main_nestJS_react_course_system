import React from "react";

export const SpacerAxis = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal",

}

const Spacer = ({ size, axis }) => {
    const width = axis === SpacerAxis.HORIZONTAL ? size : 0;
    const height = axis === SpacerAxis.VERTICAL ? size : 0;
    return (
        <span
            style={{
                display: "block",
                width,
                height,
            }}
        />
    );
};

export {Spacer};

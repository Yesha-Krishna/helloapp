import React from "react";
import Button from "./Button";

const ButtonDesign = () => {
    return(
        <div className="centering-btn">
            <Button buttonText="About Me" />
            <Button buttonText="My Linkedin" />
            <Button buttonText="My Github" />
        </div>
    )
}

export default ButtonDesign;
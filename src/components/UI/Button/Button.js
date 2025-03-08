import React from "react";
import { Button } from "@mui/material";


const ButtonEl = (props) =>{
    
    return(
        <>
            <Button
                sx={{
                    bgcolor: props.bgColor,
                    color:props.color || "white",
                    width:props.givenWidth,
                    "&:hover": {
                    bgcolor: props.hoverBgColor,
                    width:props.hoverGivenWidth,
                    px:props.hoverPx
                    },
                    px:props.px || 4,
                    py:props.py || 1,
                    fontFamily: "'Poppins', sans-serif",
                    border:props.border,
                    borderColor:props.borderColor
                }}
                variant="contained"
                type={props.buttonType}
                >
                {props.buttonTxt}
            </Button>
        </>
    )
}

export default ButtonEl;
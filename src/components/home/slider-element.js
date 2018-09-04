import React from 'react'

export const SliderElement = (props) => {
    return (
        <img src={props.slide.src} alt="Chania" width="1920" srcSet={props.slide.srcSet}></img>
    )
}
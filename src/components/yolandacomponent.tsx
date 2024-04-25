import React from 'react';
import ReactNode from 'react';

type dog = {
    src: string,
    alt: string, 
    width: string
}

const YolandaComponent:React.FC<dog> = ({src,alt,width}) => {
    return (
        <div style={{ fontFamily: 'Open Sans', textAlign: 'center', background: '#F1ECE4' }}>
            <h1>Benefits of owning a dog</h1>
            <img
            src={src}
            alt= {alt}
            width={width}/>
        </div>
        
    )
}
export default YolandaComponent;


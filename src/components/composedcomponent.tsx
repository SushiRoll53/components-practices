import React  from 'react'
import { ReactNode } from 'react';

type CCProps = {
    children: ReactNode;      // Define the type for the text prop
};

const ComposedComponent: React.FC<CCProps> = ({children}) => {
    return (
        <div className='allComponents'>
            {children}
        </div>
    );
}

export default ComposedComponent;
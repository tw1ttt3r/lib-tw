import React from 'react';

export const Hello: React.FC<{ name: String }> = ({name}) => {
    if (!name) {
      name = 'Mundo';
    }
    return (<h1 className='text-red-300 font-bold'>¡¡Hola {name}!!</h1>)
}
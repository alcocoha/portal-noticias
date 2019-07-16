import React from 'react';
import PropTypes from 'prop-types';
import Noticia from '../Noticia'

const list = list => ( list.map( (item, index) => 
    <Noticia 
        noticia={item}
        key={index}
    />
) );

const ListaNoticias = ({noticias}) => {
    // console.log('noticias', noticias)
    return (
        <div className="row">
            { list(noticias) }
        </div>
    );
};

ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
};

export default ListaNoticias;
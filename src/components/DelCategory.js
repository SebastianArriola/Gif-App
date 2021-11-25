import React from 'react'
import PropTypes from 'prop-types';

export const DelCategory = ({setCategories}) => {

    const handleDelete = () =>{

        setCategories(cats=>[]);

    }

    return (
        <div>
            <button onClick={handleDelete}>Borrar historial</button>
        </div>
    )
}


DelCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}

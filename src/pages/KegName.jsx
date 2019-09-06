import React from 'react';
import PropTypes from 'prop-types';

function KegName(props) {
return (
    <li>{props.name}</li> 
    )
}

KegName.propTypes = {
    name: PropTypes.string,
    details: PropTypes.array,

};
export default KegName;
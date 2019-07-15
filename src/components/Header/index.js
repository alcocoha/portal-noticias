import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <Fragment>
            <h1>{props.title}</h1>
        </Fragment>
    );
};

Header.propTypes = {
    title : PropTypes.array.isRequired
};

export default Header;
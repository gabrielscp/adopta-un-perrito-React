import React from 'react';
import Badge from 'react-bootstrap/Badge';
function Boton ({badgeColor, textButton}) {
    return (
        <>
            <Badge pill bg={badgeColor}>{textButton}</Badge>
        </>
    );
};
export default Boton;
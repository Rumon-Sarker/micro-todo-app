import React from 'react';

const Checkbox = ({ checked = false, onClick }) => {
    return (
        <div onClick={onClick}>
            {!checked && (
                <div>
                    <input className="checkbox" type="checkbox" />
                </div>
            )}
        </div>
    );
};

export default Checkbox;
import React from 'react';


const ProgressBar = ({ skill }) => {

    const { bgcolor, completed, title } = skill

    const containerStyles = {
        height: 12,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 2,
        marginBottom: 20
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontSize: 12,
    }

    return (
        <div>
            <h2 className='mb-1'>{title}</h2>
            <div style={containerStyles}>
                <div className='progress-bar flex items-center justify-end' style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
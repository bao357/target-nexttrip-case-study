import React from 'react'

export default ({ main }) => (
    <div className="section">
        <div className="header">
            <img src="https://www.metrotransit.org/images/mob_logo.png" alt="Metro Transit Logo" />
        </div>
        <div className="section">
            {main}
        </div>
    </div>
)

import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1 className="title is-1">NextTrip Case Study</h1>
    <h2 className="title is-2">Target Interview</h2>
    <h2 className="subtitle is-2">Bao Le</h2>

    <p>View transit routes and see what stops are available.</p>
    <p>
      <Link to="/buses">Click here to continue</Link>
    </p>
  </div>
)

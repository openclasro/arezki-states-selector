
import React from 'react'

export default function StateSelector({ state, states, onSelect }) {
    return (
      <div>
        <label htmlFor="state">State</label>
        <select
          value={state}
          onChange={(e) => onSelect(e.target.value)}
          name="state"
          id="state"
        >
          {states.map((item) => (
            <option key={item.abbreviation} value={item.abbreviation}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
  
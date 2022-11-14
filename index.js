
import React from 'react'

/**
 * Component to select States
 *
 * @component
 * @param {Object} props props
 * @param {{ abbreviation: string, name: string }[]} props.states array of States
 * @param {string} props.state currently selected state (abbreviation)
 * @param {(state: string) => void} props.onSelect fired when user selects a state
 * @returns {JSX.Element}  A StateSelector component
 * @example
 * const STATES = const STATES = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  }]
 * const [state, setState] = useState("NY")
 * <StateSelector states={STATES} state={state} onSelect={(state) => setState(state)} />
 */
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
  
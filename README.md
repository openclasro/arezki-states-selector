# Arezki States Selector

```bash
npm install arezki-states-selector
```

## Features
This component let you choose a State (ex: New York) given a list of states, like:

```tsx
const STATES = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  //...
]
```

## Usage
To work properly, the component require to have these props:
- `states`: the available options
- `state`: the current value
- `onSelect`: the function will be called when the user selects one of the options, the option will be passed as the first argument

```tsx
import StateSelector from "arezki-states-selector"

function CreateEmployeePage() {
  const [state, setState] = useState("")

  return (
    <StateSelector
      states={STATES}
      state={state}
      onSelect={(state) => {
        setState(state)
      }}
    />
  )
}
```

# Arezki States Selector

```bash
npm install rezki-states-selector
```
## Usage
```tsx
import StateSelector from "arezki-states-selector"

function CreateEmployeePage() {
  const [state, setState] = useState("")

  return (
    <StateSelector
      states={STATES}
      state={state}
      onSelect={(s) => {
        setState(s)
      }}
    />
  )
}
```

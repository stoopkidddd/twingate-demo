import './App.css'
import ContainerDisplay from './features/ContainerDisplay/components/ContainerDisplay'
import { ComponentsProvider } from './providers/ComponentsProvider'

function App() {
  return (
    <ComponentsProvider>
      <ContainerDisplay />
    </ComponentsProvider>
  )
}

export default App

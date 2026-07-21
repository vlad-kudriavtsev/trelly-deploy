import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { MainPage } from './pages/MainPage.tsx'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(
    <MainPage />
)




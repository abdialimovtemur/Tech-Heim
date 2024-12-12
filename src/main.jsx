import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProviderConf from './tools/provider/index.jsx'
import { router } from './root/index.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

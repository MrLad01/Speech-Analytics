import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import PersonalPage from './pages/PersonalPage'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
              <Route>
                <Route index element = {<PersonalPage /> } />
              </Route>
            )
          )
  return (
    <>
        <RouterProvider router = { router } />
    </>
  )
}

export default App

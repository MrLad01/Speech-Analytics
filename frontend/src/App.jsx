import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import PersonalPage from './pages/PersonalPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, fab, far);

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

import CreateAccount from "./components/CreateAccount/CreateAccount";
import Welcome from "./components/Welcome/Welcome";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />
    },
    {
      path: "/create-account",
      element: <CreateAccount />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      
      {/* <Welcome /> */}
    </div>
  );
}

export default App;

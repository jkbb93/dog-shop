import { RouterProvider } from "react-router-dom";
import router from "./router";
import useSession from "./hooks/use-session";
import CartPersistenceErrorModal from "./store/CartPersistenceErrorModal";

function App() {
  useSession();

  return (
    <>
      <CartPersistenceErrorModal />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import { useAuthOnLoad } from "./hooks/auth/useAuthOnLoad";
import { AppRouter } from "./routes";

function App() {
  useAuthOnLoad();
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

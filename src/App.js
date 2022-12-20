import { Business } from "./components/business";
import { Header } from "./components/header";
import { SignUp } from "./components/signup";
import AOS from "aos";
import "aos/dist/aos.css";
import { UberOne } from "./components/uberone";

AOS.init({ once: true });

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Business />
      <UberOne />
    </div>
  );
}

export default App;

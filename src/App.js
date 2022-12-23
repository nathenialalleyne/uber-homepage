import { Business } from "./components/business";
import { Header } from "./components/header";
import { SignUp } from "./components/signup";
import AOS from "aos";
import "aos/dist/aos.css";
import { UberOne } from "./components/uberone";
import { Saftey } from "./components/saftey";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { MoreToLove } from "./components/more";
import { SignUpButtons } from "./components/signupbutton";

AOS.init({ once: true });

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Business />
      <UberOne />
      <Saftey />
      <About />
      <MoreToLove />
      <SignUpButtons />
      <Footer />
    </div>
  );
}

export default App;

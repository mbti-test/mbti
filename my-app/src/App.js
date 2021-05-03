import { Route, BrowserRouter } from "react-router-dom";
import { IntroPage } from "./pages/intro_page";
import { TestPage } from "./pages/test_page";
import { GenderPage } from "./pages/gender_page";
import { ResultPage } from "./pages/result_page";
import { createContext, useState } from "react";


import { NewIntro } from "./new/new_intro";
import { NewGenderSelect } from "./new/new_gender_select";

import "./App.css";
const MbtiContext = createContext({});

export function App() {
  const [selectedGender, setSelectedGender] = useState("female");
  const [openModal, setOpenModal] = useState(false);
  const [openIntroduction, setOpenIntroduction] = useState(false);

  return (
    <div>
      <MbtiContext.Provider
        value={{
          selectedGender,
          setSelectedGender,
          openModal,
          setOpenModal,
          openIntroduction,
          setOpenIntroduction,
        }}
      >
        <BrowserRouter>
          <Route exact path="/" component={NewIntro} />
          {/* <Route exact path="/" component={IntroPage} /> */}
          <Route exact path="/gender" component={NewGenderSelect} />
          {/* <Route exact path="/gender" component={GenderPage} /> */}
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/:mbti/:gender" component={ResultPage} />
        </BrowserRouter>
      </MbtiContext.Provider>
    </div>
  );
}
export { MbtiContext };

export default App;

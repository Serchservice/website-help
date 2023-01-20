import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelpLinks, SupportLinks } from "../config/links/links";
import { Help, HelpCategories, HelpCategoriesIndex, NoPage } from "../key/main";
import { AnswerQuestionMap, AnswerDescription, SubCategories } from "../key/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />
        <Route exact path={ SupportLinks.help } element={<Help />} />
        <Route path={ HelpLinks.categories } element={<HelpCategories /> }>
          <Route index element={<HelpCategoriesIndex />} />
          <Route path={ HelpLinks.subCategories } element={<SubCategories /> }>
            <Route index element={<AnswerQuestionMap />} />
            <Route path={ HelpLinks.description } element={<AnswerDescription />} />
          </Route>
        </Route>
        {/* <Route path={ HelpLinks.description } element={<SubCategories /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelpLinks, SupportLinks } from "../config/links/links";
import { Help, HelpCategories, NoPage } from "../key/main/main";
import { SubClientCategories } from "../key/main/subClientCategories";
import { SubProviderCategories } from "../key/main/subProviderCategories";
import { SubBusinessCategories } from "../key/main/subBusinessCategories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />
        <Route exactpath={ SupportLinks.help } element={<Help />} />
        <Route path={ HelpLinks.categories } element={<HelpCategories /> } />

        <Route path={ HelpLinks.subClientCategories } element={<SubClientCategories /> } />
        <Route path={ HelpLinks.subBusinessCategories } element={<SubBusinessCategories /> } />
        <Route path={ HelpLinks.subProviderCategories } element={<SubProviderCategories /> } />

        <Route path={ HelpLinks.clientDescription } element={<SubClientCategories /> } />
        <Route path={ HelpLinks.businessDescription } element={<SubBusinessCategories /> } />
        <Route path={ HelpLinks.providerDescription } element={<SubProviderCategories /> } />
        {/* <Route path={ HelpLinks.description } element={<SubCategories /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

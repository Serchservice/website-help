import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelpLinks, SupportLinks } from "../config/links/links";
import { Help, HelpCategories, NoPage } from "../key/main/main";
import { ClientSubCategories } from "../key/mainSubs/clients";
import { BusinessSubCategories } from "../key/mainSubs/business";
import { ProviderSubCategories } from "../key/mainSubs/providers";
import { Description } from "../key/main/desc";
import { BusinessHelpLinks } from "../config/links/business/main/business";
import { ClientsHelpLinks } from "../config/links/clients/main/clients";
import { ProvidersHelpLinks } from "../config/links/providers/main/providers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />
        <Route path={ SupportLinks.help } element={<Help />} />
        <Route path={ HelpLinks.categories } element={<HelpCategories /> } />
        <Route path={ BusinessHelpLinks.business } element={<BusinessSubCategories /> } />
        <Route path={ ClientsHelpLinks.clients } element={<ClientSubCategories /> } />
        <Route path={ ProvidersHelpLinks.providers } element={<ProviderSubCategories /> } />
        <Route path={ HelpLinks.description } element={<Description /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

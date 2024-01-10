// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageListing from "./pages/pageListing";
import Dashboard from "./pages/dashboard";
import SetTarget from "./pages/setTarget";
import AEPGovernance from "./pages/AEPGovernance";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* The first <Route> has a path of / and renders the pageListing component */}
          <Route path="/" element={<PageListing />}> {/* Default Page*/}
          <Route index element={<Dashboard />} />    {/* Setting the path for Default Page*/}
          <Route path="SetTarget" element={<SetTarget />} />
          <Route path="AEPGovernance" element={<AEPGovernance />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

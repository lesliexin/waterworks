import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Home, UWMap, Mobile } from "./pages";

function App() {
  const [page, setPage] = useState("home");

  const redirectPage = (newPage) => {
    setPage(newPage);
  }

  return (
    <>
    <BrowserView>
    {
      page === "home" ? <Home redirectPage={redirectPage}/> : <UWMap redirectPage={redirectPage}/>
    }
    </BrowserView>
    <MobileView>
      <Mobile />
    </MobileView>
    </>
  );
}

export default App;

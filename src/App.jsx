import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Sign from "./pages/Sign/Sign";
import ProviderAuth from "./components/ProviderAuth/ProviderAuth";
import Home from "./pages/Home/Home";
import MessagesUser from "./pages/SendMessages/MessagesUser";
import ViewMessages from "./pages/VIewMessages/ViewMessages";
import Settings from "./pages/Settings/Settings";

function App() {

  return (
    <ProviderAuth>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users/:typesign' element={<Sign/>} />
              <Route path="/sendMessage/:username" element={<MessagesUser />} />
              <Route path='/viewMessages/:username' element={<ViewMessages />} />
              <Route path='/settings/:username' element={<Settings />} />
            </Routes>
          </Layout>
        </Router>
    </ProviderAuth>
  )
}

export default App

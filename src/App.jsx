import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Sign from "./pages/Sign/Sign";
import ProviderAuth from "./components/ProviderAuth/ProviderAuth";
import Home from "./pages/Home/Home";
import MessagesUser from "./pages/SendMessages/MessagesUser";
import ViewMessages from "./pages/VIewMessages/ViewMessages";

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
            </Routes>
          </Layout>
        </Router>
    </ProviderAuth>
  )
}

export default App

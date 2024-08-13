
import History from "./components/Boxsection/History";
import ProfDetail from "./components/Boxsection/ProfDetail";
import Research from "./components/Boxsection/Research";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Phdpage from "./components/all/Phdpage";
import PhdpageSub from "./components/Boxsection/PhdpageSub";
import SeminarPage from "./components/all/Seminar";
import Giving from "./components/all/Giving";
import Announcement from "./components/all/Announcement";
import Director from "./components/all/Director";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    
      <Route path='/history' exact element={<History/>}/>
      <Route path="/research" exact element={<Research/>}/>
      <Route path='/profdetail' exact element={<ProfDetail/>}/>
      <Route path="/phdpage" exact element={<Phdpage/>}/>
      <Route path="/phdpagesub" exact element={<PhdpageSub/>}/>
      <Route path="/seminar" exact element={<SeminarPage/>}/>
      <Route path="/giving" exact element={<Giving/>}/>
      <Route path="/announcement" exact element={<Announcement/>}/>
      <Route path="/director" exact element={<Director/>}/>
    
    </Routes>
    </Router>
    </div>
  );
}

export default App;

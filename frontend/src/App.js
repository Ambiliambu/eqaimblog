import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./Components/BlogPost/BlogPost";
import Home from "./Components/Home/Home";
import NewBlog from "./Components/NewBlog/NewBlog";
// import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogpost/:Id' element={<BlogPost/>}/>
        <Route path='/newblog' element={<NewBlog/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

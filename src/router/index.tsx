import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../routes/Home.page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' element={<Project />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/*
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' element={<Project />} />
        </Route>
      </Routes>
    </HashRouter>

    import Layout from '../components/Layout';
// import _Home from '../routes/Home_Page';
import Blog from '../routes/Blog_Page';
import BlogDetails from '../routes/Blog_Details';
import Projects from '../routes/Projects.page';
import Project from '../routes/Project.page';
import Home from '../routes/Home';


*/

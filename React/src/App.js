import './App.css';
import About from './components/about/about';
import Counter from './components/counter/counter';
import Courses from './components/courses/courses';
import Join from './components/join-us/join';
import Plan from './components/plan/plan';
import Team from './components/team/team';
import Blog from './components/blogs/blog';
import Footer from './components/footer/footer';
import './js/fit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <div class="header">
      <header>
        <div class="container">
          <div class="min-title"><span>be</span>fit</div>
          <div class="links">
            <i class="fas fa-align-justify" id="icon"></i>
            <ul id="links-content">
              <li><a href="#home">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#courses">courses</a></li>
              <li><a href="#pricing">pricing</a></li>
              <li><a href="#team">team</a></li>
              <li><a href="#blogs">blogs</a></li>
            </ul>
          </div>
        </div>
      </header>
      <section class="header-content" id="home">
        <div class="container">
          <div class="image">
            <img src="images/home-img.png" alt="" />
          </div>
          <div class="info">
            <h4>back to the gym</h4>
            <p>Start Your Fitness Journey Today</p>
            <button>get started</button>
          </div>
        </div>
      </section>
    </div>
    <About />
    <Counter />
    <Courses />
    <Plan />
    <Join />
    <Team />
    <Blog />
    <Footer />
                <ToastContainer />

    </>
  );
}

export default App;

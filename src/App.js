import "./App.css";

import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";

import Blog from "./container/blog/Blog";
import Features from "./container/features/Features";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Possibility from "./container/possibility/Possibility";
import What from "./container/what/What";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <What />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Loader } from "./components";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const UiUx = lazy(() => import("./pages/UiUxPage.jsx"));
const WebDevPage = lazy(() => import("./pages/WebDevPage.jsx"));
const AppDevPage = lazy(() => import("./pages/AppDevPage.jsx"));
const Career = lazy(() => import("./pages/Career.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const SingleBlog = lazy(() => import("./pages/SingleBlog.jsx"));
const PostBlog = lazy(() => import("./pages/PostBlog.jsx"));
const PostJob = lazy(() => import("./pages/PostJob.jsx"));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/uiux"
            element={
              <Suspense fallback={<Loader />}>
                <UiUx />
              </Suspense>
            }
          />
          <Route
            path="/app"
            element={
              <Suspense fallback={<Loader />}>
                <AppDevPage />
              </Suspense>
            }
          />
          <Route
            path="/web"
            element={
              <Suspense fallback={<Loader />}>
                <WebDevPage />
              </Suspense>
            }
          />
          <Route
            path="/career"
            element={
              <Suspense fallback={<Loader />}>
                <Career />
              </Suspense>
            }
          />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<Loader />}>
                <Blogs />
              </Suspense>
            }
          />
          <Route
            path="/singleBlog"
            element={
              <Suspense fallback={<Loader />}>
                <SingleBlog />
              </Suspense>
            }
          />
          <Route
            path="/post-blog"
            element={
              <Suspense fallback={<Loader />}>
                <PostBlog />
              </Suspense>
            }
          />
          <Route
            path="/post-jobs"
            element={
              <Suspense fallback={<Loader />}>
                <PostJob />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

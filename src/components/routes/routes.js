import React from 'react'
import { Route,Link, Routes } from 'react-router-dom'
import AboutUs from '../pages/aboutUs'
import Blog from '../pages/blog'
import BookNow from '../pages/bookNow'
import Careers from '../pages/careers'
import Home from '../pages/home'
import NewsAndEvents from '../pages/newsAndEvents'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/booknow" element={<BookNow/>} />
        <Route path="/newsandevents" element={<NewsAndEvents/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/blog" element={<Blog/>} />
    </Routes>
    </>
  )
}

export default Router
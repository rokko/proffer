import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import CasePage from '../CasePage/CasePage';
import CauseSinglePage from '../CauseSinglePage/CaseSinglePage';
import EventPage from '../EventPage/EventPage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import MissionPage from '../MissionPage/MissionPage';
import ComeAiutarci from '../AboutPage/ComeAiutarci';
import OgniGiorno from '../MissionPage/OgniGiorno';
import DonaOra from '../CauseSinglePage/DonaOra';
import PercheFacciamo from '../AboutPage/PercheFacciamo';
import Trasparenza from '../AboutPage/Trasparenza';
import CinqueMille from '../AboutPage/51000';
import Aste from '../AboutPage/Aste';
import DonaMateriali from '../AboutPage/DonaMateriali';
import DonaOra2 from '../CauseSinglePage/DonaOra2';
import CosaFacciamo from '../AboutPage/Cosafacciamo';
import ChiSiamo from '../AboutPage/ChiSiamo';
import FeelTheDreamTop from '../AboutPage/FeelTheDreamTop';
import FeelTheGameTop from '../AboutPage/FeelTheGameTop';
import FeelTheMomentTop from '../AboutPage/FeelTheMomentTop';
import FeelTheCourtTop from '../AboutPage/FeelTheCourtTop';
import AltreIniziativeTop from '../AboutPage/AltreIniziativeTop';
import WorkInProgressTop from '../AboutPage/WorkInProgressTop';



const AllRoute = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chisiamo" element={<ChiSiamo/>}/>
          <Route path="/comeaiutarci" element={<ComeAiutarci />}/>
          <Route path="/cosa-facciamo" element={<CosaFacciamo/>}/>
          <Route path="/altre-iniziative" element={<AltreIniziativeTop />}/>
          <Route path="/work-in-progress" element={<WorkInProgressTop/>}/>
          <Route path="/mission" element={<MissionPage />}></Route>
          <Route path="/ogni-giorno" element={<OgniGiorno />}></Route>
          <Route path="/dona-ora" element={<DonaOra2 />}></Route>
          <Route path="/perche-facciamo" element={<PercheFacciamo/>}></Route>
          <Route path="/trasparenza" element={<Trasparenza/>}></Route>
          <Route path="/dona-materiali" element={<DonaMateriali/>}></Route>
          <Route path="/51000" element={<CinqueMille/>}></Route>
          <Route path="/feelthedream" element={<FeelTheDreamTop/>}></Route>
          <Route path="/feelthecourt" element={<FeelTheCourtTop/>}></Route>
          <Route path="/feelthemoment" element={<FeelTheMomentTop/>}></Route>
          <Route path="/feelthegame" element={<FeelTheGameTop/>}></Route>
          <Route path="/aste" element={<Aste/>}></Route>
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="causes" element={<CasePage />} />
          <Route path="cause-single/:slug" element={<CauseSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='order_received' element={<OrderRecived/>} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
        <Route path='contact' element={<ContactPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;

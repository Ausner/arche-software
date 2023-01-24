import "./App.css";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import {setProducts} from "./data/products";
import {setReviews} from "./data/testimonials";




function App() {

  const [loadData, setloadData] = useState(false);

  useEffect(() => {
    setloadData(true);
    const config = {
      headers:{
        apikey: 'bd2b0432-6e52-4ccd-9111-41de88c9e476',
      }
    };


    axios.get('https://arche-software-backend.vercel.app/api/promotions', config)
    .then(function (response) {
      setProducts(response.data);

    })
    .catch(function (error) {
      console.error(error);
    }).finally(() => {
        axios.get('https://arche-software-backend.vercel.app/api/reviews', config)
        .then(function (response) {
          setReviews(response.data);
    
        })
        .catch(function (error) {
          console.error(error);
        }).finally(() => {
          setloadData(false);
        });
    });




  }, []);



  return (
    <div className="App">
          {loadData ? <div class="planet"></div> :
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          
          }

    </div>
  );
}

export default App;

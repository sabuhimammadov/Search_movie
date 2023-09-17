import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./shared/components/Header"
 const Home = lazy(() => import("./pages/Home"));
const Search = lazy(()=>import("./pages/Search"))
const Favorite = lazy(()=>import("./pages/Favorite"))
const Details = lazy(()=>import("./pages/Details"))
const CreateMovie = lazy(()=>import("./pages/MovieCreate/CreateMovie"))

function App(){

  return(
  
    <>
    <Header/>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route path="/movies" element={<Home title={"Movie"} />} />
            <Route path="/movies/:movie_id" element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/movie-create" element={<CreateMovie />} />
          </Routes>
        </Suspense>
        <ToastContainer theme="dark" />

    </>

  )
}
export default App
import React, { Suspense } from "react";
import Header from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
const RecipeCards = React.lazy(() => import("../components/RecipeCards"));

function Home() {
  return (
    <>
      <div className="space-y-4">
        <div className="w-[100%] sticky z-20 top-0 space-y-2 bg-white ">
          <Header />
          <div className="flex flex-col md:flex-row md:items-center bg-white">
            <Logo />
            <SearchBar />
          </div>
        </div>
        <HeroSection />
        <NavigationMenu />
        <Suspense
          fallback={<div className="flex justify-center">Loading...</div>}
        >
          <RecipeCards />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default Home;

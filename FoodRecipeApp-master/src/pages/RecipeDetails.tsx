import React, { useEffect, useState } from "react";
import { fetchRecipeById, Recipe } from "../services/RecipeApi";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import "../assets/Recipe.css";
import Logo from "../components/Logo";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data: Recipe = await fetchRecipeById(Number(id));
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return (
    <>
      <div className="space-y-4">
        <Navbar />
        <Logo />
        <HeroSection />
        <NavigationMenu />
        <div className="w-[100%] flex justify-center">
          <div className="w-[90%] grid lg:grid-cols-2 gap-20 md:gap-30 ">
            <div className="w-[100%] p-[20px] bg-[#8B888836] rounded-xl flex flex-col gap-y-4">
              <p className="font-bold text-xl">{recipe?.name}</p>
              <p>{recipe?.instructions}</p>
              <p className="border-b-2 border-[#44414136] font-bold pb-4">
                Ingredients
              </p>
              <ul>
                {recipe?.ingredients.map((ingredients,index) => (
                    <li key={index} className="custom-bullet">
                    {ingredients}</li>
                ))}
              </ul>
            </div>
            <div>
              <img src={recipe?.image} className="h-fit w-fit" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default React.memo(RecipeDetails);

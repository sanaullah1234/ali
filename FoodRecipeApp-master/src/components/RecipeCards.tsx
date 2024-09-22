import React, { useEffect, useState } from "react";
import { fetchRecipes, Recipe, RecipesResponse } from "../services/RecipeApi";
import { NavLink } from "react-router-dom";
import { LuClock9 } from "react-icons/lu";
import { Rate } from "antd";

const RecipeCards: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data: RecipesResponse = await fetchRecipes();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };


    getRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="md:w-[70%] grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          {recipes.map((recipe) => (
            <NavLink
              to={`/RecipeDetails/${recipe.id}`}
              key={recipe.id}
              className="space-y-4"
            >
              <h3
                style={{
                  backgroundImage: `url(${recipe.image})`,
                  backgroundSize: "cover",
                  fontFamily: "Montez",
                  fontSize: "50px",
                }}
                className="flex justify-center items-end p-6 text-white h-72 text-3xl
                 "
              >
                {recipe.cuisine}
              </h3>
              <div className="flex justify-between">
                <p>{recipe.name}</p>
                <p
                  className="h-fit flex justify-center items-center bg-[#84BD00]
        w-[90px] "
                >
                  Reviews:{recipe.reviewCount}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-2">
                  <LuClock9 /> {recipe.cookTimeMinutes} minutes
                </p>
                <p>{recipe.mealType}</p>
              </div>
              <div className="flex justify-end">
                <Rate count={5} value={recipe.rating} allowHalf disabled />
              </div>

              <br />
              <br />
              <br />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
export default React.memo(RecipeCards);

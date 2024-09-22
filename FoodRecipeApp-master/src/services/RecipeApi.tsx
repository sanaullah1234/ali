import axios from "axios";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipesResponse {
  recipes: Recipe[];
}

export const fetchRecipes = async (): Promise<RecipesResponse> => {
  try {
    const response = await axios.get<RecipesResponse>(
      "https://dummyjson.com/recipes"
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchRecipeById = async (id: number): Promise<Recipe> => {
  try {
    const response = await axios.get<Recipe>(
      `https://dummyjson.com/recipes/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

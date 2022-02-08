import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>() ; 
    
    private recipes : Recipe[]  = [
        new Recipe('Butternut Soup', '2 butternuts, 2l milk, put on stove yadi yada', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'), 
        new Recipe('Brownies', 'choclate yadi yada', 'https://celebratingsweets.com/wp-content/uploads/2019/02/Homemade-Brownies-1-5.jpg')  
      ] ; 

      getRecipes() {
          return this.recipes.slice(); 
      }
    
}
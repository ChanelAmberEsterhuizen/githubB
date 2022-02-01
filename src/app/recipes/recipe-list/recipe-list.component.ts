import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>() ; 

  recipes : Recipe[]  = [
    new Recipe('Butternut Soup', '2 butternuts, 2l milk, put on stove yadi yada', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'), 
    new Recipe('Brownies', 'choclate yadi yada', 'https://celebratingsweets.com/wp-content/uploads/2019/02/Homemade-Brownies-1-5.jpg')  
  ] ; 


  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe); 
  }

}

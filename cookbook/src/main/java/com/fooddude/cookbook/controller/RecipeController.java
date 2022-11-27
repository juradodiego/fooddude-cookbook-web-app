package com.fooddude.cookbook.controller;

import com.fooddude.cookbook.model.Filter;
import com.fooddude.cookbook.model.Recipe;
import com.fooddude.cookbook.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// Posts / Gets from URL = "localhost:8080/recipe/..."

@RestController
@RequestMapping("/recipe")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping("/getAll")
    public List<Recipe> getAllRecipes(){
        return recipeService.getAllRecipes();
    }
    @GetMapping("/getFiltered")
    public List<Recipe> getFilteredRecipes(@RequestBody Filter filter){
        return recipeService.getFilteredRecipes(filter);
    }
    @GetMapping("/getByIds")
    public List<Recipe> getRecipesByIds(@RequestBody List<Integer> ids){
        return recipeService.getRecipesByIds(ids);
    }
    @PostMapping("/add")
    public String add(@RequestBody Recipe recipe){
        recipeService.addRecipe(recipe);
        return "New recipe is added";
    }
    @PostMapping("/delete")
    public String delete(@RequestBody Recipe recipe){
        // TODO fix delete method -> delete does not delete
        recipeService.deleteRecipe(recipe);
        return "A recipe has been deleted";
    }
}

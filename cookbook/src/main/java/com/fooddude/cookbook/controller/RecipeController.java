package com.fooddude.cookbook.controller;

import com.fooddude.cookbook.model.Recipe;
import com.fooddude.cookbook.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipe")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @PostMapping("/add")
    public String add(@RequestBody Recipe recipe){
        recipeService.saveRecipe(recipe);
        return "New recipe is added";
    }

    @GetMapping("/getAll")
    public List<Recipe> getAllRecipes(){
        return recipeService.getAllRecipes();
    }
}

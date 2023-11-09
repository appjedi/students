const data = [{ "category": "Dairy", "name": "Low fat (2%) milk", "carbs": "12", "carbRating": 0, "calories": "121" }, { "category": "Dairy", "name": "Pudding (any flavor) (1/2 cup)", "carbs": "30", "carbRating": 0, "calories": "161" }, { "category": "Dairy", "name": "Skim milk (1 cup)", "carbs": "12", "carbRating": 0, "calories": "86" }, { "category": "Dairy", "name": "Yogurt (fruit-flavored, low fat) (1 cup)", "carbs": "42", "carbRating": 0, "calories": "225" }, { "category": "Beans", "name": "Garbanzo beans (chickpeas) (1 cup)", "carbs": "45", "carbRating": 0, "calories": "269" }, { "category": "Beans", "name": "Navy beans (1 cup)", "carbs": "48", "carbRating": 0, "calories": "259" }, { "category": "Beans", "name": "Refried beans (1/2 cup)", "carbs": "26", "carbRating": 0, "calories": "142" }, { "category": "Beans", "name": "White beans (1 cup)", "carbs": "45", "carbRating": 0, "calories": "249" }, { "category": "Fruits", "name": "Applesauce (1 cup)", "carbs": "60", "carbRating": 0, "calories": "232" }, { "category": "Fruits", "name": "Cantaloupe (1 cup)", "carbs": "14", "carbRating": 0, "calories": "57" }, { "category": "Fruits", "name": "Grapes (1 cup)", "carbs": "28", "carbRating": 0, "calories": "114" }, { "category": "Fruits", "name": "Raspberries (1 cup)", "carbs": "14", "carbRating": 0, "calories": "61" }, { "category": "Fruits", "name": "Strawberries (1 cup)", "carbs": "11", "carbRating": 0, "calories": "45" }, { "category": "Vegetables", "name": "Carrot (1 medium)", "carbs": "8", "carbRating": 0, "calories": "31" }, { "category": "Vegetables", "name": "Corn (1/2 cup)", "carbs": "21", "carbRating": 0, "calories": "89" }, { "category": "Vegetables", "name": "Peas, green (1/2 cup)", "carbs": "12", "carbRating": 0, "calories": "63" }, { "category": "Vegetables", "name": "Potato (1 large, baked, plain)", "carbs": "50", "carbRating": 0, "calories": "220" }, { "category": "Vegetables", "name": "Sweet Potato (1 large)", "carbs": "28", "carbRating": 0, "calories": "118" }, { "category": "Grains", "name": "Bagel (1)", "carbs": "31", "carbRating": 0, "calories": "165" }, { "category": "Grains", "name": "Cookie (oatmeal raisin)(1)", "carbs": "9", "carbRating": 0, "calories": "62" }, { "category": "Grains", "name": "Noodles (spaghetti)(1 cup)", "carbs": "34", "carbRating": 0, "calories": "159" }, { "category": "Grains", "name": "Oatmeal (1/2 cup)", "carbs": "12", "carbRating": 0, "calories": "66" }, { "category": "Grains", "name": "Pancake (4 inch diameter)", "carbs": "10", "carbRating": 0, "calories": "41" }, { "category": "Grains", "name": "Pizza (cheese)(1 slice)", "carbs": "39", "carbRating": 0, "calories": "290" }, { "category": "Grains", "name": "Popcorn, plain (1 cup, popped)", "carbs": "6", "carbRating": 0, "calories": "26" }, { "category": "Grains", "name": "Pretzels (1 ounce)", "carbs": "21", "carbRating": 0, "calories": "106" }, { "category": "Grains", "name": "Rice, brown (1 cup)", "carbs": "50", "carbRating": 0, "calories": "232" }, { "category": "Grains", "name": "Waffles (2, 3.5\" x 5.5\")", "carbs": "17", "carbRating": 0, "calories": "130" }];

for (let item of data)
{
    console.log(item);    
}

/*

*/
function getRatingByCarbs(carbs)
{
    if (carbs > 46)
        return 1;
    else if (carbs > 35)
        return 2;
    else if (carbs > 25)
        return 2;
    else if (carbs > 9)
        return 2;
    else
        return 5;
}
function getRatingByCalaries(cal)
{
    if (cal > 231)
        return 1;
    else if (cal > 150)
        return 2;
    else if (cal > 110)
        return 2;
    else if (cal > 5)
        return 2;
    else
        return 5;
}

const foods = [
    {
        name: "tahchin morgh",
          img: "https://www.aashpazi.com/dishes/recipes/tahchin%20morgh.png",
          servingSize: '4',
          ingredient: '1.5 Cups Rice, 1 Small Onion, 1/2 lb (226g) Boneless Chicken, 1 Tsp Zafran (saffran), Salt, Ground Chili Pepper, 1/4 Cup Oil, 4 Egg Yolks, 10 oz (283g) Plain Yogurt, 3 Tbsp Dried Barberries (Zereshk)',
          cookTime: '2 hours',
          preparation: '1- Soak the rice with 2 tsp salt for an hour in a pot. 2- Slice the onion. 3- Soak the zafran for 20 minutes. 4- beat the egg until fluffy.'
    },
    {
        name:'plums or prunes stew',
          img: "https://www.aashpazi.com/dishes/recipes/plums-stew-photo.png",
          servingSize: '4',
          ingredient: '1.5 lb (680g) Chicken Thighs, 1 lb (454g) Plums, 1/4 Cup Pomegranate Paste, 1 Onion, Turmeric, Salt, 2 Tbsp Vegetable Oil',
          cookTime: '60 minuts',
          preparation: '1- Slice the onions and plums.'
    },
    {
        name:'ghormeh sabzi',
          img: "https://www.aashpazi.com/dishes/recipes/ghormeh%20sabzi.png",
          servingSize: '100g',
          ingredient: '15 oz (425g) Kidney Beans, 1 Medium Onion, 2 Garlic Cloves, 2 Dried Limes (Limo Amani), 1 lb (453g) Stew Beef, 1 Bunch Leek Chives, Fenugreek Leaves, Parsley, Salt, Ground Chili Pepper',
          cookTime: '2 hours',
          preparation: '1- Dice the onion. 2- Dice the garlic cloves. 3- Soak the dried limes for 15 minutes. 4- Chop the beef. 5- Mince the herbs (leek chives, fenugreek leaves and parsley).6- Boil 5 Cups of Water.',
    },
    {
        name:'ghalieh mahi or fish stew',
        img: "https://www.aashpazi.com/dishes/recipes/ghalieh-mahi-photo.png",
        servingSize: '100g',
        ingredient: '10 oz (283 g) Boneless Fish (Tilapia) 2 Bunch Cilantro, 1 Bunch Fenugreek, 1/4 Cup Tamarind Paste, 1 Onion, 2 Garlic Cloves, 1/8 Tsp Ground chili Pepper, 3 Tbsp Vegetable Oil, Salt, Turmeric',
        cookTime:'60 minuts',
        preparation: '1- Dice the onion. 2- Mince cilantro and fenugreek. 3- Cut the fish in small pieces.',
    },
    {
        name:'ash reshteh',
          img: "https://www.aashpazi.com/dishes/recipes/ash%20reshteh.png",
          servingSize: '458g',
          ingredient: '4 Medium Onion, 2 Garlic Cloves, 15 oz (425g) Chickpeas, Kidney Beans, Lentils1 bunch Leek Chives, Cilantro, Dill, Parsley, Spinach, 1.5 Tsp Salt, Turmeric14 oz (396g), Noodles (Reshteh)Kashk (Whey)Vegetable Oil',
          cookTime: '2 hours',
          preparation: '1- Dice a medium size onion. 2- Slice 3 medium size onions. 3- Mince 1 bunch leak chives, cilantro, dill, parsley and spinach. 4- Pre-cook 15 oz chickpeas, kidney beans and lentils or use canned product. 5- Boil 5 cups water.'
    },
    {
        name:'mirza ghasemi (eggplant)',
          img: "https://www.aashpazi.com/dishes/recipes/mirza%20ghasemi.png",
          servingSize: '100g',
          ingredient: ' 1 Large Eggplant, 1 Medium Tomato, 1 Small Onion, Salt, Ground Chili Pepper, Ground Bay Leaves, Oil, 2 Tsp Tomato Paste',
          cookTime: '3 hours',
          preparation: '1- Slice 2 onions. 2- Peel and slice the eggplants. 3- Smash the garlic cloves. 4- Boil 4-5 Cups Water',
    },
    {
        name:'halim bademjan',
        img: "https://www.aashpazi.com/dishes/recipes/halimbademjanimg.png",
        servingSize: '100g',
        ingredient: '3 Large Eggplants, 1 lb (453g) Beef Neck, 2 Cups Rice, 1/2 lb (226g) Kashk (Whey), 3 Onions, Turmeric, Salt, Black pepper powder, Crushed Mint, Persian spice mix (Advieh), 7 Tbsp Vegetable Oil, 2 Garlic Cloves',
        cookTime: '3 hours',
        preparation: '1- Slice 2 onions. 2- Peel and slice the eggplants. 3- Smash the garlic cloves. 4- Boil 4-5 Cups Water',
    },
    {
        name:'eggplant & beef',
        img: "https://www.aashpazi.com/dishes/recipes/eggplant-beef-photo.png",
        servingSize: '100g',
        ingredient: '2 to 3 Eggplants 1 lb (453g) Ground Beef, 1 Onion, 2 Tomatoes, 1 Bell Pepper, 2 Garlic Cloves, 2 Tbsp Vegetable Oil, 2 Tbsp Vegetable Oil, 2 Tbsp Tomato Paste, 1 Tsp Paprika, Curry Seasoning, Salt, Black Pepper, Oregano, Ground Chili Pepper',
        cookTime: '60 minuts',
        preparation: '1- Slice the Eggplants, one onion, tomatoes and bell pepper widthwise (1 inch thick)',
    },
    {
        name:'kabab tabei',
        img: "https://www.aashpazi.com/dishes/recipes/kababtabeiimg.png",
        servingSize: '168g',
        ingredient: '1/2 Lb (226g) Ground Beef, 2 Cups Rice, 1 Tsp Zafran (Saffron), 1 Small Onion, Salt, Black Pepper, Persian Spice Mix (Advieh), Turmeric, 4 Tbsp Vegetable Oil, 3 Small Tomatoes, Pepper',
        cookTime: '30 minuts',
        preparation: '1- Soak the rice with 1 tbs salt for an hour. 2- Soak the zafran (saffron) in boiling water for 30 minutes. 3- Grate the onion. 4- Boil 5 cups of water.',
    },
    {
        name:'spinach & prune stew',
        img: "https://www.aashpazi.com/dishes/recipes/spinach-prune-stew-photo.png",
        servingSize: '100g',
        ingredient: '20 oz (567g) Spinach, 4.5 oz (127g) Dried Prunes, 8 oz (227g) Stew Beef, 1 Onion, 2 Tbsp Vegetable Oil, 2 Tbsp Vegetable Oil, Turmeric, Salt, Crushed Red Pepper',
        cookTime: '60 minuts',
        preparation: '1- Dice the onion. 2- Mince the spinach.',
    }
];

module.exports = foods;
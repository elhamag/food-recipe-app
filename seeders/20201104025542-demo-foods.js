"use strict";
module.exports = {
up: async (queryInterface, Sequelize) => {
return queryInterface.bulkInsert(
"Food",
[
{
name: "TAHCHIN MORGH",
img: "https://www.aashpazi.com/dishes/recipes/tahchin%20morgh.png",
servingSize: '4',
ingredient: '1.5 Cups Rice, 1 Small Onion, 1/2 lb (226g) Boneless Chicken, 1 Tsp Zafran (saffran), Salt, Ground Chili Pepper, 1/4 Cup Oil, 4 Egg Yolks, 10 oz (283g) Plain Yogurt, 3 Tbsp Dried Barberries (Zereshk)',
cookTime: '2 hours',
preparation: '1- Soak the rice with 2 tsp salt for an hour in a pot. 2- Slice the onion. 3- Soak the zafran for 20 minutes. 4- beat the egg until fluffy.',
direction:'1- Put the onions into a pot. 2- Lay the chicken pieces on top of the onions. 3- Add some salt and fill the pot with boiling water until it covers the chickens. 4- Put the lid on the pot and let it simmer for 20 Minutes. 5- Take the cooked chicken pieces out of the pot (keep the water in the pot, you will need it in step 19) and slice them in smaller pieces. 5- Bring the soaked rice pot to the boiling and continue simmering until the rice becomes tender. 6- Drain the rice in a colander. 7- Pour 10 oz of plain yogurt in a bowl. 8- Add half of the beaten egg yolks, ground chili pepper and 1 tbsp of the soaked zafran(saffron) to the bowl and mix them together. 9- Add the chicken pieces to the bowl and mix up with the egg yolk mixture. 10- Take another pot and add 2 tbsp vegetable oil. 11- Add the rest of the beaten egg yolks to this pot. 12- Add 2 tbsp of the egg yolk mixture (step 8) to the pot. 13- Add 2 tbsp of the drained rice to the pot. 14- Stir until well mixed. 15- Flat the mixture, take the chicken pieces out of the bowl and put them in the pot on top of the mixture. 16- Add 3 tbsp dried barberries (Zereshk). 17- Add the rest of the rice to the pot. 18- Flat and spread the rice across the pot but dont mix with the mixture. 19- Now take the egg yolks mixture bowl (step 8) add 1/4 vegetable oil, and 2 tbsp of the zafran (saffron), and pour the boiled water (left from the onion and chickens pot) into the bowl until it covers the mixture and mix thoroughly. 20- Back to the rice pot, again put pressure on the rice and press down using a large spoon (as shown in the video 3:13) and pour the rest of the egg yolk mixture on top of the rice. 21- Cover the pot with the lid and let it simmer for 120 minutes over low heat.  ',
createdAt: new Date(),
updatedAt: new Date(),
userId: 1,
},
{
name:'GHORMEH SABZI',
img: "https://www.aashpazi.com/dishes/recipes/ghormeh%20sabzi.png",
servingSize: '100g',
ingredient: '15 oz (425g) Kidney Beans, 1 Medium Onion, 2 Garlic Cloves, 2 Dried Limes (Limo Amani), 1 lb (453g) Stew Beef, 1 Bunch Leek Chives, Fenugreek Leaves, Parsley, Salt, Ground Chili Pepper',
cookTime: '2 hours',
preparation: '1- Dice the onion. 2- Dice the garlic cloves. 3- Soak the dried limes for 15 minutes. 4- Chop the beef. 5- Mince the herbs (leek chives, fenugreek leaves and parsley).6- Boil 5 Cups of Water.',
direction:'1- Fry the diced onions and garlics in small pot with 2 tbsp vegetable oil until translucent and golden. 2- Add the chopped beef to the pot, stir and fry along until brown. 3- Add boiling water to the pot until it covers the mixture. 4- Cover the pot with the lid and let it simmer for 60 to 90 minutes. 5- Fry the herbs in pot with 2 tbsp vegetable oil. 6- Add the fried herbs to the beef mixture pot. 7- Add the kidney beans to the pot. 8- Make few holes into the soaked limes and add them to the pot and stir. 9- Now add ground chili pepper, salt, Persian spice mix (Advieh) as preferred. 10- Add 1 tsp tomato paste to the pot and mix thoroughly until well mixed.  11- Cover the pot with the lid and cook for 30 minutes.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 2,
},
{
name:'GHALIEH MAHI (fish stew)',
img: "https://www.aashpazi.com/dishes/recipes/ghalieh-mahi-photo.png",
servingSize: '100g',
ingredient: '10 oz (283 g) Boneless Fish (Tilapia) 2 Bunch Cilantro, 1 Bunch Fenugreek, 1/4 Cup Tamarind Paste, 1 Onion, 2 Garlic Cloves, 1/8 Tsp Ground chili Pepper, 3 Tbsp Vegetable Oil, Salt, Turmeric',
cookTime:'60 minuts',
preparation: '1- Dice the onion. 2- Mince cilantro and fenugreek. 3- Cut the fish in small pieces.',
direction:'1- Fry onions with 2 tbsp vegetable oil until golden. 2- Add stew seasoning, ground chili pepper, continue frying for couple of more minutes. 3- Add minced cilantro and fenugreek, and continue frying until the herbs start becoming dark. 4- Combine half a cup of boiling water with tamarind paste and stir well until the tamarind paste is thoroughly dissolved. 5- Add the tamarind paste to the bowl, stir. Add more boiling water if needed. 6- Add salt as preferred, stirring. 7- Heat the pot over medium heat for 10 minutes. Meanwhile, 8- Rub the sliced fish with turmeric on both sides. 9- Fry the fish in a tbsp of vegetable oil until will fried on both sides. 10- Add the fish to the herbs pot and stir well. 11- Cook for 20 minutes over medium heat. ',
createdAt: new Date(),
updatedAt: new Date(),
userId: 3,
},
{
name:'ASH RESHTEH',
img: "https://www.aashpazi.com/dishes/recipes/ash%20reshteh.png",
servingSize: '458g',
ingredient: '4 Medium Onion, 2 Garlic Cloves, 15 oz (425g) Chickpeas, Kidney Beans, Lentils1 bunch Leek Chives, Cilantro, Dill, Parsley, Spinach, 1.5 Tsp Salt, Turmeric14 oz (396g), Noodles (Reshteh)Kashk (Whey)Vegetable Oil',
cookTime: '2 hours',
preparation: '1- Dice a medium size onion. 2- Slice 3 medium size onions. 3- Mince 1 bunch leak chives, cilantro, dill, parsley and spinach. 4- Pre-cook 15 oz chickpeas, kidney beans and lentils or use canned product. 5- Boil 5 cups water.',
direction:'1- Heat the vegetable oil in a pot over medium heat. 2- Add the diced onion along with two garlic cloves to the pot and fry until translucent. 3- Add the chickpeas, kidney beans, and lentils to the pot. 4- Add salt and turmeric as needed and mix thoroughly and let the mixture fry for few minutes. stir the mixture occasionally. 5- Stir in the minced leak chives, cilantro, dill, parsley and spinach. 6- Pour in boiling water until the mixture is covered. Bring the mixture to a boil than reduce heat to low and simmer for 10 or 15 min. 7- Add the noodles (reshteh) to the pot and continue simmering. 8- In a small pan, heat the oil and fry the sliced onions until golden. 9- Serve the meal in bowl and top it with fried onions and Kashk.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 4,
},
{
name:'MIRZA GHASEMI (eggplant)',
img: "https://www.aashpazi.com/dishes/recipes/mirza%20ghasemi.png",
servingSize: '100g',
ingredient: ' 1 Large Eggplant, 1 Medium Tomato, 1 Small Onion, Salt, Ground Chili Pepper, Ground Bay Leaves, Oil, 2 Tsp Tomato Paste',
cookTime: '3 hours',
preparation: '1- Slice 2 onions. 2- Peel and slice the eggplants. 3- Smash the garlic cloves. 4- Boil 4-5 Cups Water',
direction:'1- Peel the skin off of the eggplant and chop the eggplant in small pieces. 2- Fry the diced onions in a pot with 2 tablespoon vegetable oil until golden. 3- Add the diced tomatoes to the pot. 4- Add the chopped eggplants to the pot. 5- Add salt, ground chili pepper and ground bay leaves, stir and continue frying for 5 more minutes. 6- Let it cool down for few minutes then mash the mixture thoroughly. 7- Add 2 tsp of tomato paste, stir and simmer for 10 minutes.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 5,
},
{
name:'HALIM BADEMJAN',
img: "https://www.aashpazi.com/dishes/recipes/halimbademjanimg.png",
servingSize: '100g',
ingredient: '3 Large Eggplants, 1 lb (453g) Beef Neck, 2 Cups Rice, 1/2 lb (226g) Kashk (Whey), 3 Onions, Turmeric, Salt, Black pepper powder, Crushed Mint, Persian spice mix (Advieh), 7 Tbsp Vegetable Oil, 2 Garlic Cloves',
cookTime: '3 hours',
preparation: '1- Slice 2 onions. 2- Peel and slice the eggplants. 3- Smash the garlic cloves. 4- Boil 4-5 Cups Water',
direction:'1-Cut a large onion in four pieces and put them in a pot, put the beef in the pot. 2- Add Persian spice mix (Advieh) and black pepper powder, pour in boiling water until it covers the beef. 3- Simmer the pot for 90 minutes over medium heat. 4- Fry the eggplants in 2 tbsp vegetable oil and salt (as preferred). Flip eggplants over so both sides become brown. 5- Fry the sliced onions in frying pan with 5 tbsp vegetable oil.6- Put 2 cups of rice in a pot, add 5 cups of boiling water, simmer until tender and all the waters evaporated. 7- Remove/spare 3/4 of the fried onions from the frying pan, add turmeric and Persian spice mix (Advieh) and fry for 5 more minutes. 8- Remove the onions. Add the smashed garlic and crushed mint to the pan and fry for a minutes. 9- Add the fried eggplants and the beef to the rice, stir and mash thoroughly. 10- Add the fried garlic/mint (step 9) and fried onions (step 8), blend completely. 11- Add boiling water and the kashk to a pot, simmer for 10 minutes over low heat, then add it to the eggplant/rice pot, mix well. 12- Cook for 15 minutes. 13- Decorate with the spared fried onions (step 7) and fried mint. ',
createdAt: new Date(),
updatedAt: new Date(),
userId: 6,
},
{
name:'EGGPLANT & BEEF',
img: "https://www.aashpazi.com/dishes/recipes/eggplant-beef-photo.png",
servingSize: '100g',
ingredient: '2 to 3 Eggplants 1 lb (453g) Ground Beef, 1 Onion, 2 Tomatoes, 1 Bell Pepper, 2 Garlic Cloves, 2 Tbsp Vegetable Oil, 2 Tbsp Vegetable Oil, 2 Tbsp Tomato Paste, 1 Tsp Paprika, Curry Seasoning, Salt, Black Pepper, Oregano, Ground Chili Pepper',
cookTime: '60 minuts',
preparation: '1- Slice the Eggplants, one onion, tomatoes and bell pepper widthwise (1 inch thick)',
direction:'1- Fry eggplants with vegetable oil, Sprinkle salt and oregano over the eggplants while frying. PATTIES: 2- Grate an onion in a bowl. 3- Mash garlic clove into the bowl. 4- Add beef, curry seasoning (Advieh), salt, black pepper, and stir thoroughly. 5- Make 4 inch patties out of the beef mixture. 6- Fry the beef patties in vegetable oil. SAUCE: 7- In a small container, combine tomato paste, paprika, and a cup of water. Stir until all the ingredients are well mixed. 8- Cover a surface of a pot with half of the tomato paste sauce. 9- Lay the fried eggplants onto the pot. 10- Place a layer of fried patties over the eggplants. 11- Make another layers with onions, bell pepper and tomatoes. 12- Make the final layer with eggplants. 13- Pour the remaining of the sauce over the eggplant and spread evenly. 14- Cover the pot with a lid and simmer for 30 minutes over medium heat.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 7,
},
{
name:'KABAB TABEIE',
img: "https://www.aashpazi.com/dishes/recipes/kababtabeiimg.png",
servingSize: '168g',
ingredient: '1/2 Lb (226g) Ground Beef, 2 Cups Rice, 1 Tsp Zafran (Saffron), 1 Small Onion, Salt, Black Pepper, Persian Spice Mix (Advieh), Turmeric, 4 Tbsp Vegetable Oil, 3 Small Tomatoes, Pepper',
cookTime: '30 minuts',
preparation: ['1- Soak the rice with 1 tbs salt for an hour.',
'2- Soak the zafran (saffron) in boiling water for 30 minutes.',
' 3- Grate the onion. 4- Boil 5 cups of water.'],
direction:'1- Mix the grated onion with the ground beef in a big bowl. 2- Add salt, black pepper powder, Persian spice mix (Advieh) and turmeric (as preferred) to the bowl and mix thoroughly until well mixed. 3- Pour vegetable oil in a frying pan. 4- Spread and flatten the beef mixture across the pan and place the pan on stove over medium heat. 5- Simmer the soaked rice until tender. 6- Drain the rice in a colander and put it in a pot, add 2 tbsp oil to the pot, cover the pot with a napkin and put the lid on, cook for 20 minutes. 7- Go back to the beef pan, allow the beef to become somewhat hardened, divide the flattened beef in 2 inches rows using a silicone turner. 8- Allow the beef to fry on one side and flip them over to fry the other side. 9- Back to the rice pot, remove the napkin, pour in the zafran (saffron) mixture and cover the pot with the lid, continue cooking for 10 more minutes. 10- Fry few tomatoes and peppers in a pan as you wish to have side dish.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 8,
},
{
name:'SPINACH & PRUNE',
img: "https://www.aashpazi.com/dishes/recipes/spinach-prune-stew-photo.png",
servingSize: '100g',
ingredient: '20 oz (567g) Spinach, 4.5 oz (127g) Dried Prunes, 8 oz (227g) Stew Beef, 1 Onion, 2 Tbsp Vegetable Oil, 2 Tbsp Vegetable Oil, Turmeric, Salt, Crushed Red Pepper',
cookTime: '60 minuts',
preparation: '1- Dice the onion. 2- Mince the spinach.',
direction:'1- Fry the dice onion with vegetable oil until golden.2- Stir in turmeric and beef. 3- Fry the beef until becomes brown over medium-low heat. (10 Min) 4- Pour in enough water to cover the beef, Cover the pot and over medium-low heat simmer for an hour. 5- Fry the minced spinach with vegetable oil for 5 minutes. 6- Stir in the fried spinach to the beef stew. 7- Garnish with red pepper and salt as you prefer.8- Stir in dried prunes. 9- Cover the pot with a lid (leave a crack open for steam to evaporate). 10- Over medium-low heat, boil for 30 minutes.',
createdAt: new Date(),
updatedAt: new Date(),
userId: 9,
},
{
    name:'PLUMS OR PRUNES STEW',
    img: "https://www.aashpazi.com/dishes/recipes/plums-stew-photo.png",
    servingSize: '4',
    ingredient: '1.5 lb (680g) Chicken Thighs, 1 lb (454g) Plums, 1/4 Cup Pomegranate Paste, 1 Onion, Turmeric, Salt, 2 Tbsp Vegetable Oil',
    cookTime: '60 minuts',
    preparation: '1- Slice the onions and plums.',
    direction:'1- Fry the onions in vegetable oil. 2- Stir in turmeric, chicken thighs and salt. 3- Fry the chicken thighs (both sides). 4- Add water, cover the pot and simmer for 20 minutes over medium heat. 5- Stir in pomegranate paste and the plums. 6- Cover the pot and continues simmering for another 20 minutes',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 10,
    },
],
{}
);
},
down: async (queryInterface, Sequelize) => {
/**
* Add commands to revert seed here.
*
* Example:
* await queryInterface.bulkDelete('People', null, {});
*/
},
};

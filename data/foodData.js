
import { LogoName } from './constants';

class Food  {
    constructor(name, price, description, ingredients, nutrition, logos, imagePath){
        this.name = name; 
        this.price = price; 
        this.description = description;
        this.ingredients = ingredients;
        this.nutrition = nutrition;
        this.logos = logos;
        this.imagePath = imagePath;
    }

}

const pizza = new Food(
    'Pizza',
    12.99,
    'Delicious Italian pizza with pepperoni and cheese',
    { pepperoni: 150, cheese: 200, dough: 300 },
    { calories: 1200, glucides: 45, proteines: 60, lipides: 420 },
    [LogoName.Logo1, LogoName.Logo2, LogoName.Logo3, LogoName.Logo5, LogoName.Logo6],
    require('../assets/foodImages/testImg1.jpg')
);

const salad = new Food(
    'Salad',
    8.99,
    'Fresh garden salad with mixed greens and vinaigrette',
    { lettuce: 100, tomatoes: 50, cucumbers: 30 },
    { calories: 300, glucides: 15, proteines: 10, lipides: 420 },
    [LogoName.Logo1, LogoName.Logo3, LogoName.Logo5],
    require('../assets/foodImages/testImg1.jpg')
);

const burger = new Food(
    'Burger',
    9.99,
    'Juicy beef burger with lettuce, tomato, and cheese',
    { beef: 200, cheese: 50, lettuce: 30 },
    { calories: 800, glucides: 40, proteines: 45, lipides: 420 },
    [LogoName.Logo6],
    require('../assets/foodImages/testImg1.jpg')
);

const pasta = new Food(
    'Pasta',
    11.49,
    'Classic spaghetti with marinara sauce and meatballs',
    { spaghetti: 300, marinara_sauce: 150, meatballs: 200 },
    { calories: 900, glucides: 25, proteines: 40, lipides: 420 },
    [LogoName.Logo1, LogoName.Logo3, LogoName.Logo5, LogoName.Logo6],
    require('../assets/foodImages/testImg1.jpg')
);

const sushi = new Food(
    'Sushi',
    14.99,
    'Assorted sushi rolls with fresh fish and seaweed',
    { fish: 250, rice: 200, seaweed: 50 },
    { calories: 600, glucides: 10, proteines: 30, lipides: 420 },
    [LogoName.Logo2, LogoName.Logo4, LogoName.Logo6],
    require('../assets/foodImages/testImg1.jpg')
);

const steak = new Food(
    'Steak',
    19.99,
    'Grilled sirloin steak with mashed potatoes and vegetables',
    { steak: 300, potatoes: 150, vegetables: 100 },
    { calories: 1200, glucides: 60, proteines: 50, lipides: 420 },
    [LogoName.Logo3, LogoName.Logo4],
    require('../assets/foodImages/testImg1.jpg')
);

const smoothie = new Food(
    'Smoothie',
    6.49,
    'Refreshing fruit smoothie with bananas, strawberries, and yogurt',
    { banana: 100, strawberries: 80, yogurt: 50 },
    { calories: 400, glucides: 5, proteines: 15, lipides: 420 },
    [LogoName.Logo1, LogoName.Logo2, LogoName.Logo3, LogoName.Logo4, LogoName.Logo5, LogoName.Logo6],
    require('../assets/foodImages/testImg1.jpg')
);

const tacos = new Food(
    'Tacos',
    10.99,
    'Authentic Mexican tacos with seasoned beef, salsa, and guacamole',
    { beef: 200, salsa: 50, guacamole: 30 },
    { calories: 700, glucides: 35, proteines: 25, lipides: 420 },
    [LogoName.Logo1, LogoName.Logo3, LogoName.Logo4, LogoName.Logo5],
    require('../assets/foodImages/testImg1.jpg')
);
  const foodArray = [pizza, salad, burger, pasta, sushi, steak, smoothie, tacos];

  export {foodArray};


  
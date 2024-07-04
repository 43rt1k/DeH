
class Food  {
    constructor(name, price, description, ingredients, nutrition, logos, image){
        this.name = name; 
        this.price = price; 
        this.description = description;
        this.ingredients = ingredients;
        this.nutrition = nutrition;
        this.logos = logos;
        this.image = image;

    }

}

const pizza = new Food(
    'Pizza',
    12.99,
    'Delicious Italian pizza with pepperoni and cheese',
    { pepperoni: 150, cheese: 200, dough: 300 },
    { calories: 1200, fat: 45, protein: 60 },
    [1, 0, 1, 0, 0, 1],
    'pizza.jpg'
  );

  const salad = new Food(
    'Salad',
    8.99,
    'Fresh garden salad with mixed greens and vinaigrette',
    { lettuce: 100, tomatoes: 50, cucumbers: 30 },
    { calories: 300, fat: 15, protein: 10 },
    [0, 1, 0, 0, 1, 0],
    'salad.jpg'
  );

  const burger = new Food(
    'Burger',
    9.99,
    'Juicy beef burger with lettuce, tomato, and cheese',
    { beef: 200, cheese: 50, lettuce: 30 },
    { calories: 800, fat: 40, protein: 45 },
    [1, 1, 0, 0, 1, 0],
    'burger.jpg'
  );

  const pasta = new Food(
    'Pasta',
    11.49,
    'Classic spaghetti with marinara sauce and meatballs',
    { spaghetti: 300, marinara_sauce: 150, meatballs: 200 },
    { calories: 900, fat: 25, protein: 40 },
    [1, 0, 1, 0, 0, 1],
    'pasta.jpg'
  );

  const sushi = new Food(
    'Sushi',
    14.99,
    'Assorted sushi rolls with fresh fish and seaweed',
    { fish: 250, rice: 200, seaweed: 50 },
    { calories: 600, fat: 10, protein: 30 },
    [0, 1, 0, 1, 0, 1],
    'sushi.jpg'
  );

  const steak = new Food(
    'Steak',
    19.99,
    'Grilled sirloin steak with mashed potatoes and vegetables',
    { steak: 300, potatoes: 150, vegetables: 100 },
    { calories: 1200, fat: 60, protein: 50 },
    [1, 0, 1, 0, 1, 0],
    'steak.jpg'
  );

  const smoothie = new Food(
    'Smoothie',
    6.49,
    'Refreshing fruit smoothie with bananas, strawberries, and yogurt',
    { banana: 100, strawberries: 80, yogurt: 50 },
    { calories: 400, fat: 5, protein: 15 },
    [0, 1, 0, 0, 1, 0],
    'smoothie.jpg'
  );

  const tacos = new Food(
    'Tacos',
    10.99,
    'Authentic Mexican tacos with seasoned beef, salsa, and guacamole',
    { beef: 200, salsa: 50, guacamole: 30 },
    { calories: 700, fat: 35, protein: 25 },
    [1, 0, 1, 0, 0, 1],
    'tacos.jpg'
  );

  const foodArray = [pizza, salad, burger, pasta, sushi, steak, smoothie, tacos];

  export {foodArray};

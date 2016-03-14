Meteor.startup(function () {
    Bakery.remove({});
    Menu.remove({});
    Reviews.remove({});
    if (Bakery.find().count() === 0) {
        var items = [
            {
                name: "Sesame Bagel",
                calories: 230,
                fat: 3,
                carb: 25,
                protein: 5,
                descrip: 'Fresh bagels made daily for optimal satisfaction',
                img: "/img/bagels.jpg"
            },
            {
                name: "Whole Wheat Bread",
                calories: 250,
                fat: 6,
                carb: 33,
                protein: 4,
                descrip: 'Made with 100% Gluten free flour',
                img: "/img/wholewheat.jpg"
            },
            {
                name: "Acai Bowl",
                calories: 450,
                fat: 20,
                carb: 73,
                protein: 9,
                descrip: 'Power-packed acai bowl with refreshing fruits, granola, and nuts, perfect for starting off the day',
                img: "/img/acai.png"
            },
            {
                name: "Chocolate Pumpkin Oat Bran Muffin",
                calories: 240,
                fat: 9,
                carb: 38,
                protein: 6,
                descrip: 'Sweet, fluffy muffins that pair well with a warm tea or coffee in the morning',
                img: "/img/muffins.jpg"
            },
            {
                name: "Lemon Lavender Half Pound Cake",
                calories: 200,
                fat: 10,
                carb: 29,
                protein: 5,
                descrip: 'Light, elegant slices of cake with an aromatic and citrus flavor',
                img: "/img/pound.jpg"
            },
            {
                name: "Chocolate Tarts",
                calories: 200,
                fat: 6,
                carb: 15,
                protein: 2,
                descrip: 'Creamy, chocolate filling inside of a crispy gluten free pastry bowl',
                img: "/img/tart.jpg"
            },
            {
                name: "Tricolor Mocha Latte",
                calories: 257,
                fat: 5,
                carb: 34,
                protein: 3,
                descrip: 'A refreshing blast of caffeine at any time of the day',
                img: "/img/latte.jpg"
            },

        ];
        _.each(items, function (item) {
            Bakery.insert(item);
        });
    }

        if (Menu.find().count() === 0) {
            items = [
                {
                    name : "BLT Chopped Salad",
                    calories:500,
                    fat:8,
                    carb:25,
                    protein:2,
                    descrip: 'Your favorite Bacon Lettuce Tomato sandwich, but healthier.',
                    img:"/img/bltsalad.jpg",
                    type:'salad'
                },
                {
                    name : "Kale Salad with Bacon and Parmesan",
                    calories:430,
                    fat:5,
                    carb:19,
                    protein:1,
                    descrip: 'Superfood kale mixed with crunchy bacon and a pinch of parmesan',
                    img:"/img/kalesalad.jpg",
                    type:'salad'

                },
                {
                    name : "Summer Salad",
                    calories:420,
                    fat:2,
                    carb:31,
                    protein:1,
                    descrip: 'A unique, refreshing twist on a fruit salad',
                    img:"/img/summersalad.jpg",
                    type:'salad'
                },
                {
                    name : "Burrata, Tomato, and Peach Salad",
                    calories:390,
                    fat:4,
                    carb:26,
                    protein:1,
                    descrip: 'A surprisingly delicious combination of sweet and tangy ',
                    img:"/img/tomatosalad.jpg",
                    type:'salad'
                },
                {
                    name : "Crab Cakes",
                    calories:550,
                    fat:7,
                    carb:35,
                    protein:16,
                    descrip: 'Flavorful dish made of fresh crab perfected with herbs and spices',
                    img:"/img/crabcakes.jpg",
                    type:'entree'
                },
                {
                    name : "Mac and Cheese",
                    calories:490,
                    fat:15,
                    carb:30,
                    protein:5,
                    descrip: 'Classic cheesy, warm, and gooey macaroni served with gluten free bread sticks',
                    img:"/img/maccheese.jpg",
                    type:'entree'
                },
                {
                    name : "Pork Loin with Garlic and Rosemary",
                    calories:660,
                    fat:5,
                    carb:20,
                    protein:19,
                    descrip: 'Lean cut of free range chicken with crisp asparagus',
                    img:"/img/porkloin.jpg",
                    type:'entree'
                },
                {
                    name : "Steak with Vegetable Salad",
                    calories:690,
                    fat:9,
                    carb:24,
                    protein:20,
                    descrip: 'Tender beef steak paired with a balanced, locally-picked vegetable salad',
                    img:"/img/steak.jpg",
                    type:'entree'
                },
                {
                    name : "Lasagna-Style Pasta Bake",
                    calories:500,
                    fat:13,
                    carb:38,
                    protein:5,
                    descrip: 'Al Dente pasta packed with juicy tomato sauce and mozzarella ',
                    img:"/img/pasta.jpg",
                    type:'entree'
                },
                {
                    name : "Caprese Panini",
                    calories:550,
                    fat:10,
                    carb:29,
                    protein:15,
                    descrip: 'Gluten free bread pressed to a crisp with the classic Italian combination',
                    img:"/img/capresepanini.jpg",
                    type:'entree'
                },
                {
                    name : "Mini Pizzas",
                    calories:300,
                    fat:7,
                    carb:27,
                    protein:6,
                    descrip: 'Classic made with in-house baked English muffins, smokey pepperoni, and mozzarella cheese',
                    img:"/img/minipizza.jpg",
                    type:'kids'
                },
                {
                    name : "Pretzel-Crusted Chicken Fingers",
                    calories:500,
                    fat:13,
                    carb:38,
                    protein:5,
                    descrip: 'Juicy, tender chicken with an extra crunchy pretzel based exterior',
                    img:"/img/chickenfingers.jpg",
                    type:'kids'
                },
                {
                    name : "Turkey Lettuce Wraps",
                    calories:290,
                    fat:4,
                    carb:29,
                    protein:10,
                    descrip: 'Delicious, healthy, and easy to eat',
                    img:"/img/wraps.jpg",
                    type:'kids'
                },
            ];
            _.each(items, function (item) {
                Menu.insert(item);
            });
    }
    if (Reviews.find().count() === 0) {
        items = [
            {
                name : "Wendy U.",
                text: "The food was delicious! I got the chicken dish and my son got mac and cheese. Next time we’ll bring the rest of the family!"
            },
            {
                name : "Justin K.",
                text: "the acai bowl was surprisingly filling! It’s kind of like frozen yogurt with a healthy twist. 5/5 would recommend"

            },
            {
                name: "Matthew M.",
                text:"Came here with my friend and tried the peach and tomato salad. Definitely needs some getting used to for me but my friend liked it. I’ll have to come again and try out some of the bakery goods"
            },
            {
                name: "James W.",
                text:"Dropped by for my lunch break and it was packed! Almost didn’t make it back on time. Had to Grab a panini and go. Aside from the time, the gluten free bread was a plus."
            }

        ];
        _.each(items, function (item) {
            Reviews.insert(item);
        });
    }
});
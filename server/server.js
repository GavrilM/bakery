Meteor.startup(function () {
    if (Bakery.find().count() === 0) {
        var items = [
            {
                name: "Sesame Bagel",
                calories: 230,
                fat: 3,
                carb: 25,
                protein: 5,
                img: "/img/"
            },
            {
                name: "Peanut Butter Cookies",
                calories: 250,
                fat: 6,
                carb: 33,
                protein: 4,
                img: "/img/"
            },
            {
                name: "Peanut Butter Cookies",
                calories: 100,
                fat: 6,
                carb: 10,
                protein: 2,
                img: "/img/"
            },
            {
                name: "Double Dark Chocolate Cookies",
                calories: 130,
                fat: 6,
                carb: 11,
                protein: 1,
                img: "/img/"
            },
            {
                name: "Rich Chocolate Fudge Cake",
                calories: 250,
                fat: 4,
                carb: 26,
                protein: 4,
                img: "/img/"
            },
            {
                name: "Pecan Coffee Cake",
                calories: 230,
                fat: 7,
                carb: 29,
                protein: 5,
                img: "/img/"
            },
            {
                name: "Classic New York Cheesecake",
                calories: 240,
                fat: 6,
                carb: 24,
                protein: 7,
                img: "/img/"
            },
            {
                name: "Chocolate Dipped Coconut Macaroons",
                calories: 50,
                fat: 1,
                carb: 8,
                protein: 2,
                img: "/img/"
            },
            {
                name: "Cinnamon Rolls",
                calories: 200,
                fat: 6,
                carb: 15,
                protein: 2,
                img: "/img/"
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
                    img:"/img/bltsalad.jpg"
                },
                {
                    name : "Kale Salad with Bacon and Parmesan",
                    calories:430,
                    fat:5,
                    carb:19,
                    protein:1,
                    img:"/img/kalesalad.jpg"
                },
                {
                    name : "Summer Salad",
                    calories:420,
                    fat:2,
                    carb:31,
                    protein:1,
                    img:"/img/summersalad.jpg"
                },
                {
                    name : "Burrata, Tomato, and Peach Salad",
                    calories:390,
                    fat:4,
                    carb:26,
                    protein:1,
                    img:"/img/tomatosalad.jpg"
                },
                {
                    name : "Crab Cakes",
                    calories:550,
                    fat:7,
                    carb:35,
                    protein:16,
                    img:"/img/crabcakes.jpg"
                },
                {
                    name : "Mac and Cheese",
                    calories:490,
                    fat:15,
                    carb:30,
                    protein:5,
                    img:"/img/maccheese.jpg"
                },
                {
                    name : "Classic New York Cheesecake",
                    calories:240,
                    fat:6,
                    carb:24,
                    protein:7,
                    img:"/img/"
                },
                {
                    name : "Chocolate Dipped Coconut Macaroons",
                    calories:50,
                    fat:1,
                    carb:8,
                    protein:2,
                    img:"/img/"
                },
                {
                    name : "Cinnamon Rolls",
                    calories:200,
                    fat:6,
                    carb:15,
                    protein:2,
                    img:"/img/"
                }
            ];
            _.each(items, function (item) {
                Menu.insert(item);
            });
    }
});
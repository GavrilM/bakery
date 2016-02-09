Meteor.startup(function () {
    if (Bakery.find().count() === 0) {
        var items = [
            {
                name : "Peanut Butter Cookies",
                calories:100,
                fat:6,
                carb:10,
                protein:2
            },
            {
                name : "Double Dark Chocolate Cookies",
                calories:130,
                fat:6,
                carb:11,
                protein:1
            },
            {
                name : "Rich Chocolate Fudge Cake",
                calories:250,
                fat:4,
                carb:26,
                protein:4
            },
            {
                name : "Pecan Coffee Cake",
                calories:230,
                fat:7,
                carb:29,
                protein:5
            },
            {
                name : "Classic New York Cheesecake",
                calories:240,
                fat:6,
                carb:24,
                protein:7
            },
            {
                name : "Chocolate Dipped Coconut Macaroons",
                calories:50,
                fat:1,
                carb:8,
                protein:2
            },
            {
                name : "Cinnamon Rolls",
                calories:200,
                fat:6,
                carb:15,
                protein:2
            },
        ];
        _.each(names, function (name) {
            Players.insert();
        });
    }
});
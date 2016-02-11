Template.body.onCreated(function(){
    this.tab = new ReactiveVar("aboutus");
    window.popup = new ReactiveVar("confirm");
    this.orders = new Mongo.Collection();
    this.orders.insert({
        name : "",
        amount: 0
    });
    Session.set("message", "Submitted! Come by in about 10 minutes and we'll have your order ready!")
});

Template.body.helpers({
    tab: function(){
        return Template.instance().tab.get();
    },
    gettab: function(){
        if($("#choosetop").prop("checked")){
            return "Bakery"
        }
        else if($("#choosebottom").prop("checked")){
            return "Restaurant";
        }
        else{
            return "Home";
        }
    },
    popup : function(){
        return window.popup.get();
    },
    bread: function(){
        return Bakery.find();
    },
    getdata : function(){
        console.log(Session.get("data"));
        return Session.get("data");
    }
});

Template.salads.helpers({
    salads : function(){
        return Menu.find({type: "salad"});
    },
});

Template.entrees.helpers({
    entrees : function(){
        return Menu.find({type: "entree"});
    },
});

Template.kids.helpers({
    kids : function(){
        return Menu.find({type: "kids"});
    }
});




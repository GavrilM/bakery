Template.body.onCreated(function(){
    this.tab = new ReactiveVar("aboutus");
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
    message : function(){
        return Session.get("message");
    },
    bread: function(){
        return Bakery.find();
    }
});
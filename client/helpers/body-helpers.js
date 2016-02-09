Template.body.onCreated(function(){
    this.tab = new ReactiveVar("aboutus")
});

Template.body.helpers({
    tab: function(){
        return Template.instance().tab.get();
    }
});
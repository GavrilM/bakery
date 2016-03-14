Template.body.events({
    "click #toggler": function(e){
        Template.instance().side.set(0);
        var navs = $(".circle nav");
        if(!$("#choosemid").prop('checked')){
            e.preventDefault();
            centercircle($("#circle"));
            $("#choosemid").trigger("click");

            setTimeout(function(){$("#rewards").removeClass("hidden")},300);
            return;
        }

        processnavs( $(".circle nav label"));
    },
    "click #resizer": function(e){
        var icons = $(".circle label");
        for (var j = 0; j < icons.length; j++) {
            $(icons[j]).removeClass("viewable");
            $(icons[j]).addClass("hidden");
        }
        setTimeout(function(){
            $("#closer").removeClass("hidden");
            $("#center-content").removeClass("hidden");
        }, 300);

        centercircle($("#circle"));
    },
    "click #closer": function(e){
        var icons = $(".circle label");
        for (var j = 0; j < icons.length; j++) {
            $(icons[j]).addClass("viewable");
            $(icons[j]).removeClass("hidden");
        }
        $("#resizer").prop('checked' , false);
        $("#closer").addClass("hidden");
        $("#center-content").addClass("hidden");
        $("#body-cover").trigger("click");
        resetcircle($("#circle"));
    },
    "click .circle label": function(e){
        var target = $(e.target);

        if(target.prop('tagName') != "LABEL"){
            target = target.parent();
        }

        var circle = $("#circle");
        if(target.attr('for') == "choosebottom"){
            circle.addClass('navonbottom');
            circle.removeClass('navontop');
            $($("#lower label")[target.data('template')-1]).trigger("click");
            Template.instance().side.set(-1);
        }
        else if(target.attr('for') == "choosetop"){
            circle.addClass('navontop');
            circle.removeClass('navonbottom');
            $($("#upper label")[target.data('template')-1]).trigger("click");
            Template.instance().side.set( 1);
        }
    },
    "click .switchmenu": function(e){
        var target = $(e.target);
        if(target.attr('for') == "choosebottom"){
            $("#restslide").trigger("click");
            $("#bottomview3").trigger("click");
        }
        else if(target.attr('for') == "choosetop"){
            $("#bakeslide").trigger("click");
            $("#topview3").trigger("click");
        }
    },
    "click #topside": function(e){
        if($("#resizer").prop('checked')){
            $("#closer").trigger('click');
        }
        if(!$("#toggler").prop("checked")){
            $("#clicker").trigger("click");

            processnavs($(".circle nav label"));
        }



        Template.instance().side.set( 1);
        $("#bakeslide").trigger("click");


    },
    "click #bottomside": function(e){
        if($("#resizer").prop('checked')){
            $("#closer").trigger('click');
        }
        if(!$("#toggler").prop("checked")){
            $("#clicker").trigger("click");

            processnavs($(".circle nav label"));
        }
        $("#restslide").trigger("click");


        Template.instance().side.set(-1);
    },
    "click #body-cover" : function(e){
        $('#popin').removeClass("seeable");
        $('#body-cover').removeClass("covering");
    },
    "submit #order" : function(e,t){
        e.preventDefault();
        var form = e.target;
        var elements = form.elements;
        window.popup.set("confirm");
        $('#popin').addClass("seeable");
        $('#body-cover').addClass("covering");
        for( var i = 0; i< elements.length; i++){
            elements[i].value = "";
        }
    },

    "click #menu-rest button" : function(e,t){
        window.popup.set($(e.target).data('template'));

        $('#popin').addClass("seeable");
        $('#body-cover').addClass("covering");
        setTimeout(function(){
            $("#closer").removeClass("hidden");
        }, 300);
    },
    "click .nav-about" :function(){
        Template.instance().tab.set("aboutus");
    },
    "click .nav-why" :function(){
        Template.instance().tab.set("glutenfree");
    },
    "click .nav-contact" :function(){
        Template.instance().tab.set("contact");
    },
    "click .nav-reviews" :function(){
        Template.instance().tab.set("reviews");
    },
    "click .nav-rewards" :function(){
        Template.instance().tab.set("rewards");
    },
    "click #additem" : function(e,t){
        e.preventDefault();
        window.orders.insert({
            name : "",
            amount: 0
        });
    },
    "click #ordersubmit" : function(){
        e.preventDefault();
        $("#order").submit();
    },
    "submit #reserve" : function(e,t){
        e.preventDefault();
        var form = e.target;
        var elements = form.elements;
        window.popup.set("confirm2");
        $('#popin').addClass("seeable");
        $('#body-cover').addClass("covering");
        for( var i = 0; i< elements.length; i++){
            elements[i].value = "";
        }
    },


});

function centercircle(circle){
    if($("#choosebottom").prop('checked')){
        circle.removeClass('navonbottom');
    }
    else if($("#choosetop").prop('checked')){
        circle.removeClass('navontop');
    }
}

function resetcircle(circle){
    if($("#choosebottom").prop('checked')){
        circle.addClass('navonbottom');
    }
    else if($("#choosetop").prop('checked')){
        circle.addClass('navontop');
    }
}

function processnavs(navs){
    if ($("#toggler").prop('checked')) {

            for (var i = 0; i < navs.length; i++) {
                $(navs[i]).removeClass("hidden");
                $(navs[i]).addClass("animate-circle");
            }

    } else  {

        for (var j = 0; j < navs.length; j++) {
            $(navs[j]).addClass("hidden");
            $(navs[j]).removeClass("animate-circle");

        }

    }
}


Template.menuitem.events({
    "click .menuitem"  : function(e,t){
        window.popup.set('itemdetails');

        Session.set('data', this );
        $('#popin').addClass("seeable");
        $('#body-cover').addClass("covering");

        setTimeout(function(){
            $("#closer").removeClass("hidden");
        }, 300);
    },

});

Template.itemdetails.events({
    "click .backbutton" : function(){

        if(this.type){
            if(this.type == 'salad'){
                window.popup.set('salads');
            }
            if(this.type == 'entree'){
                window.popup.set('entrees');
            }
            if(this.type == 'kids'){
                window.popup.set('kids');
            }
        }
        else{
            $('#body-cover').trigger("click");
            $("#closer").addClass("hidden");
        }
    }
});

Template.item.events({
   "click .lnr-cross" : function(){
        window.orders.remove({_id: this._id});
   }
});

Template.confirm.events({
    "click button" : function(){
        $('#body-cover').trigger("click");
    }
});

Template.confirm2.events({
    "click button" : function(){
        $('#body-cover').trigger("click");
    }
})
Template.body.events({
    "click #toggler": function(e){
        var navs = $(".circle nav");
        if(!$("#choosemid").prop('checked')){
            e.preventDefault();
            centercircle($("#circle"));
            $("#choosemid").trigger("click");

            return;
        }

        processnavs(navs);
    },
    "click #resizer": function(e){
        var icons = $(".circle .lnr");
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
        var icons = $(".circle .lnr");
        for (var j = 0; j < icons.length; j++) {
            $(icons[j]).addClass("viewable");
            $(icons[j]).removeClass("hidden");
        }
        $("#resizer").prop('checked' , false);
        $("#closer").addClass("hidden");
        $("#center-content").addClass("hidden");
        resetcircle($("#circle"));
    },
    "click .circle label": function(e){
        var target = $(e.target);
        console.log(target);
        if(target.prop('tagName') != "LABEL"){
            target = target.parent();
        }
        console.log(target);
        var circle = $("#circle");
        if(target.attr('for') == "choosebottom"){
            circle.addClass('navonbottom');
            circle.removeClass('navontop');
            $($("#lower label")[target.data('template')-1]).trigger("click");
        }
        else if(target.attr('for') == "choosetop"){
            circle.addClass('navontop');
            circle.removeClass('navonbottom');
            $($("#upper label")[target.data('template')-1]).trigger("click");
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
        if(!$("#toggler").prop("checked")){
            $("#clicker").trigger("click");
        }
        processnavs($(".circle nav"));
        $("#bakeslide").trigger("click");
    },
    "click #bottomside": function(e){
        if(!$("#toggler").prop("checked")){
            $("#clicker").trigger("click");
        }
        processnavs($(".circle nav"));
        $("#restslide").trigger("click");
    },
    "click #body-cover" : function(e){
        $('#popin').removeClass("seeable");
        $('#body-cover').removeClass("covering");
    },
    "submit #orderform" : function(e,t){
        var form = e.target;
        var elements = form.elements;
        $('#popin').addClass("seeable");
        $('#body-cover').addClass("covering");
        for( var i = 0; i< elements.length; i++){
            elements[i].value = "";
        }
    }

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
                $(navs[i]).addClass("viewable");

            }

    } else  {

        for (var j = 0; j < navs.length; j++) {
            $(navs[j]).removeClass("viewable");

        }

    }
}
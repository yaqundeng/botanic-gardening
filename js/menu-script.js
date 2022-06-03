$('#nav>li').hover(function(){
    $(this).closest('li').find('>ul').css({'opacity':0,'margin-top':15}).show().animate({'margin-top':0,'opacity':1, 'text-align':screenLeft},300);
},function(){
    $(this).closest('li').find('>ul').fadeOut(200,function(){
         $(this).hide();   
    });
});
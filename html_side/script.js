$(document).on("click",".ns", function(){
  switch_splash_views($(this));
});

function switch_splash_views(clicked_element){  
  var others = clicked_element.siblings(".search-choice");

  // Resetting the height of both elements
  others.css('height', '');
  clicked_element.css('height', '');
  
  others.addClass("ns");
  others.removeClass("s");
  clicked_element.removeClass("ns");
  clicked_element.addClass("s");
  if (clicked_element.hasClass("emoji-choice")){
    $(".emoji-display").fadeIn(350);
    $(".search-seed-display").fadeOut(350);
  }
  else {
    $(".emoji-display").fadeOut(350);
    $(".search-seed-display").fadeIn(350);
  }
};

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  
// Hide everything related to dispaying the seed song 
  $(".search-seed-display").hide();
});

var search_suggestions_displayed = false;

$(".input-choice").on('input', function(){
  if ($(this).val() == ""){
    $(".seed-song-choice").css('height', '100px');
  }
  else {
    $(".seed-song-choice").css('height', '400px');
    if (search_suggestions_displayed == false){
      display_search_suggestions();
    }
  }
});

function display_search_suggestions(){
  $(".search-seed-display > .input-group").after("");
}

// Show or hide the play control
$(document).on("mouseenter", ".player-left", function(){
  var player_control = $(this).children(".control");
  if (!(player_control.is(":visible"))){
    player_control.show();
  }
});
$(document).on("mouseleave", ".player-left", function(){
  var player_control = $(this).children(".control");
  if (player_control.is(":visible")){
    player_control.hide();
  }
});

// Show or hide the play/pause button
$(document).on("click", ".control-pause", function(){
  $(this).parent().siblings(".control-audio").trigger('pause');
  $(this).siblings(".control-play").show();
  $(this).hide();
});
$(document).on("click", ".control-back", function(){
  $(this).parent().siblings(".control-audio").prop('currentTime', 0);
});
$(document).on("click", ".control-play", function(){
  $(this).parent().siblings(".control-audio").trigger('play');
  $(this).siblings(".control-pause").show();
  $(this).hide();
});
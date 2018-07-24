"use strict";

var html_dictionary = {
  "Getintouch" : "snippets/getintouch.html",
  "Services" : "snippets/services.html",
  "Aboutus" : "snippets/aboutus.html",
  "RENOVATION" : "snippets/home.html"
};


$(document).ready(function(){
  $('.sidenav').sidenav();  // materialize code
  $(".nav-item a").addClass("nav_button") // styling all nav_buttons
  $(".brand-logo").click(function(){
    var clicked = $(this).html().replace(/\s/g, '');
    $(".body").load(html_dictionary[clicked]) ;
  });
  $(".nav-item a").click(function(){
    var clicked = $(this).html().replace(/\s/g, '');
    $(".body").load(html_dictionary[clicked]) ;//adding html_button
  });
  $(".card-action a").click(function(){
    var clicked = $(this).parent().parent().find(".card-title").text().replace(/\s/g, '');
    $(".body").load(html_dictionary[clicked]);//adding html_button
  });
})

$(document).on('click', '.card-action a', function(){
  var clicked = $(this).parent().parent().find(".card-title").text().replace(/\s/g, '');
  $(".body").load(html_dictionary[clicked]);//adding html_butto

});

function initMap() {
  // The location of Uluru
  var toronto = {lat: 43.653226, lng: -79.4028938};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: toronto});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: toronto, map: map});
};

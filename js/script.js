"use strict";

var html_dictionary = {
  "Getintouch" : "snippets/getintouch.html",
  "Services" : "snippets/services.html",
  "About" : "snippets/about.html",
  "Renovation" : "snippets/home.html"
};


$(document).ready(function(){
  $('.sidenav').sidenav();  // materialize code
  $(".nav-item a").addClass("nav_button") // styling all nav_buttons
  $(".brand-logo").click(function(){
    var clicked = $(this).html().replace(/\s/g, '');
    console.log(clicked)
    $(".body").load(html_dictionary[clicked]) ;
  });
  $(".nav-item a").click(function(){
    var clicked = $(this).html().replace(/\s/g, '');
    $(".body").load(html_dictionary[clicked]) ;//adding html_butto
  });
})

/*The slide codes*/

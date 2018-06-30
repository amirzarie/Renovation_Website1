"use strict";

var html_dictionary = {
  "Getintouch" : "snippets/getintouch.html",
  "Services" : "snippets/services.html",
  "About" : "snippets/home.html",
};


$(document).ready(function(){
  $('.sidenav').sidenav();  // materialize code
  $(".nav-item a").addClass("nav_button") // styling all nav_buttons
  $(".nav-item a").click(function(){
    var clicked = $(this).html().replace(/\s/g, '')
    console.log(html_dictionary[clicked])
    $(".body").load(html_dictionary[clicked]) ;//adding html_butto
  })
})

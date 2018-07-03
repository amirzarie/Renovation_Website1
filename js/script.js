"use strict";

var html_dictionary = {
  "Getintouch" : "snippets/getintouch.html",
  "Services" : "snippets/services.html",
  "Renovation" : "snippets/home.html"
};

var sendmail = function(){
  $.ajax({
    url: "https://formspree.io/atajadod94@gmail.com",
    method: "POST",
    data: {message: $("#tel").val() + $("#email").val()},
  });
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
    $(".body").load(html_dictionary[clicked]) ;//adding html_butto
  });

  var uluru = {lat: 43.7788 , lng: -79.4834};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
});

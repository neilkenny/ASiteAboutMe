var cvSite = angular.module('cvSite', []);
var rotateValue = 0;
$(document).ready(function ()
{
    $("#firstdown").css("right", "50%");
    var top = $("#title").offset().top;
    $("#firstdown").css("top", (top + 150).toString() + "px");
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function ()
{
    if ($(".navbar").offset().top > 50)
    {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else
    {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    var scrollTop = $(window).scrollTop(),
    elementOffset = $("#title").offset().top,
    distance = (elementOffset - scrollTop);
    if (scrollTop > 475)
    {
        $("#firstdown").css("top", "60px");
        $("#firstdown").css("right", "150px")
    }
    else if (scrollTop < 10) {
        $("#firstdown").css("right", "50%");
        var top = $("#title").offset().top;
        $("#firstdown").css("top", (top + 150).toString() + "px");
    }
    else
    {
        var top = distance + 150;
        if (top > 60)
        {
            $("#firstdown").css("top", (top).toString() + "px");
        }
        var width = screen.width / 2;
        var partTravelled = scrollTop / (screen.height / 2);
        var right = width - (width * partTravelled);
        if (right > 150)
        {
            $("#firstdown").css("right", right.toString() + "px")
        }
        
    }

    if (rotateValue == 0 && $("#firstdown").offset().top > $("#education").offset().top)
    {
        rotateValue = 180;
        $("#firstdown").rotate({ animateTo: rotateValue });
    }
    else if (rotateValue == 180 && $("#firstdown").offset().top < $("#education").offset().top) {
        rotateValue = 0;
        $("#firstdown").rotate({ animateTo: rotateValue });
    }

    var right = $("#firstdown").css("right");



    //if (scrollTop < 50)
    //{
        
    //}
    //else if (distance < screen.height / 2)
    //{
    //    var width = screen.width / 2;
    //    var partTravelled = distance / (screen.height / 2);
    //    var left = width - (width * partTravelled)
    //    if (left < width - (width * 0.20))
    //    {
    //        $("#firstdown").css("left", left);
    //    }
    //    else if (left >= width - (width * 0.20))
    //    {
    //        $("#firstdown").css("position", "fixed");
    //    }

        
    //}
    //else
    //{
        
    //}
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


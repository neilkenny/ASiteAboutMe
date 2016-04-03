cvSite.controller('mainController', function ($scope)
{
    var links = ["#aboutme", '#skills', '#experience', '#education'];
    
    $scope.scrollPage = function ()
    {
        var nextLink = getNextLinkScrollTop();

        var $anchor = $("#firstdown");
        $('html, body').stop().animate({
            scrollTop: nextLink
        }, 2500, 'easeInOutExpo');
        event.preventDefault();
    }

    var getNextLinkScrollTop = function ()
    {
        for(var i=0; i< links.length; i++)
        {
            if (window.pageYOffset < $(links[i]).offset().top)
            {
                return $(links[i]).offset().top;
            }
        }
        return 0;
    }

});

/*==========================================================
    Author      : Honhalo Andrzej
    Date Created: 19 Oct 2017
    Description : Controller to handle Home page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.showDetails = true;
    vm.home = {};
    
    vm.home.mainData = [
        {
            title: "Projects",
            value: "3+",
            theme: "aqua",
            icon: "puzzle-piece"
        },
        {
            title: "Designs",
            value: "2+",
            theme: "red",
            icon: "paint-brush"
        },
        {
            title: "Awards",
            value: "1+",
            theme: "green",
            icon: "trophy"
        },
        {
            title: "Cups of Beer",
            value: "0",
            theme: "yellow",
            icon: "glass"
        },
    ];

    //skills progress bar
    vm.home.skills = [
        {
            title: "Design & Development",
            theme: "aqua",
            percentage:15
        },
        {
            title: "Communication",
            theme: "red",
            percentage: 83
        },
        {
            title: "Planning & Progressing",
            theme: "green",
            percentage: 70
        },
        {
            title: "Problem Solving & Decision Making",
            theme: "yellow",
            percentage: 65
        },
        {
            title: "Loyal & Dedication",
            theme: "aqua",
            percentage: 100
        },
        {
            title: "Fun & Friendly",
            theme: "green",
            percentage: 95
        },
        {
            title: "Lazy & Sleepy",
            theme: "red",
            percentage: 40
        }
    ];

    vm.home.tools = [
       {
           Software: "Mongo DB",
           Percentage: "15",
           theme: "yellow",
           image: "mongodb"
       },
       {
           Software: "Express JS",
           Percentage: "20",
           theme: "aqua",
           image: "express",
           progressbar: "blue"
       },
       {
           Software: "Angular JS",
           Percentage: "35",
           theme: "green",
           image: "angular",
           progressbar: "blue"
       },
       {
           Software: "Node JS",
           Percentage: "25",
           theme: "lime",
           image: "node",
           progressbar: "blue"
       },
       {
           Software: "Javascript",
           Percentage: "15",
           theme: "maroon",
           image: "javascript",
           progressbar: "blue"
       },
       {
           Software: "Type Script",
           Percentage: "15",
           theme: "Gray",
           image: "typescript",
           progressbar: "blue"
       },
       {
           Software: "jQuery & AJAX",
           Percentage: "15",
           theme: "yellow",
           image: "jquery",
           progressbar: "blue"
       },
       {
           Software: "Joomla",
           Percentage: "15",
           theme: "red",
           image: "joomla",
           progressbar: "blue"
       },
        {
            Software: "HTML 5",
            Percentage: "55",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "50",
            theme: "aqua",
            image: "css3",
            progressbar: "blue"
        },
        {
            Software: "SAAS",
            Percentage: "45",
            theme: "green",
            image: "saas-css",
            progressbar: "blue"
        },
        {
            Software: "Bootstrap",
            Percentage: "50",
            theme: "lime",
            image: "bootstrap",
            progressbar: "blue"
        },
        {
            Software: "Photo Shop",
            Percentage: "30",
            theme: "maroon",
            image: "photoshop",
            progressbar: "blue"
        },
        {
            Software: "Corel Draw",
            Percentage: "20",
            theme: "Gray",
            image: "coreldraw",
            progressbar: "blue"
        },
        {
            Software: "Flash",
            Percentage: "20",
            theme: "yellow",
            image: "flash",
            progressbar: "blue"
        }
    ];

    //Tools I use Carousel
    $("#owl-demo").owlCarousel({


        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo").trigger('owl.play', 2000);

    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo").trigger('owl.prev');
    })
    $(".play").click(function () {
        $("#owl-demo").trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        $("#owl-demo").trigger('owl.stop');
    })

    //cartoon photo slider carosusel
    $("#owl-single").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000, //Set AutoPlay to 3 seconds
    });
}]);


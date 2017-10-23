/*==========================================================
    Author      : Honhalo Andrzej
    Date Created: 19 Oct 2017
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "GIT",
            Percentage: "25",
            theme: "yellow",
            image: "git"
        },
        {
            Software: "Express JS",
            Percentage: "15",
            theme: "aqua",
            image: "express"
        },
        {
            Software: "Angular JS",
            Percentage: "35",
            theme: "green",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "31",
            theme: "purple",
            image: "node"
        },
        {
            Software: "Javascript",
            Percentage: "25",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: "Type Script",
            Percentage: "30",
            theme: "teal",
            image: "typescript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "30",
            theme: "yellow",
            image: "jquery"
        },
        {
            Software: "Joomla",
            Percentage: "15",
            theme: "red",
            image: "joomla"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "55",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "53",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "SAAS",
            Percentage: "42",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap",
            Percentage: "45",
            theme: "purple",
            image: "bootstrap"
        },
        {
            Software: "Photo Shop",
            Percentage: "30",
            theme: "maroon",
            image: "Photoshop"
        },
        {
            Software: "Corel Draw",
            Percentage: "25",
            theme: "teal",
            image: "coreldraw"
        },
        {
            Software: "Flash",
            Percentage: "15",
            theme: "yellow",
            image: "flash"
        }
    ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "Java",
            Percentage: "10",
            theme: "aqua",
            image: "java",
        },
        {
            Software: "SQL",
            Percentage: "20",
            theme: "purple",
            image: "sql"
        },
        {
            Software: "Hardware",
            Percentage: "17",
            theme: "maroon",
            image: "hardware"
        },
        {
            Software: "Cloud Computing",
            Percentage: "12",
            theme: "yellow",
            image: "cloud"
        }
    ];
}]);


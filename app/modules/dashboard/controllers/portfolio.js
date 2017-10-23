/*==========================================================
    Author      : Honhalo Andrzej
    Date Created: 19 Oct 2017
    Description : Controller to handle Portfolio page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("PortfolioController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;


    vm.portfolioData = [
       
        {
            image: "air",
            title: "Air-Tech"
        },
        {
            image: "2",
            title: "For Marketing Match"

        }
    ];


    console.log("coming to Portfolio controller");


}]);


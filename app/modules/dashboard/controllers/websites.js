/*==========================================================
    Author      : Honhalo Andrzej
    Date Created: 19 Oct 2017
    Description : Controller to handle Websites page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("WebsitesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [
        {
            title: "KMIT Solutions",
            image: "kmit",
            link:"http://kmitsoltions.com"
        },
        {
            title: "Parallax Site",
            image: "whatsnew",
            link: "http://kmitsoltions.com/whatsnew"
        },
        {
            title: "Palamalai Temple Site",
            image: "palamalai",
            link: "http://palamalairanganathar.org"
        },
        {
            title: "Pastor Jabez Christie",
            image: "jabez",
            link: "http://pastorjabezchristie.org"
        },
        {
            title: "My Personal Site",
            image: "ranjith",
            link: "http://cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "Jayam Real Estates",
            image: "jayam",
            link: "http://jayamrealestates.com"
        },
        {
            title: "Rescue Mission",
            image: "rescue",
            link: "http://rescue.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "The Chennai Opticals",
            image: "chennaiopticals",
            link: "http://thechennaiopticals.com"
        },
        {
            title: "KMIT Solutions",
            image: "mytour",
            link: "http://mytour.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "ME - CSE",
            image: "mecse",
            link: "http://mecse.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "LogicSoft Software Solutions",
            image: "logicsoft",
            link: "http://logicsoft.net.in"
        },
        {
            title: "Lord Jesus Ministries",
            image: "ljm",
            link: "http://ljm.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "Karpagam University Symposium",
            image: "kite",
            link: "http://kite.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "Curriculam Vitae",
            image: "cv",
            link: "http://cv.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "Kode Work",
            image: "kodework",
            link: "http://mockup.cv-andrii-honhalo.firebaseapp.com"
        },
        {
            title: "Garments Today",
            image: "garment",
            link: "http://garmenttoday.in"
        }
    ];
    console.log("coming to Websites controller");

}]);


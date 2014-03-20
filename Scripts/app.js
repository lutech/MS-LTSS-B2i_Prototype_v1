'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.controllers',
        'ngCookies'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        //Client Profile
        $routeProvider.when('/client/profile/details', {templateUrl: 'areas/client/profile/details.html', controller: 'ClientProfileDetailsController'});

        //History
        $routeProvider.when('/b2i/history/list', {templateUrl: 'areas/b2i/history/list.html', controller: 'B2iHistoryListController'});

        //Initial Referral
        $routeProvider.when('/initialreferral/list', {templateUrl: 'areas/b2i/initialreferral/list.html', controller: 'InitialReferralListController'});
        $routeProvider.when('/initialreferral/create', {templateUrl: 'areas/b2i/initialreferral/create.html', controller: 'InitialReferralCreateController'});
        $routeProvider.when('/initialreferral/details', {templateUrl: 'areas/b2i/initialreferral/details.html', controller: 'InitialReferralDetailsController'});
        $routeProvider.when('/initialreferral/edit', {templateUrl: 'areas/b2i/initialreferral/edit.html', controller: 'InitialReferralEditController'});
        $routeProvider.when('/initialreferral/editrepresentatives', {templateUrl: 'areas/b2i/initialreferral/editrepresentatives.html', controller: 'InitialReferralEditRepresentativesController'});
        $routeProvider.when('/initialreferral/editfacility', {templateUrl: 'areas/b2i/initialreferral/editfacility.html', controller: 'InitialReferralEditFacilityController'});
        $routeProvider.when('/initialreferral/editreferral', {templateUrl: 'areas/b2i/initialreferral/editreferral.html', controller: 'InitialReferralEditReferralController'});
        $routeProvider.when('/initialreferral/editlivingarrangement', {templateUrl: 'areas/b2i/initialreferral/editlivingarrangement.html', controller: 'InitialReferralEditLivingArrangementController'});
        $routeProvider.when('/initialreferral/editwaiver', {templateUrl: 'areas/b2i/initialreferral/editwaiver.html', controller: 'InitialReferralEditWaiverController'});

        //B2i Questionnaire
        $routeProvider.when('/questionnaire/list', {templateUrl: 'areas/b2i/questionnaire/list.html', controller: 'QuestionnaireListController'});
        $routeProvider.when('/questionnaire/create', {templateUrl: 'areas/b2i/questionnaire/create.html', controller: 'QuestionnaireCreateController'});
        $routeProvider.when('/questionnaire/details', {templateUrl: 'areas/b2i/questionnaire/details.html', controller: 'QuestionnaireDetailsController'});
        $routeProvider.when('/questionnaire/edit', {templateUrl: 'areas/b2i/questionnaire/edit.html', controller: 'QuestionnaireEditController'});

        //Default View
        $routeProvider.otherwise({redirectTo: '/client/profile/details'});
    }]);

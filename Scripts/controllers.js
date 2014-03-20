'use strict';

/* Controllers */
var isReferralSubmitted = '';

angular.module('myApp.controllers', ['ngCookies']).
    //Client Profile
    controller('ClientProfileDetailsController', [function() {

    }]).

    //B2i Module//

    //History
    controller('B2iHistoryListController', [function() {

    }]).
    //Initial Referral
    controller('InitialReferralListController', [function() {

    }]).
    controller('InitialReferralCreateController', [function() {

    }]).
    controller('InitialReferralDetailsController', ['$scope', function($scope) {
        $scope.saveButton = function() {
            window.location.assign("#/initialreferral/view")
        };
        $scope.submitReferral = function($scope){
            var isReferralSubmitted = true;
            $scope.status = isReferralSubmitted;
            window.location.assign("#/questionnaire/list")
        };
    }]).
    controller('InitialReferralEditController', [function() {

    }]).
    controller('InitialReferralEditRepresentativesController', [function() {

    }]).
    controller('InitialReferralEditFacilityController', [function() {

    }]).
    controller('InitialReferralEditReferralController', [function() {

    }]).
    controller('InitialReferralEditLivingArrangementController', [function() {

    }]).
    controller('InitialReferralEditWaiverController', [function() {

    }]).
    //B2i Questionnaire
    controller('QuestionnaireListController', ['$scope', function($scope) {

    }]).
    controller('QuestionnaireCreateController', ['$scope', function($scope) {

    }]).
    controller('QuestionnaireDetailsController', ['$scope', function($scope) {

    }]).
    controller('QuestionnaireEditController', ['$scope', function($scope) {

    }]);
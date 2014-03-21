'use strict';

/* Controllers */
angular.module("myApp.controllers", []).
    //Client Profile
    controller('ClientProfileDetailsController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).

    //B2i Module//

    //History
    controller('B2iHistoryListController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    //Initial Referral
    controller('InitialReferralListController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralCreateController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
        $scope.saveButton = function() {
            ReferralStatus.setReferralStatus(true)
            window.location.assign("#/initialreferral/details")
        };
    }]).
    controller('InitialReferralDetailsController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
        $scope.submitReferral = function(){
            window.location.assign("#/questionnaire/list")
        };
    }]).
    controller('InitialReferralEditController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralEditRepresentativesController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralEditFacilityController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralEditReferralController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralEditLivingArrangementController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('InitialReferralEditWaiverController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    //B2i Questionnaire
    controller('QuestionnaireListController', ['$scope', 'ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('QuestionnaireCreateController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('QuestionnaireDetailsController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]).
    controller('QuestionnaireEditController', ['$scope','ReferralStatus', function($scope, ReferralStatus) {
        $scope.isReferralSubmitted = ReferralStatus.getReferralStatus();
    }]);
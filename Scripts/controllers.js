'use strict';

/* Controllers */
angular.module("myApp.controllers", []).
    //Client Profile
    controller('ClientProfileDetailsController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).

    //B2i Module//

    //History
    controller('B2iHistoryListController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    //Initial Referral
    controller('InitialReferralListController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralCreateController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
        $scope.saveReferral = function() {
            ReferralStatus.setReferralStatus('inProgress')
            window.location.assign("#/initialreferral/details")
        };
    }]).
    controller('InitialReferralDetailsController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
        $scope.submitReferral = function(){
            ReferralStatus.setReferralStatus('submitted')
            window.location.assign("#/questionnaire/list")
        };
    }]).
    controller('InitialReferralEditController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralEditRepresentativesController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralEditFacilityController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralEditReferralController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralEditLivingArrangementController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('InitialReferralEditWaiverController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    //B2i Questionnaire
    controller('QuestionnaireListController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
    }]).
    controller('QuestionnaireCreateController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
        $scope.saveQuestionnaire = function() {
            QuestionnaireStatus.setQuestionnaireStatus('inProgress')
            window.location.assign("#/questionnaire/details")
        };
    }]).
    controller('QuestionnaireDetailsController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
        $scope.submitQuestionnaire = function() {
            QuestionnaireStatus.setQuestionnaireStatus('submitted')
            $route.reload();
        };
    }]).
    controller('QuestionnaireEditController', ['$scope','ReferralStatus', 'QuestionnaireStatus','$route' , function($scope, ReferralStatus, QuestionnaireStatus, $route) {
        $scope.referralStatus = ReferralStatus.getReferralStatus();
        $scope.questionnaireStatus = QuestionnaireStatus.getQuestionnaireStatus();
        $scope.saveQuestionnaire = function() {
            QuestionnaireStatus.setQuestionnaireStatus('inProgress')
            window.location.assign("#/questionnaire/details")
        };
    }]);
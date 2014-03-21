angular.module('myApp.services', [
    'ngResource'
]).
factory('ReferralStatus', function($resource){
        var referralStatus ={isSubmitted: false};
        return{
            getReferralStatus : function(){
                return referralStatus.isSubmitted;
            },
            setReferralStatus : function(value){
                referralStatus.isSubmitted = value;
            }
        }
    });

'use strict';

var AppConfig = angular.module('AppConfig', ['ngResource']);

    AppConfig.factory('Config', ['$resource', '$rootScope', function($resource, $rootScope){

      var TplUrl = "http://192.168.0.101/tpl/";
      var UrlValue = "http://192.168.0.101/api/v1/";
      var TokenValue = "a3ca5cf04464775a3ca0e1d2944d5f43875b2507";

      $rootScope.currency = "тг.";
      $rootScope.TplUrl = TplUrl;
      $rootScope.UrlValue = UrlValue;
      $rootScope.TokenValue = TokenValue;

            return  $resource($rootScope.UrlValue + ':url/:cat/:id', {}, {
                    AuhtGet: {
                      method:'POST',
                      params:{url:'auht'}
                    },
                    AuhtPut: {
                      method:'GET',
                      params:{
                        url:'auht',
                        token:$rootScope.TokenValue
                      },
                      isArray:true
                    },
                    CategoryGet: {
                      method:'GET',
                      params:{url:'category'},
                      isArray:true
                    },
                    ArticleCatGet: {
                      method:'GET',
                      params:{
                        url:'article',
                        cat:'cat'
                      },
                      isArray:true
                    },
                    ArticleGet: {
                      method:'GET',
                      params:{
                        url:'article'
                      },
                      isArray:true
                    },
                    OfferGet: {
                      method:'GET',
                      params:{url:'offer'},
                      isArray:true
                    }
                });
    }]);

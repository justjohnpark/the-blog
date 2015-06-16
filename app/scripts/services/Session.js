angular.module('the-blog')
  .factory('Session', function ($resource) {
    return $resource('/auth/session/');
  });

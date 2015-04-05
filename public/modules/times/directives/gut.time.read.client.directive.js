(function () {
    'use strict';

    angular.module('resources')
        .directive('gutTimeFull', ['times_templates', function(templates) {
            var templateUrl = templates.main + 'time-full.client.template.html';

            return {
                scope : {
                    time: '='
                },
                restrict: 'E',
                templateUrl: templateUrl
            };
        }]
    )
        .directive('gutTimeSmall', ['times_templates', function(templates) {
            var templateUrl = templates.main + 'time-small.client.template.html';

            return {
                scope : {
                    time: '='
                },
                restrict: 'E',
                templateUrl: templateUrl
            };
        }]
    );
})();

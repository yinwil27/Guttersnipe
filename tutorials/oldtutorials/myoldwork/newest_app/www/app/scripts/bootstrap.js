(function (angular, $, _) {
  'use strict';

  angular.module('bootstrap', [])
    .directive('affix', [function () {
        return {
          restrict: 'A',
          replace: false,
          link: function (scope, element, attrs) {
            var $element = $(element),
                offset = scope.$eval(attrs.affix),
                wrapperHeight = $element.outerHeight(),
                $wrapper = $('<div></div>').css('height', wrapperHeight);

            $element.wrap($wrapper).affix({ offset: offset });

            scope.$on('destroy', function () {
              $element.removeData('affix').removeClass('affix affix-top affix-bottom').unwrap();
            });
          }
        };
      }])
    .directive('collapse', ['$log', '$parse',
      function ($log, $parse) {
        return {
          restrict: 'A',
          replace: false,
          link: function (scope, element, attrs) {
            var $element = $(element),
                $panelTitle = $element.find('.panel-title a'),
                $panelCollapse = $element.find('.panel-collapse'),
                collapseAttr = scope.$eval(attrs.collapse),
                attrOptions = _.isObject(collapseAttr) ? collapseAttr : { parent: collapseAttr },
                options = _.extend({ toggle: false }, attrOptions),
                state = $parse(attrs.collapseState);

            $log.debug('Collapsing Element', options);
            $panelCollapse.collapse(options);

            $panelTitle.on('click.ng-bs.collapse', function () {
              $panelCollapse.collapse('toggle');
            });

            scope.$watch(function () { return state(scope, {}); },
              function (newValue) {
                if (newValue) {
                  $panelCollapse.collapse('show');
                } else {
                  $panelCollapse.collapse('hide');
                }
              });

            scope.$on('destroy', function () {
              $panelTitle.off('.ng-bs.collapse');
            });
          }
        };
      }])
    .directive('dropdown', ['$log',
      function ($log) {
        return {
          restrict: 'CA',
          replace: false,
          link: function (scope, element) {
            var $toggle = $(element).find('[data-toggle="dropdown"]');
            $toggle.dropdown();

            $toggle.on('show.bs.dropdown', function () {
              $log.debug('Show Dropdown');
            });

            $toggle.on('hide.bs.dropdown', function () {
              $log.debug('Hide Dropdown');
            });
          }
        };
      }])
    .directive('modal', ['$log', '$parse',
      function ($log, $parse) {
        return {
          restrict: 'CA',
          replace: false,
          link: function (scope, element, attrs) {
            var $element = $(element),
              show = _.partial($parse(attrs.modalShow), scope, {}),
              attrOptions = scope.$eval(attrs.modalOptions),
              options = _.extend({}, attrOptions, { show: _.toBoolean(show()) });

            $log.debug('Initializing Bootstrap Modal', options);
            $element.modal(options);

            scope.$watch(show,
              function (newValue) {
                $log.debug('Show Modal', newValue);
                if (newValue) {
                  $element.modal('show');
                } else {
                  $element.modal('hide');
                }
              });

            scope.$on('destroy', function () {
              $element.modal('destroy');
            });
          }
        };
      }
    ])
    .directive('slider', [function () {
        return {
          restrice: 'EA',
          replace: false,
          scope: {
            range: '@range',
            min: '=min',
            max: '=max',
            values: '=values'
          },
          link: function (scope, element) {
            var $element = $(element),
                greendiv = $('<div class="greendiv" style="width: 50%"></div>'),
                changeValues = function changeValues(values) {
                  scope.values = values;
                  greendiv.css('width', (scope.max - values[1]) / (scope.max - scope.min) * 100 + '%');
                };

            $element.slider({ range: true })
              .append(greendiv)
              .append($('<div class="slider-mask"></div>'));

            $element.on('slide', function (event, ui) {
              changeValues(scope.range ? ui.values : ui.value);
            });

            scope.$watch('values', function (nv) {
              changeValues(nv);
              $element.slider('option', 'values', nv);
            }, true);

            scope.$watch('range', function updateRange(value) {
              if (!_.isBoolean(value)) {
                value = !!value;
              }
              $element.slider('option', 'range', value);
            });

            scope.$watch('min', function updateMin(value) {
              $element.slider('option', 'min', value);
            });

            scope.$watch('max', function updateMax(value) {
              $element.slider('option', 'max', value);
            });

            scope.$watch('step', function updateStep(value) {
              $element.slider('option', 'step', value);
            });

            scope.$on('destroy', function () {
              $element.slider('destroy');
            });
          }
        };
      }]);
})(window.angular, window.jQuery, window._);
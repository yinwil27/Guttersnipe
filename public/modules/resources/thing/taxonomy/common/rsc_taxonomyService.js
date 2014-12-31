(function (angular, app, _) {
  'use strict';

  app.factory('ResourceTaxonomyService', ['$log',
    function ($log) {
      var taxonomyFactory,
        resourceTaxonomy = {
        notes: '',
        img: '',
        top: [
          {
            name: 'food',
            notes: '',
            img: '',
            eating_arrangement : {
              notes: '',
              img: '',
              multiple: false,
              selections: [
                {name: 'Food Not Bombs', img: ''},
                {name: 'Free Communal Meal',img: ''},
                {name: 'Food Donation', img: ''} ,
                {name: 'Dumpster', img: ''}
              ]
            },
            grains: {
              notes: '',
              multiple: true,
              selections: [
                {name: 'Bread', img: ''},
                {name: 'Pastries', img: 'cupcake4'},
                {name: 'Grains (rice, oats, etc)', img: ''},
                {name: 'Other Grain Group', img: ''}
              ]},
            produce: {
              notes: '',
              img: '',
              multiple: true,
              selections: [
                {name: 'Fruit', img: 'apply55'},
                {name: 'Vegetables', img: 'carrot5'},
                {name: 'Juice', img: 'drink2'},
                {name: 'Herbs', img: 'herbal1'},
                {name: 'Other Produce', img: ''}
              ]},
            protein: {
              notes: '',
              img: '',
              multiple: true,
              selections: [
                {name: 'Nuts', img: 'hazelnut1'},
                {name: 'Beans', img: ''},
                {name: 'Other Non Animal', img: ''},
                {name: 'Eggs', img: ''},
                {name: 'Cow', img: 'cow2'},
                {name: 'Bird', img: 'chicken8'},
                {name: 'Pig', img: ''},
                {name: 'Other Animal', img: 'dog56'}
              ]},
            dairy: {
              notes: '',
              groupImg: '',
              multiple: true,
              selections: [
                {name: 'Milk', img: 'milk8'},
                {name: 'Cheese', img: ''},
                {name: 'Yogurt', img: ''},
                {name: 'Non-Cow Dairy', img: ''},
                {name: 'Non-Animal Dairy', img: ''}
              ]}},
          {
            name: 'housing',
            notes: '' ,
            img: '',
            multiple: false,
            selections : [
              {name: 'Existing Squat', img: ''},
              {name: 'Start a Squat', img: ''},
              {name: 'Free Communal House', img: ''},
              {name: 'Shelter', img: ''},
              {name: 'Other Housing', img: ''}
            ]
          },
          {
            name: 'medical',
            notes: '',
            img: '',
            multiple: true,
            selections: [
              {name: 'General Medicine (Western) ', img: ''},
              {name: 'Emergency Medicine (Western) ', img: ''},
              {name: 'Mental Health', img: ''},
              {name: 'Holistic', img: ''},
              {name: 'Herbal', img: ''},
              {name: 'Non Western', img: ''},
              {name: 'Health Clinic', img: ''} ,
              {name: 'Drug Health / Abuse', img: ''},
              {name: 'Sexual Health', img: ''},
              {name: 'Sexual / Physical Abuse', img: ''},
              {name: 'Trans*', img: ''},
              {name: 'Women\'s', img: ''}
            ]
          }
        ]
      }
      $log.debug(resourceTaxonomy);

      taxonomyFactory = Object.create(Object.prototype, {
        taxonomy: {
          enumerable: true,
          value: resourceTaxonomy
        }
      });

      return taxonomyFactory;
    }
  ])
}) (window.angular, window.guttersnipe, window._);
require.config({
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    jqueryUI: 'lib/jquery-ui.min',
    jqueryMob: 'lib/jquery.mobile-1.3.2.min',
    jqueryTouch: 'lib/jquery.ui.touch-punch',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-optamd3-min',
    json: (typeof JSON === "undefined") ? "lib/json2" : "empty:",
    dust: 'lib/dust-core-1.2.3',
    dustHelper: 'lib/dust-helpers',
    bootstrap:'lib/bootstrap',
    less:'lib/less-1.3.0.min'
  },

  shim: {
  
    
    "backbone": {
      deps: ["underscore", "jquery"]
    },
    "bootstrap":{
      deps:["jquery"]
    },
    "jqueryMob":{
      deps:["jquery"]
    },
    "jqueryMob":{
      deps:["jquery"]
    },
    "jqueryTouch":{
      deps:["jquery", "jqueryMob"]
    }
  }
});

require(['views/app', 'views/index'], function(AppView, IndexView){
  var app_view = new AppView;
  app_view.render();
  var index_view = new IndexView;
  index_view.render();
});


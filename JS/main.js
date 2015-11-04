console.log(Backbone)



var GameView = Backbone.View.extend({
  tagName: 'section',
  className: 'gamePortal',
  // settingsTemplate: _.template($('#settingsTemplate').html()),
  // leaderBoardTemplate: _.template($('#leaderBoardTemplate').html()),
  // //
  // render: function(){
  //   this.$el.html(this.template)
  // },
})


var GameRouter = Backbone.Router.extend({
  routes: {
    '': 'main',
    'play': 'play',
    'leaderBoard': 'leaderBoard',
    'settings': 'settings',
  },

  main: function(){
    setTimeout(function(){
    $('.gameDisplay').html('');
  },3000)
  },
  play: function(){
    $('.gameDisplay').html('');
    $('.gameDisplay').html(_.template($('#play').html()))
  },
  leaderBoard: function(){
    $('.gameDisplay').html('');
    $('.gameDisplay').html(_.template($('#leaderBoardTemplate').html()))
  },
  settings: function(){
    $('.gameDisplay').html('');
    $('.gameDisplay').html(_.template($('#settingsTemplate').html()));
  },
});

new GameRouter()

var PlayView = new GameView()

Backbone.history.start();

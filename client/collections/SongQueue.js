// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function() {
    console.log("in playFirst");
    this.models[0].play();
  }
  
});
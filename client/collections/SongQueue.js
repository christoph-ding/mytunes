// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function() {
    console.log("in playFirst");
    if (this.models.length > 0) {
      this.models[0].play();
    }
  }
  
});
// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay/>',

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  events: {"ended" : "endedFunction"},

  endedFunction: function() {
    // remove current song from SongQueue - dequeue current song from songQueue
    this.model.dequeue();
    // change the current song to the now, first song in songQueue
    // rerender playerView, songQueueView
    // 

  }
});

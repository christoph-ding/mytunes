// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function() {
    // this.set("playCount", 0);
  },

  defaults: {
    playCount: 0
  },

  play: function() {
    //  Triggering an event here will also trigger the event on the collection
    this.set("playCount",  this.get("playCount") + 1);
    this.trigger('play', this);
  },
  
  enqueue: function() {
    console.log("in enqueue");
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    console.log("in dequeue");
    this.trigger('dequeue', this);
  }
});
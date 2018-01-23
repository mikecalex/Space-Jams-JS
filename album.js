

class Album {
  constructor(album_id, album_name, artists) {
    this.album_id = album_id;
    this.album_name = album_name;
    this.artists = artists;
    this.tracks = [];
    this.trackLists = [];

  }
  durationMn(){
    this.totalDuration_ms = 0;
    this.tracks.forEach((time) => {
      this.totalDuration_ms += parseInt(time.duration_ms);
    });
    return Math.round((this.totalDuration_ms / 60000) * 100) / 100;
  }

  trackList(){
  this.tracks.forEach((song) => {
    this.trackLists.push(song.title);

  });

  return this.trackLists.join('\n -');
  }

  summary() {
    let albumList = `Title: ${this.album_name}\n`;
    albumList += `Artists: ${this.artists}\n`;
    albumList += `Duration: ${this.durationMn()}\n`;
    albumList += `Tracks: \n -${this.trackList()}\n`;
    return albumList;
  }
}

module.exports = Album;

var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(playlist, artist, song) {
  playlist = Object.assign({}, {[artist]:song});
  return playlist;
}

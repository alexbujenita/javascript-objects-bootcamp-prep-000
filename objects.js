var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(playlist, artist, song) {
  playlist = Object.assign({}, playlist, {[artist]:song});
  return playlist;
}

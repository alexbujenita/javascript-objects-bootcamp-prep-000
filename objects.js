var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(playlist, artist, song) {
  return  Object.assign({}, playlist, {[artist]:song});

}

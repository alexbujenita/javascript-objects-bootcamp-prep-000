var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(obj, artist, song) {
  return  Object.assign({}, obj, {[artist]:song});

}

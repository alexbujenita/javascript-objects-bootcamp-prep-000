var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(obj, artist, song) {
  var newPlay = Object.assign({}, obj, {artist:song});
  return newPlay;
}

exports.getFarms = async (req, res) => {
  res.json([
    { id: 1, name: "Green Valley Farm", location: "Limpopo" },
    { id: 2, name: "Sunrise Fields", location: "KwaZulu-Natal" },
    { id: 3, name: "Riverbend Produce", location: "Mpumalanga" }
  ]);
};

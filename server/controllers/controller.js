const read = (req, res) => {
  const db = req.app.get("db");

  db.get_images()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

const add = (req, res) => {
  const db = req.app.get("db");
  db.add_image([req.body.title, req.body.date, req.body.url])
    .then(response => res.status(200).json(response))
    .catch(err => {
      res.status(500).json(err);
    });
};

const deleted = (req, res) => {
  const db = req.app.get("db");
  db.delete_image([req.params.id])
    .then(response => res.status(200).json(response))
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  read,
  add,
  deleted
};

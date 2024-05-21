import links from "../models/link.js";

const LinksController = {
 
  getList: async (req, res) => {
    try {
      const getLinks = await links.find();//ללא סינון
      res.json({ getLinks});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const getLink = await links.findById(req.params.id);//שליפה לפי מזהה
      res.json(getLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalURL } = req.body;
    try {
      const newLink = await links.create({ originalURL });//הוספת חדש
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { url } = req.body;

    try {
      const updatedLink = await links.findByIdAndUpdate(id, req.body, {
        originURL: url,
      });//עדכון לפי מזהה
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await links.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default LinksController;

const getTasks = (req, res) => {
    res.json({ "fruits": ["apple", "banana", "cherry"] });
}

module.exports = { getTasks }
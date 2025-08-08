const { Router } = require('express');
const router = Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: the list of tasks
 */
router.get("/", taskController.getTasks);

router.post("/", () => { res.status(500).json({ message: 'Error creating users' }) });

module.exports = router;
const prisma = require('../config/db');

// @desc    Submit a contact message
// @route   POST /api/contact
const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please fill all fields');
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error('Please provide a valid email address');
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Admin)
// @route   GET /api/contact
const getContacts = async (req, res, next) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getContacts,
};

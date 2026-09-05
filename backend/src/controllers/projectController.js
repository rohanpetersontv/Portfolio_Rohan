const prisma = require('../config/db');

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
const getProjectById = async (req, res, next) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
    });

    if (!project) {
      res.status(404);
      throw new Error('Project not found');
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a project
// @route   POST /api/projects
const createProject = async (req, res, next) => {
  try {
    const { title, description, image, technologies, githubUrl, liveUrl } = req.body;

    if (!title || !description) {
      res.status(400);
      throw new Error('Please add a title and description');
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        technologies: technologies || [],
        githubUrl,
        liveUrl,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      res.status(404);
      throw new Error('Project not found');
    }

    const updatedProject = await prisma.project.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      res.status(404);
      throw new Error('Project not found');
    }

    await prisma.project.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

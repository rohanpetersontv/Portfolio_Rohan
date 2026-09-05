const API_URL = import.meta.env.VITE_API_URL || '/api';

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

export const getProject = async (id) => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
};

export const createProject = async (project) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error('Failed to create project');
  }
  return response.json();
};

export const updateProject = async (id, project) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error('Failed to update project');
  }
  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete project');
  }
  return response.json();
};

export const sendContactMessage = async (data) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send message');
  }
  return response.json();
};

export const getContacts = async () => {
  const response = await fetch(`${API_URL}/contact`);
  if (!response.ok) {
    throw new Error('Failed to fetch contact messages');
  }
  return response.json();
};


import { useState, useEffect } from "react";
import { getProjects, createProject, deleteProject, updateProject, getContacts } from "../services/api";
import "./Admin.css";

const EMPTY_FORM = { title: "", description: "", image: "", technologies: "", githubUrl: "", liveUrl: "" };

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword]               = useState("");
  const [activeTab, setActiveTab]             = useState("projects");

  // Projects state
  const [projects, setProjects]       = useState([]);
  const [formData, setFormData]       = useState(EMPTY_FORM);
  const [editingId, setEditingId]     = useState(null);   // null = add mode
  const [loading, setLoading]         = useState(false);
  const [message, setMessage]         = useState({ type: "", text: "" });

  // Contacts state
  const [contacts, setContacts]       = useState([]);
  const [contactsLoading, setContactsLoading] = useState(false);

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
      loadContacts();
    }
  }, [isAuthenticated]);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      showMessage("error", "Failed to load projects");
    }
  };

  const loadContacts = async () => {
    setContactsLoading(true);
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (err) {
      showMessage("error", "Failed to load contact messages");
    } finally {
      setContactsLoading(false);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 4000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setMessage({ type: "", text: "" });
    } else {
      setMessage({ type: "error", text: "Invalid password. Access denied." });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...formData,
        technologies: formData.technologies.split(",").map(t => t.trim()).filter(Boolean)
      };

      if (editingId) {
        await updateProject(editingId, payload);
        showMessage("success", "Project updated successfully!");
      } else {
        await createProject(payload);
        showMessage("success", "Project added successfully!");
      }

      setFormData(EMPTY_FORM);
      setEditingId(null);
      loadProjects();
    } catch (error) {
      showMessage("error", error.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEditProject = (project) => {
    setEditingId(project.id);
    setFormData({
      title:       project.title,
      description: project.description,
      image:       project.image || "",
      technologies: Array.isArray(project.technologies) ? project.technologies.join(", ") : "",
      githubUrl:   project.githubUrl || "",
      liveUrl:     project.liveUrl   || "",
    });
    // Scroll to form
    document.querySelector(".admin-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(EMPTY_FORM);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("DELETE this project? This cannot be undone.")) return;
    try {
      await deleteProject(id);
      showMessage("success", "Project deleted.");
      loadProjects();
    } catch {
      showMessage("error", "Failed to delete project");
    }
  };

  /* ─── LOGIN SCREEN ─── */
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <form className="admin-login-form" onSubmit={handleLogin}>
          <div className="login-logo">
            <span className="login-logo-dot" />
          </div>
          <h2>Admin Access</h2>
          <span className="admin-subtitle">PORTFOLIO_ADMIN / AUTHENTICATE</span>
          {message.text && <p className={`message ${message.type}`}>{message.text}</p>}
          <input
            type="password"
            placeholder="ENTER_PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOGIN</button>
          <a href="/" className="back-link">← Back to Portfolio</a>
        </form>
      </div>
    );
  }

  /* ─── DASHBOARD ─── */
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-header-dot" />
          <h2>Admin Dashboard</h2>
        </div>
        <a href="/" className="back-link">← View Portfolio</a>
      </header>

      {message.text && <p className={`message ${message.type} message--global`}>{message.text}</p>}

      {/* TABS */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === "projects" ? "admin-tab--active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          ◈ PROJECTS
        </button>
        <button
          className={`admin-tab ${activeTab === "messages" ? "admin-tab--active" : ""}`}
          onClick={() => { setActiveTab("messages"); loadContacts(); }}
        >
          ✉ MESSAGES
          {contacts.length > 0 && <span className="tab-badge">{contacts.length}</span>}
        </button>
      </div>

      {/* ── PROJECTS TAB ── */}
      {activeTab === "projects" && (
        <>
          <section className="admin-section">
            <h3>{editingId ? "EDIT_PROJECT" : "ADD_NEW_PROJECT"}</h3>
            <form className="admin-form" onSubmit={handleSubmitProject}>
              <div className="admin-form-row">
                <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
                <input type="text" name="technologies" placeholder="Technologies (comma separated)" value={formData.technologies} onChange={handleChange} />
              </div>
              <textarea name="description" placeholder="Project Description" value={formData.description} onChange={handleChange} required rows="4" />
              <input type="text" name="image" placeholder="Image URL (optional)" value={formData.image} onChange={handleChange} />
              <div className="admin-form-row">
                <input type="url" name="githubUrl" placeholder="GitHub URL (optional)" value={formData.githubUrl} onChange={handleChange} />
                <input type="url" name="liveUrl" placeholder="Live Demo URL (optional)" value={formData.liveUrl} onChange={handleChange} />
              </div>
              <div className="admin-form-actions">
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "SAVING..." : editingId ? "SAVE_CHANGES" : "ADD_PROJECT"}
                </button>
                {editingId && (
                  <button type="button" className="btn-cancel" onClick={handleCancelEdit}>
                    CANCEL
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="admin-section">
            <h3>MANAGE_PROJECTS <span className="section-count">({projects.length})</span></h3>
            <div className="admin-projects-list">
              {projects.length === 0 && <p className="empty-msg">No projects yet. Add one above.</p>}
              {projects.map((project) => (
                <div key={project.id} className={`admin-project-item ${editingId === project.id ? "admin-project-item--editing" : ""}`}>
                  <div className="project-item-info">
                    <h4>{project.title}</h4>
                    <p>{Array.isArray(project.technologies) ? project.technologies.join(", ") : "—"}</p>
                  </div>
                  <div className="project-item-actions">
                    <button className="btn-edit" onClick={() => handleEditProject(project)}>EDIT</button>
                    <button className="btn-delete" onClick={() => handleDeleteProject(project.id)}>DELETE</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── MESSAGES TAB ── */}
      {activeTab === "messages" && (
        <section className="admin-section">
          <h3>CONTACT_MESSAGES <span className="section-count">({contacts.length})</span></h3>
          {contactsLoading ? (
            <div className="loading-spinner-row"><div className="admin-spinner" /></div>
          ) : contacts.length === 0 ? (
            <p className="empty-msg">No messages received yet.</p>
          ) : (
            <div className="messages-list">
              {contacts.map((msg) => (
                <div key={msg.id} className="message-card">
                  <div className="message-card-header">
                    <div>
                      <span className="message-name">{msg.name}</span>
                      <span className="message-email">{msg.email}</span>
                    </div>
                    <span className="message-date">
                      {new Date(msg.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric"
                      })}
                    </span>
                  </div>
                  <p className="message-subject">RE: {msg.subject}</p>
                  <p className="message-body">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default Admin;

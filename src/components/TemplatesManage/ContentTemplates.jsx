import React, { useState } from 'react';

const ContentTemplates = () => {
  // Initial state for templates and form fields
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    category: '',
    content: '',
  });
  const [editingTemplate, setEditingTemplate] = useState(null);

  // Function to add a new template
  const addTemplate = () => {
    if (newTemplate.name && newTemplate.category && newTemplate.content) {
      const template = { ...newTemplate, id: Date.now() };
      setTemplates([...templates, template]);
      setNewTemplate({ name: '', category: '', content: '' });
    }
  };

  // Function to edit a template
  const editTemplate = (template) => {
    setEditingTemplate(template);
    setNewTemplate({
      name: template.name,
      category: template.category,
      content: template.content,
    });
  };

  // Function to save changes to an edited template
  const saveTemplateChanges = () => {
    if (newTemplate.name && newTemplate.category && newTemplate.content) {
      const updatedTemplates = templates.map((template) =>
        template.id === editingTemplate.id ? newTemplate : template
      );
      setTemplates(updatedTemplates);
      setEditingTemplate(null);
      setNewTemplate({ name: '', category: '', content: '' });
    }
  };

  // Function to delete a template
  const deleteTemplate = (templateId) => {
    const updatedTemplates = templates.filter(
      (template) => template.id !== templateId
    );
    setTemplates(updatedTemplates);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg ">
      <h1 className="text-2xl font-semibold mb-4">Content Templates</h1>

      {/* Add/Edit Template Form */}
      <div className="mb-4 p-4 rounded-lg bg-white shadow ">
        <h2 className="text-lg font-semibold mb-2">
          {editingTemplate ? 'Edit Template' : 'Add New Template'}
        </h2>
        <div className="mb-2 flex flex-col">
          <label htmlFor="templateName">Template Name:</label>
          <input
            type="text"
            id="templateName"
            className="ml-2 p-2 border rounded max-w-sm"
            value={newTemplate.name}
            onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="templateCategory">Template Category:</label>
          <input
            type="text"
            id="templateCategory"
            className="ml-2 p-2 border rounded max-w-sm"
            value={newTemplate.category}
            onChange={(e) => setNewTemplate({ ...newTemplate, category: e.target.value })}
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="templateContent">Template Content:</label>
          <textarea
            id="templateContent"
            className="ml-2 p-2 border rounded max-w-sm"
            value={newTemplate.content}
            onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={editingTemplate ? saveTemplateChanges : addTemplate}
        >
          {editingTemplate ? 'Save Changes' : 'Add Template'}
        </button>
      </div>

      {/* Template List */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Template List</h2>
        <ul >
          {templates.map((template) => (
            <li key={template.id} className="mb-2 space-y-3">
              <strong>Name: {template.name}</strong> -Category: {template.category}
              <div className="mt-1">{template.content}</div>
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 "
                onClick={() => editTemplate(template)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                onClick={() => deleteTemplate(template.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentTemplates;

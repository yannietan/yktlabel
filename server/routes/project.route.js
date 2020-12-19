const Projects = require('../controllers/project.controller');

module.exports = function(app){

    app.get('/api/projects', Projects.allProjects)
    app.post('/api/projects/new', Projects.addProject)
    app.delete('/api/projects/:_id', Projects.deleteProject)
    app.get('/api/projects/progress', Projects.progressProjects)
    app.get('/api/projects/completed', Projects.completedProjects)
    app.put('/api/projects/:_id', Projects.updateMid)
    app.put('/api/projects/:_id', Projects.updateFinal)
    
}

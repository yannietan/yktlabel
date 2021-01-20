const Projects = require('../controllers/project.controller');

module.exports = function(app){

    app.get('/api/projects', Projects.allProjects)
    app.post('/api/projects', Projects.addProject)    
}

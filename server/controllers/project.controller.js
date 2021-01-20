const Project = require('../models/project.model');

class ProjectController {
  addProject(req, res){
    // const newproject = new Project(req.data);
    // console.log(newproject)
    // newproject.save()
    console.log(req.body)
    Project.create(req.body)
      .then((newproject) => res.json(newproject))
      .catch(err => res.json(err));
  }

  allProjects(req,res)
  {Project.find() // or {req}
    .then(project => res.json(project))
    .catch(err => res.json(err));
  }
}

module.exports = new ProjectController

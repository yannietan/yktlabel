const Project = require('../models/project.model');

class ProjectController {
  addProject(req, res){
    const newproject = new Project(req.body);
    newproject.save()
      .then(() => res.json(newproject))
      .catch(err => res.json(err));
  }
  allProjects(req,res)
  {Project.find({status:'new'}).sort("projectDate")
    .then( project => res.json(project))
    .catch(err => res.json(err));
  }

  deleteProject(req,res){
    Project.deleteOne({_id: req.params._id})
    .then(() => res.json({msg: "Deleted Project!"}))
    .catch(err => res.json(err))
  }

  progressProjects(req,res)
  {
    Project.find({status:'progress'})
    .then(project=> res.json(project))
    .catch(err => res.json(err));

  }

  completedProjects(req,res)
  {Project.find({status: 'completed'})
    .then( project => res.json(project))
    .catch(err => res.json(err));
  }

  updateFinal(req, res){
    console.log(req.body)
    Project.findByIdAndUpdate(req.params._id, req.body, {
      new:true,
      runValidators:true,
    })
    .then((updatedProject) => {
      console.log(updatedProject)
      res.json(updatedProject)
    })
    .catch((err) => res.json(err))
  }

  updateMid(req, res){
    console.log(req.body)
    Project.findByIdAndUpdate(req.params._id, req.body, {
      new:true,
      runValidators:true,
    })
    .then((updatedProject) => {
      console.log(updatedProject)
      res.json(updatedProject)
    })
    .catch((err) => res.json(err))
  }

  getOne(req, res){
    Project.findById(req.params._id)
    .then((project) => {
      res.json(project)
    })
    .catch((err) => res.json(err))
  }
  //route it
}

module.exports = new ProjectController

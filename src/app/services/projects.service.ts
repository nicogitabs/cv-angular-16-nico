import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }


    //service viene utilizzat per fare le fetch
    projects:Project [] = [
    {id:0,name:'Html,Css,Angular',summary:'Progetto CV',description:'Ho applicato la creazione CV utilizzando solo HTML,CSS',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:["../../../assets/expresslogo.png","../../../assets/springlogo.png","../../../assets/angilogo.jpg","../../assets/csslogo.png","../../assets/htmllogo.png","../../assets/javalogo.png","../../assets/jslogo.png","../../assets/tslogo.png"],tags:[Tag.HTML,Tag.CSS]},
    {id:1,name:'Javascript',summary:'Progetto JS',description:'Ho applicato Javascript',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:["../../../assets/expresslogo.png","../../../assets/springlogo.png","../../../assets/angilogo.jpg","../../assets/csslogo.png","../../assets/htmllogo.png","../../assets/javalogo.png","../../assets/jslogo.png","../../assets/tslogo.png"],tags:[Tag.JAVASCRIPT]},
    {id:2,name:'Express',summary:'Progetto gestionale',description:'Ho greato il gestionale lato Backend con Express Framework',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:["../../../assets/expresslogo.png","../../../assets/springlogo.png","../../../assets/angilogo.jpg","../../assets/csslogo.png","../../assets/htmllogo.png","../../assets/javalogo.png","../../assets/jslogo.png","../../assets/tslogo.png"],tags:[Tag.EXPRESS]},
    {id:3,name:'Java',summary:'Progetto Spring',description:'Creazione App con Spring Framework',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:["../../../assets/expresslogo.png","../../../assets/springlogo.png","../../../assets/angilogo.jpg","../../assets/csslogo.png","../../assets/htmllogo.png","../../assets/javalogo.png","../../assets/jslogo.png","../../assets/tslogo.png"],tags:[Tag.JAVA,Tag.SPRING]},
    {id:4,name:'Angular',summary:'Progetto Angular',description:'Convertito cv in progetto Angular applicando i principi cardini della Single Page Application',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:["../../../assets/expresslogo.png","../../../assets/springlogo.png","../../../assets/angilogo.jpg","../../assets/csslogo.png","../../assets/htmllogo.png","../../assets/javalogo.png","../../assets/jslogo.png","../../assets/tslogo.png"],tags:[Tag.ANGULAR,Tag.TYPESCRIPT]}
    ];
    getProjects(){
      //ritorna l'array di progetti
      return this.projects;
    }
    getProjectsById(id:number) : Project {
      let project = this.projects.find(project => project.id === id);
      if(project === undefined){
        throw new TypeError('Progetto non trovato,digita un id corretto'+ id);
      }
      return project;
    }
    //servizio che gestisce il filtro nel portfolio
    getProjectByFilter(filterTags : Tag[]){
      let filterProjects : Project[] = [];
      this.projects.forEach(function(project){
        let foundAll=true;
        filterTags.forEach(function(filterTag){
          if(project.tags.includes(filterTag) == false){
            foundAll = false;
          }
        });
        if(foundAll){
          filterProjects.push(project);
        }
      });
      return filterProjects;
    }
}

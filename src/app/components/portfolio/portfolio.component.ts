import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Project';
import { Tag } from 'src/app/models/Tag';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // projects:Project [] = [
  // {id:0,name:'HTML,CSS',summary:'Progetto CV',description:'Ho applicato la creazione CV utilizzando solo HTMl,CSS',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:[],tags:[Tag.HTML,Tag.CSS]},
  // {id:1,name:'Javascript',summary:'Progetto JS',description:'Ho applicato Javascript',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:[],tags:[Tag.JAVASCRIPT]},
  // {id:2,name:'Express',summary:'Progetto gestionale',description:'Ho greato il gestionale lato Backend con Express Framework',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:[],tags:[Tag.EXPRESS]},
  // {id:3,name:'Java',summary:'Progetto Spring',description:'Creazione App con Spring Framework',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:[],tags:[Tag.JAVA,Tag.SPRING]},
  // {id:4,name:'Angular',summary:'Progetto Angular',description:'Convertito cv in progetto Angular applicando i principi cardini della Single Page Application',projectLink:'https://github.com/nicogitabs/cv-project-html-css',picture:[],tags:[Tag.ANGULAR,Tag.TYPESCRIPT]}
  // ]

  projects = {} as Project[];


  //creo variabile per funnzionalita filtro
  isCollapsed : boolean = true;
  typescript: boolean = false;
  html:boolean = false;
  css:boolean =false;
  javascript:boolean = false;
  java:boolean =false;
  angular:boolean = false;
  springboot:boolean=false;
  express:boolean=false;
  //reset visibile dopo che scelto checkbox
  filtering:boolean=false;

    //attraverso costruttore inietto con setTitle la stringa da cui ottengo il titolo nella scheda del browser
    constructor(private titleService:Title,private projectService:ProjectsService){
      this.titleService.setTitle('Nicolò Corpuz Absolor - Portfolio');
    }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags: Tag[]=[];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.springboot){
      filterTags.push(Tag.SPRING);
    }
    if(this.express){
      filterTags.push(Tag.EXPRESS);
    }
    if(this.typescript || this.html || this.css ||this.javascript ||this.java ||this.angular ||this.springboot ||this.express){
      this.filtering =true;
    }else{
      this.filtering=false;
    }


    this.projects = this.projectService.getProjectByFilter(filterTags);
  }
  //resetto il filtro
  resetFilters(){
    this.html = false;
    this.css =false;
    this.javascript=false;
    this.java = false;
    this.typescript =false;
    this.springboot=false;
    this.angular=false;
    this.express=false;
    this.filtering=false;

    this.projects = this.projectService.getProjects();
  }
}

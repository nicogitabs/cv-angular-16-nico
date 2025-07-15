// import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { Project } from 'src/app/models/Project';
// import { ProjectsService } from 'src/app/services/projects.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   featureProject = {} as Project;

//   //attraverso costruttore inietto con setTitle la stringa da cui ottengo il titolo nella scheda del browser
//   constructor(private titleService:Title,private projectService:ProjectsService){
//     this.titleService.setTitle('Nicolò Corpuz Absolor - Home')
//   }
//   ngOnInit(): void {
//     this.featureProject = this.projectService.getProjectsById(0);
//   }

  
// }




import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy,AfterViewInit {
  
  //Cosi la presentazione occupa tutta la pagina ho bisogno di separare presentazione e vetrina modificato 14-7-2025
  // featureProject = {} as Project;

  // scrollPosition = 0;
  // scrollInterval: any;

  // constructor(private titleService: Title, private projectService: ProjectsService) {
  //   this.titleService.setTitle('Nicolò Corpuz Absolor - Home');
  // }

  // ngOnInit(): void {
  //   this.featureProject = this.projectService.getProjectsById(0);
  //   this.startScroll();
  // }

  // startScroll() {
  //   this.scrollInterval = setInterval(() => {
  //     this.scrollPosition -= 1;

  //     const imageCount = this.featureProject?.picture?.length || 0;
  //     const maxScroll = imageCount * 320; // 300px + 20px approx margin
  //     if (Math.abs(this.scrollPosition) > maxScroll) {
  //       this.scrollPosition = 0;
  //     }
  //   }, 10);
  // }

  // pauseScroll() {
  //   clearInterval(this.scrollInterval);
  // }

  // ngOnDestroy(): void {
  //   this.pauseScroll();
  // }


  featureProject = {} as Project;

  scrollPosition = 0;
  scrollInterval: any;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Nicolò Corpuz Absolor - Home');
  }

  ngOnInit(): void {
    this.featureProject = this.projectService.getProjectsById(0);
    this.startScroll();
  }

  ngAfterViewInit(): void {
    const img = document.getElementById('profileImage');
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.classList.add('bounce');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(img);
  }

  startScroll() {
    const slideWidth = 320; // img width + margin
    const imageCount = (this.featureProject?.picture?.length || 0);

    this.scrollInterval = setInterval(() => {
      this.scrollPosition -= 1;

      const maxScroll = imageCount * slideWidth;
      if (Math.abs(this.scrollPosition) >= maxScroll) {
        this.scrollPosition = 0;
      }
    }, 10);
  }

  pauseScroll() {
    clearInterval(this.scrollInterval);
  }

  ngOnDestroy(): void {
    this.pauseScroll();
  }
}


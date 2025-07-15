import { Component, Renderer2, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResumeDataService } from 'src/app/services/resume-data.service';
import {Skill,Interest,Education,Experience,Language
} from 'src/app/models/resume-models';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  isInteressiOpen = false;
  isLingueOpen = false;
  isEsperienzeOpen = false;
  isFormazioneOpen = false;
  isSkillsOpen = false;

  skills :Skill [] = [];
  interests :Interest[] = [];
  educationList : Education [] = [];
  experienceList :Experience[]= [];
  languages :Language[] = [];

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private resumeData: ResumeDataService
  ) {
    this.titleService.setTitle('Nicolò Corpuz Absolor - Resume');
  }

  ngOnInit(): void {
    this.skills = this.resumeData.getSkills();
    this.interests = this.resumeData.getInterests();
    this.educationList = this.resumeData.getEducation();
    this.experienceList = this.resumeData.getExperiences();
    this.languages = this.resumeData.getLanguages();
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/Nicolo-Corpuz-Absolor-cv.pdf');
    link.setAttribute('download', 'Nicolo-Corpuz-Absolor-cv.pdf');
    link.click();
    link.remove();
  }
}

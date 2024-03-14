import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { LocalRoleOnProject } from '../core/enums/lib-global-enum';
import { LibGlobalService } from '../core/services/lib-global.service';

@Component({
  selector: 'lib-header-project',
  templateUrl: './header-project.component.html',
  styleUrls: ['./header-project.component.css'],
})
export class HeaderProjectComponent implements OnChanges {
  @Input() connectedUser!: any;
  @Input() projectDetails!: any;
  @Input() nameProject!: string;
  @Input() showProjectConfiguration!: boolean;
  @Input() statusProjectConfiguration!: boolean;
  @Input() showSessions!: boolean;
  @Input() statusSessions!: boolean;
  @Input() showProjectInfo!: boolean;
  @Input() statusProjectInfo!: boolean;
  @Output() projectInfoOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

  projectId: any;
  project: any;
  currentRoleOnProject: any;
  localRoleOnProject = LocalRoleOnProject;

  constructor(private readonly libGlobalService: LibGlobalService) {
    this.project = JSON.parse(localStorage.getItem('projectDetails') ?? 'null');
    this.projectId = this.project?.id;
  }

  ngOnChanges() {
    if (this.projectDetails) {
      this.currentRoleOnProject = this.libGlobalService.getRoleOfUserOnProject(this.connectedUser, this.projectDetails);
    } else {
      this.currentRoleOnProject = this.libGlobalService.getRoleOfUserOnProject(this.connectedUser);
    }
  }

  openProjectInfo() {
    this.statusProjectInfo = true;
    this.projectInfoOpened.emit(true);
  }
}

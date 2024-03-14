import { EventEmitter, OnChanges } from '@angular/core';
import { LocalRoleOnProject } from '../core/enums/lib-global-enum';
import { LibGlobalService } from '../core/services/lib-global.service';
import * as i0 from "@angular/core";
export declare class HeaderProjectComponent implements OnChanges {
    private readonly libGlobalService;
    connectedUser: any;
    projectDetails: any;
    nameProject: string;
    showProjectConfiguration: boolean;
    statusProjectConfiguration: boolean;
    showSessions: boolean;
    statusSessions: boolean;
    showProjectInfo: boolean;
    statusProjectInfo: boolean;
    projectInfoOpened: EventEmitter<boolean>;
    projectId: any;
    project: any;
    currentRoleOnProject: any;
    localRoleOnProject: typeof LocalRoleOnProject;
    constructor(libGlobalService: LibGlobalService);
    ngOnChanges(): void;
    openProjectInfo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderProjectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderProjectComponent, "lib-header-project", never, { "connectedUser": "connectedUser"; "projectDetails": "projectDetails"; "nameProject": "nameProject"; "showProjectConfiguration": "showProjectConfiguration"; "statusProjectConfiguration": "statusProjectConfiguration"; "showSessions": "showSessions"; "statusSessions": "statusSessions"; "showProjectInfo": "showProjectInfo"; "statusProjectInfo": "statusProjectInfo"; }, { "projectInfoOpened": "projectInfoOpened"; }, never, never, false, never>;
}

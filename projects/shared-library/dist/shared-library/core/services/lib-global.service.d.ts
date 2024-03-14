import { BehaviorSubject } from 'rxjs';
import { LocalRoleOnProject } from '../enums/lib-global-enum';
import * as i0 from "@angular/core";
export declare class LibGlobalService {
    _projectDetails: any;
    currentLocalRoleOnProject$: BehaviorSubject<string | null>;
    getProjectDetailsFromLocalStorage(): void;
    getRoleOfUserOnProject(connectedUSer?: any, projectDetails?: any): LocalRoleOnProject | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibGlobalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibGlobalService>;
}

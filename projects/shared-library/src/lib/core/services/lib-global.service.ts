import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageConst } from '../constants/lib-StorageConst';
import { IncomingRoleOnProject, LocalRoleOnProject } from '../enums/lib-global-enum';

@Injectable({
  providedIn: 'root'
})
export class LibGlobalService {

  _projectDetails: any;
  currentLocalRoleOnProject$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  /* The `getProjectDetailsFromLocalStorage()` method retrieves project details from the local storage. 
It first attempts to fetch a string value from the local storage using the key specified by 
`StorageConst.projectDetails`. If the retrieved string is not null, the method parses it as JSON 
and assigns the parsed object to the `_projectDetails` property of the class. */
  getProjectDetailsFromLocalStorage() {
    const projectDetailsString: string | null = localStorage.getItem(StorageConst.projectDetails);
    if (projectDetailsString !== null) {
      this._projectDetails = JSON.parse(projectDetailsString);
    }
  }

  /*The `getRoleOfUserOnProject(connectedUser?: any)` method first invokes `getProjectDetailsFromLocalStorage()` 
to ensure the `_projectDetails` property is updated with the latest information from local storage. 
It then checks if `_projectDetails` is neither null nor undefined. If it's a valid object, the method 
proceeds to determine the role of the user on the project. The user's role is determined based on 
conditions comparing the `userRole` and `owner.userId` properties of `_projectDetails` with the 
`connectedUser`'s ID and predefined role constants (`IncomingRoleOnProject` and `LocalRoleOnProject`). 
After determining the role, it is published using `currentLocalRoleOnProject$.next()` and returned. 
If `_projectDetails` is null or undefined, the method broadcasts `null` via `currentLocalRoleOnProject$.next()` 
and returns null, indicating no role could be determined for the user on the project. */
  /*
  IncomingRoleOnProject = roles that are received from the backend
  LocalRoleOnProject = roles that are used in the frontend (to differentiate between the project owner and the real creator of the project)
  */
  getRoleOfUserOnProject(connectedUSer?: any, projectDetails?: any) {
    if(projectDetails) {
      this._projectDetails = projectDetails;
    }
    else {
      this.getProjectDetailsFromLocalStorage();
    }
    if (this._projectDetails !== null && this._projectDetails !== undefined) {
      let role = null;
      if (this._projectDetails?.userRole === IncomingRoleOnProject.EDITOR) {
        role = LocalRoleOnProject.EDITOR;
      }
      if (this._projectDetails?.userRole === IncomingRoleOnProject.VIEWER) {
        role = LocalRoleOnProject.VIEWER;
      }
      if (this._projectDetails?.owner?.userId === connectedUSer?.id && this._projectDetails.userRole === IncomingRoleOnProject.PROJECT_OWNER) {
        role = LocalRoleOnProject.CREATOR;
      }
      if (this._projectDetails?.owner?.userId !== connectedUSer?.id && this._projectDetails.userRole === IncomingRoleOnProject.PROJECT_OWNER) {
        role = LocalRoleOnProject.AFFECTED_PROJECT_OWNER;
      }
      this.currentLocalRoleOnProject$.next(role as string);
      return role;
    }
    this.currentLocalRoleOnProject$.next(null);
    return null;
  }

}

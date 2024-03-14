import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, ViewChild, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import * as i1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i4 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i3 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i1$1 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i1$2 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i3$1 from '@angular/material/form-field';
import * as i4$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/core';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

class SharedLibraryService {
}
SharedLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SharedLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class ButtonComponent {
    constructor() {
        //add button name
        this.label = '';
        this.disable = false;
        this.srcImage = '';
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ButtonComponent, selector: "app-button", inputs: { label: "label", disable: "disable", srcImage: "srcImage" }, ngImport: i0, template: "<button\r\n  matStepperNext\r\n  mat-raised-button\r\n  mat-button\r\n  class=\"primary\"\r\n  [ngClass]=\"disable ? 'disable' : 'primary'\"\r\n>\r\n  <span class=\"button-label\">\r\n    {{ label }}\r\n    <img *ngIf=\"srcImage !== ''\" [src]=\"srcImage\" alt=\"right-vector SVG\" />\r\n  </span>\r\n</button>\r\n", styles: ["*{font-family:Red Hat Text,sans-serif!important}button{display:flex;justify-content:center;align-items:center;border-radius:.3125rem;box-shadow:none!important;width:100%;font-size:.875rem;font-style:normal;line-height:normal;text-align:center}button.primary{font-weight:500!important;background-color:#105bee;color:#fff;border:none}button.primary:hover{background-color:#0041bf;box-shadow:none!important}button.disable{background-color:#acc8ff;cursor:default;pointer-events:none}button .button-label{display:flex;align-items:center;font-family:Red Hat Text,sans-serif!important;text-align:center;font-size:.875rem;font-style:normal;font-weight:500;line-height:normal}button .button-label img{margin-left:.53rem}button:focus,button:active{box-shadow:none!important}.capitalize{text-transform:lowercase}.capitalize:first-letter{text-transform:uppercase}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button', template: "<button\r\n  matStepperNext\r\n  mat-raised-button\r\n  mat-button\r\n  class=\"primary\"\r\n  [ngClass]=\"disable ? 'disable' : 'primary'\"\r\n>\r\n  <span class=\"button-label\">\r\n    {{ label }}\r\n    <img *ngIf=\"srcImage !== ''\" [src]=\"srcImage\" alt=\"right-vector SVG\" />\r\n  </span>\r\n</button>\r\n", styles: ["*{font-family:Red Hat Text,sans-serif!important}button{display:flex;justify-content:center;align-items:center;border-radius:.3125rem;box-shadow:none!important;width:100%;font-size:.875rem;font-style:normal;line-height:normal;text-align:center}button.primary{font-weight:500!important;background-color:#105bee;color:#fff;border:none}button.primary:hover{background-color:#0041bf;box-shadow:none!important}button.disable{background-color:#acc8ff;cursor:default;pointer-events:none}button .button-label{display:flex;align-items:center;font-family:Red Hat Text,sans-serif!important;text-align:center;font-size:.875rem;font-style:normal;font-weight:500;line-height:normal}button .button-label img{margin-left:.53rem}button:focus,button:active{box-shadow:none!important}.capitalize{text-transform:lowercase}.capitalize:first-letter{text-transform:uppercase}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], disable: [{
                type: Input
            }], srcImage: [{
                type: Input
            }] } });

var LocalRoleOnProject;
(function (LocalRoleOnProject) {
    LocalRoleOnProject["CREATOR"] = "CREATOR";
    LocalRoleOnProject["AFFECTED_PROJECT_OWNER"] = "AFFECTED_PROJECT_OWNER";
    LocalRoleOnProject["EDITOR"] = "EDITOR";
    LocalRoleOnProject["VIEWER"] = "VIEWER";
})(LocalRoleOnProject || (LocalRoleOnProject = {}));
var IncomingRoleOnProject;
(function (IncomingRoleOnProject) {
    IncomingRoleOnProject["PROJECT_OWNER"] = "PROJECT_OWNER";
    IncomingRoleOnProject["EDITOR"] = "EDITOR";
    IncomingRoleOnProject["VIEWER"] = "VIEWER";
})(IncomingRoleOnProject || (IncomingRoleOnProject = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "ADMIN";
    UserRoles["PROJECT_OWNER"] = "PROJECT_OWNER";
    UserRoles["USER"] = "USER";
})(UserRoles || (UserRoles = {}));
var Step;
(function (Step) {
    Step["CREATE_PROJECT"] = "Create Project";
    Step["PROJECT_DETAILS"] = "PROJECT_DETAILS";
    Step["ADD_DATA"] = "ADD_DATA";
    Step["CONFIGURE_DATA"] = "CONFIGURE_DATA";
    Step["EXPLORE_DATA"] = "EXPLORE_DATA";
    Step["PROCESSORS"] = "PROCESSORS";
    Step["HOME_PAGE"] = "HOME_PAGE";
})(Step || (Step = {}));

const StorageConst = {
    projectDetails: 'projectDetails',
    validationObject: 'validationObject',
    dataSubmitted: 'dataSubmitted',
    fromDate: 'fromDate',
    toDate: 'toDate',
    filterExploreData: 'filterExploreData',
    filterSessionCreated: 'filterSessionCreated',
    currentSessionId: 'currentSessionId',
    generatedModelSteup: 'generatedModelSteup',
    btnApplyClicked: 'btnApplyClicked',
    chartGnererated: 'chartGenerated',
};

class LibGlobalService {
    constructor() {
        this.currentLocalRoleOnProject$ = new BehaviorSubject(null);
    }
    /* The `getProjectDetailsFromLocalStorage()` method retrieves project details from the local storage.
  It first attempts to fetch a string value from the local storage using the key specified by
  `StorageConst.projectDetails`. If the retrieved string is not null, the method parses it as JSON
  and assigns the parsed object to the `_projectDetails` property of the class. */
    getProjectDetailsFromLocalStorage() {
        const projectDetailsString = localStorage.getItem(StorageConst.projectDetails);
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
    getRoleOfUserOnProject(connectedUSer, projectDetails) {
        var _a, _b, _c, _d, _e, _f;
        if (projectDetails) {
            this._projectDetails = projectDetails;
        }
        else {
            this.getProjectDetailsFromLocalStorage();
        }
        if (this._projectDetails !== null && this._projectDetails !== undefined) {
            let role = null;
            if (((_a = this._projectDetails) === null || _a === void 0 ? void 0 : _a.userRole) === IncomingRoleOnProject.EDITOR) {
                role = LocalRoleOnProject.EDITOR;
            }
            if (((_b = this._projectDetails) === null || _b === void 0 ? void 0 : _b.userRole) === IncomingRoleOnProject.VIEWER) {
                role = LocalRoleOnProject.VIEWER;
            }
            if (((_d = (_c = this._projectDetails) === null || _c === void 0 ? void 0 : _c.owner) === null || _d === void 0 ? void 0 : _d.userId) === (connectedUSer === null || connectedUSer === void 0 ? void 0 : connectedUSer.id) && this._projectDetails.userRole === IncomingRoleOnProject.PROJECT_OWNER) {
                role = LocalRoleOnProject.CREATOR;
            }
            if (((_f = (_e = this._projectDetails) === null || _e === void 0 ? void 0 : _e.owner) === null || _f === void 0 ? void 0 : _f.userId) !== (connectedUSer === null || connectedUSer === void 0 ? void 0 : connectedUSer.id) && this._projectDetails.userRole === IncomingRoleOnProject.PROJECT_OWNER) {
                role = LocalRoleOnProject.AFFECTED_PROJECT_OWNER;
            }
            this.currentLocalRoleOnProject$.next(role);
            return role;
        }
        this.currentLocalRoleOnProject$.next(null);
        return null;
    }
}
LibGlobalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibGlobalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibGlobalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibGlobalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibGlobalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class HeaderProjectComponent {
    constructor(libGlobalService) {
        var _a, _b;
        this.libGlobalService = libGlobalService;
        this.projectInfoOpened = new EventEmitter();
        this.localRoleOnProject = LocalRoleOnProject;
        this.project = JSON.parse((_a = localStorage.getItem('projectDetails')) !== null && _a !== void 0 ? _a : 'null');
        this.projectId = (_b = this.project) === null || _b === void 0 ? void 0 : _b.id;
    }
    ngOnChanges() {
        if (this.projectDetails) {
            this.currentRoleOnProject = this.libGlobalService.getRoleOfUserOnProject(this.connectedUser, this.projectDetails);
        }
        else {
            this.currentRoleOnProject = this.libGlobalService.getRoleOfUserOnProject(this.connectedUser);
        }
    }
    openProjectInfo() {
        this.statusProjectInfo = true;
        this.projectInfoOpened.emit(true);
    }
}
HeaderProjectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderProjectComponent, deps: [{ token: LibGlobalService }], target: i0.ɵɵFactoryTarget.Component });
HeaderProjectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HeaderProjectComponent, selector: "lib-header-project", inputs: { connectedUser: "connectedUser", projectDetails: "projectDetails", nameProject: "nameProject", showProjectConfiguration: "showProjectConfiguration", statusProjectConfiguration: "statusProjectConfiguration", showSessions: "showSessions", statusSessions: "statusSessions", showProjectInfo: "showProjectInfo", statusProjectInfo: "statusProjectInfo" }, outputs: { projectInfoOpened: "projectInfoOpened" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"project-header\">\r\n  <div class=\"project-header-color flex-container\">\r\n    <div class=\"left-item items\">\r\n      <div class=\"project-configuration\" *ngIf=\"showProjectConfiguration\">\r\n        <span\r\n          [routerLink]=\"['/configure-project']\"\r\n          [queryParams]=\"{ id: projectId }\"\r\n          [ngClass]=\"statusProjectConfiguration ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          *ngIf=\"\r\n            currentRoleOnProject === localRoleOnProject.CREATOR || currentRoleOnProject === 'AFFECTED_PROJECT_OWNER'\r\n          \"\r\n        >\r\n          Project Configuration\r\n          <svg\r\n            *ngIf=\"!statusProjectConfiguration\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M8.00002 5.33301C8.70726 5.33301 9.38554 5.61396 9.88563 6.11406C10.3857 6.61415 10.6667 7.29243 10.6667 7.99967C10.6667 8.70692 10.3857 9.38519 9.88563 9.88529C9.38554 10.3854 8.70726 10.6663 8.00002 10.6663C7.29277 10.6663 6.61449 10.3854 6.1144 9.88529C5.6143 9.38519 5.33335 8.70692 5.33335 7.99967C5.33335 7.29243 5.6143 6.61415 6.1144 6.11406C6.61449 5.61396 7.29277 5.33301 8.00002 5.33301ZM8.00002 6.66634C7.64639 6.66634 7.30726 6.80682 7.05721 7.05687C6.80716 7.30691 6.66668 7.64605 6.66668 7.99967C6.66668 8.3533 6.80716 8.69243 7.05721 8.94248C7.30726 9.19253 7.64639 9.33301 8.00002 9.33301C8.35364 9.33301 8.69278 9.19253 8.94282 8.94248C9.19287 8.69243 9.33335 8.3533 9.33335 7.99967C9.33335 7.64605 9.19287 7.30691 8.94282 7.05687C8.69278 6.80682 8.35364 6.66634 8.00002 6.66634ZM6.66668 14.6663C6.50002 14.6663 6.36001 14.5463 6.33335 14.3863L6.08668 12.6197C5.66668 12.453 5.30668 12.2263 4.96002 11.9597L3.30001 12.633C3.15335 12.6863 2.97335 12.633 2.89335 12.4863L1.56001 10.1797C1.47335 10.033 1.51335 9.85301 1.64002 9.75301L3.04668 8.64634L3.00002 7.99967L3.04668 7.33301L1.64002 6.24634C1.51335 6.14634 1.47335 5.96634 1.56001 5.81967L2.89335 3.51301C2.97335 3.36634 3.15335 3.30634 3.30001 3.36634L4.96002 4.03301C5.30668 3.77301 5.66668 3.54634 6.08668 3.37967L6.33335 1.61301C6.36001 1.45301 6.50002 1.33301 6.66668 1.33301H9.33335C9.50002 1.33301 9.64002 1.45301 9.66668 1.61301L9.91335 3.37967C10.3333 3.54634 10.6933 3.77301 11.04 4.03301L12.7 3.36634C12.8467 3.30634 13.0267 3.36634 13.1067 3.51301L14.44 5.81967C14.5267 5.96634 14.4867 6.14634 14.36 6.24634L12.9533 7.33301L13 7.99967L12.9533 8.66634L14.36 9.75301C14.4867 9.85301 14.5267 10.033 14.44 10.1797L13.1067 12.4863C13.0267 12.633 12.8467 12.693 12.7 12.633L11.04 11.9663C10.6933 12.2263 10.3333 12.453 9.91335 12.6197L9.66668 14.3863C9.64002 14.5463 9.50002 14.6663 9.33335 14.6663H6.66668ZM7.50002 2.66634L7.25335 4.40634C6.45335 4.57301 5.74668 4.99967 5.23335 5.59301L3.62668 4.89967L3.12668 5.76634L4.53335 6.79967C4.26668 7.57967 4.26668 8.42634 4.53335 9.19967L3.12002 10.2397L3.62002 11.1063L5.24002 10.413C5.75335 10.9997 6.45335 11.4263 7.24668 11.5863L7.49335 13.333H8.50668L8.75335 11.593C9.54668 11.4263 10.2467 10.9997 10.76 10.413L12.38 11.1063L12.88 10.2397L11.4667 9.20634C11.7333 8.42634 11.7333 7.57967 11.4667 6.79967L12.8733 5.76634L12.3733 4.89967L10.7667 5.59301C10.2533 4.99967 9.54668 4.57301 8.74668 4.41301L8.50002 2.66634H7.50002Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n\r\n          <svg\r\n            *ngIf=\"statusProjectConfiguration\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"14\"\r\n            viewBox=\"0 0 14 14\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.00002 4.33594C7.70726 4.33594 8.38554 4.61689 8.88563 5.11699C9.38573 5.61708 9.66668 6.29536 9.66668 7.0026C9.66668 7.70985 9.38573 8.38812 8.88563 8.88822C8.38554 9.38832 7.70726 9.66927 7.00002 9.66927C6.29277 9.66927 5.61449 9.38832 5.1144 8.88822C4.6143 8.38812 4.33335 7.70985 4.33335 7.0026C4.33335 6.29536 4.6143 5.61708 5.1144 5.11699C5.61449 4.61689 6.29277 4.33594 7.00002 4.33594ZM7.00002 5.66927C6.64639 5.66927 6.30726 5.80975 6.05721 6.05979C5.80716 6.30984 5.66668 6.64898 5.66668 7.0026C5.66668 7.35623 5.80716 7.69536 6.05721 7.94541C6.30726 8.19546 6.64639 8.33594 7.00002 8.33594C7.35364 8.33594 7.69278 8.19546 7.94282 7.94541C8.19287 7.69536 8.33335 7.35623 8.33335 7.0026C8.33335 6.64898 8.19287 6.30984 7.94282 6.05979C7.69278 5.80975 7.35364 5.66927 7.00002 5.66927ZM5.66668 13.6693C5.50002 13.6693 5.36001 13.5493 5.33335 13.3893L5.08668 11.6226C4.66668 11.4559 4.30668 11.2293 3.96002 10.9626L2.30001 11.6359C2.15335 11.6893 1.97335 11.6359 1.89335 11.4893L0.560015 9.1826C0.473348 9.03594 0.513348 8.85594 0.640015 8.75594L2.04668 7.64927L2.00002 7.0026L2.04668 6.33594L0.640015 5.24927C0.513348 5.14927 0.473348 4.96927 0.560015 4.8226L1.89335 2.51594C1.97335 2.36927 2.15335 2.30927 2.30001 2.36927L3.96002 3.03594C4.30668 2.77594 4.66668 2.54927 5.08668 2.3826L5.33335 0.615938C5.36001 0.455938 5.50002 0.335938 5.66668 0.335938H8.33335C8.50002 0.335938 8.64002 0.455938 8.66668 0.615938L8.91335 2.3826C9.33335 2.54927 9.69335 2.77594 10.04 3.03594L11.7 2.36927C11.8467 2.30927 12.0267 2.36927 12.1067 2.51594L13.44 4.8226C13.5267 4.96927 13.4867 5.14927 13.36 5.24927L11.9533 6.33594L12 7.0026L11.9533 7.66927L13.36 8.75594C13.4867 8.85594 13.5267 9.03594 13.44 9.1826L12.1067 11.4893C12.0267 11.6359 11.8467 11.6959 11.7 11.6359L10.04 10.9693C9.69335 11.2293 9.33335 11.4559 8.91335 11.6226L8.66668 13.3893C8.64002 13.5493 8.50002 13.6693 8.33335 13.6693H5.66668ZM6.50002 1.66927L6.25335 3.40927C5.45335 3.57594 4.74668 4.0026 4.23335 4.59594L2.62668 3.9026L2.12668 4.76927L3.53335 5.8026C3.26668 6.5826 3.26668 7.42927 3.53335 8.2026L2.12002 9.2426L2.62002 10.1093L4.24002 9.41594C4.75335 10.0026 5.45335 10.4293 6.24668 10.5893L6.49335 12.3359H7.50668L7.75335 10.5959C8.54668 10.4293 9.24668 10.0026 9.76002 9.41594L11.38 10.1093L11.88 9.2426L10.4667 8.20927C10.7333 7.42927 10.7333 6.5826 10.4667 5.8026L11.8733 4.76927L11.3733 3.9026L9.76668 4.59594C9.25335 4.0026 8.54668 3.57594 7.74668 3.41594L7.50002 1.66927H6.50002Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"project-info-header\" *ngIf=\"showProjectInfo\">\r\n        <span\r\n          [ngClass]=\"statusProjectInfo ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          (click)=\"openProjectInfo()\"\r\n          *ngIf=\"currentRoleOnProject !== localRoleOnProject.VIEWER\"\r\n          >Project Info\r\n          <svg\r\n            *ngIf=\"!statusProjectInfo\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <path\r\n              d=\"M7.33337 6.0026H8.66671V4.66927H7.33337M8.00004 13.3359C5.06004 13.3359 2.66671 10.9426 2.66671 8.0026C2.66671 5.0626 5.06004 2.66927 8.00004 2.66927C10.94 2.66927 13.3334 5.0626 13.3334 8.0026C13.3334 10.9426 10.94 13.3359 8.00004 13.3359ZM8.00004 1.33594C7.12456 1.33594 6.25765 1.50838 5.44882 1.84341C4.63998 2.17844 3.90505 2.6695 3.286 3.28856C2.03575 4.5388 1.33337 6.23449 1.33337 8.0026C1.33337 9.77071 2.03575 11.4664 3.286 12.7166C3.90505 13.3357 4.63998 13.8268 5.44882 14.1618C6.25765 14.4968 7.12456 14.6693 8.00004 14.6693C9.76815 14.6693 11.4638 13.9669 12.7141 12.7166C13.9643 11.4664 14.6667 9.77071 14.6667 8.0026C14.6667 7.12712 14.4943 6.26022 14.1592 5.45138C13.8242 4.64254 13.3331 3.90762 12.7141 3.28856C12.095 2.6695 11.3601 2.17844 10.5513 1.84341C9.74243 1.50838 8.87552 1.33594 8.00004 1.33594ZM7.33337 11.3359H8.66671V7.33594H7.33337V11.3359Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n\r\n          <svg\r\n            *ngIf=\"statusProjectInfo\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.33325 6.0026H8.66658V4.66927H7.33325M7.99992 13.3359C5.05992 13.3359 2.66659 10.9426 2.66659 8.0026C2.66659 5.0626 5.05992 2.66927 7.99992 2.66927C10.9399 2.66927 13.3333 5.0626 13.3333 8.0026C13.3333 10.9426 10.9399 13.3359 7.99992 13.3359ZM7.99992 1.33594C7.12444 1.33594 6.25753 1.50838 5.4487 1.84341C4.63986 2.17844 3.90493 2.6695 3.28587 3.28856C2.03563 4.5388 1.33325 6.23449 1.33325 8.0026C1.33325 9.77071 2.03563 11.4664 3.28587 12.7166C3.90493 13.3357 4.63986 13.8268 5.4487 14.1618C6.25753 14.4968 7.12444 14.6693 7.99992 14.6693C9.76803 14.6693 11.4637 13.9669 12.714 12.7166C13.9642 11.4664 14.6666 9.77071 14.6666 8.0026C14.6666 7.12712 14.4941 6.26022 14.1591 5.45138C13.8241 4.64254 13.333 3.90762 12.714 3.28856C12.0949 2.6695 11.36 2.17844 10.5511 1.84341C9.7423 1.50838 8.8754 1.33594 7.99992 1.33594ZM7.33325 11.3359H8.66658V7.33594H7.33325V11.3359Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"sessions-header\" *ngIf=\"showSessions\">\r\n        <span\r\n          *ngIf=\"currentRoleOnProject !== localRoleOnProject.VIEWER\"\r\n          [routerLink]=\"['/sessions']\"\r\n          [queryParams]=\"{ projectId: projectId }\"\r\n          [ngClass]=\"statusSessions ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          >Sessions\r\n          <svg\r\n            *ngIf=\"!statusSessions\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.33337 3.33366H5.33337L8.00004 0.666992L10.6667 3.33366H8.66671V6.28699C8.16671 6.59366 7.72004 6.97366 7.33337 7.41366V3.33366ZM14.6667 7.33366L12 4.66699V6.66699C9.59337 6.56699 7.54004 8.38033 7.33337 10.7803C6.29337 11.147 5.74671 12.2937 6.11337 13.3337C6.48004 14.3737 7.62671 14.9203 8.66671 14.5537C9.70671 14.1803 10.2534 13.0403 9.88671 12.0003C9.68671 11.427 9.23337 10.9803 8.66671 10.7803C8.98004 8.11366 11.6467 7.98033 11.9667 7.98033V9.98033L14.6667 7.33366ZM7.08671 7.72699C6.20004 7.04699 5.11337 6.66699 4.00004 6.66699V4.66699L1.33337 7.33366L4.00004 10.0003V8.00033C4.89337 8.02033 5.75337 8.33366 6.42671 8.93366C6.59337 8.50699 6.81337 8.10033 7.08671 7.72699Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n          <svg\r\n            *ngIf=\"statusSessions\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"15\"\r\n            viewBox=\"0 0 14 15\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M6.33325 3.33268H4.33325L6.99992 0.666016L9.66659 3.33268H7.66659V6.28602C7.16659 6.59268 6.71992 6.97268 6.33325 7.41268V3.33268ZM13.6666 7.33268L10.9999 4.66602V6.66602C8.59325 6.56602 6.53992 8.37935 6.33325 10.7793C5.29325 11.146 4.74659 12.2927 5.11325 13.3327C5.47992 14.3727 6.62659 14.9193 7.66659 14.5527C8.70659 14.1793 9.25325 13.0393 8.88659 11.9993C8.68659 11.426 8.23325 10.9793 7.66659 10.7793C7.97992 8.11268 10.6466 7.97935 10.9666 7.97935V9.97935L13.6666 7.33268ZM6.08659 7.72602C5.19992 7.04602 4.11325 6.66602 2.99992 6.66602V4.66602L0.333252 7.33268L2.99992 9.99935V7.99935C3.89325 8.01935 4.75325 8.33268 5.42659 8.93268C5.59325 8.50602 5.81325 8.09935 6.08659 7.72602Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-name-style center-item\" [ngClass]=\"{ 'center-item-small-screen': showProjectInfo }\">\r\n      <div *ngIf=\"nameProject\" class=\"item-center\" [matTooltip]=\"nameProject\" [matTooltipDisabled]=\"nameProject.length < 40\">\r\n        {{ nameProject }}\r\n      </div>\r\n    </div>\r\n    <div class=\"right-item\">\r\n      <div class=\"project-exit\" [routerLink]=\"['/home']\">Exit</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".project-header{width:100%;min-height:52px;position:relative}.project-header-color{margin:0;display:flex;justify-content:space-between;align-items:center;height:52px;padding-left:2rem;padding-right:2rem;background:#e4edff}.left-item{display:flex;width:30%;justify-content:flex-start}.right-item{display:flex;width:33%;justify-content:flex-end}.center-item{display:flex;width:30%;justify-content:center}.item-center{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:20rem;min-width:16rem;font-family:Red Hat Display,sans-serif!important;font-size:18px;font-weight:400;line-height:24px;letter-spacing:0em;text-align:center;color:#191842}.item-center[title]:hover:after{content:attr(title);position:absolute;background:#000;color:#fff;padding:5px;z-index:1;white-space:normal;max-width:none}.project-label{color:#191842;font-size:18px;font-weight:400}.project-exit{margin-right:2rem;cursor:pointer;top:18px;color:#392d93;font-size:12px;font-weight:400;word-wrap:break-word;cursor:pointer!important}.language{color:#2b2367;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.project-header-container{display:grid;grid-template-columns:repeat(4,1fr);gap:2.53rem;grid-template-areas:\". a a .\" \". b b .\";margin-top:15.91rem}.title-item{grid-area:a;align-self:center;justify-self:center}.exist-item{grid-area:b;align-self:center;justify-self:center}.project-configuration{cursor:pointer!important;color:var(--Links, #392d93);font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal;align-self:center;justify-self:center;text-align:center;margin-left:2rem;display:flex;white-space:nowrap}.sessions-header,.project-info-header{cursor:pointer!important;color:#392d93;font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal;align-self:center;justify-self:center;text-align:center;margin-left:1rem;display:flex;white-space:nowrap}.cog-outline{width:1rem;height:1rem;flex-shrink:0}.left-side-label{color:var(--White, #fff);font-family:Red Hat Text,sans-serif!important;font-style:normal;line-height:normal;border-radius:.9375rem;background:#105bee;width:max-content;padding-left:.5rem;padding-right:.5em;padding-top:.3rem;padding-bottom:.3rem;flex-shrink:0}.left-side-label-disabled{color:var(--Links, #392d93);font-family:Red Hat Text,sans-serif!important;background:transparent;font-style:normal;line-height:normal}.active{border-radius:.9375rem;background:#105bee;width:max-content;height:1.875rem;flex-shrink:0}@media screen and (max-width: 1124px){.center-item-small-screen{position:absolute;left:40%;width:48%}}@media screen and (max-width: 1024px){.item-center{max-width:20rem}.project-header-color{padding-left:0}}::ng-deep .mdc-tooltip--multiline .mdc-tooltip__surface{background-color:#191842b3!important;padding:.5rem;border-radius:.625rem;border:0;box-shadow:0 1px 4px #17469d40;color:var(--White, #fff)!important;font-family:Red Hat Text,sans-serif!important}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderProjectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-header-project', template: "<div class=\"project-header\">\r\n  <div class=\"project-header-color flex-container\">\r\n    <div class=\"left-item items\">\r\n      <div class=\"project-configuration\" *ngIf=\"showProjectConfiguration\">\r\n        <span\r\n          [routerLink]=\"['/configure-project']\"\r\n          [queryParams]=\"{ id: projectId }\"\r\n          [ngClass]=\"statusProjectConfiguration ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          *ngIf=\"\r\n            currentRoleOnProject === localRoleOnProject.CREATOR || currentRoleOnProject === 'AFFECTED_PROJECT_OWNER'\r\n          \"\r\n        >\r\n          Project Configuration\r\n          <svg\r\n            *ngIf=\"!statusProjectConfiguration\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M8.00002 5.33301C8.70726 5.33301 9.38554 5.61396 9.88563 6.11406C10.3857 6.61415 10.6667 7.29243 10.6667 7.99967C10.6667 8.70692 10.3857 9.38519 9.88563 9.88529C9.38554 10.3854 8.70726 10.6663 8.00002 10.6663C7.29277 10.6663 6.61449 10.3854 6.1144 9.88529C5.6143 9.38519 5.33335 8.70692 5.33335 7.99967C5.33335 7.29243 5.6143 6.61415 6.1144 6.11406C6.61449 5.61396 7.29277 5.33301 8.00002 5.33301ZM8.00002 6.66634C7.64639 6.66634 7.30726 6.80682 7.05721 7.05687C6.80716 7.30691 6.66668 7.64605 6.66668 7.99967C6.66668 8.3533 6.80716 8.69243 7.05721 8.94248C7.30726 9.19253 7.64639 9.33301 8.00002 9.33301C8.35364 9.33301 8.69278 9.19253 8.94282 8.94248C9.19287 8.69243 9.33335 8.3533 9.33335 7.99967C9.33335 7.64605 9.19287 7.30691 8.94282 7.05687C8.69278 6.80682 8.35364 6.66634 8.00002 6.66634ZM6.66668 14.6663C6.50002 14.6663 6.36001 14.5463 6.33335 14.3863L6.08668 12.6197C5.66668 12.453 5.30668 12.2263 4.96002 11.9597L3.30001 12.633C3.15335 12.6863 2.97335 12.633 2.89335 12.4863L1.56001 10.1797C1.47335 10.033 1.51335 9.85301 1.64002 9.75301L3.04668 8.64634L3.00002 7.99967L3.04668 7.33301L1.64002 6.24634C1.51335 6.14634 1.47335 5.96634 1.56001 5.81967L2.89335 3.51301C2.97335 3.36634 3.15335 3.30634 3.30001 3.36634L4.96002 4.03301C5.30668 3.77301 5.66668 3.54634 6.08668 3.37967L6.33335 1.61301C6.36001 1.45301 6.50002 1.33301 6.66668 1.33301H9.33335C9.50002 1.33301 9.64002 1.45301 9.66668 1.61301L9.91335 3.37967C10.3333 3.54634 10.6933 3.77301 11.04 4.03301L12.7 3.36634C12.8467 3.30634 13.0267 3.36634 13.1067 3.51301L14.44 5.81967C14.5267 5.96634 14.4867 6.14634 14.36 6.24634L12.9533 7.33301L13 7.99967L12.9533 8.66634L14.36 9.75301C14.4867 9.85301 14.5267 10.033 14.44 10.1797L13.1067 12.4863C13.0267 12.633 12.8467 12.693 12.7 12.633L11.04 11.9663C10.6933 12.2263 10.3333 12.453 9.91335 12.6197L9.66668 14.3863C9.64002 14.5463 9.50002 14.6663 9.33335 14.6663H6.66668ZM7.50002 2.66634L7.25335 4.40634C6.45335 4.57301 5.74668 4.99967 5.23335 5.59301L3.62668 4.89967L3.12668 5.76634L4.53335 6.79967C4.26668 7.57967 4.26668 8.42634 4.53335 9.19967L3.12002 10.2397L3.62002 11.1063L5.24002 10.413C5.75335 10.9997 6.45335 11.4263 7.24668 11.5863L7.49335 13.333H8.50668L8.75335 11.593C9.54668 11.4263 10.2467 10.9997 10.76 10.413L12.38 11.1063L12.88 10.2397L11.4667 9.20634C11.7333 8.42634 11.7333 7.57967 11.4667 6.79967L12.8733 5.76634L12.3733 4.89967L10.7667 5.59301C10.2533 4.99967 9.54668 4.57301 8.74668 4.41301L8.50002 2.66634H7.50002Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n\r\n          <svg\r\n            *ngIf=\"statusProjectConfiguration\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"14\"\r\n            viewBox=\"0 0 14 14\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.00002 4.33594C7.70726 4.33594 8.38554 4.61689 8.88563 5.11699C9.38573 5.61708 9.66668 6.29536 9.66668 7.0026C9.66668 7.70985 9.38573 8.38812 8.88563 8.88822C8.38554 9.38832 7.70726 9.66927 7.00002 9.66927C6.29277 9.66927 5.61449 9.38832 5.1144 8.88822C4.6143 8.38812 4.33335 7.70985 4.33335 7.0026C4.33335 6.29536 4.6143 5.61708 5.1144 5.11699C5.61449 4.61689 6.29277 4.33594 7.00002 4.33594ZM7.00002 5.66927C6.64639 5.66927 6.30726 5.80975 6.05721 6.05979C5.80716 6.30984 5.66668 6.64898 5.66668 7.0026C5.66668 7.35623 5.80716 7.69536 6.05721 7.94541C6.30726 8.19546 6.64639 8.33594 7.00002 8.33594C7.35364 8.33594 7.69278 8.19546 7.94282 7.94541C8.19287 7.69536 8.33335 7.35623 8.33335 7.0026C8.33335 6.64898 8.19287 6.30984 7.94282 6.05979C7.69278 5.80975 7.35364 5.66927 7.00002 5.66927ZM5.66668 13.6693C5.50002 13.6693 5.36001 13.5493 5.33335 13.3893L5.08668 11.6226C4.66668 11.4559 4.30668 11.2293 3.96002 10.9626L2.30001 11.6359C2.15335 11.6893 1.97335 11.6359 1.89335 11.4893L0.560015 9.1826C0.473348 9.03594 0.513348 8.85594 0.640015 8.75594L2.04668 7.64927L2.00002 7.0026L2.04668 6.33594L0.640015 5.24927C0.513348 5.14927 0.473348 4.96927 0.560015 4.8226L1.89335 2.51594C1.97335 2.36927 2.15335 2.30927 2.30001 2.36927L3.96002 3.03594C4.30668 2.77594 4.66668 2.54927 5.08668 2.3826L5.33335 0.615938C5.36001 0.455938 5.50002 0.335938 5.66668 0.335938H8.33335C8.50002 0.335938 8.64002 0.455938 8.66668 0.615938L8.91335 2.3826C9.33335 2.54927 9.69335 2.77594 10.04 3.03594L11.7 2.36927C11.8467 2.30927 12.0267 2.36927 12.1067 2.51594L13.44 4.8226C13.5267 4.96927 13.4867 5.14927 13.36 5.24927L11.9533 6.33594L12 7.0026L11.9533 7.66927L13.36 8.75594C13.4867 8.85594 13.5267 9.03594 13.44 9.1826L12.1067 11.4893C12.0267 11.6359 11.8467 11.6959 11.7 11.6359L10.04 10.9693C9.69335 11.2293 9.33335 11.4559 8.91335 11.6226L8.66668 13.3893C8.64002 13.5493 8.50002 13.6693 8.33335 13.6693H5.66668ZM6.50002 1.66927L6.25335 3.40927C5.45335 3.57594 4.74668 4.0026 4.23335 4.59594L2.62668 3.9026L2.12668 4.76927L3.53335 5.8026C3.26668 6.5826 3.26668 7.42927 3.53335 8.2026L2.12002 9.2426L2.62002 10.1093L4.24002 9.41594C4.75335 10.0026 5.45335 10.4293 6.24668 10.5893L6.49335 12.3359H7.50668L7.75335 10.5959C8.54668 10.4293 9.24668 10.0026 9.76002 9.41594L11.38 10.1093L11.88 9.2426L10.4667 8.20927C10.7333 7.42927 10.7333 6.5826 10.4667 5.8026L11.8733 4.76927L11.3733 3.9026L9.76668 4.59594C9.25335 4.0026 8.54668 3.57594 7.74668 3.41594L7.50002 1.66927H6.50002Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"project-info-header\" *ngIf=\"showProjectInfo\">\r\n        <span\r\n          [ngClass]=\"statusProjectInfo ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          (click)=\"openProjectInfo()\"\r\n          *ngIf=\"currentRoleOnProject !== localRoleOnProject.VIEWER\"\r\n          >Project Info\r\n          <svg\r\n            *ngIf=\"!statusProjectInfo\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <path\r\n              d=\"M7.33337 6.0026H8.66671V4.66927H7.33337M8.00004 13.3359C5.06004 13.3359 2.66671 10.9426 2.66671 8.0026C2.66671 5.0626 5.06004 2.66927 8.00004 2.66927C10.94 2.66927 13.3334 5.0626 13.3334 8.0026C13.3334 10.9426 10.94 13.3359 8.00004 13.3359ZM8.00004 1.33594C7.12456 1.33594 6.25765 1.50838 5.44882 1.84341C4.63998 2.17844 3.90505 2.6695 3.286 3.28856C2.03575 4.5388 1.33337 6.23449 1.33337 8.0026C1.33337 9.77071 2.03575 11.4664 3.286 12.7166C3.90505 13.3357 4.63998 13.8268 5.44882 14.1618C6.25765 14.4968 7.12456 14.6693 8.00004 14.6693C9.76815 14.6693 11.4638 13.9669 12.7141 12.7166C13.9643 11.4664 14.6667 9.77071 14.6667 8.0026C14.6667 7.12712 14.4943 6.26022 14.1592 5.45138C13.8242 4.64254 13.3331 3.90762 12.7141 3.28856C12.095 2.6695 11.3601 2.17844 10.5513 1.84341C9.74243 1.50838 8.87552 1.33594 8.00004 1.33594ZM7.33337 11.3359H8.66671V7.33594H7.33337V11.3359Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n\r\n          <svg\r\n            *ngIf=\"statusProjectInfo\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.33325 6.0026H8.66658V4.66927H7.33325M7.99992 13.3359C5.05992 13.3359 2.66659 10.9426 2.66659 8.0026C2.66659 5.0626 5.05992 2.66927 7.99992 2.66927C10.9399 2.66927 13.3333 5.0626 13.3333 8.0026C13.3333 10.9426 10.9399 13.3359 7.99992 13.3359ZM7.99992 1.33594C7.12444 1.33594 6.25753 1.50838 5.4487 1.84341C4.63986 2.17844 3.90493 2.6695 3.28587 3.28856C2.03563 4.5388 1.33325 6.23449 1.33325 8.0026C1.33325 9.77071 2.03563 11.4664 3.28587 12.7166C3.90493 13.3357 4.63986 13.8268 5.4487 14.1618C6.25753 14.4968 7.12444 14.6693 7.99992 14.6693C9.76803 14.6693 11.4637 13.9669 12.714 12.7166C13.9642 11.4664 14.6666 9.77071 14.6666 8.0026C14.6666 7.12712 14.4941 6.26022 14.1591 5.45138C13.8241 4.64254 13.333 3.90762 12.714 3.28856C12.0949 2.6695 11.36 2.17844 10.5511 1.84341C9.7423 1.50838 8.8754 1.33594 7.99992 1.33594ZM7.33325 11.3359H8.66658V7.33594H7.33325V11.3359Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"sessions-header\" *ngIf=\"showSessions\">\r\n        <span\r\n          *ngIf=\"currentRoleOnProject !== localRoleOnProject.VIEWER\"\r\n          [routerLink]=\"['/sessions']\"\r\n          [queryParams]=\"{ projectId: projectId }\"\r\n          [ngClass]=\"statusSessions ? 'left-side-label' : 'left-side-label-disabled'\"\r\n          >Sessions\r\n          <svg\r\n            *ngIf=\"!statusSessions\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"16\"\r\n            height=\"16\"\r\n            viewBox=\"0 0 16 16\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M7.33337 3.33366H5.33337L8.00004 0.666992L10.6667 3.33366H8.66671V6.28699C8.16671 6.59366 7.72004 6.97366 7.33337 7.41366V3.33366ZM14.6667 7.33366L12 4.66699V6.66699C9.59337 6.56699 7.54004 8.38033 7.33337 10.7803C6.29337 11.147 5.74671 12.2937 6.11337 13.3337C6.48004 14.3737 7.62671 14.9203 8.66671 14.5537C9.70671 14.1803 10.2534 13.0403 9.88671 12.0003C9.68671 11.427 9.23337 10.9803 8.66671 10.7803C8.98004 8.11366 11.6467 7.98033 11.9667 7.98033V9.98033L14.6667 7.33366ZM7.08671 7.72699C6.20004 7.04699 5.11337 6.66699 4.00004 6.66699V4.66699L1.33337 7.33366L4.00004 10.0003V8.00033C4.89337 8.02033 5.75337 8.33366 6.42671 8.93366C6.59337 8.50699 6.81337 8.10033 7.08671 7.72699Z\"\r\n              fill=\"#392D93\"\r\n            />\r\n          </svg>\r\n          <svg\r\n            *ngIf=\"statusSessions\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"15\"\r\n            viewBox=\"0 0 14 15\"\r\n            fill=\"none\"\r\n          >\r\n            <path\r\n              d=\"M6.33325 3.33268H4.33325L6.99992 0.666016L9.66659 3.33268H7.66659V6.28602C7.16659 6.59268 6.71992 6.97268 6.33325 7.41268V3.33268ZM13.6666 7.33268L10.9999 4.66602V6.66602C8.59325 6.56602 6.53992 8.37935 6.33325 10.7793C5.29325 11.146 4.74659 12.2927 5.11325 13.3327C5.47992 14.3727 6.62659 14.9193 7.66659 14.5527C8.70659 14.1793 9.25325 13.0393 8.88659 11.9993C8.68659 11.426 8.23325 10.9793 7.66659 10.7793C7.97992 8.11268 10.6466 7.97935 10.9666 7.97935V9.97935L13.6666 7.33268ZM6.08659 7.72602C5.19992 7.04602 4.11325 6.66602 2.99992 6.66602V4.66602L0.333252 7.33268L2.99992 9.99935V7.99935C3.89325 8.01935 4.75325 8.33268 5.42659 8.93268C5.59325 8.50602 5.81325 8.09935 6.08659 7.72602Z\"\r\n              fill=\"white\"\r\n            />\r\n          </svg>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-name-style center-item\" [ngClass]=\"{ 'center-item-small-screen': showProjectInfo }\">\r\n      <div *ngIf=\"nameProject\" class=\"item-center\" [matTooltip]=\"nameProject\" [matTooltipDisabled]=\"nameProject.length < 40\">\r\n        {{ nameProject }}\r\n      </div>\r\n    </div>\r\n    <div class=\"right-item\">\r\n      <div class=\"project-exit\" [routerLink]=\"['/home']\">Exit</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".project-header{width:100%;min-height:52px;position:relative}.project-header-color{margin:0;display:flex;justify-content:space-between;align-items:center;height:52px;padding-left:2rem;padding-right:2rem;background:#e4edff}.left-item{display:flex;width:30%;justify-content:flex-start}.right-item{display:flex;width:33%;justify-content:flex-end}.center-item{display:flex;width:30%;justify-content:center}.item-center{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:20rem;min-width:16rem;font-family:Red Hat Display,sans-serif!important;font-size:18px;font-weight:400;line-height:24px;letter-spacing:0em;text-align:center;color:#191842}.item-center[title]:hover:after{content:attr(title);position:absolute;background:#000;color:#fff;padding:5px;z-index:1;white-space:normal;max-width:none}.project-label{color:#191842;font-size:18px;font-weight:400}.project-exit{margin-right:2rem;cursor:pointer;top:18px;color:#392d93;font-size:12px;font-weight:400;word-wrap:break-word;cursor:pointer!important}.language{color:#2b2367;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.project-header-container{display:grid;grid-template-columns:repeat(4,1fr);gap:2.53rem;grid-template-areas:\". a a .\" \". b b .\";margin-top:15.91rem}.title-item{grid-area:a;align-self:center;justify-self:center}.exist-item{grid-area:b;align-self:center;justify-self:center}.project-configuration{cursor:pointer!important;color:var(--Links, #392d93);font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal;align-self:center;justify-self:center;text-align:center;margin-left:2rem;display:flex;white-space:nowrap}.sessions-header,.project-info-header{cursor:pointer!important;color:#392d93;font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal;align-self:center;justify-self:center;text-align:center;margin-left:1rem;display:flex;white-space:nowrap}.cog-outline{width:1rem;height:1rem;flex-shrink:0}.left-side-label{color:var(--White, #fff);font-family:Red Hat Text,sans-serif!important;font-style:normal;line-height:normal;border-radius:.9375rem;background:#105bee;width:max-content;padding-left:.5rem;padding-right:.5em;padding-top:.3rem;padding-bottom:.3rem;flex-shrink:0}.left-side-label-disabled{color:var(--Links, #392d93);font-family:Red Hat Text,sans-serif!important;background:transparent;font-style:normal;line-height:normal}.active{border-radius:.9375rem;background:#105bee;width:max-content;height:1.875rem;flex-shrink:0}@media screen and (max-width: 1124px){.center-item-small-screen{position:absolute;left:40%;width:48%}}@media screen and (max-width: 1024px){.item-center{max-width:20rem}.project-header-color{padding-left:0}}::ng-deep .mdc-tooltip--multiline .mdc-tooltip__surface{background-color:#191842b3!important;padding:.5rem;border-radius:.625rem;border:0;box-shadow:0 1px 4px #17469d40;color:var(--White, #fff)!important;font-family:Red Hat Text,sans-serif!important}\n"] }]
        }], ctorParameters: function () { return [{ type: LibGlobalService }]; }, propDecorators: { connectedUser: [{
                type: Input
            }], projectDetails: [{
                type: Input
            }], nameProject: [{
                type: Input
            }], showProjectConfiguration: [{
                type: Input
            }], statusProjectConfiguration: [{
                type: Input
            }], showSessions: [{
                type: Input
            }], statusSessions: [{
                type: Input
            }], showProjectInfo: [{
                type: Input
            }], statusProjectInfo: [{
                type: Input
            }], projectInfoOpened: [{
                type: Output
            }] } });

class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.logoURL = '';
        this.initials = '';
        this.loggedIn = true;
        this.username = '';
        this.email = '';
        this.role = '';
        this.imageSrc = '/assets/help.svg';
        this.helpFaqTooltip = 'Help & FAQ';
        this.selectedLanguage = 'EN';
        this.mainLanguage = 'EN';
        this.secondLanguage = 'FR';
        this.userRoles = UserRoles;
        this.isHomeUrl = false;
    }
    ngOnChanges(changes) {
        if (changes.currentUser) {
            this.currentUser = changes.currentUser.currentValue;
            if (this.currentUser) {
                this.username = `${this.currentUser.firstname} ${this.currentUser.lastname}`;
                this.role = this.currentUser.role;
                this.email = this.currentUser.email;
                this.initials = this.currentUser.firstname.charAt(0);
            }
        }
        if (changes.loggedIn) {
            this.loggedIn = changes.loggedIn.currentValue;
        }
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const currentUrl = this.router.url;
                this.isHomeUrl = currentUrl === '/home';
            }
        });
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    navigateToHelp() {
        const url = 'https://mass-analytics.atlassian.net/wiki/x/BgCNAg';
        window.open(url, '_blank');
    }
    navigateToManageTeam() {
        this.router.navigate(['/manage-team']);
    }
    navigateToProjects() {
        this.router.navigate(['/home']);
    }
    navigateToAccountSettings() {
        this.router.navigate(['/account-settings']);
    }
    /** SET LANGUAGE FOR APPLICATION **/
    setLanguage(selectedLanguage) {
        if (selectedLanguage !== this.selectedLanguage) {
            this.secondLanguage = this.selectedLanguage;
            this.selectedLanguage = selectedLanguage;
        }
        else if (selectedLanguage !== this.secondLanguage) {
            this.selectedLanguage = this.secondLanguage;
            this.secondLanguage = selectedLanguage;
        }
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HeaderComponent, selector: "app-header", inputs: { logoURL: "logoURL", loggedIn: "loggedIn", currentUser: "currentUser" }, viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: ["menuTrigger"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"header\">\r\n  <div class=\"header-container\">\r\n    <div class=\"left-side\">\r\n      <img [src]=\"logoURL\" alt=\"Logo\" routerLink=\"/home\" />\r\n      <ul>\r\n        <li *ngIf=\"loggedIn\" [ngClass]=\"isHomeUrl ? 'home-url' : ''\" class=\"project\" (click)=\"navigateToProjects()\">Projects</li>\r\n      </ul>\r\n    </div>\r\n    <div [ngClass]=\"!loggedIn ? 'right-side not-logged-in' : 'right-side'\">\r\n      <img\r\n        *ngIf=\"loggedIn\"\r\n        class=\"help\"\r\n        [src]=\"imageSrc\"\r\n        (mouseenter)=\"imageSrc = '/assets/help_bleu.svg'\"\r\n        (mouseleave)=\"imageSrc = '/assets/help.svg'\"\r\n        alt=\"help SVG\"\r\n        [matTooltip]=\"helpFaqTooltip\"\r\n        (click)=\"navigateToHelp()\"\r\n      />\r\n      <div *ngIf=\"loggedIn\" class=\"initial\" mat-button [matMenuTriggerFor]=\"menu\">\r\n        {{ initials | uppercase }}\r\n      </div>\r\n      <div class=\"selected-language\" [matMenuTriggerFor]=\"menuLanguage\">{{ selectedLanguage }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- switch between language-->\r\n<mat-menu panelClass=\"panel-menu\" #menuLanguage=\"matMenu\" class=\"language-menu-item\">\r\n  <div class=\"menu-language\">\r\n    <button mat-menu-item  (click)=\"setLanguage(secondLanguage)\">{{ secondLanguage }}</button>\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu #menu=\"matMenu\" >\r\n  <div class=\"avatar-popup\">\r\n    <div class=\"user-details-container\">\r\n      <ul>\r\n        <li class=\"username\">\r\n          {{ username }}\r\n        </li>\r\n        <li class=\"userEmail\">\r\n          {{ email }}\r\n        </li>\r\n        <li class=\"userRole\" *ngIf=\"role\">\r\n          {{ role }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <hr />\r\n    <div class=\"actions-container\">\r\n      <button class=\"header-menu\" (click)=\"navigateToManageTeam()\" *ngIf=\"role === userRoles.ADMIN\">Manage team</button>\r\n      <button class=\"header-menu\" (click)=\"navigateToAccountSettings()\">Account settings</button>\r\n      <button class=\"header-menu\" (click)=\"logOut()\">Log out</button>\r\n    </div>\r\n  </div>\r\n</mat-menu>\r\n", styles: [".header{position:absolute;top:0;left:0;right:0;z-index:2;border-bottom:1px solid #acc8ff;background-color:#fff;height:59px}.header .header-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;height:100%}.header .header-container .left-side{display:inline-flex;align-items:center;justify-content:center}.header .header-container .left-side img{cursor:pointer;margin-left:24px;margin-right:8.81rem;margin-bottom:8px}.header .header-container .left-side ul{cursor:pointer;height:100%;margin:0;padding:0}.header .header-container .left-side .project{width:103px;height:58px;margin-bottom:0!important;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;color:#2b2367;text-align:center;font-style:normal;font-weight:600;font-family:Red Hat Text,sans-serif;font-size:14px;line-height:19px;letter-spacing:0em}.header .header-container .left-side .project:hover,.header .header-container .home-url{background:#e4edff;color:#105bee;width:103px;height:58px}.header .header-container .not-logged-in{width:min-content!important}.header .header-container .right-side{justify-content:space-between;display:inline-flex;align-items:center;gap:1.5rem;margin-right:1.5rem}.header .header-container .right-side .help{cursor:pointer;height:31px;width:31px}.header .header-container .right-side .initial{cursor:pointer;width:31px;height:31px;text-transform:uppercase;border-radius:50%;color:#fff;background-color:#105bee;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-style:normal;font-weight:700;line-height:normal}.header .header-container .right-side .selected-language{font-family:Red Hat Text,sans-serif!important;cursor:pointer;color:#2b2367;min-width:3rem;font-size:14px;font-style:normal;font-weight:500;line-height:normal;float:right}::ng-deep .cdk-overlay-container{max-width:none!important}::ng-deep .cdk-overlay-container:after{top:-5px;left:20px;width:0;height:0;content:\"\";position:absolute}::ng-deep .cdk-overlay-container .mat-menu-panel{position:absolute;top:0;left:0;z-index:9999}::ng-deep .initial.mat-button{position:relative}.avatar-popup{background-color:#fff;width:max-content;height:max-content;text-align:left;padding:5px!important;max-width:15rem}ul{list-style-type:none;padding-left:15px}li{margin-bottom:7px}.username{color:var(--black, #191842);font-size:14px;font-style:normal;font-weight:500;line-height:normal;font-family:Red Hat Text,sans-serif!important}.userEmail{color:var(--dark-blue, #2b2367);font-size:12px;font-style:normal;font-weight:300;line-height:normal;font-family:Red Hat Text,sans-serif!important}.userRole{cursor:pointer;border-radius:6px;border:.5px solid var(--primary-blue, #105bee);color:var(--primary-blue, #105bee);font-size:10px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:.5px;text-transform:uppercase;width:-moz-fit-content;width:fit-content;text-align:center;padding:4px;font-family:Red Hat Text,sans-serif!important}.header-menu:hover{background-color:var(--highlight, #def5f5)}.header-menu{color:#392d93;font-size:12px;font-style:normal;font-weight:400;line-height:normal;background-color:#fff;height:27px;text-align:left;border:none;padding-left:15px;font-family:Red Hat Text,sans-serif!important}.user-details-container ul{padding:0 15px}.actions-container{display:grid;gap:10px;padding:0;border:none}hr{height:1px;background-color:#e5e8f7;border:none}::ng-deep .mdc-list{margin:0;padding:0!important}::ng-deep .mdc-tooltip__surface{background-color:#fff!important;padding:.5rem;border-radius:0!important;border:0;box-shadow:0 1px 4px #17469d40!important;color:var(--Dark-Blue, #2b2367)!important;font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal}::ng-deep .language-menu-item .mat-mdc-menu-content ::ng-deep span{color:var(--Links, #392d93)!important;font-family:Red Hat Text,sans-serif!important;font-size:.75rem!important;font-style:normal!important;font-weight:400!important;line-height:normal!important}::ng-deep .mat-mdc-menu-panel.mat-mdc-menu-panel{margin-top:.5rem;min-width:max-content!important;max-width:max-content!important;box-shadow:0 2px 4px #0000001a}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "pipe", type: i2.UpperCasePipe, name: "uppercase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-header', template: "<div class=\"header\">\r\n  <div class=\"header-container\">\r\n    <div class=\"left-side\">\r\n      <img [src]=\"logoURL\" alt=\"Logo\" routerLink=\"/home\" />\r\n      <ul>\r\n        <li *ngIf=\"loggedIn\" [ngClass]=\"isHomeUrl ? 'home-url' : ''\" class=\"project\" (click)=\"navigateToProjects()\">Projects</li>\r\n      </ul>\r\n    </div>\r\n    <div [ngClass]=\"!loggedIn ? 'right-side not-logged-in' : 'right-side'\">\r\n      <img\r\n        *ngIf=\"loggedIn\"\r\n        class=\"help\"\r\n        [src]=\"imageSrc\"\r\n        (mouseenter)=\"imageSrc = '/assets/help_bleu.svg'\"\r\n        (mouseleave)=\"imageSrc = '/assets/help.svg'\"\r\n        alt=\"help SVG\"\r\n        [matTooltip]=\"helpFaqTooltip\"\r\n        (click)=\"navigateToHelp()\"\r\n      />\r\n      <div *ngIf=\"loggedIn\" class=\"initial\" mat-button [matMenuTriggerFor]=\"menu\">\r\n        {{ initials | uppercase }}\r\n      </div>\r\n      <div class=\"selected-language\" [matMenuTriggerFor]=\"menuLanguage\">{{ selectedLanguage }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- switch between language-->\r\n<mat-menu panelClass=\"panel-menu\" #menuLanguage=\"matMenu\" class=\"language-menu-item\">\r\n  <div class=\"menu-language\">\r\n    <button mat-menu-item  (click)=\"setLanguage(secondLanguage)\">{{ secondLanguage }}</button>\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu #menu=\"matMenu\" >\r\n  <div class=\"avatar-popup\">\r\n    <div class=\"user-details-container\">\r\n      <ul>\r\n        <li class=\"username\">\r\n          {{ username }}\r\n        </li>\r\n        <li class=\"userEmail\">\r\n          {{ email }}\r\n        </li>\r\n        <li class=\"userRole\" *ngIf=\"role\">\r\n          {{ role }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <hr />\r\n    <div class=\"actions-container\">\r\n      <button class=\"header-menu\" (click)=\"navigateToManageTeam()\" *ngIf=\"role === userRoles.ADMIN\">Manage team</button>\r\n      <button class=\"header-menu\" (click)=\"navigateToAccountSettings()\">Account settings</button>\r\n      <button class=\"header-menu\" (click)=\"logOut()\">Log out</button>\r\n    </div>\r\n  </div>\r\n</mat-menu>\r\n", styles: [".header{position:absolute;top:0;left:0;right:0;z-index:2;border-bottom:1px solid #acc8ff;background-color:#fff;height:59px}.header .header-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;height:100%}.header .header-container .left-side{display:inline-flex;align-items:center;justify-content:center}.header .header-container .left-side img{cursor:pointer;margin-left:24px;margin-right:8.81rem;margin-bottom:8px}.header .header-container .left-side ul{cursor:pointer;height:100%;margin:0;padding:0}.header .header-container .left-side .project{width:103px;height:58px;margin-bottom:0!important;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;color:#2b2367;text-align:center;font-style:normal;font-weight:600;font-family:Red Hat Text,sans-serif;font-size:14px;line-height:19px;letter-spacing:0em}.header .header-container .left-side .project:hover,.header .header-container .home-url{background:#e4edff;color:#105bee;width:103px;height:58px}.header .header-container .not-logged-in{width:min-content!important}.header .header-container .right-side{justify-content:space-between;display:inline-flex;align-items:center;gap:1.5rem;margin-right:1.5rem}.header .header-container .right-side .help{cursor:pointer;height:31px;width:31px}.header .header-container .right-side .initial{cursor:pointer;width:31px;height:31px;text-transform:uppercase;border-radius:50%;color:#fff;background-color:#105bee;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-style:normal;font-weight:700;line-height:normal}.header .header-container .right-side .selected-language{font-family:Red Hat Text,sans-serif!important;cursor:pointer;color:#2b2367;min-width:3rem;font-size:14px;font-style:normal;font-weight:500;line-height:normal;float:right}::ng-deep .cdk-overlay-container{max-width:none!important}::ng-deep .cdk-overlay-container:after{top:-5px;left:20px;width:0;height:0;content:\"\";position:absolute}::ng-deep .cdk-overlay-container .mat-menu-panel{position:absolute;top:0;left:0;z-index:9999}::ng-deep .initial.mat-button{position:relative}.avatar-popup{background-color:#fff;width:max-content;height:max-content;text-align:left;padding:5px!important;max-width:15rem}ul{list-style-type:none;padding-left:15px}li{margin-bottom:7px}.username{color:var(--black, #191842);font-size:14px;font-style:normal;font-weight:500;line-height:normal;font-family:Red Hat Text,sans-serif!important}.userEmail{color:var(--dark-blue, #2b2367);font-size:12px;font-style:normal;font-weight:300;line-height:normal;font-family:Red Hat Text,sans-serif!important}.userRole{cursor:pointer;border-radius:6px;border:.5px solid var(--primary-blue, #105bee);color:var(--primary-blue, #105bee);font-size:10px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:.5px;text-transform:uppercase;width:-moz-fit-content;width:fit-content;text-align:center;padding:4px;font-family:Red Hat Text,sans-serif!important}.header-menu:hover{background-color:var(--highlight, #def5f5)}.header-menu{color:#392d93;font-size:12px;font-style:normal;font-weight:400;line-height:normal;background-color:#fff;height:27px;text-align:left;border:none;padding-left:15px;font-family:Red Hat Text,sans-serif!important}.user-details-container ul{padding:0 15px}.actions-container{display:grid;gap:10px;padding:0;border:none}hr{height:1px;background-color:#e5e8f7;border:none}::ng-deep .mdc-list{margin:0;padding:0!important}::ng-deep .mdc-tooltip__surface{background-color:#fff!important;padding:.5rem;border-radius:0!important;border:0;box-shadow:0 1px 4px #17469d40!important;color:var(--Dark-Blue, #2b2367)!important;font-family:Red Hat Text,sans-serif!important;font-size:.75rem;font-style:normal;font-weight:400;line-height:normal}::ng-deep .language-menu-item .mat-mdc-menu-content ::ng-deep span{color:var(--Links, #392d93)!important;font-family:Red Hat Text,sans-serif!important;font-size:.75rem!important;font-style:normal!important;font-weight:400!important;line-height:normal!important}::ng-deep .mat-mdc-menu-panel.mat-mdc-menu-panel{margin-top:.5rem;min-width:max-content!important;max-width:max-content!important;box-shadow:0 2px 4px #0000001a}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; }, propDecorators: { logoURL: [{
                type: Input
            }], loggedIn: [{
                type: Input
            }], currentUser: [{
                type: Input
            }], menuTrigger: [{
                type: ViewChild,
                args: ['menuTrigger']
            }] } });

class SharedLibraryComponent {
}
SharedLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SharedLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SharedLibraryComponent, selector: "lib-shared-library", ngImport: i0, template: ` <p>new template</p> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-library', template: ` <p>new template</p> ` }]
        }] });

class PaginationComponent {
    constructor() {
        this.pageSizeOptions = [5, 10, 15, 20];
        this.pageSize = 5;
        this.totalItems = 0;
        this.pageChange = new EventEmitter();
        this.currentPage = 1;
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        const pageEvent = {
            currentPage: this.currentPage,
            itemsPerPage: this.pageSize,
        };
        this.pageChange.emit(pageEvent);
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PaginationComponent, selector: "app-pagination", inputs: { pageSizeOptions: "pageSizeOptions", pageSize: "pageSize", totalItems: "totalItems" }, outputs: { pageChange: "pageChange" }, ngImport: i0, template: "<mat-paginator [pageSizeOptions]=\"pageSizeOptions\"\r\n               [pageSize]=\"pageSize\" [hidePageSize]=\"true\"\r\n               [length]=\"totalItems\"\r\n               (page)=\"onPageChange($event)\">\r\n</mat-paginator>\r\n\r\n", styles: ["mat-paginator{color:#333;background-color:transparent}::ng-deep .mdc-notched-outline>*{border:none!important}.mat-paginator-page-size{border:none!important}.mat-paginator-page-size mat-select .mat-option{padding:8px 16px;font-size:14px}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-start;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}:host ::ng-deep .mat-paginator .mat-paginator-container{justify-content:flex-start}::ng-deep .mat-paginator-page-size-select{width:27px!important}::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:transparent}::ng-deep .mat-select-value{color:#005999;font-weight:700;font-size:15px}::ng-deep .mat-select-arrow{color:#005999}::ng-deep .mat-option{padding:0!important}::ng-deep .mat-option-text{text-align:right}.mat-paginator-icon>path{display:none}.mat-paginator-navigation-previous,.mat-paginator-navigation-next{display:none!important}.mat-paginator-navigation-previous .mat-paginator-icon{background-image:url(/assets/image/common-icon/previous-icon.svg)}.mat-paginator-navigation-next .mat-paginator-icon{background-image:url(/assets/image/common-icon/next-icon.svg)}\n"], dependencies: [{ kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-pagination', template: "<mat-paginator [pageSizeOptions]=\"pageSizeOptions\"\r\n               [pageSize]=\"pageSize\" [hidePageSize]=\"true\"\r\n               [length]=\"totalItems\"\r\n               (page)=\"onPageChange($event)\">\r\n</mat-paginator>\r\n\r\n", styles: ["mat-paginator{color:#333;background-color:transparent}::ng-deep .mdc-notched-outline>*{border:none!important}.mat-paginator-page-size{border:none!important}.mat-paginator-page-size mat-select .mat-option{padding:8px 16px;font-size:14px}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-start;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}:host ::ng-deep .mat-paginator .mat-paginator-container{justify-content:flex-start}::ng-deep .mat-paginator-page-size-select{width:27px!important}::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:transparent}::ng-deep .mat-select-value{color:#005999;font-weight:700;font-size:15px}::ng-deep .mat-select-arrow{color:#005999}::ng-deep .mat-option{padding:0!important}::ng-deep .mat-option-text{text-align:right}.mat-paginator-icon>path{display:none}.mat-paginator-navigation-previous,.mat-paginator-navigation-next{display:none!important}.mat-paginator-navigation-previous .mat-paginator-icon{background-image:url(/assets/image/common-icon/previous-icon.svg)}.mat-paginator-navigation-next .mat-paginator-icon{background-image:url(/assets/image/common-icon/next-icon.svg)}\n"] }]
        }], propDecorators: { pageSizeOptions: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], pageChange: [{
                type: Output
            }] } });

class SharedSelectComponent {
    constructor(fb) {
        this.fb = fb;
        this.label = '';
        this.panelClassName = '';
        this.options = [];
        this.required = false;
        this.selectedValue = new EventEmitter();
        this.disabled = false;
        this.placeholder = '';
        this.labelKey = '';
        this.valueKey = '';
        this.selectForm = this.fb.group({
            selectValue: [this.defaultValue],
        });
    }
    ngOnInit() {
        if (this.required) {
            this.selectForm.controls['selectValue'].setValidators([Validators.required]);
        }
    }
    get selectInitValue() {
        return this.selectForm.controls['selectValue'].value;
    }
    ngOnChanges(changes) {
        this.selectForm.controls['selectValue'].setValue(this.defaultValue);
        if (this.disabled) {
            this.selectForm.controls['selectValue'].disable();
        }
    }
    onChangeSelectValue(event) {
        this.selectedValue.emit(event);
    }
    getDisplayValue(option) {
        return typeof option === 'string' || typeof option === 'number' ? option : option[this.labelKey];
    }
    getValueKey(option) {
        return typeof option === 'string' || typeof option === 'number' ? option : option[this.valueKey];
    }
}
SharedSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedSelectComponent, deps: [{ token: i1$2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
SharedSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SharedSelectComponent, selector: "lib-shared-select", inputs: { label: "label", panelClassName: "panelClassName", options: "options", required: "required", defaultValue: "defaultValue", disabled: "disabled", placeholder: "placeholder", labelKey: "labelKey", valueKey: "valueKey" }, outputs: { selectedValue: "selectedValue" }, usesOnChanges: true, ngImport: i0, template: "<form [formGroup]=\"selectForm\">\r\n  <div [ngClass]=\"disabled ? 'disabledSelect' : 'select-content'\">\r\n    <mat-form-field>\r\n      <mat-label class=\"label\">{{ label }}</mat-label>\r\n      <mat-select\r\n        panelClass=\"{{ panelClassName }}\"\r\n        placeholder=\"{{ label }}\"\r\n        (selectionChange)=\"onChangeSelectValue($event)\"\r\n        formControlName=\"selectValue\"\r\n        [required]=\"required\"\r\n        [disabled]=\"disabled\"\r\n      >\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"getValueKey(option)\">\r\n          <span class=\"option-text\">{{ getDisplayValue(option) }}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-icon class=\"keyboard_arrow_down\" [ngClass]=\"selectForm.get('selectValue')?.value ? 'select-has-value' : ''\"  matSuffix> keyboard_arrow_down </mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n</form>\r\n", styles: [".select-content ::ng-deep .mat-mdc-form-field-icon-suffix>.mat-icon,.disabledSelect ::ng-deep .mat-mdc-form-field-icon-suffix>.mat-icon{cursor:pointer;color:#392d93;padding:0!important;margin-right:.63rem;width:-moz-fit-content;width:fit-content;height:1.125rem;flex-shrink:0}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select{width:max-content!important}.select-content ::ng-deep .mat-mdc-text-field-wrapper,.disabledSelect ::ng-deep .mat-mdc-text-field-wrapper{width:min-content!important}.select-content ::ng-deep .mat-mdc-form-field-infix,.disabledSelect ::ng-deep .mat-mdc-form-field-infix{cursor:pointer;width:min-content!important;height:48px;min-height:0;padding-top:20px;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-select,.disabledSelect ::ng-deep .mat-mdc-select{width:min-content!important;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-select-min-line,.disabledSelect ::ng-deep .mat-mdc-select-min-line{width:min-content!important;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{cursor:pointer;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal;width:min-content;height:min-content;max-width:10rem!important;padding-bottom:.2rem}.select-content ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled),.disabledSelect ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:transparent}.select-content ::ng-deep .mdc-text-field,.disabledSelect ::ng-deep .mdc-text-field{padding:0!important}.select-content ::ng-deep .mdc-line-ripple:before,.disabledSelect ::ng-deep .mdc-line-ripple:before{border-bottom:none!important}.select-content ::ng-deep .mdc-line-ripple:after,.disabledSelect ::ng-deep .mdc-line-ripple:after{border-bottom:none!important}.select-content ::ng-deep .mat-mdc-form-field-subscript-wrapper,.disabledSelect ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select:hover,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select:hover{border-radius:.3125rem;background:#f6f9ff}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select:focus,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select:focus{border-radius:.3125rem;background:#f6f9ff}.select-content ::ng-deep .mdc-list-item__primary-text,.disabledSelect ::ng-deep .mdc-list-item__primary-text{color:#2b2367}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #fff inset!important}::ng-deep .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{background-color:transparent!important}::ng-deep .mdc-list-item--selected{background-color:#e4edff!important;color:#191842!important}::ng-deep mat-pseudo-checkbox[state=checked]{display:none}::ng-deep .mat-mdc-select-arrow{display:none}::ng-deep .default-panel-class{min-width:21.5625rem;max-width:21.5625rem;max-height:11.0625rem;border-radius:.1875rem;background:#fff;box-shadow:0 1px 4px #17469d40;padding-right:.25rem;margin-top:.5rem}.mat-mdc-option{background-color:#fff;padding:0;padding-left:1rem;padding-right:1rem;min-height:2.188rem!important;color:#2b2367;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.mat-mdc-option ::ng-deep .mdc-list-item__primary-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.mat-mdc-option:hover{background-color:#def5f5;color:#191842}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar{width:.5rem}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar-thumb{width:.5rem;height:4.5625rem;background-color:#d3d8f2;border-radius:.375rem;border:.06px solid #fff}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar-track{background-color:transparent}::ng-deep .mat-mdc-form-field-focus-overlay{background-color:transparent!important}::ng-deep .mdc-text-field__input{margin-top:9px}.disabledSelect{opacity:.4}.select-has-value{margin-top:12px}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3$1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i4$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-select', template: "<form [formGroup]=\"selectForm\">\r\n  <div [ngClass]=\"disabled ? 'disabledSelect' : 'select-content'\">\r\n    <mat-form-field>\r\n      <mat-label class=\"label\">{{ label }}</mat-label>\r\n      <mat-select\r\n        panelClass=\"{{ panelClassName }}\"\r\n        placeholder=\"{{ label }}\"\r\n        (selectionChange)=\"onChangeSelectValue($event)\"\r\n        formControlName=\"selectValue\"\r\n        [required]=\"required\"\r\n        [disabled]=\"disabled\"\r\n      >\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"getValueKey(option)\">\r\n          <span class=\"option-text\">{{ getDisplayValue(option) }}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-icon class=\"keyboard_arrow_down\" [ngClass]=\"selectForm.get('selectValue')?.value ? 'select-has-value' : ''\"  matSuffix> keyboard_arrow_down </mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n</form>\r\n", styles: [".select-content ::ng-deep .mat-mdc-form-field-icon-suffix>.mat-icon,.disabledSelect ::ng-deep .mat-mdc-form-field-icon-suffix>.mat-icon{cursor:pointer;color:#392d93;padding:0!important;margin-right:.63rem;width:-moz-fit-content;width:fit-content;height:1.125rem;flex-shrink:0}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select{width:max-content!important}.select-content ::ng-deep .mat-mdc-text-field-wrapper,.disabledSelect ::ng-deep .mat-mdc-text-field-wrapper{width:min-content!important}.select-content ::ng-deep .mat-mdc-form-field-infix,.disabledSelect ::ng-deep .mat-mdc-form-field-infix{cursor:pointer;width:min-content!important;height:48px;min-height:0;padding-top:20px;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-select,.disabledSelect ::ng-deep .mat-mdc-select{width:min-content!important;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-select-min-line,.disabledSelect ::ng-deep .mat-mdc-select-min-line{width:min-content!important;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{cursor:pointer;padding-left:0rem!important;color:#392d93;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal;width:min-content;height:min-content;max-width:10rem!important;padding-bottom:.2rem}.select-content ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled),.disabledSelect ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:transparent}.select-content ::ng-deep .mdc-text-field,.disabledSelect ::ng-deep .mdc-text-field{padding:0!important}.select-content ::ng-deep .mdc-line-ripple:before,.disabledSelect ::ng-deep .mdc-line-ripple:before{border-bottom:none!important}.select-content ::ng-deep .mdc-line-ripple:after,.disabledSelect ::ng-deep .mdc-line-ripple:after{border-bottom:none!important}.select-content ::ng-deep .mat-mdc-form-field-subscript-wrapper,.disabledSelect ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select:hover,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select:hover{border-radius:.3125rem;background:#f6f9ff}.select-content ::ng-deep .mat-mdc-form-field-type-mat-select:focus,.disabledSelect ::ng-deep .mat-mdc-form-field-type-mat-select:focus{border-radius:.3125rem;background:#f6f9ff}.select-content ::ng-deep .mdc-list-item__primary-text,.disabledSelect ::ng-deep .mdc-list-item__primary-text{color:#2b2367}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #fff inset!important}::ng-deep .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{background-color:transparent!important}::ng-deep .mdc-list-item--selected{background-color:#e4edff!important;color:#191842!important}::ng-deep mat-pseudo-checkbox[state=checked]{display:none}::ng-deep .mat-mdc-select-arrow{display:none}::ng-deep .default-panel-class{min-width:21.5625rem;max-width:21.5625rem;max-height:11.0625rem;border-radius:.1875rem;background:#fff;box-shadow:0 1px 4px #17469d40;padding-right:.25rem;margin-top:.5rem}.mat-mdc-option{background-color:#fff;padding:0;padding-left:1rem;padding-right:1rem;min-height:2.188rem!important;color:#2b2367;font-family:Red Hat Text,sans-serif;font-size:.875rem;font-style:normal;font-weight:400;line-height:normal}.mat-mdc-option ::ng-deep .mdc-list-item__primary-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.mat-mdc-option:hover{background-color:#def5f5;color:#191842}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar{width:.5rem}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar-thumb{width:.5rem;height:4.5625rem;background-color:#d3d8f2;border-radius:.375rem;border:.06px solid #fff}::ng-deep .cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar-track{background-color:transparent}::ng-deep .mat-mdc-form-field-focus-overlay{background-color:transparent!important}::ng-deep .mdc-text-field__input{margin-top:9px}.disabledSelect{opacity:.4}.select-has-value{margin-top:12px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$2.FormBuilder }]; }, propDecorators: { label: [{
                type: Input
            }], panelClassName: [{
                type: Input
            }], options: [{
                type: Input
            }], required: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], selectedValue: [{
                type: Output
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], labelKey: [{
                type: Input
            }], valueKey: [{
                type: Input
            }] } });

class SharedLibraryModule {
}
SharedLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryModule, declarations: [SharedLibraryComponent,
        HeaderComponent,
        PaginationComponent,
        ButtonComponent,
        HeaderProjectComponent,
        SharedSelectComponent], imports: [CommonModule,
        MatPaginatorModule,
        MatMenuModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        MatTooltipModule], exports: [SharedLibraryComponent,
        HeaderComponent,
        PaginationComponent,
        ButtonComponent,
        HeaderProjectComponent,
        SharedSelectComponent] });
SharedLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryModule, imports: [CommonModule,
        MatPaginatorModule,
        MatMenuModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        MatTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SharedLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedLibraryComponent,
                        HeaderComponent,
                        PaginationComponent,
                        ButtonComponent,
                        HeaderProjectComponent,
                        SharedSelectComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatPaginatorModule,
                        MatMenuModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatSelectModule,
                        MatIconModule,
                        RouterModule,
                        ReactiveFormsModule,
                        MatTooltipModule,
                    ],
                    exports: [
                        SharedLibraryComponent,
                        HeaderComponent,
                        PaginationComponent,
                        ButtonComponent,
                        HeaderProjectComponent,
                        SharedSelectComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of shared-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, HeaderComponent, HeaderProjectComponent, PaginationComponent, SharedLibraryComponent, SharedLibraryModule, SharedLibraryService, SharedSelectComponent };
//# sourceMappingURL=shared-library.mjs.map

import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserRoles } from '../core/enums/lib-global-enum';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit, OnChanges {
    private readonly router;
    logoURL: string;
    initials: string;
    loggedIn: boolean;
    currentUser: any;
    menuTrigger?: MatMenuTrigger;
    username: string;
    email: string;
    role: string;
    imageSrc: string;
    helpFaqTooltip: string;
    selectedLanguage: string;
    mainLanguage: string;
    secondLanguage: string;
    userRoles: typeof UserRoles;
    isHomeUrl: boolean;
    constructor(router: Router);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    logOut(): void;
    navigateToHelp(): void;
    navigateToManageTeam(): void;
    navigateToProjects(): void;
    navigateToAccountSettings(): void;
    /** SET LANGUAGE FOR APPLICATION **/
    setLanguage(selectedLanguage: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "app-header", never, { "logoURL": "logoURL"; "loggedIn": "loggedIn"; "currentUser": "currentUser"; }, {}, never, never, false, never>;
}

import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavigationEnd, Router } from '@angular/router';
import { UserRoles } from '../core/enums/lib-global-enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() logoURL = '';
  initials = '';
  @Input() loggedIn = true;
  @Input() currentUser: any;

  @ViewChild('menuTrigger') menuTrigger?: MatMenuTrigger;
  username = '';
  email = '';
  role = '';
  imageSrc = '/assets/help.svg';
  helpFaqTooltip = 'Help & FAQ';
  selectedLanguage = 'EN';
  mainLanguage = 'EN';
  secondLanguage = 'FR';
  userRoles = UserRoles;
  isHomeUrl = false;

  constructor(private readonly router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentUser']) {
      this.currentUser = changes['currentUser'].currentValue;

      if (this.currentUser) {
        this.username = `${this.currentUser.firstname} ${this.currentUser.lastname}`;
        this.role = this.currentUser.role;
        this.email = this.currentUser.email;
        this.initials = this.currentUser.firstname.charAt(0);
      }
    }
    if (changes['loggedIn']) {
      this.loggedIn = changes['loggedIn'].currentValue;
    }
  }

  ngOnInit(): void {
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
  setLanguage(selectedLanguage: any) {
    if (selectedLanguage !== this.selectedLanguage) {
      this.secondLanguage = this.selectedLanguage;
      this.selectedLanguage = selectedLanguage;
    } else if (selectedLanguage !== this.secondLanguage) {
        this.selectedLanguage = this.secondLanguage;
        this.secondLanguage = selectedLanguage;
    }
  }
}

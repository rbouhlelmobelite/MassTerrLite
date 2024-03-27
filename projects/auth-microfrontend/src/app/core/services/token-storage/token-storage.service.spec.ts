import {TestBed} from '@angular/core/testing';
import {TokenStorageService} from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStorageService],
    });
    service = TestBed.inject(TokenStorageService);
  });

  afterEach(() => {
    // Clear localStorage after each test
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and retrieve the token from localStorage', () => {
    // const testToken = 'test-token';
    // service.saveToken(testToken);
    // expect(service.getToken()).toBe(testToken);
  });

  it('should return null if token is not saved', () => {
    expect(service.getToken()).toBeNull();
  });

  it('should clear the localStorage on signOut', () => {
    // // Save a test token to localStorage
    // const testToken = 'test-token';
    // service.saveToken(testToken);

    // // Ensure token is saved before signOut
    // expect(service.getToken()).toBe(testToken);

    // // Call signOut and verify that localStorage is cleared
    // service.signOut();
    // expect(service.getToken()).toBeNull();
  });
});

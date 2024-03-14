import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageConst } from '../constants/lib-StorageConst';
import { IncomingRoleOnProject, LocalRoleOnProject } from '../enums/lib-global-enum';
import * as i0 from "@angular/core";
export class LibGlobalService {
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
        if (projectDetails) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWdsb2JhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkLWxpYnJhcnkvc3JjL2NvcmUvc2VydmljZXMvbGliLWdsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBS3JGLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFNRSwrQkFBMEIsR0FBbUMsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxDQUFDO0tBc0R2RztJQXBEQzs7O2tGQUc4RTtJQUM5RSxpQ0FBaUM7UUFDL0IsTUFBTSxvQkFBb0IsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUYsSUFBSSxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7OzBGQVFzRjtJQUN0Rjs7O01BR0U7SUFDRixzQkFBc0IsQ0FBQyxhQUFtQixFQUFFLGNBQW9CO1FBQzlELElBQUcsY0FBYyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1NBQ3ZDO2FBQ0k7WUFDSCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdkUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLEtBQUsscUJBQXFCLENBQUMsTUFBTSxFQUFFO2dCQUNuRSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25FLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDbEM7WUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxhQUFhLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLGFBQWEsRUFBRTtnQkFDdEksSUFBSSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUNuQztZQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLGFBQWEsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsYUFBYSxFQUFFO2dCQUN0SSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQUM7YUFDbEQ7WUFDRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQWMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7NkdBdkRVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RvcmFnZUNvbnN0IH0gZnJvbSAnLi4vY29uc3RhbnRzL2xpYi1TdG9yYWdlQ29uc3QnO1xyXG5pbXBvcnQgeyBJbmNvbWluZ1JvbGVPblByb2plY3QsIExvY2FsUm9sZU9uUHJvamVjdCB9IGZyb20gJy4uL2VudW1zL2xpYi1nbG9iYWwtZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJHbG9iYWxTZXJ2aWNlIHtcclxuXHJcbiAgX3Byb2plY3REZXRhaWxzOiBhbnk7XHJcbiAgY3VycmVudExvY2FsUm9sZU9uUHJvamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8qIFRoZSBgZ2V0UHJvamVjdERldGFpbHNGcm9tTG9jYWxTdG9yYWdlKClgIG1ldGhvZCByZXRyaWV2ZXMgcHJvamVjdCBkZXRhaWxzIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIFxyXG5JdCBmaXJzdCBhdHRlbXB0cyB0byBmZXRjaCBhIHN0cmluZyB2YWx1ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIHVzaW5nIHRoZSBrZXkgc3BlY2lmaWVkIGJ5IFxyXG5gU3RvcmFnZUNvbnN0LnByb2plY3REZXRhaWxzYC4gSWYgdGhlIHJldHJpZXZlZCBzdHJpbmcgaXMgbm90IG51bGwsIHRoZSBtZXRob2QgcGFyc2VzIGl0IGFzIEpTT04gXHJcbmFuZCBhc3NpZ25zIHRoZSBwYXJzZWQgb2JqZWN0IHRvIHRoZSBgX3Byb2plY3REZXRhaWxzYCBwcm9wZXJ0eSBvZiB0aGUgY2xhc3MuICovXHJcbiAgZ2V0UHJvamVjdERldGFpbHNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdERldGFpbHNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yYWdlQ29uc3QucHJvamVjdERldGFpbHMpO1xyXG4gICAgaWYgKHByb2plY3REZXRhaWxzU3RyaW5nICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX3Byb2plY3REZXRhaWxzID0gSlNPTi5wYXJzZShwcm9qZWN0RGV0YWlsc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlRoZSBgZ2V0Um9sZU9mVXNlck9uUHJvamVjdChjb25uZWN0ZWRVc2VyPzogYW55KWAgbWV0aG9kIGZpcnN0IGludm9rZXMgYGdldFByb2plY3REZXRhaWxzRnJvbUxvY2FsU3RvcmFnZSgpYCBcclxudG8gZW5zdXJlIHRoZSBgX3Byb2plY3REZXRhaWxzYCBwcm9wZXJ0eSBpcyB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBmcm9tIGxvY2FsIHN0b3JhZ2UuIFxyXG5JdCB0aGVuIGNoZWNrcyBpZiBgX3Byb2plY3REZXRhaWxzYCBpcyBuZWl0aGVyIG51bGwgbm9yIHVuZGVmaW5lZC4gSWYgaXQncyBhIHZhbGlkIG9iamVjdCwgdGhlIG1ldGhvZCBcclxucHJvY2VlZHMgdG8gZGV0ZXJtaW5lIHRoZSByb2xlIG9mIHRoZSB1c2VyIG9uIHRoZSBwcm9qZWN0LiBUaGUgdXNlcidzIHJvbGUgaXMgZGV0ZXJtaW5lZCBiYXNlZCBvbiBcclxuY29uZGl0aW9ucyBjb21wYXJpbmcgdGhlIGB1c2VyUm9sZWAgYW5kIGBvd25lci51c2VySWRgIHByb3BlcnRpZXMgb2YgYF9wcm9qZWN0RGV0YWlsc2Agd2l0aCB0aGUgXHJcbmBjb25uZWN0ZWRVc2VyYCdzIElEIGFuZCBwcmVkZWZpbmVkIHJvbGUgY29uc3RhbnRzIChgSW5jb21pbmdSb2xlT25Qcm9qZWN0YCBhbmQgYExvY2FsUm9sZU9uUHJvamVjdGApLiBcclxuQWZ0ZXIgZGV0ZXJtaW5pbmcgdGhlIHJvbGUsIGl0IGlzIHB1Ymxpc2hlZCB1c2luZyBgY3VycmVudExvY2FsUm9sZU9uUHJvamVjdCQubmV4dCgpYCBhbmQgcmV0dXJuZWQuIFxyXG5JZiBgX3Byb2plY3REZXRhaWxzYCBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhlIG1ldGhvZCBicm9hZGNhc3RzIGBudWxsYCB2aWEgYGN1cnJlbnRMb2NhbFJvbGVPblByb2plY3QkLm5leHQoKWAgXHJcbmFuZCByZXR1cm5zIG51bGwsIGluZGljYXRpbmcgbm8gcm9sZSBjb3VsZCBiZSBkZXRlcm1pbmVkIGZvciB0aGUgdXNlciBvbiB0aGUgcHJvamVjdC4gKi9cclxuICAvKlxyXG4gIEluY29taW5nUm9sZU9uUHJvamVjdCA9IHJvbGVzIHRoYXQgYXJlIHJlY2VpdmVkIGZyb20gdGhlIGJhY2tlbmRcclxuICBMb2NhbFJvbGVPblByb2plY3QgPSByb2xlcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBmcm9udGVuZCAodG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZSBwcm9qZWN0IG93bmVyIGFuZCB0aGUgcmVhbCBjcmVhdG9yIG9mIHRoZSBwcm9qZWN0KVxyXG4gICovXHJcbiAgZ2V0Um9sZU9mVXNlck9uUHJvamVjdChjb25uZWN0ZWRVU2VyPzogYW55LCBwcm9qZWN0RGV0YWlscz86IGFueSkge1xyXG4gICAgaWYocHJvamVjdERldGFpbHMpIHtcclxuICAgICAgdGhpcy5fcHJvamVjdERldGFpbHMgPSBwcm9qZWN0RGV0YWlscztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFByb2plY3REZXRhaWxzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3Byb2plY3REZXRhaWxzICE9PSBudWxsICYmIHRoaXMuX3Byb2plY3REZXRhaWxzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IHJvbGUgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5fcHJvamVjdERldGFpbHM/LnVzZXJSb2xlID09PSBJbmNvbWluZ1JvbGVPblByb2plY3QuRURJVE9SKSB7XHJcbiAgICAgICAgcm9sZSA9IExvY2FsUm9sZU9uUHJvamVjdC5FRElUT1I7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX3Byb2plY3REZXRhaWxzPy51c2VyUm9sZSA9PT0gSW5jb21pbmdSb2xlT25Qcm9qZWN0LlZJRVdFUikge1xyXG4gICAgICAgIHJvbGUgPSBMb2NhbFJvbGVPblByb2plY3QuVklFV0VSO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9wcm9qZWN0RGV0YWlscz8ub3duZXI/LnVzZXJJZCA9PT0gY29ubmVjdGVkVVNlcj8uaWQgJiYgdGhpcy5fcHJvamVjdERldGFpbHMudXNlclJvbGUgPT09IEluY29taW5nUm9sZU9uUHJvamVjdC5QUk9KRUNUX09XTkVSKSB7XHJcbiAgICAgICAgcm9sZSA9IExvY2FsUm9sZU9uUHJvamVjdC5DUkVBVE9SO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9wcm9qZWN0RGV0YWlscz8ub3duZXI/LnVzZXJJZCAhPT0gY29ubmVjdGVkVVNlcj8uaWQgJiYgdGhpcy5fcHJvamVjdERldGFpbHMudXNlclJvbGUgPT09IEluY29taW5nUm9sZU9uUHJvamVjdC5QUk9KRUNUX09XTkVSKSB7XHJcbiAgICAgICAgcm9sZSA9IExvY2FsUm9sZU9uUHJvamVjdC5BRkZFQ1RFRF9QUk9KRUNUX09XTkVSO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VycmVudExvY2FsUm9sZU9uUHJvamVjdCQubmV4dChyb2xlIGFzIHN0cmluZyk7XHJcbiAgICAgIHJldHVybiByb2xlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50TG9jYWxSb2xlT25Qcm9qZWN0JC5uZXh0KG51bGwpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
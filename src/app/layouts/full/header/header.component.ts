import { animate } from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog,private service:NotificationsService) {}
  notify(message: any){
     this.service.alert('New Accident',message,{position:['bottom','right'],timeout:2000,animate:'fade',showProgressBar:true})

  }
}

// To create a component, we need Angular's "Component" function.
// It can be imported from the "angular2/core" module.
import { Component } from 'angular2/core';
import { Output } from 'angular2/core';
import { EventEmitter } from 'angular2/core';

interface Ticket {
  name : string,
  url : string
}

// A component decorator tells Angular that the "BookmarkComponent" class
// is a component and adds its meta data: the selector and the template.
@Component({
    selector: 'sp-ticket',
    // template: '<h1>Ticket</h1>'
    templateUrl: './templates/ticket.html',
    inputs: ['ticket']
})

// The "BookmarkComponent" module exports the "BookmarkComponent" class,
// because we will need it in other modules,
// e.g. to create the bookmark list.
export class TicketComponent { 

  // The bookmark property is of the type "Bookmark",
  // defined in the interface above.
  ticket: Ticket;
  // Setting the default value for the "submitted" property.
  submitted = false;

  // Events flow outside the child component and therefor need an output decorator.
  @Output() ticketChanged : EventEmitter<any> = new EventEmitter();
  @Output() ticketDeleted : EventEmitter<any> = new EventEmitter();

  // Whenever a user clicks on "Done" after editing a bookmark,
  // an event is fired, which indicates that the bookmark was changed.
  // To hide the form, the "submitted" property is set to false again.
  onSubmit( ticket : Ticket ) {
    this.submitted = false;
    this.ticketChanged.emit( ticket );
  }

  // When the "Delete" button is clicked, the event "bookmarkDeleted" 
  // will be fired.
  onDelete( ticket : Ticket ) {
    this.ticketDeleted.emit( ticket );
  }
}

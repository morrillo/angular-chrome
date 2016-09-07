import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Ticket } from './ticket.component';
import { TicketComponent } from './ticket.component';
import { ListService } from './list.service';


// The ListComponent metadata defines the component's selector,
// the url of the template and the directives used in this template.
@Component({
    selector: 'sp-list',
    templateUrl: './templates/list.html',
    directives: [ TicketComponent ],
    providers: [ ListService ]
})

export class ListComponent implements OnInit { 

  public tickets : Array< Object >;

  constructor( private listService : ListService ) {}

  // The function "getBookmarkLists" requests the bookmarks asynchronously.
  // When the promise is resolved, the callback function assigns
  // the bookmarks to the component's bookmarks property.
  getTicketLists() {
    this.listService.getTickets().then( tickets => this.tickets = tickets );
  }

  // The "ngOnInit" function gets called, when the component gets activated.
  ngOnInit() {
    this.getTicketLists();
  }

// setList uses the "ListService" to save the complete list.
  setList() {
    this.listService.setTickets( this.tickets );
  }

  // The function deletes the bookmark and saves the complete list.
  deleteTicket( ticket : Ticket, i : number ) {
    this.tickets.splice( i, 1 );
    this.setList();
  }

}

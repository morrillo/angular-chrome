import { TicketComponent } from './ticket.component';
import { TICKETS } from './list.data.constant';

// Importing the "Injectable" function from the angular2/core module
// and adding the "@Injectable" decorator lets us use dependency injection
// in this service.
import { Injectable } from 'angular2/core';

@Injectable()
export class ListService {

  // We create three variables: 
  // one for possible data in the localStorage,
  // one for our default data and
  // one for the data our service should return.
  ticketsLocalStorage = JSON.parse(  localStorage.getItem('sp-ticketlist') );
  ticketsDefaultData = TICKETS;
  ticketsToReturn = this.ticketsDefaultData;

  // The "getBookmarks()" function checks if there is data in the local storage.
  // If there is, we return this data,
  // if there isn't we return the default data.
  getTickets() {
    if ( this.ticketsLocalStorage !== null ) {
      this.ticketsToReturn = this.ticketsLocalStorage;
    }
    return Promise.resolve( this.ticketsToReturn );
  }

  // A "setBookmarks()" function saves new data in the local storage.
  setTickets( tickets : Object ) {
    localStorage.setItem( 'sp-ticketlist', JSON.stringify( tickets ) );
  }

}

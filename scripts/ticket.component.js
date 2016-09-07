System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var TicketComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            // A component decorator tells Angular that the "BookmarkComponent" class
            // is a component and adds its meta data: the selector and the template.
            TicketComponent = (function () {
                function TicketComponent() {
                    // Setting the default value for the "submitted" property.
                    this.submitted = false;
                    // Events flow outside the child component and therefor need an output decorator.
                    this.ticketChanged = new core_3.EventEmitter();
                    this.ticketDeleted = new core_3.EventEmitter();
                }
                // Whenever a user clicks on "Done" after editing a bookmark,
                // an event is fired, which indicates that the bookmark was changed.
                // To hide the form, the "submitted" property is set to false again.
                TicketComponent.prototype.onSubmit = function (ticket) {
                    this.submitted = false;
                    this.ticketChanged.emit(ticket);
                };
                // When the "Delete" button is clicked, the event "bookmarkDeleted" 
                // will be fired.
                TicketComponent.prototype.onDelete = function (ticket) {
                    this.TicketDeleted.emit(ticket);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], TicketComponent.prototype, "ticketChanged", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], TicketComponent.prototype, "ticketDeleted", void 0);
                TicketComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-ticket',
                        // template: '<h1>Ticket</h1>'
                        templateUrl: './templates/ticket.html',
                        inputs: ['ticket']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicketComponent);
                return TicketComponent;
            }());
            exports_1("TicketComponent", TicketComponent);
        }
    }
});
//# sourceMappingURL=ticket.component.js.map
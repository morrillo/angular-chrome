System.register(['angular2/core', './ticket.component', './list.service'], function(exports_1, context_1) {
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
    var core_1, ticket_component_1, list_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_component_1_1) {
                ticket_component_1 = ticket_component_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            }],
        execute: function() {
            // The ListComponent metadata defines the component's selector,
            // the url of the template and the directives used in this template.
            ListComponent = (function () {
                function ListComponent(listService) {
                    this.listService = listService;
                }
                // The function "getBookmarkLists" requests the bookmarks asynchronously.
                // When the promise is resolved, the callback function assigns
                // the bookmarks to the component's bookmarks property.
                ListComponent.prototype.getTicketLists = function () {
                    var _this = this;
                    this.listService.getTickets().then(function (tickets) { return _this.tickets = tickets; });
                };
                // The "ngOnInit" function gets called, when the component gets activated.
                ListComponent.prototype.ngOnInit = function () {
                    this.getTicketLists();
                };
                // setList uses the "ListService" to save the complete list.
                ListComponent.prototype.setList = function () {
                    this.listService.setTickets(this.tickets);
                };
                // The function deletes the bookmark and saves the complete list.
                ListComponent.prototype.deleteTicket = function (ticket, i) {
                    this.tickets.splice(i, 1);
                    this.setList();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-list',
                        templateUrl: './templates/list.html',
                        directives: [ticket_component_1.TicketComponent],
                        providers: [list_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map
import { Controller, IpcInvoke, IpcOn } from '../decorators';
import { TicketService } from '../Services/Ticket';
import { EVENTS } from '@common/events';
import { TicketFormData, TicketType } from '@common/types';

@Controller()
export class TicketController {
    constructor(
        private ticketSevice: TicketService
    ) {
    }

    @IpcInvoke(EVENTS.FETCH_TICKET)
    public async getTicket(): Promise<any> {
        return this.ticketSevice.getTicket()
    }

    @IpcInvoke(EVENTS.CREATE_TICKET)
    public async createTicket(type: TicketType, ticketData: TicketFormData): Promise<void> {
        this.ticketSevice.createTicket(type, ticketData)
    }

    @IpcInvoke(EVENTS.UPDATE_TICKET)
    public async updateTicket(id: string, type: TicketType, ticketData: TicketFormData): Promise<void> {
        this.ticketSevice.updateTicket(id,type, ticketData)
    }

    @IpcInvoke(EVENTS.DELETE_TICKET)
    public async deleteTicket(id: string, type: TicketType): Promise<void> {
        this.ticketSevice.deleteTicket(id,type)
    }
}

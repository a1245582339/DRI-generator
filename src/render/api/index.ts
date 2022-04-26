import { EVENTS } from '@common/events';
import { BaseTicketFromData, TicketFormData, TicketType } from '@common/types';
import { ipcInstance } from '@render/plugins';
export const fetchIssueDataList = async () => {
    return (await ipcInstance.send<{data: {
            [K in TicketType]: TicketFormData;
        }}[]>(EVENTS.FETCH_TICKET)).data;
}

export function createTicket<T = BaseTicketFromData>(type: TicketType , ticketData: T) {
    return ipcInstance.send(EVENTS.CREATE_TICKET, type, ticketData);
}

export function updateTicket<T = BaseTicketFromData>(id: string, type: TicketType , ticketData: T) {
    return ipcInstance.send(EVENTS.UPDATE_TICKET, id, type, ticketData);
}

export function deleteTicket(id: string, type: TicketType) {
    return ipcInstance.send(EVENTS.DELETE_TICKET, id, type);
}

export function initData(json: string) {
    return ipcInstance.send(EVENTS.INIT_DATA, json)
}

export function exportData() {
    return ipcInstance.send(EVENTS.EXPORT_DATA)
}
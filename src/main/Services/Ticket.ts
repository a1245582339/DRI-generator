import { Injectable } from "../decorators";
import Store from "electron-store";
import { TicketData, TicketFormData, TicketType } from "@common/types";
import { v4 } from "uuid";
const store = new Store();
@Injectable("TicketService")
export class TicketService {
  constructor() {
  }
  public getTicket() {
    const ticketStore = store.get("ticket", {}) as any;
    return ticketStore
  }

  public createTicket(type: TicketType, payload: TicketFormData) {
    const ticketStore = store.get("ticket", {}) as any;
    const newData = {
      ticketFormData: payload,
      id: v4(),
      createTime: Date.now(),
      updateTime: Date.now(),
      comment: "",
    };
    ticketStore[type]
      ? ticketStore[type].push(newData)
      : (ticketStore[type] = [newData]);
    store.set("ticket", {
      ...ticketStore,
    });
  }

  public updateTicket(id: string, type: TicketType, payload: TicketFormData) {
    const ticketStore = store.get("ticket", {}) as any;
    const updateData = (ticketStore[type] as TicketData[]).find(
      (item) => item.id === id
    );
    updateData.ticketFormData = payload;
    updateData.updateTime = Date.now();
    store.set("ticket", {
      ...ticketStore,
    });
  }

  public deleteTicket(id: string, type: TicketType) {
    const ticketStore = store.get("ticket", {}) as any;
    const deleteIndex = (ticketStore[type] as TicketData[]).findIndex(
      (item) => item.id === id
    );
    ticketStore[type].splice(deleteIndex, 1)
    store.set("ticket", {
      ...ticketStore,
    });
  }
}

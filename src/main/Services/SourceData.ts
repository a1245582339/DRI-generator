import { Injectable } from "../decorators";
import Store from "electron-store";
import { TicketData, TicketFormData, TicketType } from "@common/types";
import { v4 } from "uuid";
const store = new Store();

@Injectable("SourceDataService")
export class SourceDataService {
  constructor() {
  }
  public initData(json: string) {
    store.set("ticket", JSON.parse(json))
  }

  public exportData() {
    const ticketStore = store.get("ticket", {});
    return JSON.stringify(ticketStore)
  }
}

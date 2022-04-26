import { Controller, IpcInvoke } from '../decorators';
import { EVENTS } from '@common/events';
import { TicketFormData, TicketType } from '@common/types';
import { SourceDataService } from '@main/Services/SourceData';

@Controller()
export class TicketController {
    constructor(
        private sourceDataService: SourceDataService
    ) {
    }

    @IpcInvoke(EVENTS.INIT_DATA)
    public async initData(json: string): Promise<any> {
        return this.sourceDataService.initData(json)
    }

    @IpcInvoke(EVENTS.EXPORT_DATA)
    public async exportData(): Promise<string> {
        return this.sourceDataService.exportData()
    }
    
}

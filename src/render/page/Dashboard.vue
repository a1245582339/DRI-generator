<template>
    <div class="block">
        <h1>Legacy Partner Hub</h1>
        <div style="display: flex; justify-content: start;margin-bottom: 20px;">
            <el-button type="primary" style="margin-right: 0;" @click="createTicket('legacyPartnerHub')">Create Ticket
            </el-button>
        </div>
        <el-table :data="tableData.legacyPartnerHubData" :default-sort="{ prop: 'date', order: 'descending' }"
            :border="true" style="width: 1300px;">
            <el-table-column prop="ticketFormData.area" label="Area" sortable width="100" />
            <el-table-column prop="ticketFormData.issue" label="Issue" width="100" />
            <el-table-column prop="ticketFormData.externalTeam" label="External Team" sortable width="100" />
            <el-table-column label="Status" sortable width="100">
                <template #default="scope">
                    <el-tag :type="filterSatus(scope.row.ticketFormData.status)" disable-transitions>{{
                            scope.row.ticketFormData.status
                    }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.owner" label="Owner" sortable width="100" />
            <el-table-column prop="ticketFormData.note" label="Note" width="300" />
            <el-table-column label="Action" width="200">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editRow('legacyPartnerHub', scope.row)">Edit
                    </el-button>
                    <el-button type="danger" size="small" @click="deleteRow('legacyPartnerHub', scope.row)">Delete
                    </el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
    <div class="block">
        <h1>MSPH Feature Ask/By Design (Report by Partner)</h1>
        <div style="display: flex; justify-content: start;margin-bottom: 20px;">
            <el-button type="primary" style="margin-right: 0;" @click="createTicket('featureAsk')">Create Ticket
            </el-button>
        </div>
        <el-table :data="tableData.featureAskData" :default-sort="{ prop: 'date', order: 'descending' }" :border="true"
            style="width: 1300px;">
            <el-table-column prop="ticketFormData.area" label="Area" sortable width="100" />
            <el-table-column prop="ticketFormData.issue" label="Issue" width="100" />
            <el-table-column prop="ticketFormData.externalTeam" label="External Team" sortable width="100" />
            <el-table-column label="Status" sortable width="100">
                <template #default="scope">
                    <el-tag :type="filterSatus(scope.row.ticketFormData.status)" disable-transitions>{{
                            scope.row.ticketFormData.status
                    }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.owner" label="Owner" sortable width="100" />
            <el-table-column prop="ticketFormData.note" label="Note" width="300" />
            <el-table-column label="Action" width="200">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editRow('featureAsk', scope.row)">Edit</el-button>
                    <el-button type="danger" size="small" @click="deleteRow('featureAsk', scope.row)">Delete</el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
    <div class="block">
        <h1>MSPH Non-tech Issues (Report by Partner) </h1>
        <div style="display: flex; justify-content: start;margin-bottom: 20px;">
            <el-button type="primary" style="margin-right: 0;" @click="createTicket('nonTechIssue')">Create Ticket
            </el-button>
        </div>
        <el-table :data="tableData.nonTechIssueTableData" :default-sort="{ prop: 'date', order: 'descending' }"
            :border="true" style="width: 1300px;">
            <el-table-column prop="ticketFormData.area" label="Area" sortable width="100" />
            <el-table-column prop="ticketFormData.issue" label="Issue" width="100" />
            <el-table-column prop="ticketFormData.severity" label="Severity" sortable width="100" />
            <el-table-column prop="ticketFormData.ticket" label="Ticket" width="100">
                <template #default="scope">
                    <el-button @click="openLink(scope.row.ticketFormData.ticket)" v-if="scope.row.ticketFormData.ticket"
                        type="text">Incident</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.externalTeam" label="External Team" sortable width="100" />
            <el-table-column label="Status" sortable width="100">
                <template #default="scope">
                    <el-tag :type="filterSatus(scope.row.ticketFormData.status)" disable-transitions>{{
                            scope.row.ticketFormData.status
                    }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.owner" label="Owner" sortable width="100" />
            <el-table-column prop="ticketFormData.note" label="Note" width="300" />
            <el-table-column prop="ticketFormData.customerImpact" label="Customer Impact" width="100" />
            <el-table-column label="Action" width="200">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editRow('nonTechIssue', scope.row)">Edit</el-button>
                    <el-button type="danger" size="small" @click="deleteRow('nonTechIssue', scope.row)">Delete
                    </el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
    <div class="block">
        <h1>MSPH Tech Issues (Report by Partner) </h1>
        <div style="display: flex; justify-content: start;margin-bottom: 20px;">
            <el-button type="primary" style="margin-right: 0;" @click="createTicket('techIssue')">Create Ticket
            </el-button>
        </div>
        <el-table :data="tableData.techIssueTableData" :default-sort="{ prop: 'date', order: 'descending' }"
            :border="true" style="width: 1300px;">
            <el-table-column prop="ticketFormData.area" label="Area" sortable width="100" />
            <el-table-column prop="ticketFormData.issue" label="Issue" width="100" />
            <el-table-column prop="ticketFormData.severity" label="Severity" sortable width="100" />
            <el-table-column prop="ticketFormData.ticket" label="Ticket" width="100">
                <template #default="scope">
                    <el-button @click="openLink(scope.row.ticketFormData.ticket)" v-if="scope.row.ticketFormData.ticket"
                        type="text">Incident</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.externalTeam" label="External Team" sortable width="100" />
            <el-table-column label="Status" sortable width="100">
                <template #default="scope">
                    <el-tag :type="filterSatus(scope.row.ticketFormData.status)" disable-transitions>{{
                            scope.row.ticketFormData.status
                    }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ticketFormData.owner" label="Owner" sortable width="100" />
            <el-table-column prop="ticketFormData.note" label="Note" width="300" />
            <el-table-column prop="ticketFormData.customerImpact" label="Customer Impact" width="100" />
            <el-table-column label="Action" width="200">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editRow('techIssue', scope.row)">Edit</el-button>
                    <el-button type="danger" size="small" @click="deleteRow('techIssue', scope.row)">Delete</el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import { BaseTicketFromData, FeatureAskFormData, LegacyPartnerHubFormData, NonTechIssueFormData, TechIssueFormData, TicketData, TicketFormData, TicketType } from '@common/types';
import { deleteTicket, fetchIssueDataList } from '@render/api';
import router from '@render/router';
import { ipcRenderer } from 'electron';
import { ElMessage, ElMessageBox } from 'element-plus';
import { onMounted, reactive } from 'vue';
const tableData = reactive<{
    techIssueTableData: TicketData<TechIssueFormData>[],
    nonTechIssueTableData: TicketData<NonTechIssueFormData>[],
    legacyPartnerHubData: TicketData<LegacyPartnerHubFormData>[],
    featureAskData: TicketData<FeatureAskFormData>[]
}>({
    techIssueTableData: [],
    nonTechIssueTableData: [],
    featureAskData: [],
    legacyPartnerHubData: []
})

const getData = async () => {
    const data = (await fetchIssueDataList())
    tableData.techIssueTableData = data['techIssue']
    tableData.nonTechIssueTableData = data['nonTechIssue']
    tableData.featureAskData = data['featureAsk']
    tableData.legacyPartnerHubData = data['legacyPartnerHub']
}

onMounted(() => {
    getData()
})

const filterSatus = (status: BaseTicketFromData['status']) => {
    if (status === 'Active') {
        return 'danger'
    } else if (status === 'Mitigate') {
        return 'warning'
    } else {
        return 'success'
    }
}
const openLink = (url: string) => {
    const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('open-url', url);
}
const createTicket = (type: TicketType) => {
    router.push({
        name: 'ticket',
        params: {
            type
        }
    })
}
const editRow = (type: TicketType, row: TicketData) => {
    router.push({
        name: 'ticket',
        params: {
            id: row.id,
            ...row.ticketFormData,
            type
        }
    })
}

const deleteRow = (type: TicketType, row: TicketData) => {
    ElMessageBox.confirm('Are you sure to delete this Ticket?', 'warning')
        .then(() => {
            deleteTicket(row.id, type)
            getData()
            ElMessage({
                type: 'success',
                message: 'Deleted!'
            })
        })
        .catch(() => {
            // catch error
        })
}
</script>
<style>
.block {
    margin-bottom: 80px;
}
</style>
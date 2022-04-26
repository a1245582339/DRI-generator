<template>
    <div style="width: 800px;">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            size='default'>
            <el-form-item label="Area" prop="area">
                <el-select v-model="ruleForm.area" placeholder="Select Area">
                    <el-option label="Account" value="Account" />
                    <el-option label="Analytics&Reports" value="Analytics&Reports" />
                    <el-option label="Contents" value="Contents" />
                    <el-option label="EE&Infra" value="EE&Infra" />
                    <el-option label="Engagement" value="Engagement" />
                    <el-option label="Monetization" value="Monetization" />
                    <el-option label="UX" value="UX" />
                    <el-option label="WordPress" value="WordPress" />
                </el-select>
            </el-form-item>
            <el-form-item label="Issue Title" prop="issue">
                <el-input v-model="ruleForm.issue" />
            </el-form-item>
            <el-form-item label="Severity" prop="severity">
                <el-select v-model="ruleForm.severity" placeholder="Select Severity">
                    <el-option label="Severity 1" value="S1" />
                    <el-option label="Severity 2" value="S2" />
                    <el-option label="Severity 3" value="S3" />
                    <el-option label="Severity 4" value="S4" />
                </el-select>
                <el-popover placement="bottom" title="Severity" :width="500" trigger="hover">
                    <template #reference>
                        <el-button style="margin-left: 5px;" :icon="InfoFilled" circle />
                    </template>
                    <img style="width: 500px;" src="../assets/severity.png" alt="" srcset="">
                </el-popover>
            </el-form-item>
            <el-form-item label="Ticket" prop="ticket" placeholder="Input ticket link">
                <el-input v-model="ruleForm.ticket" />
            </el-form-item>
            <el-form-item label="External Team" prop="area">
                <el-select v-model="ruleForm.externalTeam" placeholder="Select External Team">
                    <el-option label="/" value="/" />
                    <el-option label="BDT" value="BDT" />
                    <el-option label="BD" value="BD" />
                    <el-option label="DnI." value="DnI." />
                    <el-option label="FMT" value="FMT" />
                    <el-option label="Creator Growth" value="Creator Growth" />
                    <el-option label="Ingestion" value="Ingestion" />
                    <el-option label="Moderation" value="Moderation" />
                    <el-option label="Community" value="Community" />
                    <el-option label="MSN News" value="MSN News" />
                    <el-option label="CCMT" value="CCMT" />
                    <el-option label="XPay" value="XPay" />
                    <el-option label="CMS" value="CMS" />
                </el-select>
            </el-form-item>
            <el-form-item label="Status" prop="status">
                <el-radio-group v-model="ruleForm.status">
                    <el-radio label="Active" />
                    <el-radio label="Resolved" />
                    <el-radio label="Mitigated" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Owner" prop="owner">
                <el-input v-model="ruleForm.owner" placeholder="Input Owner Alias" />
            </el-form-item>
            <el-form-item label="Note" prop="note">
                <el-input v-model="ruleForm.note" type="textarea" />
            </el-form-item>
            <el-form-item label="Comment" prop="comment">
                <el-input v-model="ruleForm.comment" type="textarea" />
            </el-form-item>
            <el-form-item label="Customer Impact" prop="customerImpact">
                <el-switch v-model="ruleForm.customerImpact" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">{{ ticketFormData?.id ? 'Update' : 'Create' }}</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                <el-button @click="onClickCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { InfoFilled } from '@element-plus/icons-vue'
import router from '@render/router';
import { createTicket, updateTicket } from '@render/api';
import { NonTechIssueFormData } from '@common/types';

type Props = {
    ticketFormData?: NonTechIssueFormData & { id: string }
}

const { ticketFormData } = defineProps<Props>()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<NonTechIssueFormData>(ticketFormData || {
    area: 'Account',
    issue: '',
    severity: 'S4',
    ticket: '',
    externalTeam: '/',
    status: 'Active',
    owner: '',
    note: '',
    comment: '',
    customerImpact: false
})
const rules = reactive<FormRules>({
    area: [{required: true, message: 'Please select Area',}],
    issue: [{required: true, message: 'Please input Issue Title',}],
    severity: [{required: true, message: 'Please Severity Level',}],
    owner: [{required: true, message: "Please input Owner's alias",}],
})
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            if (ticketFormData?.id) {
                await updateTicket(ticketFormData.id, 'nonTechIssue', ruleForm);
                ElMessage({
                    type: 'success',
                    message: 'Update success!'
                })
            } else {
                await createTicket('nonTechIssue', ruleForm);
                ElMessage({
                    type: 'success',
                    message: 'Create success!'
                })
            }
            
            router.back()
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const onClickCancel = () => {
    router.back()
}
</script>
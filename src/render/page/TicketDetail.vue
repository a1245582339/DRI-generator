<template>
    <LegacyPartnerHubVue v-if="type === 'legacyPartnerHub'" :ticketFormData="params" />
    <FeatureAskVue v-if="type === 'featureAsk'" :ticketFormData="params" />
    <NonTechIssueVue v-if="type === 'nonTechIssue'" :ticketFormData="params" />
    <TechIssueVue v-if="type === 'techIssue'" :ticketFormData="params" />
</template>
<script lang="ts" setup>
import { TicketFormData, TicketType } from '@common/types';
import TechIssueVue from '@render/components/TechIssue.vue';
import NonTechIssueVue from '@render/components/NonTechIssue.vue';
import FeatureAskVue from '@render/components/FeatureAsk.vue';
import LegacyPartnerHubVue from '@render/components/LegacyPartnerHub.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const params = route.params as unknown as ({ type: TicketType, id: string } & TicketFormData)
const { type } = params
</script>
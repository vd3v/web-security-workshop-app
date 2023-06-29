<script setup>
import {Input, Card, Tag} from "agnostic-vue";
import stations from '../public/stations.json'
const query = ref(useRoute().query.q || '')

watch(query, (newValue, oldValue) => {
    navigateTo({ query: { q: newValue } })
})

const stationsList = computed(()=>{
    return stations.filter(station => station.name.toLowerCase().includes(query.value.toLowerCase()))
})



</script>

<template>
    <div>
        <Input v-model="query" placeholder="Llacuna..." label="Find a metro station" type="text" />       
    </div>

    <Card is-border class="mbs10" v-for="station in stationsList" v-if="stationsList.length">
      <h4 class="p16" style="width:100%" v-html="station.name"/>
      <Tag class="mie6">{{station.line}}</Tag>
    </Card>
    <Card v-else>
        Nothing found for&nbsp;<b v-html="query"/>
    </Card>

</template>
<script setup>
import Note from '../components/general/Note.vue'

const { data, pending, error, refresh } = await useAsyncData(
  'notes_list',
  () => $fetch('/api/list', { method: 'get' })
)
const notes = ref(data.value.notes)

</script>
<template>
  <div class="notes-list">
    <Note is-border class="mbs10" v-for="note in notes" :note="note"/>
  </div>
</template>
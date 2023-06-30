<!-- <script setup>
import { Header, HeaderNav, Switch, Icon, Button, Input, Loader} from "agnostic-vue"
import Note from '../../components/general/Note.vue'

const isLoading = ref(true)
const id = (useRoute().params.id)
const note = ref(null)

async function getNote(){
    const result = await $fetch('/api/getnote', { method: 'POST', body: {id} })
    note.value = result
}

onMounted(async () => {
    isLoading.value = true
    await getNote()
    isLoading.value = false
})

</script>
<template>
    <div>
        <Loader v-if="isLoading"/>
        <Note v-else :note="note" />
    </div>
</template> -->

<template>
    <div class="notes-list">
      <h1>Thank you so much for participation!</h1>
    </div>
  </template>
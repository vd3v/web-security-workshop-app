<script setup>
import { Header, HeaderNav, Switch, Icon, Button, Input, Loader} from "agnostic-vue"
import {Note} from '../../models/Note'
const emit = defineEmits(['formDidSubmit'])


const authorName = ref('')
const title = ref('')
const noteContent = ref('')
const isPrivate = ref(false)

const isLoading = ref(false)


async function addNote(){
    isLoading.value = true
    try {
        const result = await $fetch('/api/new', { method: 'POST', body: getRequestBody() })
        return result
    } catch (error) {
        alert('error when saving a note')
        console.error(error)
    }
    isLoading.value = false
}
async function formDidSubmit(){
    const {id} = await addNote()
    emit('formDidSubmit')

    navigateTo({ path: `/notes/${id}` })
    resetForm()
}
function resetForm(){
    authorName.value = ''
    title.value = ''
    noteContent.value = ''
    isPrivate.value = false
}
function getRequestBody(){
    return {...(new Note(
        unref(title),
        unref(noteContent),
        new Date(),
        unref(authorName),
        unref(isPrivate),
    ))}
}


</script>

<template>
        <form class="dialog-form-demo" @submit.prevent="formDidSubmit">
          <Input class="mbe6" :is-rounded="true" label="Author name" v-model="authorName"/>
          <Input class="mbe6" :is-rounded="true" label="Title" v-model="title"/>
          <Input class="mbe6" label="Note" type="textarea" :rows="10" :cols="5" v-model="noteContent" />
          <Switch id="31" v-model="isPrivate" label="Private note" />
          <div class="mbe16" />
          <Loader size="large" v-if="isLoading"/>
          <Button v-else type="submit" mode="primary" :is-rounded="true" :is-block="true" >
            Save
          </Button>
        </form>
</template>
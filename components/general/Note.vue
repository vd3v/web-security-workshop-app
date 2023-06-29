<script setup>
import {Note} from '../../models/Note'
import {Card} from "agnostic-vue";
const {note} = defineProps({note: Note})
</script>

<template>
    <Card is-border class="mbs10">
      <h2 class="p16" style="width:100%" v-html="note.title"/>
      <h5 class="p16">Posted by <i>{{ note.author }}</i></h5>
      <div class="mbe16" />
      <div class="p16 flex-grow-1 flex-shrink-1">
        {{ note.content }}
      </div>
      <a :href="`/notes/${note.id}`" class="p16" style="width:100%">Share link</a>
    </Card>
</template>
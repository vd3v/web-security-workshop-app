<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem, Icon, Button, Input, Dialog} from "agnostic-vue"
import AddNoteForm from './AddNoteForm.vue'

let dialog = null;
const assignDialogRef = (instance) => {
  dialog = instance;
};
const openDialog = () => {
  if (dialog) {
    dialog.show();
  }
};

const formDidSubmit = () => {
  if (dialog) {
    dialog.hide();
  }
};

</script>
<template>
  <!-- <Header isHeaderContentEnd class="p12">
    <template v-slot:logoleft>
      <nuxt-link class="flex-fill" to="/" >(un)safe notes</nuxt-link>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header">
        <HeaderNavItem>
          <nuxt-link class="flex-fill" to="/search-metro">
            Find a metro station</nuxt-link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Button class="flex items-center" @click="openDialog">
                <Icon :size="28">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"/></svg>
                </Icon>
                <span class="mis2">Add a note</span>
            </Button>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header>
  
  <Dialog id="vue-dialog" dialog-root="#portal-root" :is-animation-fade-in="true" :is-animation-slide-up="true" role="dialog" :class-names="{ title: 'h4 mbe18 flex justify-center', }" @instance="assignDialogRef" >
        <template #title>
          Add a note
        </template>
        <AddNoteForm @formDidSubmit="formDidSubmit"/>
      </Dialog> -->

</template>
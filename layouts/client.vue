<script setup>
import { useLayout } from '~/composables/layout'
import AppHeader from '~/components/ClientLayout/AppHeader.vue'
import AppFooter from '~/components/ClientLayout/AppFooter.vue'

const { containerClass, layoutState } = useLayout()
</script>

<template>
  <div class="layout-wrapper" :class="containerClass">
    <AppHeader />

    <div class="layout-main-container">
      <div class="layout-main">
        <slot></slot>
      </div>
    </div>

    <div class="layout-mask" :class="{ 'layout-mask-active': layoutState.menuActive }"></div>
    <AppFooter />
  </div>
  <Toast />
</template>

<style>

</style>

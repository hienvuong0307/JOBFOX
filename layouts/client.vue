<script setup>
import { useLayout } from '~/composables/layout'
import AppHeader from '~/components/ClientLayout/AppHeader.vue'
import AppFooter from '~/components/ClientLayout/AppFooter.vue'

const { containerClass, layoutState } = useLayout()
</script>

<template>
  <AppHeader />
  <div class="layout-wrapper overflow-visible" :class="containerClass">
    <div class="layout-main-container flex overflow-visible">
      <div class="layout-main flex-1 overflow-visible">
        <slot></slot>
      </div>
    </div>

    <div class="layout-mask" :class="{ 'layout-mask-active': layoutState.menuActive }"></div>
    <AppFooter />
  </div>
  <Toast />
</template>

<style>
.layout-wrapper,
.layout-main-container,
.layout-main {
  overflow: visible !important; /* Đảm bảo sticky hoạt động */
}
</style>

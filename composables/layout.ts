import { ref, computed } from 'vue'

export const useLayout = () => {
  const layoutState = ref({
    menuActive: false,
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    staticMenuMobileActive: false
  })

  const containerClass = computed(() => ({
    'layout-container': true,
    'ml-0': true,
    'layout-overlay': true,
    'layout-static': true,
    'layout-static-inactive': layoutState.value.staticMenuDesktopInactive,
    'layout-overlay-active': layoutState.value.overlayMenuActive,
    'layout-mobile-active': layoutState.value.staticMenuMobileActive
  }))

  const toggleMenu = () => {
    layoutState.value.menuActive = !layoutState.value.menuActive
  }

  return {
    layoutState,
    containerClass,
    toggleMenu
  }
}
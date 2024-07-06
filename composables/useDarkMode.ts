import { ref, watch } from 'vue'

export function useDarkMode() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value
        updateTheme()
    }

    const updateTheme = () => {
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    watch(isDarkMode, updateTheme, { immediate: true })

    return {
        isDarkMode,
        toggleDarkMode
    }
}
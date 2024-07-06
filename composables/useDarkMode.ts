import { ref, onMounted } from 'vue'

export function useDarkMode() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value
        updateTheme()
    }

    const updateTheme = () => {
        if (process.client) {
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    onMounted(() => {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        updateTheme()
    })

    return {
        isDarkMode,
        toggleDarkMode
    }
}
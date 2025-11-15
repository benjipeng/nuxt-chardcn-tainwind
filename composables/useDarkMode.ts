export function useDarkMode() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value
        updateTheme()
        // Persist to localStorage
        if (process.client) {
            localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light')
        }
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
        // Check localStorage first, then fall back to system preference
        const savedTheme = localStorage.getItem('darkMode')

        if (savedTheme) {
            isDarkMode.value = savedTheme === 'dark'
        } else {
            isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        updateTheme()
    })

    return {
        isDarkMode,
        toggleDarkMode
    }
}
export const useClickOutside = (target_ref: any, callback_fn: Function) => {
    if (!target_ref) return

    let listener = (e: any) => {
        if (e.target == target_ref.value || e.composedPath().includes(target_ref.value)) {
            return
        }
        if (typeof callback_fn == 'function') {
            callback_fn()
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', listener)
    })
    return {
        listener
    }
}
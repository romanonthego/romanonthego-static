let busyWith = false

export const busy = ref => {
  busyWith = ref
}

export const isBusy = ref => {
  return !busyWith || busyWith === ref
}

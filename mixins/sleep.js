export default {
  methods: {
    sleep(time) {
      return new Promise(resolve => {
        return setTimeout(() => {
          resolve()
        }, time)
      })
    },
  },
}

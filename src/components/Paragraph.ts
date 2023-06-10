import {defineComponent, h} from 'vue'

export default defineComponent({
  name: 'Paragraph',
  props: {
    as: {
      type: String,
      default: 'p'
    },
  },
  // slots: Object as SlotsType<{
  //   title: any
  //   content: any
  // }>,
  setup (props, { slots }) {
    return () => h('div', [
      slots.title && h(props.as, {
        class: []
      }, slots.title()),
      slots.content && h(props.as, { class: [] }, slots.content())
    ])
  }
})

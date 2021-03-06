import {Component, Vue} from 'vue-property-decorator'
import WithRender from './index.html'

import ColllectColllection from '../../components/colllection/Colllection'

@WithRender
@Component({
  components: {
    ColllectColllection,
  },
})
export default class InboxPage extends Vue {
  private static colllectionName: string = 'Inbox'
  private encodedColllectionPath: string = encodeURIComponent(btoa(InboxPage.colllectionName))
}

import {Component, Vue} from 'vue-property-decorator'
import WithRender from './index.html'

import ColllectCollection from '../../components/collection/Collection'

@WithRender
@Component({
  components: {
    ColllectCollection,
  },
})
export default class InboxPage extends Vue {
  private static collectionName: string = 'Inbox'
  private encodedCollectionPath: string = encodeURIComponent(btoa(InboxPage.collectionName))
}
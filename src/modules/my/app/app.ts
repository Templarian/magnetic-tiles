import { LightningElement, track } from 'lwc';
import {
    mdiDiceD20,
    mdiGithubCircle,
    mdiBorderNoneVariant,
    mdiBorderStyle,
    mdiAccountBox,
    mdiChevronRight,
    mdiCommentAlert
} from '@mdi/js';

export default class App extends LightningElement {
    @track mdiDiceD20 = mdiDiceD20;
    @track mdiGithubCircle = mdiGithubCircle;
    @track mdiBorderNoneVariant = mdiBorderNoneVariant;
    @track mdiBorderStyle = mdiBorderStyle;
    @track mdiAccountBox = mdiAccountBox;
    @track mdiChevronRight = mdiChevronRight;
    @track mdiCommentAlert = mdiCommentAlert;
}

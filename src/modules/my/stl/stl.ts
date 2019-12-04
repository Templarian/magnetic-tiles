import { LightningElement, api, track } from 'lwc';
import { mdiDownload, mdiRotate3d } from '@mdi/js';

declare const StlViewer: any;

export default class Stl extends LightningElement {
    stlViewer: any = null;
    _file: string | null = null;

    @track mdiDownload = mdiDownload;
    @track mdiRotate3d = mdiRotate3d;

    get href() {
        return `https://github.com/Templarian/magnetic-tiles/blob/master/stl/${this._file}`;
    }

    @api
    get file() {
        return this._file;
    }
    set file(v: string) {
        this._file = v;
    }

    @api rotationX = 0;
    @api rotationY = 0;
    @api rotationZ = 0;

    renderedCallback() {
        this.stlViewer = new StlViewer(
            this.template.querySelector('.webgl'),
            {
                zoom: 100,
                canvas_width: 190,
                canvas_height: 175,
                models: [
                    {
                        id: 0,
                        filename: `stl/${this._file}`,
                        rotationx: this.rotationX,
                        rotationy: this.rotationY,
                        rotationz: this.rotationZ
                    }
                ]
            });
    }
}
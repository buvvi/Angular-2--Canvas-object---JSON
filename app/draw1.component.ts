import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Ng2DragDropModule } from "ng2-drag-drop";
//Nav bar 

@Component({
    selector: 'draw1',
    template: `
<div class="col-sm-4 col-xs-4">
    <canvas #rect 
    id="myCanvas" 
    [attr.width]='_size'
    [attr.height]='_size' 
    style="border:1px solid #d3d3d3;">
    </canvas>
 
</div>
<div class="col-sm-2 col-xs-2">
Rectangle values in JSON FORMAT {{view}}
</div>
`
})

export class draw1 {
    private _size: number;
    public a=10;
    public b=10;
    public c=10;
    public d =10;

 public view = [{
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d

    }];

    //first rect
    @ViewChild("rect") rect: ElementRef; //reference 
    constructor() {
        this._size = 200;
    }
    ngAfterViewInit() {
        let context: CanvasRenderingContext2D = this.rect.nativeElement.getContext("2d");

        // happy drawing from here on
        context.fillStyle = 'blue';
        context.fillRect(this.a, this.b, this.c, this.d);
       
        
        console.log(JSON.stringify(this.view));

    
    }


}
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() item: {id: number, name: string, qty: number, price: number};
  @ViewChild('qty') qty: ElementRef;
  @ViewChild('qtyinput') qtyInput: ElementRef;  
  @ViewChild('btn') btn:ElementRef;
  @Output('remove') remove = new EventEmitter<{id: number, name: string, qty: number, price: number}>();

  changeQty(){
    if(this.btn.nativeElement.textContent == 'Modify'){
    this.qty.nativeElement.classList.toggle('ok');
    this.qty.nativeElement.classList.toggle('modify');    
    this.qtyInput.nativeElement.classList.toggle('modify');
    this.qtyInput.nativeElement.classList.toggle('ok');                        
    this.btn.nativeElement.classList.toggle('btn-info');
    this.btn.nativeElement.classList.toggle('btn-success');    
    this.btn.nativeElement.textContent = 'ok';    
    }
    else{
      this.qty.nativeElement.classList.toggle('ok');
    this.qty.nativeElement.classList.toggle('modify');    
    this.qtyInput.nativeElement.classList.toggle('modify');
    this.qtyInput.nativeElement.classList.toggle('ok');                        
    this.btn.nativeElement.classList.toggle('btn-info');
    this.btn.nativeElement.classList.toggle('btn-success');    
    this.btn.nativeElement.textContent = 'Modify'; 
    }
  }

  removeMe(){
    this.remove.emit(this.item);
  }

}

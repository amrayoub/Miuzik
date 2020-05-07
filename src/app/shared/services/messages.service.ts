import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _toastr: ToastrService) { }

  success(header: string = "", body: string = ""){
    this._toastr.success(body, header, {
      closeButton: true,
      progressBar: true,

    });
  }
  
  
  danger(header: string = "", body: string = ""){
    this._toastr.error(body, header);
  }
}

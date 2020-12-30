import { Component, OnInit } from '@angular/core';
import { RouterAdapterService } from '../_services/router-adapter/router-adapter.service';
import { FrontService } from './front.service';
import { Llama } from './llama.model';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent implements OnInit {
  llamas: Llama[];
  showErrorMessage: boolean;

  constructor(
    private frontService: FrontService,
    private router: RouterAdapterService
  ) {}

  ngOnInit() {
    return this.frontService.getFeaturedLlamas({ newest: true }).then(
      (result) => {
        this.llamas = result;
      },
      (error) => {
        this.showErrorMessage = true;
      }
    );
  }

  isListVisible(): boolean {
    return !!this.llamas && this.llamas.length > 0;
  }

  goToLlamaPage(llamaId: string) {
    this.router.goToUrl(`/llama/${llamaId}`);
  }
}

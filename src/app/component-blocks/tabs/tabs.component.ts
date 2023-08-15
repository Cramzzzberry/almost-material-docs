import { Component, Input, TemplateRef, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterViewChecked {
  @Input() variantName!: string;
  @Input() preview!: TemplateRef<any>;
  @Input() htmlCode!: string;
  @Input() jsxCode!: string;
  @Input() putCard!: string;

  tabState: number = 0;

  constructor(private highlightService: HighlightService) {}

  showTab(tabNumber: number) {
    this.tabState = tabNumber;
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}

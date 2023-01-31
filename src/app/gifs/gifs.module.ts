import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

const exportModule = [GifsPageComponent, SearchComponent, ResultComponent];

@NgModule({
  declarations: [exportModule],
  imports: [CommonModule],
  exports: [exportModule],
})
export class GifsModule {}

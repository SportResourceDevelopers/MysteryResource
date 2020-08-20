import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeOverallComponent } from './home/home-overall/home-overall.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
    declarations: [HomeComponent, HomeOverallComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CarouselModule
    ]
})
export class HomeModule {
}

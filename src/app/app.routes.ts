import { FeaturedPageComponent } from './featured-page';
import { VideosComponent } from './videos';
import { AboutPageComponent } from './about-page';

export const AppRoutes = [

{ path: '', component: FeaturedPageComponent },
{ path: 'featured', component: FeaturedPageComponent },
{ path: 'videos', component: VideosComponent },
{ path: 'about', component: AboutPageComponent }
];

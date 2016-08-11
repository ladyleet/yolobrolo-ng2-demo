import { FeaturedPageComponent } from './featured-page';
import { VideoPageComponent } from './video-page';
import { AboutPageComponent } from './about-page';

export const AppRoutes = [

{ path: '', component: FeaturedPageComponent },
{ path: 'featured', component: FeaturedPageComponent },
{ path: 'videos', component: VideoPageComponent },
{ path: 'about', component: AboutPageComponent }
];

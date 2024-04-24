import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { SiteHeaderComponent } from './site-header/site-header.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SiteHeaderComponent],
	template: ` <router-outlet /><site-header /> `,
	styles: []
})
export class AppComponent {
}

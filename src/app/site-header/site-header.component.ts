import { Component } from '@angular/core'


@Component({
	selector: 'site-header',
	standalone: true,
	imports: [],
	template: `
		<header
			class="fixed top-0 z-50 mx-auto w-full items-center justify-center bg-transparent backdrop-blur-xl">
			<div class="container flex h-16 max-w-screen-2xl items-center">
				<!-- Main Navigation -->
				<div className="mr-4 hidden md:flex">
					<nav className="flex items-center gap-4 text-sm lg:gap-6">
						Links Go Here
					</nav>
				</div>
				<div
					class="flex h-full flex-1 items-center justify-between md:justify-end">
					<nav class="items-cetner flex justify-center space-x-6">
						Log In Button
					</nav>
				</div>
			</div>
		</header>
	`,
	styles: ``
})
export class SiteHeaderComponent {}

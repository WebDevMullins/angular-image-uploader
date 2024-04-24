import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	standalone: true,
	template: `
		<main class="flex min-h-dvh flex-col items-center justify-center">
			<h1 class="text-4xl font-bold">Welcome to uploadIt!</h1>
		</main>
	`
})
export default class HomeComponent {}

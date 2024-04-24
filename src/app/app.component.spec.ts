import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { beforeEach, describe, expect, it } from 'vitest'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, AppComponent]
		}).compileComponents()
	})

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app).toBeTruthy()
	})
})

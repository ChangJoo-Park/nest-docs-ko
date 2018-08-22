import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BasePageComponent } from '../page/page.component';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstStepsComponent extends BasePageComponent {
  get bootstrap(): string {
    return `
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}
bootstrap();
`;
  }
}

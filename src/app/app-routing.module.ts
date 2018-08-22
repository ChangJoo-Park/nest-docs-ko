import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';
import { FirstStepsComponent } from './homepage/pages/first-steps/first-steps.component';
import { ControllersComponent } from './homepage/pages/controllers/controllers.component';
import { ComponentsComponent } from './homepage/pages/components/components.component';
import { ModulesComponent } from './homepage/pages/modules/modules.component';
import { MiddlewaresComponent } from './homepage/pages/middlewares/middlewares.component';
import { PipesComponent } from './homepage/pages/pipes/pipes.component';
import { GuardsComponent } from './homepage/pages/guards/guards.component';
import { ExceptionFiltersComponent } from './homepage/pages/exception-filters/exception-filters.component';
import { InterceptorsComponent } from './homepage/pages/interceptors/interceptors.component';
import { DependencyInjectionComponent } from './homepage/pages/fundamentals/dependency-injection/dependency-injection.component';
import { AsyncComponentsComponent } from './homepage/pages/fundamentals/async-components/async-components.component';
import { CircularDependencyComponent } from './homepage/pages/fundamentals/circular-dependency/circular-dependency.component';
import { UnitTestingComponent } from './homepage/pages/fundamentals/unit-testing/unit-testing.component';
import { E2eTestingComponent } from './homepage/pages/fundamentals/e2e-testing/e2e-testing.component';
import { GatewaysComponent } from './homepage/pages/websockets/gateways/gateways.component';
import { AdapterComponent } from './homepage/pages/websockets/adapter/adapter.component';
import { WsInterceptorsComponent } from './homepage/pages/websockets/interceptors/interceptors.component';
import { WsExceptionFiltersComponent } from './homepage/pages/websockets/exception-filters/exception-filters.component';
import { WsGuardsComponent } from './homepage/pages/websockets/guards/guards.component';
import { WsPipesComponent } from './homepage/pages/websockets/pipes/pipes.component';
import { BasicsComponent } from './homepage/pages/microservices/basics/basics.component';
import { RedisComponent } from './homepage/pages/microservices/redis/redis.component';
import { MicroservicesPipesComponent } from './homepage/pages/microservices/pipes/pipes.component';
import { MicroservicesExceptionFiltersComponent } from './homepage/pages/microservices/exception-filters/exception-filters.component';
import { MicroservicesGuardsComponent } from './homepage/pages/microservices/guards/guards.component';
import { MicroservicesInterceptorsComponent } from './homepage/pages/microservices/interceptors/interceptors.component';
import { CustomTransportComponent } from './homepage/pages/microservices/custom-transport/custom-transport.component';
import { HierarchicalInjectorComponent } from './homepage/pages/advanced/hierarchical-injector/hierarchical-injector.component';
import { MixinComponentsComponent } from './homepage/pages/advanced/mixin-components/mixin-components.component';
import { SqlTypeormComponent } from './homepage/pages/recipes/sql-typeorm/sql-typeorm.component';
import { ExpressInstanceComponent } from './homepage/pages/faq/express-instance/express-instance.component';
import { GlobalPrefixComponent } from './homepage/pages/faq/global-prefix/global-prefix.component';
import { LifecycleEventsComponent } from './homepage/pages/faq/lifecycle-events/lifecycle-events.component';
import { HybridApplicationComponent } from './homepage/pages/faq/hybrid-application/hybrid-application.component';
import { MultipleServersComponent } from './homepage/pages/faq/multiple-servers/multiple-servers.component';
import { MongodbComponent } from './homepage/pages/recipes/mongodb/mongodb.component';
import { SqlSequelizeComponent } from './homepage/pages/recipes/sql-sequelize/sql-sequelize.component';
import { PassportComponent } from './homepage/pages/recipes/passport/passport.component';
import { CqrsComponent } from './homepage/pages/recipes/cqrs/cqrs.component';
import { MockgooseComponent } from './homepage/pages/recipes/mockgoose/mockgoose.component';
import { CustomDecoratorsComponent } from './homepage/pages/custom-decorators/custom-decorators.component';
import { SwaggerComponent } from './homepage/pages/recipes/swagger/swagger.component';
import { ExecutionContextComponent } from './homepage/pages/execution-context/execution-context.component';
import { QuickStartComponent } from './homepage/pages/graphql/quick-start/quick-start.component';
import { ResolversMapComponent } from './homepage/pages/graphql/resolvers-map/resolvers-map.component';
import { MutationsComponent } from './homepage/pages/graphql/mutations/mutations.component';
import { SubscriptionsComponent } from './homepage/pages/graphql/subscriptions/subscriptions.component';
import { SchemaStitchingComponent } from './homepage/pages/graphql/schema-stitching/schema-stitching.component';
import { GuardsInterceptorsComponent } from './homepage/pages/graphql/guards-interceptors/guards-interceptors.component';
import { IdeComponent } from './homepage/pages/graphql/ide/ide.component';
import { MvcComponent } from './homepage/pages/techniques/mvc/mvc.component';
import { SqlComponent } from './homepage/pages/techniques/sql/sql.component';
import { MongoComponent } from './homepage/pages/techniques/mongo/mongo.component';
import { CliOverviewComponent } from './homepage/pages/cli/overview/overview.component';
import { CliUsagesComponent } from './homepage/pages/cli/usages/usages.component';
import { PlatformAgnosticismComponent } from './homepage/pages/fundamentals/platform-agnosticism/platform-agnosticism.component';
import { ScalarsComponent } from './homepage/pages/graphql/scalars/scalars.component';
import { CorsComponent } from './homepage/pages/techniques/cors/cors.component';
import { AuthenticationComponent } from './homepage/pages/techniques/authentication/authentication.component';
import { FileUploadComponent } from './homepage/pages/techniques/file-upload/file-upload.component';
import { LoggerComponent } from './homepage/pages/techniques/logger/logger.component';
import { HttpModuleComponent } from './homepage/pages/techniques/http-module/http-module.component';
import { PerformanceComponent } from './homepage/pages/techniques/performance/performance.component';
import { HotReloadComponent } from './homepage/pages/techniques/hot-reload/hot-reload.component';
import { ConfigurationComponent } from './homepage/pages/techniques/configuration/configuration.component';
import { MigrationComponent } from './homepage/pages/migration/migration.component';
import { MqttComponent } from './homepage/pages/microservices/mqtt/mqtt.component';
import { NatsComponent } from './homepage/pages/microservices/nats/nats.component';
import { GrpcComponent } from './homepage/pages/microservices/grpc/grpc.component';
import { SupportComponent } from './homepage/pages/support/support.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent,
      },
      {
        path: 'first-steps',
        component: FirstStepsComponent,
        data: { title: '시작하기' },
      },
      {
        path: 'controllers',
        component: ControllersComponent,
        data: { title: '컨트롤러' },
      },
      {
        path: 'components',
        redirectTo: 'providers',
      },
      {
        path: 'providers',
        component: ComponentsComponent,
        data: { title: '프로바이더' },
      },
      {
        path: 'modules',
        component: ModulesComponent,
        data: { title: '모듈' },
      },
      {
        path: 'middleware',
        component: MiddlewaresComponent,
        data: { title: '미들웨어' },
      },
      {
        path: 'pipes',
        component: PipesComponent,
        data: { title: '파이프' },
      },
      {
        path: 'guards',
        component: GuardsComponent,
        data: { title: '가드' },
      },
      {
        path: 'exception-filters',
        component: ExceptionFiltersComponent,
        data: { title: '예외 필터' },
      },
      {
        path: 'interceptors',
        component: InterceptorsComponent,
        data: { title: '인터셉터' },
      },
      {
        path: 'custom-decorators',
        component: CustomDecoratorsComponent,
        data: { title: '사용자 정의 데코레이터' },
      },
      {
        path: 'fundamentals/dependency-injection',
        redirectTo: 'fundamentals/custom-providers',
      },
      {
        path: 'fundamentals/custom-providers',
        component: DependencyInjectionComponent,
        data: { title: '사용자 정의 프로바이더' },
      },
      {
        path: 'fundamentals/platform-agnosticism',
        component: PlatformAgnosticismComponent,
        data: { title: '플랫폼 불가지론' },
      },
      {
        path: 'fundamentals/async-components',
        redirectTo: 'fundamentals/async-providers',
      },
      {
        path: 'fundamentals/async-providers',
        component: AsyncComponentsComponent,
        data: { title: 'Async 프로바이더' },
      },
      {
        path: 'advanced/hierarchical-injector',
        component: HierarchicalInjectorComponent,
        data: { title: '계층적 주입' },
      },
      {
        path: 'fundamentals/circular-dependency',
        component: CircularDependencyComponent,
        data: { title: '순환 참조' },
      },
      {
        path: 'fundamentals/unit-testing',
        component: UnitTestingComponent,
        data: { title: '유닛 테스팅' },
      },
      {
        path: 'fundamentals/e2e-testing',
        component: E2eTestingComponent,
        data: { title: 'E2E 테스팅' },
      },
      {
        path: 'execution-context',
        component: ExecutionContextComponent,
        data: { title: '실행 컨텍스트' },
      },
      {
        path: 'graphql/quick-start',
        component: QuickStartComponent,
        data: { title: 'GraphQL - 시작하기' },
      },
      {
        path: 'graphql/resolvers-map',
        component: ResolversMapComponent,
        data: { title: 'GraphQL - 리졸버 맵' },
      },
      {
        path: 'graphql/mutations',
        component: MutationsComponent,
        data: { title: 'GraphQL - 뮤테이션' },
      },
      {
        path: 'graphql/scalars',
        component: ScalarsComponent,
        data: { title: 'GraphQL - 스칼라' },
      },
      {
        path: 'graphql/subscriptions',
        component: SubscriptionsComponent,
        data: { title: 'GraphQL - 서브스크립션' },
      },
      {
        path: 'graphql/guards-interceptors',
        component: GuardsInterceptorsComponent,
        data: { title: 'GraphQL - 가드 & 인터셉터' },
      },
      {
        path: 'graphql/ide',
        component: IdeComponent,
        data: { title: 'GraphQL - IDE' },
      },
      {
        path: 'graphql/schema-stitching',
        component: SchemaStitchingComponent,
        data: { title: 'GraphQL - 스키마 스티칭' },
      },
      {
        path: 'websockets/gateways',
        component: GatewaysComponent,
        data: { title: '게이트웨이' },
      },
      {
        path: 'websockets/pipes',
        component: WsPipesComponent,
        data: { title: '파이프 - 게이트웨이' },
      },
      {
        path: 'websockets/exception-filters',
        component: WsExceptionFiltersComponent,
        data: { title: '예외 필터 - 게이트웨이' },
      },
      {
        path: 'websockets/guards',
        component: WsGuardsComponent,
        data: { title: '가드 - 게이트웨이' },
      },
      {
        path: 'websockets/interceptors',
        component: WsInterceptorsComponent,
        data: { title: '인터셉터 - 게이트웨이' },
      },
      {
        path: 'websockets/adapter',
        component: AdapterComponent,
        data: { title: '어댑터 - 게이트웨이' },
      },
      {
        path: 'microservices/basics',
        component: BasicsComponent,
        data: { title: '마이크로서비스' },
      },
      {
        path: 'microservices/redis',
        component: RedisComponent,
        data: { title: 'Redis - 마이크로서비스' },
      },
      {
        path: 'microservices/mqtt',
        component: MqttComponent,
        data: { title: 'MQTT - 마이크로서비스' },
      },
      {
        path: 'microservices/nats',
        component: NatsComponent,
        data: { title: 'Nats - 마이크로서비스' },
      },
      {
        path: 'microservices/grpc',
        component: GrpcComponent,
        data: { title: 'gRPC - 마이크로서비스' },
      },
      {
        path: 'microservices/pipes',
        component: MicroservicesPipesComponent,
        data: { title: '파이프 - 마이크로서비스' },
      },
      {
        path: 'microservices/exception-filters',
        component: MicroservicesExceptionFiltersComponent,
        data: { title: '예외 필터 - 마이크로서비스' },
      },
      {
        path: 'microservices/guards',
        component: MicroservicesGuardsComponent,
        data: { title: '가드 - 마이크로서비스' },
      },
      {
        path: 'microservices/interceptors',
        component: MicroservicesInterceptorsComponent,
        data: { title: '인터셉터 - 마이크로서비스' },
      },
      {
        path: 'microservices/custom-transport',
        component: CustomTransportComponent,
        data: { title: '사용자 정의 트랜스포트 - 마이크로서비스' },
      },
      {
        path: 'recipes/sql-typeorm',
        component: SqlTypeormComponent,
        data: { title: 'SQL (TypeORM)' },
      },
      {
        path: 'recipes/mongodb',
        component: MongodbComponent,
        data: { title: 'MongoDB (Mongoose)' },
      },
      {
        path: 'recipes/mockgoose',
        component: MockgooseComponent,
        data: { title: 'MongoDB E2E 테스팅 (Mongoose + Mockgoose)' },
      },
      {
        path: 'recipes/passport',
        component: PassportComponent,
      },
      {
        path: 'techniques/authentication',
        component: AuthenticationComponent,
        data: { title: '인증' },
      },
      {
        path: 'recipes/sql-sequelize',
        component: SqlSequelizeComponent,
        data: { title: 'SQL (Sequelize)' },
      },
      {
        path: 'recipes/cqrs',
        component: CqrsComponent,
        data: { title: 'CQRS' },
      },
      {
        path: 'recipes/swagger',
        component: SwaggerComponent,
        data: { title: 'OpenAPI (Swagger)' },
      },
      {
        path: 'techniques/mvc',
        component: MvcComponent,
        data: { title: 'MVC' },
      },
      {
        path: 'techniques/mvc',
        component: MvcComponent,
        data: { title: 'MVC' },
      },
      {
        path: 'techniques/sql',
        redirectTo: 'techniques/database'
      },
      {
        path: 'techniques/database',
        component: SqlComponent,
        data: { title: 'Database' },
      },
      {
        path: 'techniques/mongodb',
        component: MongoComponent,
        data: { title: 'MongoDB' },
      },
      {
        path: 'techniques/file-upload',
        component: FileUploadComponent,
        data: { title: '파일 업로드' },
      },
      {
        path: 'techniques/logger',
        component: LoggerComponent,
        data: { title: '로거' },
      },
      {
        path: 'techniques/performance',
        component: PerformanceComponent,
        data: { title: '성능 (Fastify)' },
      },
      {
        path: 'techniques/hot-reload',
        component: HotReloadComponent,
        data: { title: '핫 리로드 (Webpack)' },
      },
      {
        path: 'techniques/http-module',
        component: HttpModuleComponent,
        data: { title: 'HTTP 모듈' },
      },
      {
        path: 'techniques/configuration',
        component: ConfigurationComponent,
        data: { title: '설정' },
      },
      {
        path: 'techniques/cors',
        component: CorsComponent,
        data: { title: 'CORS' },
      },
      {
        path: 'faq/express-instance',
        component: ExpressInstanceComponent,
        data: { title: 'Express 인스턴스 - FAQ' },
      },
      {
        path: 'faq/global-prefix',
        component: GlobalPrefixComponent,
        data: { title: '전역 프리픽스 - FAQ' },
      },
      {
        path: 'faq/lifecycle-events',
        component: LifecycleEventsComponent,
        data: { title: '라이프사이클 이벤트 - FAQ' },
      },
      {
        path: 'faq/hybrid-application',
        component: HybridApplicationComponent,
        data: { title: '하이브리드 애플리케이션 - FAQ' },
      },
      {
        path: 'faq/multiple-servers',
        component: MultipleServersComponent,
        data: { title: 'HTTPS & Multiple Servers - FAQ' },
      },
      {
        path: 'migration-guide',
        component: MigrationComponent,
        data: { title: '마이그레이션 가이드 - FAQ' },
      },
      {
        path: 'support',
        component: SupportComponent,
        data: { title: '지원' },
      },
      {
        path: 'cli/overview',
        component: CliOverviewComponent,
        data: {
          title: '개요 - CLI'
        }
      },
      {
        path: 'cli/usages',
        component: CliUsagesComponent,
        data: {
          title: '사용법 - CLI'
        }
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: !environment.production,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

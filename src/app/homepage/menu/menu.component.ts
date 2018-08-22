import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input() isSidebarOpened = true;
  readonly items = [
    {
      title: '소개',
      isOpened: false,
      path: '/',
    },
    {
      title: '개요',
      isOpened: true,
      children: [
        { title: '시작하기', path: '/first-steps' },
        { title: '컨트롤러', path: '/controllers' },
        { title: '프로바이더', path: '/providers' },
        { title: '모듈', path: '/modules' },
        { title: '미들웨어', path: '/middleware' },
        { title: '예외 필터', path: '/exception-filters' },
        { title: '파이프', path: '/pipes' },
        { title: '가드', path: '/guards' },
        { title: '인터셉터', path: '/interceptors' },
        { title: '사용자 정의 데코레이터', path: '/custom-decorators' },
      ],
    },
    {
      title: '기초',
      isOpened: false,
      children: [
        { title: '사용자 정의 프로바이더', path: '/fundamentals/custom-providers' },
        {
          title: '비동기 프로바이더',
          path: '/fundamentals/async-providers',
        },
        {
          title: '순환 참조',
          path: '/fundamentals/circular-dependency',
        },
        {
          title: '플랫폼 불가지론',
          path: '/fundamentals/platform-agnosticism',
        },
        { title: '테스팅', path: '/fundamentals/unit-testing' },
      ],
    },
    {
      title: '테크닉',
      isOpened: false,
      children: [
        { title: '인증', path: '/techniques/authentication' },
        { title: '데이터베이스', path: '/techniques/database' },
        { title: 'Mongo', path: '/techniques/mongodb' },
        { title: '파일 업로드', path: '/techniques/file-upload' },
        { title: '로거', path: '/techniques/logger' },
        { title: 'CORS', path: '/techniques/cors' },
        { title: '설정', path: '/techniques/configuration' },
        { title: 'HTTP 모듈', path: '/techniques/http-module' },
        { title: '모델-뷰-컨트롤러', path: '/techniques/mvc' },
        { title: '성능 (Fastify)', path: '/techniques/performance' },
        { title: '핫 리로드 (Webpack)', path: '/techniques/hot-reload' },
      ],
    },
    {
      title: 'GraphQL',
      isOpened: false,
      children: [
        { title: '시작하기', path: '/graphql/quick-start' },
        { title: '리졸버 맵', path: '/graphql/resolvers-map' },
        { title: '뮤테이션', path: '/graphql/mutations' },
        { title: '서브스크립션', path: '/graphql/subscriptions' },
        { title: '스칼라', path: '/graphql/scalars' },
        {
          title: '가드 & 인터셉터',
          path: '/graphql/guards-interceptors',
        },
        { title: '스키마 스티칭', path: '/graphql/schema-stitching' },
        { title: 'IDE', path: '/graphql/ide' },
      ],
    },
    {
      title: '웹소켓',
      isOpened: false,
      children: [
        { title: '게이트웨이', path: '/websockets/gateways' },
        { title: '예외 필터', path: '/websockets/exception-filters' },
        { title: '파이프', path: '/websockets/pipes' },
        { title: '가드', path: '/websockets/guards' },
        { title: '인터셉터', path: '/websockets/interceptors' },
        { title: '어댑터', path: '/websockets/adapter' },
      ],
    },
    {
      title: '마이크로서비스',
      isOpened: false,
      children: [
        { title: '기초', path: '/microservices/basics' },
        { title: 'Redis', path: '/microservices/redis' },
        { title: 'MQTT', path: '/microservices/mqtt' },
        { title: 'NATS', path: '/microservices/nats' },
        { title: 'gRPC', path: '/microservices/grpc' },
        {
          title: '예외 필터',
          path: '/microservices/exception-filters',
        },
        { title: '파이프', path: '/microservices/pipes' },
        { title: '가드', path: '/microservices/guards' },
        { title: '인터셉터', path: '/microservices/interceptors' },
      ],
    },
    {
      title: '실행 컨텍스트',
      isOpened: false,
      path: '/execution-context',
    },
    {
      title: '레시피',
      isOpened: false,
      children: [
        { title: 'TypeORM', path: '/recipes/sql-typeorm' },
        { title: 'Mongoose', path: '/recipes/mongodb' },
        { title: 'Sequelize', path: '/recipes/sql-sequelize' },
        // { title: 'Authentication (Passport)', path: '/recipes/passport' },
        { title: 'CQRS', path: '/recipes/cqrs' },
        { title: 'OpenAPI (Swagger)', path: '/recipes/swagger' },
      ],
    },
    {
      title: 'CLI',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/cli/overview' },
        { title: 'Usage', path: '/cli/usages' },
      ],
    },
    {
      title: 'FAQ',
      isOpened: false,
      children: [
        { title: 'Express 인스턴스', path: '/faq/express-instance' },
        { title: '전역 경로 prefix', path: '/faq/global-prefix' },
        { title: '라이프사이클 이벤트', path: '/faq/lifecycle-events' },
        { title: '하이브리드 애플리케이션', path: '/faq/hybrid-application' },
        { title: 'HTTPS & 다중 서버', path: '/faq/multiple-servers' },
        {
          title: '예제',
          externalUrl:
            'https://github.com/kamilmysliwiec/nest/tree/master/sample',
        },
      ],
    },
    {
      title: '마이그레이션 가이드',
      isOpened: false,
      path: '/migration-guide',
    },
    {
      title: '지원하기',
      isOpened: false,
      path: '/support',
    },
    {
      title: 'Version 4',
      isOpened: false,
      externalUrl: 'https://docs.nestjs.com/v4/',
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => this.toggleCategory());

    this.toggleCategory();
  }

  toggleCategory() {
    const { firstChild } = this.route.snapshot;
    if (firstChild.url && firstChild.url[1]) {
      const { path } = firstChild.url[0];
      const index = this.items.findIndex(
        ({ title }) => title.toLowerCase() === path,
      );
      if (index < 0) {
        return;
      }
      this.items[index].isOpened = true;
      this.items[1].isOpened = false;
    }
  }
}

### "Easy Work"
"Welfare point" management system for small enterprise

### Tech Stack
- Typescript
- React ^19, Next ^14
- Supabase database, drizzle, Supabase auth
- Radix, module sass

### Architecture
`FSD`를 적용한다
- app
- pages
- widgets
- features
- entity
- shared

### Design System
4개의 레이어로 컴포넌트 및 디자인 구현
1. design system
  - 추상화을 높여서 확장성과 재사용성을 높인다.
  - 높은 수준의 추상화로 인해 사용성은 떨어진다.
  - 떨어진 사용성은 product system과 domain components 에서 보완한다.
2. product system
  - design system 보다 한단계 낮은 추상화로 제공한다.
  - product의 맥락이 담겨 있지만, 재사용성이 높은 편이다.
3. domain components
  - 확장성보다 사용성이 높은 컴포넌트
  - 추상화가 매우 낮아 확장성과 재사용성도 낮다.
  - 어떤 도메인테 특화되어 있다.
  - FSD의 `shared/ui`에서 관리한다.
4. domain components composition
  - 사용성에 치우친 컴포넌트
  - domain components의 조합으로 구현한다.
  - `widgets` 에서 관리한다.


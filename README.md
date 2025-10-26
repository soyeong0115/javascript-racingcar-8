# 🚗 javascript-racingcar-precourse
초간단 자동차 경주 게임을 구현한다.

---
## 📝 구현 기능 목록

### 입력
- [x] 경주할 자동차 입력받기
  - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 출력
  - 잘못된 입력값일 경우 throw문을 통해 예외 발생
  
    - [예외] 입력값이 없을 경우
    - [예외] 0자인 자동차 이름이 있을 경우
    - [예외] 자동차 이름이 5자를 넘는 경우
    - [예외] 자동차 이름이 중복되는 경우

- [x] 입력받은 자동차 이름은 쉼표(,)를 기준으로 구분하기

- [x] 시도할 횟수 입력받기
  - `시도할 횟수는 몇 회인가요?` 출력
  - 잘못된 입력값일 경우 throw문을 통해 예외 발생
    
    - [예외] 입력값이 없을 경우
    - [예외] 문자를 입력했을 경우
    - [예외] 소수를 입력했을 경우
    - [예외] 0 또는 음수를 입력했을 경우


### 자동차 경주 진행
- [x] 자동차 경주 게임 진행
  - 자동차 수만큼 무작위 값 선정하기
  - 무작위 값이 4이상인 자동차는 전진
  - 무작위 값이 4미만인 자동차는 정지
  - 시도할 횟수가 0이 되면 게임 종료


### 출력
- [x] 차수별 실행 결과 출력하기
    - 전진 or 정지할 때마다 출력
      
- [x] 최종 우승자 출력하기
    - 단독 우승자 `최종 우승자 : pobi` 출력
    - 공동 우승자 `최종 우승자 : pobi, jun` 출력
     

---
## 🧱 MVC 구조 설계
역할 분리와 유지보수성 강화를 위해 MVC 패턴 적용

### Model
- `Car.js` : 자동차 이름/위치 관리 및 이동 로직
- `RacingGame.js` : 게임 전체 상태, 라운드 실행, 우승자 판정 관리

### View
- `InputView.js` : 사용자 입력 안내 및 입력받기
- `OutputView.js` : 라운드 결과 및 우승자 출력

### Controller
- `InputController.js` : 입력 처리 담당
- - `GameController.js` : 게임 진행 흐름 제어

### utils
- `parser.js` : 입력 문자열 파싱
- `CarNameValidator.js` : 자동차 이름 검증
- `TryCountValidator.js` : 시도 횟수 검증

### constants
- `error.js` : 에러 메시지 상수
- `message.js` : 출력 메시지 상수

---
 
## 📁 파일 구조
```plaintext
javascript-racingcar-8
├─ __tests__
│  ├─ ApplicationTest.js
│  ├─ Car.test.js
│  ├─ CarNameValidator.test.js
│  ├─ InputView.test.js
│  ├─ OutputView.test.js
│  ├─ RacingGame.test.js
│  └─ TryCountValidator.test.js
│
├─ src
│  ├─ constants
│  │  ├─ error.js
│  │  └─ message.js
│  │
│  ├─ controller
│  │  ├─ GameController.js
│  │  └─ InputController.js
│  │
│  ├─ model
│  │  ├─ Car.js
│  │  └─ RacingGame.js
│  │
│  ├─ utils
│  │  ├─ CarNameValidator.js
│  │  ├─ TryCountValidator.js
│  │  └─ parser.js
│  │
│  ├─ view
│  │  ├─ InputView.js
│  │  └─ OutputView.js
│  │
│  ├─ App.js
│  └─ index.js
│
├─ package.json
└─ README.md
```

---

## 🔮 테스트 (Jest)
단위 테스트 기반 검증

| 테스트 파일 | 테스트 내용 |
|-------------|------------|
| `Car.test.js` | 자동차 이동 로직 및 상태 테스트 |
| `RacingGame.test.js` | 라운드 실행 및 우승자 판정 테스트 |
| `CarNameValidator.test.js` | 자동차 이름 검증 및 예외 처리 테스트 |
| `TryCountValidator.test.js` | 라운드 횟수 검증 및 예외 처리 테스트 |
| `InputView.test.js` | Mock 기반 입력 호출 검증 |
| `OutputView.test.js` | Spy 기반 출력 검증 |

---
## 💡 새롭게 도전한 부분
1. **MVC 패턴 설계 적용**  
   - 코드 가독성 및 유지보수성 개선

2. **Constants 폴더 생성 및 메시지 상수화**  
   - 에러 및 출력 메시지 관리 용이, 변경 시 일괄 적용 가능

3. **Jest 기반 단위 테스트 작성**  
   - 각 모듈별 테스트 구현으로 안정성 강화
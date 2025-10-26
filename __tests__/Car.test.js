import Car from "../src/model/Car.js";

describe("Car 모델 테스트", () => {
  test("생성 시 이름과 위치 초기화", () => {
    const car = new Car("pobi");
    expect(car.name).toBe("pobi");
    expect(car.position).toBe(0);
  });

  test("move(true) 시 position 증가", () => {
    const car = new Car("pobi");
    car.move(true);
    expect(car.position).toBe(1);
  });

  test("move(false) 시 position 변화 없음", () => {
    const car = new Car("pobi");
    car.move(false);
    expect(car.position).toBe(0);
  });

  test("여러 번 이동 시 누적 위치 확인", () => {
    const car = new Car("pobi");
    car.move(true);
    car.move(true);
    car.move(false);
    expect(car.position).toBe(2);
  });
});

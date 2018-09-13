let DATA = [
  {
    title: "선인장",
    text:
      "선인장은 죽을 때가 되어서야 꽃을 피운다. 그것은 명멸하는 생명력 앞에서 최후 변론을 하는 셈이기도 하다.",
    img: "./public/images/ex1.png",
    date: "2018-01-02"
  },
  {
    title: "커피를 마시며",
    text:
      "커피는 쓰다. 커피는 향기롭다. 커피향을 맡은 사람은 커피를 찾지만, 정작 커피는 마시면 쓰다. 그것은 어쩌면 멀리서 볼 때는 희극이지만 가까이서 보면 비극인 인생과 닮았는지도 모른다.",
    img: "./public/images/ex2.png",
    date: "2018-09-12"
  }
];

const diaries = DATA.map(diary => {
  const ID = diary.title;
  const newData = {
    ...diary,
    id: ID
  };
  return newData;
});

const initialState = {
  diaries
};

const outcome = initialState.diaries.map(diary => {
  console.log(diary.id);
});

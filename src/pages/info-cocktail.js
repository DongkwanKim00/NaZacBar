import react, { Component } from "react";

// Cocktail Information
const Information = [
  {
    "name": "아페롤 스프리츠",
    "image": "../칵테일/아페롤 스프리츠.jpg",
    "glass" : "와인 글라스(Wine Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(Cube)",
    "ingredient" : "재료 : 프로세코 60ml / 아페롤 40ml / 탄산수 20ml / 오렌지 슬라이스 1/2조각",
    "recipe": "레시피 : 잔에 얼음을 채운다 \n 잔에 얼음을 채운다. \n 잔에 오렌지 슬라이스를 제외한 나머지 재료를 넣는다. \n 바 스푼으로 젓는다. \n 오렌지 슬라이스를 넣는다."
  },
  {
    "name": "벨리니",
    "image": "../칵테일/벨리니.jpg",
    "glass" : "플루트 글라스(Flute Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 없음",
    "ingredient" : "재료 : 복숭아 퓌레 30ml / 프로세코 100ml",
    "recipe": "레시피 : 잔에 복숭아 퓌레를 넣는다. \n 프로세코를 넣는다. \n 바 스푼으로 살짝 저어준다."
  },
  {
    "name": "비시클레타",
    "image": "../칵테일/비시클레타.jpg",
    "glass" : "와인 글라스(Wine Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(Cube)",
    "ingredient" : "재료 : 카마리 50ml / 화이튼 와인 40ml / 탄산수 40ml / 레몬 제스트 1조각",
    "recipe": "레시피 : 잔에 얼음을 채운다. \n 잔에 레몬 제스트를 제외한 나머지 재료를 넣는다. \n 바 스푼으로 젓는다. \n 레몬제스트를 장식한다."
  },
  {
    "name": "쿠바 리브레",
    "image": "../칵테일/쿠바 리브레.jpg",
    "glass" : "하이볼 글라스(High Ball Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(Cube)",
    "ingredient" : "재료 : 쿠바 럼 50ml / 콜라 100ml / 라임 반개 / 라임 슬라이스 1개",
    "recipe": "레시피 : 라임 반개를 4등분한 후 머들링 한다. \n 잔에 얼음을 채운다. \n 잔에 라임 슬라이스를 제외한 나머지 재료를 넣는다. \n 바 스푼으로 젓는다. \n 라임 슬라이스를 넣는다."
  },
  {
    "name": "그레이하운드",
    "image": "../칵테일/그레이하운드.jpg",
    "glass" : "하이볼 글라스(High Ball Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(Cube)",
    "ingredient" : "재료 : 진(Gin) 50ml / 자몽주스 100ml / 자몽 슬라이스 1/4조각",
    "recipe": "레시피 : 잔에 얼음을 채운다. \n 잔에 자몽 슬라이스를 제외한 나머지 재료를 넣는다. \n 바 스푼으로 젓는다. \n 자몽 슬라이스를 장식한다."
  },
  {
    "name": "홀스넥",
    "image": "../칵테일/홀스넥.jpg",
    "glass" : "하이볼 글라스(High Ball Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(Cube)",
    "ingredient" : "재료 : 코냑(Cognac) 50ml / 진저에일 100ml / 레몬 제스트 1조각",
    "recipe": "레시피 : 잔에 얼음을 채운다. \n 잔에 자몽 슬라이스를 제외한 나머지 재료를 넣는다. \n 바 스푼으로 젓는다. \n 자몽 슬라이스를 장식한다."
  },
  {
    "name": "키르",
    "image": "../칵테일/키르.jpg",
    "glass" : "와인 글라스(Wine Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 없음",
    "ingredient" : "재료 : 크렘 드 카시스 15ml / 차가운 알리고테 와인",
    "recipe": "레시피 : 잔에 크렘드 카시스를 따른다. \n 알리고테 와인을 따른다."
  },
  {
    "name": "미모사",
    "image": "../칵테일/미모사.jpg",
    "glass" : "플루트 글라스(Flute Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 없음",
    "ingredient" : "재료 : 단맛이 없는 샴페인 브뤼트 80ml / 오렌지 주스 40ml",
    "recipe": "레시피 : 잔에 모든 재료를 붓는다. \n 바 스푼으로 젓는다"
  },
  {
    "name": "팔로마",
    "image": "../칵테일/팔로마.jpg",
    "glass" : "하이볼 글라스(High Ball Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 큐브(cube)",
    "ingredient" : "재료 : 화이트 데킬라 50ml / 자몽 소다 100ml / 자몽 슬라이스 1/4조각 / 플뢰르 드 셀",
    "recipe": "레시피 : 잔 테두리의 1/2에 플뢰릐 드셀을 묻힌다. / 잔에 자몽 슬라이스를 제외한 나머지 재료를 붓는다. \n 얼음을 넣고 바 스푼으로 젓는다. \n 자몽 슬라이스를 장식한다."
  },
  {
    "name": "로시니",
    "image": "../칵테일/로시니.jpg",
    "glass" : "플루트 글라스(Flute Glass)",
    "method" : "기법: 빌드(Build)",
    "ice" : "얼음 형태 : 없음",
    "ingredient" : "재료 : 프로세코 100ml / 딸기 퓌레 30ml",
    "recipe": "레시피 : 잔에 딸기 퓌레를 넣는다. \n 프로세코를 넣는다. \n 바 스푼으로 젓는다."
  }
];

export default Information;
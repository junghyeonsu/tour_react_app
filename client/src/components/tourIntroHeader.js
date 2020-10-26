import React, { Component } from 'react';
import './tourIntroHeader.css';

class tourIntroHeader extends Component {
    
    state = {
        tourList : [
          {
            title : "가양비래근린공원",
            addr : "대전광역시 대덕구 비래동",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/00/1585300_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/01/1585301_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/02/1585302_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/96/2437796_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/98/2437798_image2_1.jpg",
            ],
            explain : "가양비래근린공원은 약 42만평으로 대전광역시의 동부권에 위치한 주로 산림 형태의 공원으로 남간정사가 있는 우암사적공원과 경부고속도로 대전육교(비래동)주변의 중앙광장이 조성되어 있는 곳으로 이용권이 양분되어 있다. 특히, 우암사적공원은 낮은 야산 기슭의 숲이 우거진 골짜기를 배경으로 하여 위치하고 있어 대전시민은 물론, 외지인들의 이용객이 날로 증가하고 있다."
          },
          {
            title : "갑천",
            addr : "대전광역시 유성구 대학로",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/66/1585666_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/67/1585667_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/1585668_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/69/1585669_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/69/1585669_image3_1.jpg",
            ],
            explain : "만년교부근에서부터 엑스포과학공원까지 9.7km에 이르는 갑춘둔치는 사색과 놀이가 가능한 열림공간이다. 봄이면 초록으로 깨어나는 잔디로 치장된 이곳은 대전시민의 사랑받는 명소이다. 아침이면 운동을 위해 찾아오는 주변아파트촌 사람들의 가벼운 발걸음이, 오후가되면 연인인듯한 이들의 한가로운 산보가 끊이지 않는 것이 갑천의 풍경이다. 체육복으로 갈아입고 본격적으로 축구를 하거나 플랜카드를 걸고 단합대회를 하는 장소로서 갑천은 인기이다."
          },
          {
            title : "국립대전숲체원",
            addr : "대전광역시 유성구 성북로154번길 748",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "중부권 대표 산림복지시설 국립대전숲체원은 국민 누구나 자유롭게 숲을 통해 몸과 마음의 건강을 증진할 수 있도록 다양한 숲체험 및 산림교육 프로그램을 제공하고 있다. 전국에서 유일하게 엘리베이터로 숲을 진입하는 데크로드가 있으며, 누구나 자유롭게 숲을 체험할 수 있도록 다양한 코스의 숲길과 세미나실, 숙박·식사를 함께 즐길 수 있는 공간이 마련되어 있다."
          },
          {
            title : "대청호",
            addr : "대전광역시 동구 천개동로 41",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "대전광역시와 충청북도 청주시·옥천군·보은군에 걸쳐 있는 인공호수. 1975년에 착공하여 1980년에 공사가 완료되었다. 대전, 청주지역의 식수는 물론, 생활용수 및 공업용수를 공급하는 생명의 젖줄이다. 저수면적 72.8㎢, 호수길이80km, 저수량 15억t으로, 한국에서 3번째 규모의 호수이다. 호수 위로 해발고도 200∼300m의 야산과 수목이 펼쳐져 드라이브 코스로 잘 알려져 있다. 철새와 텃새가 많이 날아들어 여름에는 상류에서 백로를 쉽게 볼 수 있다\n. 전망대에 오르면 주변 경관이 한눈에 내려다보이며, 1998년에 개관한 물홍보관은 입체 영상관과 수족관 등을 갖추고 있다. 주위에 잔디광장이 있다. 주변에 금강유원지·장계관광지(대청비치랜드)·문의문화재단지 등이 있어 연계 관광이 가능하다. 찾아가려면 경부고속도로를 타고 가다가 신탄진 인터체인지로 나와 신탄진 4거리에서 대청댐 방면으로 가면 된다. 호수를 한 바퀴 돌아보려면 승용차로 3시간 정도 걸린다."
          },
          {
            title : "대흥동 문화예술의거리",
            addr : "대전광역시 중구 대흥동",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "대전 중구 대흥동 일대는 대전의 원도심이다. 세련된 도시 이미지가 느껴지는 건물과 카페가 있는가 하면, 1970~80년대를 떠올리게 하는 손때 묻은 풍경이 공존한다. 대흥동을 멋스럽게 꾸미는 것은 낡고 허름해 보이는 건물과 외벽에 그려진 빈티지한 그림이다. 벽을 뚫고 나오는 자동차, 산호다방 건물의 옷걸이에 걸린 티셔츠, 산호여인숙 골목의 티셔츠, 골목길 전기계량기에 그려진 그림이 아날로그적 풍경을 연출한다. 이밖에 오래된 골목과 화방, 소극장, 갤러리도 눈에 띈다."
          },
          {
            title : "도산서원",
            addr : "대전광역시 서구 남선로 8",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "만회 권득기와 그의 아들 탄옹 권시를 추모하기 위해 세운 서원이다. 권득기는 41세 때 문과에 급제하여 예조좌랑을 지냈으며, 정세가 어지러워지자 벼슬을 버리고 도학을 공부하였다고 한다. 권시도 학문이 뛰어나 대군사부·한성부좌윤 등에 임명되었으나, 벼슬을 버리고 고향인 이곳에서 학문에 힘썼다. 이 서원은 조선 숙종 19년(1693)에 유림들이 뜻을 모아 세운 것으로，숙종 37년(1711)에 나라에서 내린 현판을 받아 사액서원이 되었다. 사당 3칸·묘문 3칸·강당 4칸·서재 3칸·남재 4칸·전사청 3칸 등 모두 23칸 규모를 가진 서원이었다고 하는데, 흥선대원군의 서원 철폐령으로 철거되었다. 그 뒤 1921년 단을 만들고 제사를 지냈으며, 1968년·1973년 두 차례에 걸쳐 안동 권씨 문중에서 복원하였다. ‘도산’이라는 이름도 이곳에 머무르면서 도학을 연마하였기 때문에 붙인 것이다."
          },
          {
            title : "유림공원",
            addr : "대전광역시 유성구 어은로 27",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "유림공원은 가을에 국화 꽃 축제가 유명하며 반려견과 함께 다닐 수 있어 산책을 하거나 가벼운 나들이, 피크닉을 즐기고 싶은 분들께 인기있는 공원입니다. 한반도를 닮은 작은 정원인 반도지에서는 예쁜 물레방아와 연꽃, 시원한 그늘이 있는 정자도 볼 수 있습니다."
          },
          {
            title : "유성 족욕체험장",
            addr : "대전광역시 유성구 봉명동",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "대전 유성온천지구 내 유성족욕체험장은 섭씨 40도의 천연 온천수가 공급되는 노천족욕장이다. 2만 778㎡ 규모의 4개 족욕장에서 동시에 200명이 족욕을 즐길 수 있다. 이 족욕체험장은 대전을 방문한 관광객들이 가벼운 마음으로 온천을 즐길 수 있도록 마련해 무료로 이용할 수 있다. 대전 유성구에서 수질 관리와 청결에 신경을 써 마음 놓고 족욕을 즐길 수 있는 곳이다. 족욕을 하기 전에 발을 깨끗이 씻는 장소가 따로 마련되어 있다.발과 다리를 뜨거운 물에 담그는 족욕은 혈액순환에 좋고, 스트레스와 통증을 완화하는 효과가 있어 남녀노소 누구에게나 좋은 목욕법이다. 이곳은 특히 어르신들이 즐겨 찾는다. 유성구 온천로의 유성온천공원 인근 계룡 스파텔 앞에 있다. 아침 7시부터 밤 11시까지 연중무휴로 운영한다."
          },
          {
            title : "대동하늘공원",
            addr : "대전광역시 동구 동대전로110번길 182",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "동구 8경에 선정된 대동하늘공원은 2009년 12월 무지개 프로젝트사업의 일환으로 조성되었다. 대표적 상징물인 풍차가 설치되어 있다. 해발고도 약 127m에 위치하여 풍차 앞에서 정면을 바라보면 대전을 한눈에 담을 수 있는 시원한 풍광 및 훌륭한 야경을 감상할 수 있다. 공원에 벤치와 정자가 설치돼 있어 도심의 혼잡에서 벗어나 한가로이 휴식을 취할 수 있다. 하늘공원으로 이어지는 길에 형성된 벽화마을과 테마 카페촌은 최근 대전의 핫한 명소로 떠오르고 있다."
          },
          {
            title : "스카이로드",
            addr : "대전광역시 중구 중앙로164번길 17",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "대전 스카이로드는 길이 214미터, 너비 13.3미터, 높이 20미터 규모의 초대형 LED 영상아케이드 구조물로 대전스카이로드가 조성된 으능정이거리는 은행나무 정자가 있는 마을에서 유래되었으며 대전역 앞 중앙로를 중심으로 형성된 대전의 명동으로 주변에 백화점, 지하상가, 갤러리 등이 밀집되어 있어 젊은층이 많이 찾는 쇼핑과 문화의 중심지이다."
          },
          {
            title : "한밭수목원",
            addr : "대전광역시 서구 둔산대로 169",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/02/2631102_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/76/2636876_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/77/2636877_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/68/2661768_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg",
            ],
            explain : "지리적으로는 정부대전청사와 엑스포과학공원의 중앙 부분에 자리 잡고 있다. 1991년 6월 7일 근린공원으로 지정된 둔산대공원은 총 569천㎡으로 대전예술의전당, 평송청소년문화센터, 시립미술관, 이응노미술관 등 명실상부한 문화 예술의 메카이며, 수목원과 어우러져 문화가 가장 잘 갖추어져 있는 곳이기도 하다. 도심 속의 한밭수목원은 정부대전청사와 과학공원의 녹지축을 연계한 전국 최대의 도심 속 인공수목원으로 각종 식물종의 유전자 보존과 청소년들에게 자연체험학습의 장, 시민들에게는 도심 속에서 푸르름을 만끽하며 휴식할 수 있는 공간 제공을 목적으로 조성했다. 한밭수목원의 총 조성면적 387천㎡은 4단계로 구분 연차별로 조성하였으며, 서원(시립미술관 북측)과 남문광장은 2005년 4월 28일 개원하였고, 목련원, 약용식물원, 암석원, 유실수원 등 19개의 테마별 園으로 구성된 동원(평송수련원 북측)은 2009년 5월 9일 개원하였다. 또한 2011년 10월 29일 맹그로브를 주제로 열대식물원 개원, 공립수목원 제33호 등록, 연구관리동의 확충을 계기로 수목 연구 교육 기능 등을 더욱 강화하여 수목원의 본연의 기능을 충실히 할 수 있도록 하였다."
          },
        ],
        randomNumber : 0,
    }

    componentDidMount = async () => {
      await this.setState({ 
        randomNumber : Math.floor(Math.random() * this.state.tourList.length),
      });
    }

    render() {
        const {tourList, randomNumber, randomImage} = this.state;
        return (
            <div id="content_tour" className="container">
              <div className="title">
               {tourList[randomNumber].title}
              </div>
              <div className="address">
                {tourList[randomNumber].addr}
              </div>
              <div className="image">
                { <img src={tourList[randomNumber].image[0] } alt="image" /> }
              </div>
              <div className="explain">
                {tourList[randomNumber].explain}
              </div>
            </div>
        )
    }
}

export default tourIntroHeader;

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
              "http://tong.visitkorea.or.kr/cms/resource/70/1585670_image2_1.jpg",
            ],
            explain : "만년교부근에서부터 엑스포과학공원까지 9.7km에 이르는 갑춘둔치는 사색과 놀이가 가능한 열림공간이다. 봄이면 초록으로 깨어나는 잔디로 치장된 이곳은 대전시민의 사랑받는 명소이다. 아침이면 운동을 위해 찾아오는 주변아파트촌 사람들의 가벼운 발걸음이, 오후가되면 연인인듯한 이들의 한가로운 산보가 끊이지 않는 것이 갑천의 풍경이다. 체육복으로 갈아입고 본격적으로 축구를 하거나 플랜카드를 걸고 단합대회를 하는 장소로서 갑천은 인기이다."
          },
          {
            title : "국립대전숲체원",
            addr : "대전광역시 유성구 성북로154번길 748",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/98/2675698_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/99/2675699_image2_1.jpg",
            ],
            explain : "중부권 대표 산림복지시설 국립대전숲체원은 국민 누구나 자유롭게 숲을 통해 몸과 마음의 건강을 증진할 수 있도록 다양한 숲체험 및 산림교육 프로그램을 제공하고 있다. 전국에서 유일하게 엘리베이터로 숲을 진입하는 데크로드가 있으며, 누구나 자유롭게 숲을 체험할 수 있도록 다양한 코스의 숲길과 세미나실, 숙박·식사를 함께 즐길 수 있는 공간이 마련되어 있다."
          },
          {
            title : "대청호",
            addr : "대전광역시 동구 천개동로 41",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/84/2605584_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/86/2605586_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/89/2605589_image2_1.jpg",
            ],
            explain : "대전광역시와 충청북도 청주시·옥천군·보은군에 걸쳐 있는 인공호수. 1975년에 착공하여 1980년에 공사가 완료되었다. 대전, 청주지역의 식수는 물론, 생활용수 및 공업용수를 공급하는 생명의 젖줄이다. 저수면적 72.8㎢, 호수길이80km, 저수량 15억t으로, 한국에서 3번째 규모의 호수이다. 호수 위로 해발고도 200∼300m의 야산과 수목이 펼쳐져 드라이브 코스로 잘 알려져 있다. 철새와 텃새가 많이 날아들어 여름에는 상류에서 백로를 쉽게 볼 수 있다\n. 전망대에 오르면 주변 경관이 한눈에 내려다보이며, 1998년에 개관한 물홍보관은 입체 영상관과 수족관 등을 갖추고 있다. 주위에 잔디광장이 있다. 주변에 금강유원지·장계관광지(대청비치랜드)·문의문화재단지 등이 있어 연계 관광이 가능하다. 찾아가려면 경부고속도로를 타고 가다가 신탄진 인터체인지로 나와 신탄진 4거리에서 대청댐 방면으로 가면 된다. 호수를 한 바퀴 돌아보려면 승용차로 3시간 정도 걸린다."
          },
          {
            title : "대전오월드",
            addr : "대전광역시 중구 사정공원로 70",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/58/2370158_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/59/2370159_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/60/2370160_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/61/2370161_image2_1.jpg",
            ],
            explain : "대전도시공사는 대전 중구 사정동 기존의 대전동물원과 놀이동산(조이랜드) 인근에 400억 원을 들여 10만 m²의 플라워랜드를 조성해 2009년 5월 1일 대전오월드를 개장했다. 오월드는 크게 각종 꽃을 볼 수 있는 플라워랜드와 동물원인 주랜드, 각종 놀이기구가 위치한 조이랜드 등으로 구성되어있다. 주요 공간으로는 아메리카검정곰·사자, 벵갈호랑이, 코끼리, 기린, 얼룩말, 타조 등 130종 600여 수의 동물을 전시하고 있는 동물 전시공간, 후룸라이드·자이언트드롭·수퍼바이킹 등 놀이기구 17개 기종이 설치되어 있는 놀이시설 공간, 슬로프 폭 36.5mｘ115.7m 규모의 사계절 썰매장, 아프리카사파리, 마운틴사파리, 조각공원, 5.5km에 이르는 산림욕장, 잔디광장, 다목적광장, 팔각정, 사계절정원, 무궁화원, 장미원, 미로원, 허브원, 레인보우스테이지, 야외공연장 등이 있다. 또한 진입광장 및 축제의 거리를 지나면 나오는 3000m² 규모의 대형 연못도 하나의 볼거리이다. 플라워랜드에는 100종 15만 그루의 나무와 85종 20만 본의 사계절 꽃이 20개의 테마별로 조성돼 1년 내내 수목과 꽃을 볼 수 있다. 줄장미, 사계장미, 피스 등 여러 종의 장미를 조성한 장미원과 로즈마리, 재스민, 민트, 라벤다 등의 향기에 흠뻑 빠질 수 있는 허브원, 소나무, 매화, 자귀나무 등 한국 전래수종을 심은 전통정원과 소나무와 사철나무로 미로를 조성해 놓은 미로원은 색다른 재미를 준다."
          },
          {
            title : "상소동 산림욕장",
            addr : "대전 동구 상소동 산 1-1",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/38/2661838_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/40/2661840_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/41/2661841_image2_1.jpg",
            ],
            explain : "상소동산림욕장은 만인산과 식장산 자락 중간지점(대전역에서 금산방향-17번 국도-으로 약10km 지점, 남대전IC에서 약 5km)에 위치해 있으며 가는 길에는 버즘나무 가로수 터널이 아름다움을 더해주고 있다. 자연체험과 휴양을 할 수 있는 각종 시설이 조성되어 있고, 특히 수많은 돌탑이 조성되어 있어 볼거리를 제공하고 있다. 가족이나 연인 등 각계각층에서 가족의 건강이나 여러 가지 염원을 담은 돌탑을 쌓을 수 있는 공간이 있어 뜻깊은 기회를 제공하여 주기도 하고, 봄부터 가을까지 수많은 야생화를 감상할 수 있으며 가벼운 마음으로 찾아와 산책과 등산과 휴양을 즐길 수 있는 곳이다."
          },
          {
            title : "유림공원",
            addr : "대전광역시 유성구 어은로 27",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/58/2674958_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/59/2674959_image2_1.jpg",
            ],
            explain : "유림공원은 가을에 국화 꽃 축제가 유명하며 반려견과 함께 다닐 수 있어 산책을 하거나 가벼운 나들이, 피크닉을 즐기고 싶은 분들께 인기있는 공원입니다. 한반도를 닮은 작은 정원인 반도지에서는 예쁜 물레방아와 연꽃, 시원한 그늘이 있는 정자도 볼 수 있습니다."
          },
          {
            title : "식장산(식장산 문화공원)",
            addr : "대전광역시 동구 세천동 산43-5",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/99/2661799_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/03/2661803_image2_1.JPG",
              "http://tong.visitkorea.or.kr/cms/resource/04/2661804_image2_1.JPG",
            ],
            explain : "식장산(623.6m)은 대전광역시 동구와 옥천군 군북면, 군서면 등 세 지역에 걸쳐있는 산이다. 대전광역시의 최고봉으로 충남의 최고봉 서대산(904m), 옥천의 최고봉 대성산(705m) 등 인접지역의 명산들과 어깨를 견주며 동구의 남동부를 수놓고 있는 산이다. 대전광역시가 지정한 482만㎡ 규모의 자연생태보전림을 품고 있는 이 산은 78과 187 속 224종 45변종의 식물과 노루, 다람쥐, 살쾡이, 너구리, 박쥐 등 포유류 45종, 조류 100여종, 파충류, 양서류 등이 서식하고 있는 생태의 보고다. 식장산 문화공원은 세천공원부터 식장산 해돋이 전망대로 이어지는 생태공원으로 대천 최고의 야경 감상 명소로 꼽히던 식장산 정상부에 문화공원을 조성하였다. 특히 문화공원 내에 지은 전통누각이 운치를 더하고 있으며, 대전 전경을 한번에 조망할 수 있는 전망대도 위치해 있다. 누각과 전망대에서 바라보는 대전의 풍경을 감상하기 위해 남녀노소 많은 시민들이 발걸음을 하고 있다."
          },
          {
            title : "장태산자연휴양림",
            addr : "대전광역시 서구 장안로 461",
            image : [
              "http://tong.visitkorea.or.kr/cms/resource/49/1585649_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/50/1585650_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/51/1585651_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/52/1585652_image2_1.jpg",
              "http://tong.visitkorea.or.kr/cms/resource/53/1585653_image2_1.jpg"
            ],
            explain : "구역면적은 815,855㎡, 1일 수용인원은 6,000명인 자연휴양으로 1970년대부터 조성된 국내 유일의 메타세쿼이아 숲이 울창하게 형성되어 있어 이국적인 경관과 더불어 가족단위 산림욕을 즐기는 이용객이 즐겨 찾는 휴양림으로유명하다. 장태산 자연휴양림은 전국 최초로 민간인이 조성·운영하여 왔으나, 2002년 2월 대전광역시에서 인수한 후 새롭게 개축하여 2006년 4월 25일부터 개방하게 되었다.자연 상태의 잡목 숲을 배경으로 평지에 고유 수종인 밤나무, 잣나무, 은행나무 등 유실수, 소나무, 두충 등을 계획적으로 조림했고, 미국에서 들여온 메타세쿼이아, 독일 가문비나무 등 외래 수종을 배열하여 독특하게 조성했다. 산 입구 용태울저수지를 지나면서 휴양림이 펼쳐지고 산 정상의 형제바위 위에 있는 전망대에서 낙조를 바라볼 수 있으며 장군봉, 행상바위 등 기암괴석이 보인다.장태산의 천혜의 자연경관과 잘 어우러진 장태산 휴양림은 1991년부터 조성하기 시작해서 지금은 거의 그 기틀을 갖추었으며 현재까지도 활발한 개발을 하고 있다. 그림 같은 호수, 기암괴석 등 주변 경관이 절경이며 질서 있게 조성된 나무들이 많고 길 또한 잘 다듬어져 있어서 산책하기에 좋은 곳이다. 장태산은 대전의 서남쪽에 자리 잡고 있는데, 형제바위 위에 있는 전망대에서 바라보는 붉은 낙조는 산아래 용태울 저수지와 어우러져 가히 형용할 수 없는 장관을 이루어 보는 이들의 감탄을 자아내게 한다. 특히 장태산 일대의 울창한 침엽수와 활엽수림 17만여 평은 바쁜 도시생활로 심신이 피로해진 우리에게 활력을 불어넣어 줄 뿐만 아니라 인공으로 조성된 일만여 주가 넘는 메타세쿼이아나무는 이국적인 풍치를 보여줌과 동시에 자못 올곧은 자태가 우리의 마음을 바로잡아주는 느낌이 들 정도다. 장태산은 지금은 휴양지로 개발되어 많은 발전이 이루어졌지만, 예전에는 아주 깊은 산골이었다. 우선 휴양림에 들어서면 노산이은상의 '나무마을'이라는 시가삼림욕장에 들어선 사람들의 마음을 안온하게 잡아 둔다."
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
        randomImageNumber : 0,
    }

    componentDidMount = async () => {
      await this.setState({ 
        randomNumber : Math.floor(Math.random() * this.state.tourList.length),
      });
      await this.setState({
        randomImageNumber : this.randomSelectNumber(this.state.tourList[this.state.randomNumber].image.length),
      });
    }

    randomSelectNumber = (max) => {
      var arr = [];
      var i = 0;
      while (i < max) {
        var n = Math.floor(Math.random() * max);
        if(this.notSame(arr, n)){
          arr.push(n);
          i++;
        }
      }
      return arr;
    }
    
    notSame = (arr ,n) => {
      return arr.every((e) => n !== e);
    }

    render() {
        const {tourList, randomNumber, randomImageNumber} = this.state;
        return (
            <div id="content_tour" className="container">
              <div id="image_div">
                <div className="image">
                  { <img src={tourList[randomNumber].image[randomImageNumber[0]] } alt="image" /> }
                </div>
                <div className="image">
                  { <img src={tourList[randomNumber].image[randomImageNumber[1]] } alt="image" /> }
                </div>
              </div>
              <div id="word_div">
                <div className="title">
                 {tourList[randomNumber].title}
                </div>
                <div className="address">
                  {tourList[randomNumber].addr}
                </div>
                <div className="explain">
                  {tourList[randomNumber].explain}
                </div>
              </div>
              
            </div>
        )
    }
}

export default tourIntroHeader;

# 예시 이미지와 로고

사진은 모두 로컬 `dist/assets/`에 포함했습니다. 실행 중 외부 이미지 서비스에 의존하지 않습니다. 실제 회사 시설·프로젝트를 나타내는 사진이 아닙니다.

| 파일 | 사진·작가 | 원본 |
| --- | --- | --- |
| solar-hero.jpg | American Public Power Association — Solar panel under blue sky | https://unsplash.com/photos/XGAZzyLzn18 |
| power-grid.jpg | Lidong — A group of power lines in the middle of a field | https://unsplash.com/photos/mYM5DkdXFbE |
| wind-energy.jpg | Taha Sas — A wind farm with several windmills in the distance | https://unsplash.com/photos/CVRfU0ShZeo |
| solar-detail.jpg | CHUTTERSNAP — Blue solar panels | https://unsplash.com/photos/s_7BE4D2va0 |

검색으로 확인한 Unsplash의 Free Image 사진을 사용했습니다. [Unsplash License](https://unsplash.com/license)에 따라 내려받아 웹 목업에 포함했습니다. 사진 자체를 수정 없이 판매하거나 별도의 이미지 서비스로 재배포하는 용도는 포함하지 않습니다. 검색 당시 풍력 사진 상세 페이지는 웹 도구에서 404를 반환했지만 이미지 CDN의 파일은 정상적으로 내려받아 확인했습니다.

SVG 로고(`logo.svg`, `logo-light.svg`, `symbol.svg`)는 이 목업을 위해 직접 만든 예시 그래픽입니다. 기존 KESS의 공식 로고가 아니며, 텍스트와 색상·도형을 수정할 수 있습니다. 코드와 SVG 그래픽은 사용자가 수정·재사용할 수 있습니다. 사진은 위의 별도 라이선스를 따릅니다.

로고 교체 시 `index.html`과 `app.js`를 고칠 필요 없이 같은 파일명으로 덮어쓰면 됩니다. 사진은 파일을 바꾸거나 `data.js`의 image 값을 변경하세요.

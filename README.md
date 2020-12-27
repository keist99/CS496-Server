# 안드로이드 생활 어플리케이션 (With Server)

![language-java][language-java]
![language-javascript][language-javascript]
![library-nodejs][library-nodejs]
![platform-android][platform-android]
![database-mongodb][database-mongodb]
<br>
![participants-duo][participants-duo]
<br>
[![institution-kaist][kaist-image]][kaist-cs-url]
[![course-immersion-camp][course-cs496]][course-cs496-url]
![grade-s][grade-s]

> 로컬 연락처와 사진의 추가, 수정, 삭제, 서버와의 동기화 기능을 제공하고 DB에 저장된 레시피 정보를 가져와 레시피를 이름과 태그로 검색할 수 있는 어플리케이션입니다.

### 스크린샷

<img src="static/screenshot.png" height="400px">

### 개발 기간

2019년 7월 2일 - 7월 9일 (7일간)

### 구현 사항

  * 탭 1: RecyclerView를 이용하여 로컬 연락처를 표시, 연락처 추가, 수정, 삭제 기능을 지원, node.js로 구성한 서버를 통해 mongoDB와 연락처를 동기화
  * 탭 2: RecyclerView를 이용하여 로컬 사진을 표시, 사진 추가, 수정, 삭제 기능을 지원, node.js로 구성한 서버를 통해 mongoDB와 사진을 동기화
  * 탭 3: node.js로 구성한 서버를 통해 mongoDB에 저장된 레시피를 로컬에 로드, 이름과 태그로 검색 기능 제공

### 라이선스 및 공동체 수정

이곳은 개인 프로젝트 백업을 목적으로 하는 저장소입니다.

  * 모든 제3자 사용을 허가하지 않습니다.
  * 모든 제3자 수정을 승인하지 않습니다.
    * 깃허브 Pull Request를 받지 않습니다.

<!-- Image definitions -->
[kaist-image]: https://img.shields.io/badge/Institution-KAIST-blue
[kaist-cs-url]: https://cs.kaist.ac.kr
[course-cs496]: https://img.shields.io/badge/Course-Immersion%20Camp-brightgreen
[course-cs496-url]: https://madcamp.io
[language-java]: https://img.shields.io/badge/Language-Java-orange
[language-javascript]: https://img.shields.io/badge/Language-JavaScript-orange
[library-nodejs]: https://img.shields.io/badge/Library-Node.js-green
[platform-android]: https://img.shields.io/badge/Platform-Android-yellowgreen
[database-mongodb]: https://img.shields.io/badge/Database-mongoDB-00cccc
[grade-s]: https://img.shields.io/badge/Grade-S-yellow
[participants-duo]: https://img.shields.io/badge/Participants-Duo%20Project-7aa3cc

### **1️⃣ 프로젝트 규칙**

### ✅ Commit Convention

| 태그 이름      | 설명                                 |
|------------|------------------------------------|
| [chore]    | 코드 수정, 내부 파일 수정                    |
| [feat]     | 새로운 기능 구현                          |
| [add]      | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
| [hotfix]   | issue나 QA에서 급한 버그 수정에 사용           |
| [fix]      | 버그, 오류 해결                          |
| [del]      | 쓸모 없는 코드 삭제                        |
| [docs]     | README나 WIKI 등의 문서 개정              |
| [correct]  | 주로 문법의 오류나 타입의 변경, 이름 변경에 사용       |
| [move]     | 프로젝트 내 파일이나 코드의 이동                 |
| [rename]   | 파일 이름 변경이 있을 때 사용                  |
| [improve]  | 향상이 있을 때 사용                        |
| [refactor] | 전면 수정이 있을 때 사용                     |
| [style]     | css 및 스타일 수정시 사용                     |


- 커밋 규칙 -> FEAT. 해당 기능 설명
- `ex) FEAT. 로그인 기능 추가`


### 🔸Git Working Process
1. issue를 등록한다.
2. 깃 컨벤션에 맞게 Branch를 생성한다.
3. Add - Commit - Push - Pull Request 의 과정을 거친다.
3. 작업이 완료되었다면, Remote Repository(Github)에 해당 브랜치를 올린다.
4. Github에서 PR을 생성한다.
7. 작업 후 Merge를 진행한다.
8. merge된 Branch는 삭제한다.
9. 종료된 Issue와 Pull Request의 Label과 Project를 관리한다.

🌴 브랜치
---
#### 📌 브랜치 단위
- 브랜치 단위 = 이슈 단위 = PR단위

#### 📌 브랜치명
- 브랜치는 뷰 단위로 생성합니다.
- 브랜치 규칙 → feature/#이슈번호-기능간략설명
- `ex) feature/#1-login`

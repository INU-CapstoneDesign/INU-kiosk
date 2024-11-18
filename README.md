# 온보딩 저장소 - FE

## 결과

<img width="364" alt="스크린샷 2024-11-18 오전 11 20 50" src="https://github.com/user-attachments/assets/eaf0449b-65c2-4a91-b5d5-7b1af2ea6518">
<img width="1417" alt="스크린샷 2024-11-18 오전 11 21 08" src="https://github.com/user-attachments/assets/a4bef363-514d-4b1f-8ade-e2bb22901a21">


## 명세서 

- 인트로 페이지 -  [`http://localhost/8080/`](http://localhost/8080/)
    - [매장 주문] 또는 [전체 포장] 버튼을 누르면 주문 페이지로 이동할 수 있다.
- 주문 페이지 -  [`http://localhost/8080/order`](http://localhost/8080/order)
    - 사용자는 식당과 식당에서 제공되는 메뉴 목록을 볼 수 있다.
    - 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
    - 사용자는 카테고리를 선택하여 원하는 종류의 식당 목록을 골라 볼 수 있다.
    - 사용자는 식당의 메뉴를 클릭하면 주문내역에 음식을 담을 수 있다.
    - 사용자는 주문내역에 음식을 중복해서 담을 수 있다.
    - 사용자는 주문내역에서 담은 음식의 개수와 총 결제 예상금액을 볼 수 있다.
    - 사용자는 취소 버튼을 클릭하여 인트로 페이지로 되돌아 갈 수 있다.
    - 사용자는 주문하기 버튼을 클릭하여 주문완료 페이지로 이동할 수 있다.
- 주문 결과 페이지 - [`http://localhost:8080/order/complete?orderId={orderId}`](http://localhost:8080/order/complete?orderId={orderId})
    - 사용자는 주문번호, 주문목록, 총 가격을 볼 수 있다.
    - 사용자는 메인화면으로 돌아가기 버튼을 통해 인트로 페이지로 이동할 수 있다.
- 사용자는 토글버튼을 통해 다크모드로 전환할 수 있다.

---

### 서버 (express-app) API 정보

- 식당 목록 조회 - `GET /restaurants`
    - Request
    - Response:
        - 상태코드: 200
        - body: {Object}
        
        | 이름 | 타입 | 필수 | 설명 |
        | --- | --- | --- | --- |
        | id | string | O | 식당 아이디 값 |
        | category | string | O | 식당 종류 |
        | name | string | O | 식당 이름 |
        | menu | Object | O | 식당 메뉴 |
        | - id | string | O | 음식 아이디 값 |
        | - name | string | O | 음식 이름 |
        | - price | number | O | 음식 가격 |
        | - image | string | O | 음식 이미지 URL |
        - 응답 예시
    
    ```json
    {
      "restaurants": [
        {
          "restaurantId": "1",
          "restaurantCategory": "중식",
          "restaurantName": "인천반점",
          "restaurantMenu": [
            {
              "menuId": "1",
              "menuName": "짜장면",
              "menuPrice": 8000,
              "menuImg": "food1.png"
            },
            {
              "menuId": "2",
              "menuName": "짬뽕",
              "menuPrice": 8000,
              "menuImg": "food2.png"
            },
            {
              "menuId": "3",
              "menuName": "탕수육",
              "menuPrice": 14000,
              "menuImg": "food3.png"
            }
          ]
        },
        {
          "restaurantId": "2",
          "restaurantCategory": "한식",
          "restaurantName": "인하김밥",
          "restaurantMenu": [
            {
              "menuId": "4",
              "menuName": "김밥",
              "menuPrice": 3500,
              "menuImg": "food4.png"
            },
            {
              "menuId": "5",
              "menuName": "제육김밥",
              "menuPrice": 5500,
              "menuImg": "food5.png"
            },
            {
              "menuId": "6",
              "menuName": "컵라면",
              "menuPrice": 2000,
              "menuImg": "food6.png"
            }
          ]
        },
    		{
          "restaurantId": "3",
          "restaurantCategory": "일식",
          "restaurantName": "싱싱초밥",
          "restaurantMenu": [
            {
              "menuId": "7",
              "menuName": "새우초밥",
              "menuPrice": 5500,
              "menuImg": "food7.png"
            },
            {
              "menuId": "8",
              "menuName": "연어초빕",
              "menuPrice": 8500,
              "menuImg": "food8.png"
            },
            {
              "menuId": "9",
              "menuName": "참치초밥",
              "menuPrice": 9000,
              "menuImg": "food9.png"
            }
          ]
        }
      ]
    }
    ```
    

- 주문 조회 - `GET /orders/:id`
    - Request
    - Response:
        - 상태코드: 200
        - body: {Object}
        
        | 이름 | 타입 | 필수 | 설명 |
        | --- | --- | --- | --- |
        | id | string | O | 주문 번호 |
        | menu | Object[] | O | 주문한 음식 목록 |
        | - id | string | O | 음식 아이디 값 |
        | - name | string | O | 음식 이름 |
        | - price | number | O | 음식 가격 |
        | totalPrice | number | O | 주문한 음식 총 가격 |
        - 응답 예시
        
        ```json
        { 
        	"order" : {
        		"id": "12345678910"
        		"menu": [
        		  { "id": "1", "name": "짜장면", "price": 8000, "image": "food1.png" },
        		  { "id": "5", "name": "제육김밥", "price": 5500, "image": "food5.png" }
        		],
        		"totalPrice": 13500
        	}
        }
        ```
        

- 주문 생성 - `POST /orders`
    - Request
        - body: {Object}
        
        | 이름 | 타입 | 필수 | 설명 |
        | --- | --- | --- | --- |
        | menu | Object[] | O | 주문한 음식 목록 |
        | - id | string | O | 음식 아이디 값 |
        | - name | string | O | 음식 이름 |
        | - price | number | O | 음식 가격 |
        | - image | string | O | 음식 이미지 URL |
        | totalPrice | number | O | 주문한 음식 총 가격 |
        - 예시
        
        ```json
        { 
        	"menu": [
        	   { "id": "1", "name": "짜장면", "price": 8000, "image": "food1.png" },
        		 { "id": "5", "name": "제육김밥", "price": 5500, "image": "food5.png" }
        	],
        	"totalPrice": 27000
        }
        ```
        
    - Response
        - 상태코드: 201
        - body: {Object}
        
        | 이름 | 타입 | 필수 | 설명 |
        | --- | --- | --- | --- |
        | id | string | O | 주문 번호 |
        - 응답 예시
        
        ```json
        { 
        	"id": "12345678910"
        }
        ```

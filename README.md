test1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
02_test02
1, 2, 3으로만 이루어진 수열 바코드를 만들던 코드스테이츠는 물건의 가짓수가 늘어나자, 기존과는 다른 새로운 수열 바코드를 만드는 알고리즘을 다시 만들고자 합니다.
1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열이어야 하고, 길이가 M이어야 한다고 할 때, 만들 수 있는 바코드를 전부 배열에 담아 반환하는 함수를 작성하세요.

조건
수열은 사전 순으로 증가하는 순서로 출력해야 합니다.
바코드는 숫자로 반환해야 합니다.
입력
인자 1: n
Number 타입의 1 이상 10 이하의 자연수
인자 2: m
Number 타입의 1 이상 n 이하의 자연수
출력
숫자(Number) 목록이 담긴 배열을 리턴해야 합니다.
입출력 예시
// 모든 바코드는 같은 숫자가 있으면 안 됩니다.

// N이 2이고 M이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
const output1 = test2(2, 1);
console.log(output1); // --> [1, 2]

// N이 3이고 M이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
const output2 = test2(3, 2);
console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// N이 3고 M이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]

function test2 (n, m) {
// TODO: 여기에 코드를 작성하세요.

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test3

문제
저번에 이어, 또다시 N \* N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 그러나, 게임의 룰은 저번과 조금 달라졌습니다.

좌표 왼쪽 상단(0, 0)에 말을 놓는다.
말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
조작의 기회는 딱 한 번 주어진다.
조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
예시: UDDLLRRDRR, RRRRR
한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
방문한 곳을 또 방문해도 점수를 획득할 수 없다.
말은 보드 밖으로 나갈 수 없으며, 해당 조작은 무효가 된다.
예시: 2\*2 보드판에서 UD를 조작한다면, U는 무효가 되고, D부터 시작한다.
칸 안의 숫자는 0부터 100,000 중에 하나이다.
음수는 없습니다.
획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
주의사항
처음 말을 (0, 0) 좌표에 놓았을 때 안에 들은 숫자는 계산에 포함하지 않습니다. 두 번째로 (0, 0) 좌표를 밟았을 때만 계산합니다.
보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.

입력
인자 1: board
number 타입의 2차원 배열
2 <= board.length <= 1,000
예: [ [0, 22, 4], [1, 3, 0], [0, 99, 2] ]
인자 2: operation
string 타입의 대문자 영어가 쓰여진 문자열

1 <= operation.length <= board.length \* 10

U, L, D, R 이외의 문자열은 없습니다.
출력
Number 타입을 반환해야 합니다.
board와 operation이 입력값의 예시 ([ [0, 22, 4], [1, 3, 0], [0, 99, 2] ], DDR)일 때, (0, 0) -> (1, 0) -> (2, 0) -> (2, 1) 순서로 이동하게 되고, 각 0, 1, 0, 99를 얻어 100을 반환합니다.
입출력 예시
const board1 = [
[72, 0, 80, 1],
[1, 9, 11, 10],
[1, 1, 792, 0],
[13, 44, 27, 0]
]
const output1 = boardGame(board1, 'RRDLLD');
console.log(output1); // 102

const board2 = [
[567, 6734, 132],
[789, 243, 6],
[89, 33333, 0]
]
const output2 = boardGame(board2, 'UUUDD')
console.log(output2); // 878

const board3 = [
[0, 0, 0, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 1, 0],
[0, 0, 0, 0, 0]
]
const output3 = boardGame(board3, 'DDRRRUDUDUD');
console.log(output3); // 0

function test3(board, operation) {
// TODO: 여기에 코드를 작성하세요.
};

///////////////////////////////////////////////////////////////////////////////////////
1.S3는 php, jsp 등의 동적 웹사이트를 호스팅할 수 있다./false 
2.프로세스는 특정 작업을 수행하는 일련의 명령어의 모음이다./false 
3.env 파일에 환경변수를 저장하면, js 파일에서 바로 사용할 수 있다.: false (.env 파일 자체는 OS의 환경변수를 변경할 수 없다) 
4.컨테이너는 도커 이미지를 생성하는 데 사용되는 템플릿이다. false
5.세션 기반 인증은 토큰 기반 인증보다 서버에 부하를 덜 준다. false
6.하나의 프로세스는 하나의 스레드로만 작동할 수 있다. false
7.프로세스 메니저 pm2로 여러개의 프로세스를 실행할 수 있다.true
8.기능별로 복잡한 관계가 많이 설정되고 관계가 분명한 앱은 NoSQL을 사용하는게 바람직하다.false
9.항상 일관된 데이터가 필요한 앱 (e.g. 주식거래)은 SQL을 사용하는게 바람직하다. true
10.IP 프로토콜의 한계는 비상태성과 비신뢰성이다.false (IP 프로토콜의 한계는 비연결성과 비신뢰성이다)

11.다음 코드의 시간 복잡도를 올바르게 나타낸 것은? O(log k i)
let i = 100;
for (; i > 1;) {
i /= k;
}

12.다음 코드의 시간 복잡도를 올바르게 나타낸 것은?O(n)

let a = 0,
let b = 0;

for (i = 1; i < n; i+=1) {
a = a + 1;
}

for (j = 2; j < n; j+=1) {
b = b + 1;
}

13.HTTP 헤더와 그에 대한 설명이 틀린 것을 고르시오.C
A.
Location : 페이지 리다이렉션

B.
Retry-After : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간

정답

C.
Content-Language: 표현 데이터의 프로그래밍 언어

D.
Content-Type: 표현 데이터의 형식

해설
Content-Language는 표현 데이터의 자연 언어(e.g. 한국어)를 설명하는 헤더입니다.

14.다음 중 채팅 프로그램에서 유저가 작성한 메시지를 서버로 보낼 때, TCP/IP 4계층 모델을 기반으로 네트워크의 상황을 순서대로 나열한 것을 찾으시오. D

A. 애플리케이션 계층에서 HTTP 메시지에 해당 메시지(Hello, World)가 담겨 전송됩니다.
B. 생성된 IP 패킷은 물리적 계층을 지나기 위해서 이더넷 프레임 워크에 포함되어 서버로 전송됩니다.
C. 전송 계층에서 TCP 세그먼트를 생성하고, 인터넷 계층에서 IP 패킷으로 만들어집니다.
D. 유저가 채팅 프로그램에서 Hello, World 메시지를 작성합니다.

A.
A-C-B-D

B.
D-A-B-C

오답

C.
D-B-C-A

정답
D.
D-A-C-B

해설
유저의 메세지 - 애플리케이션 계층- 전송 계층 - 인터넷 계층 - 네트워크 인터페이스 계층(물리계층)의 순서로 서버에 전달됩니다.

15.환경변수에 대해서 옳은 내용은?C

오답

A.
환경변수를 지정하기 위해서는 setenv 명령어를 사용합니다.

B.
환경변수 NVM_DIR 을 조회하기 위해서는 터미널에 echo NVM_DIR 을 입력해야 합니다.

정답

C.
로컬 환경에서 지정한 환경변수는 EC2와 같은 원격 인스턴스에서 사용할 수 없습니다.

D.
React에서는 개발 환경에서 지정한 환경변수를 사용할 수 없습니다.

해설
a. 환경변수를 지정하기 위해서는 export 명령어를 사용합니다.
b. 환경변수 NVM*DIR 을 조회하기 위해서는 터미널에 echo $NVM_DIR 을 입력해야 합니다.
d. create-react-app으로 만들어진 프로젝트는 dotenv를 사용하고, 환경변수 앞에 REACT_APP* 을 붙이면 사용할 수 있습니다.

16.HTTP 메시지에 대한 내용으로 틀린 것을 고르시오.A

정답

A.
HTTP 바디는 HTTP 전송에 필요한 모든 부가정보를 담기 위해 사용합니다.

B.
HTTP 메시지는 헤더와 바디로 구분할 수 있습니다.

오답

C.
HTTP 바디에서 모든 표현(Representation) 데이터를 전달합니다.

D.
메시지의 본문인 바디는 페이로드라고 합니다.

해설
HTTP 헤더는 HTTP 전송에 필요한 모든 부가정보를 담기 위해 사용합니다.

17.As-is 테이블이 아래와 같을 때, To-be 테이블을 조회하기 위한 쿼리는? A

As-is

OrderDetailID OrderID ProductID Quantity
1 10248 11 12
2 10248 42 10
3 10248 72 5
4 10249 14 9
5 10249 51 40
6 10250 41 10
7 10250 51 35
To-be

OrderID Quantity QuantityText
10248 12 The quantity is under 30
10248 10 The quantity is under 30
10248 5 The quantity is under 30
10249 9 The quantity is under 30
10249 40 The quantity is greater than 30
정답

A.
SELECT OrderID, Quantity,
CASE
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
오답

B.
SELECT OrderID, Quantity,
IF
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
END ON Quantity
FROM OrderDetails;

C.
SELECT OrderID, Quantity,
CASE
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
AS Quantity
FROM OrderDetails;

D.
SELECT OrderID, Quantity,
IF
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
AS QuantityText
FROM OrderDetails;

18.캐싱에 대한 내용으로 옳지 않은 것은? C

A.
캐싱은 브라우저 로딩속도가 빨라지고 비싼 네트워크 사용량을 줄일 수 있습니다.

B.
서버의 램의 일부를 사용하여 데이터 검색 성능을 높이는 것 또한 캐싱입니다.

정답

C.
헤더 속성이 Cache-Control: max-age=60이면 케시 유효 시간은 60ms입니다.

D.
확실히 캐시 무효화 응답을 하고 싶다면 Cache-Control, Pragma 헤더를 둘 다 사용해야 합니다.

해설
헤더 속성이 Cache-Control: max-age=60이면 캐시 유효 시간은 60초입니다.

19.kimcoding은 원하는 회사에 개발자로 취업하여 하나의 프로젝트를 관리하게 되었습니다. As-is와 같은 git log를 To-be로 변경하기 위해 필요한 명령어는?C

As-is

- 49f0e86 (HEAD -> master) RELEASE version 0.1
  | _ 0afe85f (feat/kimcoding) feat: UPDATE 기능 구현
  | _ 08b1965 feat: DELETE 기능 구현
  | _ e66dd3d feat: READ 기능 구현
  | _ 7e308c0 feat: CREATE 기능 구현
  |/
- a3561a2 initial commit
  To-be

- 471ff3f (HEAD -> master) merge
- 49f0e86 RELEASE version 0.1
  | _ 0afe85f (feat/kimcoding) feat: UPDATE 기능 구현
  | _ 08b1965 feat: DELETE 기능 구현
  | _ e66dd3d feat: READ 기능 구현
  | _ 7e308c0 feat: CREATE 기능 구현
  |/
- a3561a2 initial commit

A.
$ git merge --continue "feat/kimcoding"
$ git commit

B.
$ git merge --squash "feat/kimcoding"
$ git commit
정답

C.
$ git merge --squash "feat/kimcoding"
$ git commit -m "merge"
오답

D.
$ git merge --continue "feat/kimcoding"
$ git commit -m "merge"

20.콘텐츠 협상 헤더에 대한 설명으로 옳지 않은 것을 고르시오.D

A.
Accept는 클라이언트가 선호하는 미디어 타입을 전달합니다.

B.
협상 헤더는 요청에서 사용 가능합니다.

C.
협상 헤더에서는 원하는 콘텐츠에 대한 우선순위를 지정할 수 있습니다.

정답

D.
Accept-Language: ko-KR,ko;q=0.9, en-US;q=0.8 일 경우, 영어를 1순위로 지원합니다.

해설
협상 헤더는 요청에서 사용 가능합니다.
Accept-Language: ko-KR,ko;q=0.9, en-US;q=0.8 일 경우, 한국어를 1순위로 지원합니다.

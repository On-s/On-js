
#JavaSript synchronous

--------------------------------------

+Syncronous 동기 : 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식
+Asynchronous 비동기 : 요청을 보낸 후 응답과 관계없이 다음 동작을 실행하는 방식

+자바스크립트는 동기적이고, blocking이며, single-threaded한 언어입니다. 
하지만, 이것은 오직 한 연산에서의 특성을 의미하며, 모든 것에서의 특성을 의미하지 않습니다.

+만약에, 데이터베이스로부터 많은 양의 데이터를 가져오는 요청을 해야 한다면, 어떻게 해야 할까요? 예를 들어, PG와 PostgreSQL가 데이터를 가져오는 동안 우리는 기다리고 싶지 않습니다. JavaScript 개발자들은 이러한 문제를 위한 해결책을 제시했습니다.

+사람들이 JavaScript가 비동기 언어라고 흔히 오해하는 이유는, 우리는Javascript가 비동기식으로 동작하도록 조작할 수 있기 때문입니다.

[Javascript는 동기일까? 비동기일까?]<https://velog.io/@jiwon/Javascript%EB%8A%94-%EB%8F%99%EA%B8%B0%EC%9D%BC%EA%B9%8C-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%9D%BC%EA%B9%8C>


++비동기적 Callback 
+++ 콜백지옥이 나올 수 있다.

++proimse

++Async & Await


### userEvent

```
    userEvent.clear()
    - input 이나 textarea에 텍스트를 선택(select) 한 후 제거(delete)해 준다.

    현재 테스트에서는 작성하지 않아도 테스트 결과에 영향을 미치지 않는다.
    하지만 만약 현재 소스 코드 보다 위에서 같은 엘리먼트를 위한
    userEvent를 사용했다면 clear해준 후에
    userEvent.type()을 사용하는게 좋다.

```

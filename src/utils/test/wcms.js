import { parse } from 'node-html-parser';

export default function wcmsHtmlAnchorParse(wcmsHtmlString = '', isServer = false, hookFn) {
  if (typeof wcmsHtmlString !== 'string' || wcmsHtmlString === '') {
    return '';
  }
  let containerDomElement = '';

  // 컨테이너 Dom 생성
  if (isServer) {
    containerDomElement = parse('<div></div>');
  } else {
    containerDomElement = document.createElement('div');
  }

  // wcms html 문자열 돔 생성
  containerDomElement.innerHTML = wcmsHtmlString;

  // a tag 노드 셀렉트
  const anchorElements = containerDomElement.querySelectorAll('a');

  // a tag 변환
  Array.from(anchorElements).forEach(anchorElement => {
    anchorElement.setAttribute('onclick', 'alert(1)');
    if (typeof hookFn === 'function') {
      // 화면 내에서 제어 a 태그를 인자로 호출
      hookFn(anchorElement);
    }
  });

  return containerDomElement.innerHTML;
}

// @flow

export default (element: Node, containerName: string) => {
  global.document.querySelector(containerName).innerHTML = element;
};

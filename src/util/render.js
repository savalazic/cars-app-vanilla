// @flow

export default (element: Node, containerName: string) => {
  document.querySelector(containerName).innerHTML = element;
};

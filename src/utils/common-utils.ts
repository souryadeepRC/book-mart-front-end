import { v4 } from "uuid";
export const generateRandomId = () => {
  return v4();
};

export const isSpaceAvailable = (childRef: any, parentRef?: any): boolean => {
  const contentHeight: number = childRef?.current?.clientHeight;
  const parentHeight: number = parentRef
    ? parentRef?.current?.clientHeight
    : window?.innerHeight; 
  
  return contentHeight <= parentHeight;
};

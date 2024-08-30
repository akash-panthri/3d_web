import { useFrame } from "@react-three/fiber";

import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";
import  { useRef } from "react";


// eslint-disable-next-line react/prop-types
export default function CameraRig({children}) {
const group = useRef();

const snap = useSnapshot(state)

useFrame((state,delta)=>{
const isBreakpoint = window.innerWidth <= 12060;
const isMobile = window.innerWidth <= 600;

// to set initial position of model
let targetPosition = [-0.4, 0, 2];
if(snap.intro){
  if(isBreakpoint) targetPosition = [0,0,2];
  if(isMobile) targetPosition = [0,0.5,2.5];
}else{
  if(isMobile) targetPosition = [0,0,2.5]
  else targetPosition = [0,0,2]
}

// to setl model camera position
easing.damp3(state.camera.position, targetPosition, 0.25, delta)

// to set the model rotation smoothly
easing.dampE(
  group.current.rotation,
  [state.pointer.y / 10, -state.pointer.x / 5 , 0],
  0.25,
  delta
)
})
  return (
  <group ref={group}>{children}</group>
  );
}

import React from "react";
import './sphere.css';
import { Engine, Scene, FreeCamera, HemisphericLight, Sphere, Ground } from "react-babylonjs";
import { Color3, Vector3, StandardMaterial } from "@babylonjs/core";

const Spheres = () => {
  return(
    <Engine canvasId="model-canvas">
        <Scene>
          <FreeCamera 
            name = 'camera1'
            position = {new Vector3(0, 5, -10)}
            setTarget = {[Vector3.Zero()]}
          />
          <HemisphericLight 
            name = 'light1'
            intensity = {0.7}
            direction = {Vector3.Up()}
          />
          <Sphere
            name = 'sphere1'
            diameter = {2}
            segments = {16}
            position = {new Vector3(0, 1, 0)}
          />
          <Ground
            name = 'ground1'
            width = {6}
            height = {6}
            subdivisions = {2}
          />
        </Scene>
    </Engine>
  )
}

export default Spheres
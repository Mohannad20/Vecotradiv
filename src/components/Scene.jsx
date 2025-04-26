import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Bloom, DepthOfField, EffectComposer, GodRays, Vignette } from '@react-three/postprocessing';

function Building(props) {
  const { scene } = useGLTF('/models/building.glb');
  return <primitive object={scene} {...props} />;
}

function Aircraft({ url, position, scale = 0.2, rotate = false }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive object={scene} ref={ref} position={position} scale={scale} />;
}

function FlybyAircraft() {
  const { scene } = useGLTF('/models/futuristic_jet.glb');
  const ref = useRef();
  const speed = 1;

  useFrame((_, delta) => {
    if (ref.current.position.z > -10) {
      ref.current.position.z -= delta * speed;
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      position={[0, 3, 30]}
      rotation={[0, Math.PI, 0]}
      scale={0.2}
    />
  );
}

function FloatingZeppelin({ children, speed = 0.01, amplitude = 0.5, ...props }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = props.position[1] + Math.sin(t * speed) * amplitude;
  });

  return (
    <group ref={ref} {...props}>
      {children}
    </group>
  );
}


function AnimatedCamera() {
  const { camera, controls } = useThree();
  const timeRef = useRef(0);

  const path = useMemo(() => {
    const radius = 7;
    const height = 2;
    const points = [];
    for (let i = 0; i <= 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = height + Math.sin(angle * 2) * 2;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  useFrame((_, delta) => {
    timeRef.current += delta * 0.01;
    const t = timeRef.current % 1;
    const loopPosition = path.getPointAt(t);
    const target = new THREE.Vector3(0, 1.5, 0);

    camera.position.lerp(loopPosition, 0.01);
    controls.target.lerp(target, 0.05);
    controls.update();
  });

  return null;
}

export default function Scene() {
  const sunRef = useRef();

  return (
    <Canvas camera={{ position: [0, 1, 30], fov: 55 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[10, 10, 10]}
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <mesh position={sunRef.current?.position || [10, 10, 10]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>

      <Suspense fallback={<Html><p>Loading...</p></Html>}>
        <Building scale={0.2} />

        {/* Aircrafts */}
        {/* <Aircraft scale={0.02} url="/models/zeppelin1.glb" position={[4, 5, 2]} rotate /> */}
        <Aircraft scale={0.2} url="/models/futuristic_jet.glb" position={[-2, 4, 6]} rotate />
        <Aircraft scale={0.2} url="/models/space_fighter.glb" position={[2, 3, -5]} rotate />
        <Aircraft scale={0.2} url="/models/spy_aircraft.glb" position={[0, 4, 0]} rotate />

        <FlybyAircraft />

        <FloatingZeppelin position={[8, 6, -15]} speed={0.008} amplitude={0.3}>
        <Aircraft scale={0.01} url="/models/zeppelin.glb" position={[-4, 5, -3]} rotate />
        </FloatingZeppelin>
      </Suspense>

      <EffectComposer>
        {sunRef.current && <GodRays sun={sunRef} />}
        <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        <Vignette eskil={false} offset={0.2} darkness={0.9} />
      </EffectComposer>

      <color attach="background" args={["#d1d1d1"]} />
      <fog attach="fog" args={["#d1d1d1", 15, 60]} />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <AnimatedCamera />
      <OrbitControls enableZoom enablePan={false} makeDefault />
    </Canvas>
  );
}

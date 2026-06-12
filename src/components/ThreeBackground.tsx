/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get parent bounds
    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 18;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core: Low-poly Polyhedron
    const coreGeom = new THREE.IcosahedronGeometry(3.5, 1);
    
    // Custom material with vertex-like wiring or wireframe combined with flat shading
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6, // neon purple
      emissive: 0x2e1065,
      specular: 0xa6ff4d, // bright green highlights
      shininess: 40,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMaterial);
    coreGroup.add(coreMesh);

    // 2. Wireframe overlay for core to make it look technical
    const wireframeGeom = new THREE.IcosahedronGeometry(3.52, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xa6ff4d, // neon green wires
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreWireframe = new THREE.Mesh(wireframeGeom, wireframeMat);
    coreGroup.add(coreWireframe);

    // 3. Orbiting Ring Structure
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const ringCount = 3;
    const ringMeshes: THREE.LineLoop[] = [];

    for (let i = 0; i < ringCount; i++) {
      const radius = 6 + i * 1.5;
      const segments = 64;
      const ringGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }

      ringGeom.setFromPoints(points);

      // Gradient ring color
      const ringMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x8b5cf6 : 0xa6ff4d,
        transparent: true,
        opacity: 0.4,
      });

      const ringLoop = new THREE.LineLoop(ringGeom, ringMat);
      
      // Random rotation
      ringLoop.rotation.x = Math.random() * Math.PI;
      ringLoop.rotation.y = Math.random() * Math.PI;
      
      ringGroup.add(ringLoop);
      ringMeshes.push(ringLoop);
    }

    // 4. Particle Cloud orbiting in background
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPurple = new THREE.Color(0x8b5cf6);
    const colorGreen = new THREE.Color(0xa6ff4d);

    for (let i = 0; i < particleCount; i++) {
      // Points distributed in a spherical shell around the core
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const dist = 6 + Math.random() * 8; // distance between 6 and 14

      positions[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = dist * Math.cos(phi);

      // Blend of purple and green
      const mixedColor = colorPurple.clone().lerp(colorGreen, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom canvas circular particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlePoints = new THREE.Points(particleGeom, particleMaterial);
    coreGroup.add(particlePoints);

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa6ff4d, 2.5, 30);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2.5, 30);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(0, 10, 5);
    scene.add(mainLight);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 4;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth lag rotation based on mouse or clock
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreGroup.rotation.y = elapsed * 0.12 + targetX * 0.2;
      coreGroup.rotation.x = elapsed * 0.08 + targetY * 0.2;

      // Animate core pulsing slightly
      const pulse = 1 + Math.sin(elapsed * 2) * 0.03;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreWireframe.scale.set(pulse, pulse, pulse);

      // Rotate individual rings at slightly different speeds
      ringMeshes.forEach((ring, index) => {
        const speed = (index + 1) * 0.05;
        ring.rotation.z += 0.003;
        ring.rotation.x += 0.001 * speed;
      });

      // Slowly rotate particle field
      particlePoints.rotation.y = -elapsed * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose resources
      coreGeom.dispose();
      coreMaterial.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      particleGeom.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      
      ringMeshes.forEach((ring) => {
        ring.geometry.dispose();
        if (Array.isArray(ring.material)) {
          ring.material.forEach((m) => m.dispose());
        } else {
          ring.material.dispose();
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-70"
      style={{ minHeight: "100%" }}
    />
  );
}

// Wood smoke curling from the chimneys nearest to you, drifting with the wind (soft point sprites).
import * as THREE from "three";

export function buildSmoke(chimneys) {
  const N = 480, pos = new Float32Array(N * 3), age = new Float32Array(N), geo = new THREE.BufferGeometry();
  for (let i = 0; i < N; i++) { age[i] = Math.random(); pos[i * 3 + 1] = -1e4; }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("aAge", new THREE.BufferAttribute(age, 1).setUsage(THREE.DynamicDrawUsage));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uAmount: { value: 0.6 }, uColor: { value: new THREE.Color(0xcfcfcf) }, uScale: { value: 600 } },
    vertexShader: `attribute float aAge; uniform float uScale; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = mix(0.9, 5.0, aAge) * uScale / max(-mv.z, 1.0); vA = aAge; }`,
    fragmentShader: `uniform float uAmount; uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d) * (1.0 - vA) * smoothstep(0.0, 0.1, vA) * 0.3 * uAmount; if (a < 0.004) discard; gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false; points.renderOrder = 3;
  let active = [], pickT = 0;
  // amount: 0..1 how many stoves are lit; light: 0..1 daylight; wind: gust strength
  const update = (dt, cam, wind, amount, light, scale) => {
    if ((pickT -= dt) < 0) { // re-pick the 24 nearest chimneys every couple of seconds
      pickT = 2;
      active = chimneys.map((c) => [c, (c[0] - cam.x) ** 2 + (c[2] - cam.z) ** 2]).filter((c) => c[1] < 320 * 320).sort((a, b) => a[1] - b[1]).slice(0, 24).map((c) => c[0]);
    }
    points.visible = active.length > 0 && amount > 0.02;
    if (!points.visible) return;
    mat.uniforms.uAmount.value = amount; mat.uniforms.uScale.value = scale;
    mat.uniforms.uColor.value.setScalar(0.18 + 0.62 * light);
    for (let i = 0; i < N; i++) {
      age[i] += dt / 7;
      const o = i * 3;
      if (age[i] >= 1) { const c = active[i % active.length]; age[i] = 0; pos[o] = c[0] + (Math.random() - 0.5) * 0.3; pos[o + 1] = c[1]; pos[o + 2] = c[2] + (Math.random() - 0.5) * 0.3; }
      const t = age[i] * 7;
      pos[o] += (wind * 1.6 + Math.sin(t * 1.3 + i) * 0.15) * dt; pos[o + 1] += (0.6 - age[i] * 0.25) * dt; pos[o + 2] += (wind * 0.6 + Math.cos(t + i) * 0.12) * dt;
    }
    geo.attributes.position.needsUpdate = true; geo.attributes.aAge.needsUpdate = true;
  };
  return { mesh: points, update, debug: () => ({ active: active.length, pickT }) };
}

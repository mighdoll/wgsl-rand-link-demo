import random_wgsl/pcg_2u_3f;

struct Uniforms { frame: u32 }

@binding(0) @group(0) var<uniform> u: Uniforms;

@vertex
fn vertexMain(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4f {
    const pos = array<vec2f,4>(
        vec2(-1.0, -1.0),
        vec2(-1.0, 1.0),
        vec2(1.0, -1.0),
        vec2(1.0, 1.0),
    );

    return vec4f(pos[vertex_index], 0.0, 1.0);
}

@fragment
fn fragmentMain(@builtin(position) pos: vec4f) -> @location(0) vec4f {
    let rand = pcg_2u_3f(vec2u(pos.xy) + u.frame);
    return vec4f(rand, 1.);
}



/* 
@fragment
fn fragmentMain(@builtin(position) pos: vec4f) -> @location(0) vec4f {
    let frame = f32(u.frame); 
    let r = quickRandom(frame + pos.x);
    let g = quickRandom(frame + pos.y);
    let b = quickRandom(frame + pos.x + pos.y);
    return vec4f(r,g,b, 1.);
}

// suggested by GitHub CoPilot
fn quickRandom(seed: f32) -> f32 {
    return fract(sin(seed) * 43758.5453);
}
 */
float VSM(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias) {

    vec3 moments = texture2D(tex, texCoords).xyz;
    return calculateVSM(moments, Z, vsmBias);
}


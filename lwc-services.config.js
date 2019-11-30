// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [
        { from: 'src/resources', to: 'dist/resources' },
        { from: 'src/stl', to: 'dist/stl' },
        { from: 'src/webgl_detector.js', to: 'dist/webgl_detector.js' },
        { from: 'src/CanvasRenderer.js', to: 'dist/CanvasRenderer.js' },
        { from: 'src/load_stl.min.js', to: 'dist/load_stl.min.js' },
        { from: 'src/OrbitControls.js', to: 'dist/OrbitControls.js' },
        { from: 'src/parser.min.js', to: 'dist/parser.min.js' },
        { from: 'src/Projector.js', to: 'dist/Projector.js' },
        { from: 'src/stl_viewer.min.js', to: 'dist/stl_viewer.min.js' },
        { from: 'src/three.min.js', to: 'dist/three.min.js' },
        { from: 'src/TrackballControls.js', to: 'dist/TrackballControls.js' }
    ]
};
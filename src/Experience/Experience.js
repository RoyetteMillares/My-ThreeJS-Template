import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import Resources from './Utils/Resources'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import assets from './assets'
import SpherePhysics from './Sections/SpherePhysics'


let instance = null
export default class Experience
{
    constructor(_options)
    {
        if(instance){
            return instance
        }
        instance = this

        this.canvas = _options
        this.sizes = new Sizes()
        this.time = new Time()
        this.resources = new Resources(assets)
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
          
        this.physics = new SpherePhysics()
        

        
        

        this.sizes.on('resize', () => {
            this.resize()
        })
        
        this.time.on('tick', () => {
            this.update()
        })

    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
    //    this.camera.update()
       this.renderer.update()
       this.physics.update()
       
    }

    
}
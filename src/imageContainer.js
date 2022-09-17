import react from 'react'
import image from '../resource/t1.png'

const ImageContainer = () =>{

    const data =   [[5, 1, 1, 1, 1, 1, 459, 314, 240, 43, 96.538536, 'Personal'],
       [5, 1, 1, 1, 1, 2, 724, 314, 246, 43, 96.40358, 'Financial'],
       [5, 1, 1, 1, 1, 3, 993, 313, 280, 44, 96.708313, 'Statement'],
       [5, 1, 2, 1, 1, 1, 97, 418, 54, 19, 90.645813, 'Name'],
       [5, 1, 2, 1, 1, 2, 188, 418, 33, 19, 48.870586, 'Joe'],
       [5, 1, 2, 1, 1, 3, 230, 418, 52, 19, 96.843384, 'Smith'],
       [5, 1, 3, 1, 1, 1, 967, 418, 84, 19, 83.896858, 'Birthdate'],
       [5, 1, 3, 1, 1, 2, 1100, 417, 94, 20, 56.811543, '9/18/1980'],
       [5, 1, 4, 1, 1, 1, 1422, 403, 56, 19, 96.898239, 'Social'],
       [5, 1, 5, 1, 1, 1, 1423, 433, 91, 19, 96.420349, 'Insurance']]

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
            <div style={{width:'751px', height:'895px', border:'red solid 2px'}} >
                {/* <img style={{position:'relative', width:'100%', height:'100%', zIndex:-1000 }} src='https://images.freeimages.com/images/large-previews/e04/yellow-frontal-with-ivy-1228121.jpg'/> */}
                <img style={{position:'relative', zIndex:-1000 }} src={image}/>
            </div>
        </div>

    ) 

}

export default ImageContainer;


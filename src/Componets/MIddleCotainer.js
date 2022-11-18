import './MiddleContainer.css'
import image1 from './images/1.webp'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'

function MiddleContainer(){
  const a = [{
                myimages:{image1},
                Name:"Dhru Pandav",
                Number:74354757454,
                Email:"dhruv445@gmail.com",
                Details:"Hello,  i am learing reacts js from scratch.  "
            },
            {
                myimages:{image2},
                Name:"Vishal Jani",
                Number:457434534554,
                Email:"Vishaljani34334@gmail.com",
                Details:"Hello,  i am learing reacts js from scratch."
            },
            {
                myimages:{image3},
                Name:"Sujal Bhardiya",
                Number:6758987438,
                Email:"SujalOffical356@gmail.com",
                Details:"Hello,  i am learing reacts js from scratch."
            },
            {
                myimages:{image4},
                Name:"jay Madhvi",
                Number:745763456454,
                Email:"Jaymadhvi56@gmail.com",
                Details:"Hello,  i am learing reacts js from scratch."
            }]

return(<>
    <div className="con" id="con1">
        <div id="scroll">
            <table cellSpacing="100" id="t1">
                <tr>
                    <td>
                        <img src={a[0].myimages} alt="" id="avatar" />
                    </td>
                    <td>
                        <h3>{a[0].Name}</h3>
                        <p>{a[0].Number}</p>
                        <p>{a[0].Email} </p>
                        <p>{a[0].Details} </p>
                    </td>
                </tr>
                <tr className='my-3'>
                    <td>
                        <img src={a[1].myimages} alt="" id="avatar" />
                    </td>
                    <td>
                        <h3>{a[1].Name}</h3>
                        <p>{a[1].Number}</p>
                        <p>{a[1].Email} </p>
                        <p>{a[1].Details} </p>
                    </td>
                </tr>
                <tr className='my-3'>
                    <td>
                        <img src={a[2].myimages} alt="" id="avatar" />
                    </td>
                    <td>
                        <h3>{a[2].Name}</h3>
                        <p>{a[2].Number}</p>
                        <p>{a[2].Email} </p>
                        <p>{a[2].Details} </p>
                    </td>
                </tr>
                  <tr className='my-3'>
                    <td>
                        <img src={a[3].myimages} alt="" id="avatar" />
                    </td>
                    <td>
                        <h3>{a[3].Name}</h3>
                        <p>{a[3].Number}</p>
                        <p>{a[3].Email} </p>
                        <p>{a[3].Details} </p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</>);
}
export default MiddleContainer;
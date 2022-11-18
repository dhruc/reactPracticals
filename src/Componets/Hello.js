import './Hello.css' 

function Hello(){
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
        timeOfDay = 'morning';
      }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
      }
    else {
        timeOfDay = 'night';
      }
    return(<>
        <div id='one'>
        <h1>Hello, World!</h1>
        <h4>Good {timeOfDay}.</h4> 
        </div>
    </>);
}

export default Hello;